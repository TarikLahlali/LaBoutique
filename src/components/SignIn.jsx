import {useEffect} from "react"

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signIn } from "../redux/actions/authActions";
import {useNavigate} from "react-router-dom";

const Title = styled.h4`
margin: 2rem 0;

`
const Title1 = styled.h2`
margin: 2rem 0;
`

const Button1 = styled(Button)`
`

  const SignIn = () => {
    const auth= useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [creds, setCreds] = useState({
      email: "",
      password: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(signIn(creds.email, creds.password));
      setCreds({ email: "", password: "" });
    };
  
    useEffect(()=>{
      if (auth._id) navigate("/")
    }, [auth._id, navigate])  
  
  return (
    <>

      <Title1>Velkommen tilbake.</Title1>
      <Title>Her kan du logge inn.</Title>
    <Stack
      component="form"
      sx={{
        '& > :not(style)': { mb: 4, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      
      <TextField required id="standard-basic" type="email" label="E-postadresse" variant="standard" 
      value={creds.email}
      onChange={(e) => setCreds({ ...creds, email: e.target.value })}/>
      <TextField required id="standard-password-input"
          label="Password"
          type="password"
          variant="standard" 
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}/>
      <Button1 variant="contained" type="submit" sx={{
        bgcolor: "black", borderRadius: 0, ':hover': {
          bgcolor: '#3f3f3f', 
          color: 'white',
        },
      }}>Logg inn</Button1>
    </Stack>
    </>
  );
}
export default SignIn;