import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signUp } from "../redux/actions/authActions";
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

const Title = styled.h4`
margin: 2rem 0;

`
const Title1 = styled.h2`
margin: 2rem 0;
`
const Line = styled.hr`
  margin: 2rem 0;
  height: 1px;
  background-color: #c5c5c5;
`
const ButtonLink = styled(Link)`
width: 100%;
`


const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  console.log(auth);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({ name: "", email: "", password: "" });
  };

  if (auth._id) navigate("/");
console.log(auth._id);
  return (
    <>
      <Title1>Opprett konto</Title1>
      <Title>Her kan du registrere deg.</Title>
    <Stack
    component="form"
    sx={{
      '& > :not(style)': { mb: 4, width: '100%' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
    >
           <TextField required id="standard-basic" type="name" label="Fornavn" variant="standard" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}/>
           <TextField required id="standard-basic" type="email" label="E-postadresse" variant="standard"  value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}/>
           <TextField required id="standard-basic" type="password" label="Password" variant="standard" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
           <Button variant="contained" type="submit" sx={{
             width:"100%",
              bgcolor: "black", borderRadius: 0, ':hover': {
              bgcolor: '#3f3f3f', 
              color: 'white',
                },
            }}>Register deg</Button> 
    </Stack>
    <Line/>      

     <Title1>Jeg har en Konto</Title1>
     <Stack
        sx={{
          '& > :not(style)': { mb: 4, width: '100%' },
        }}
    >
           <Button variant="contained" type="submit" sx={{
             width:"100%",
              bgcolor: "black", borderRadius: 0, ':hover': {
              bgcolor: '#3f3f3f', 
              color: 'white',
                },
            }}><ButtonLink to={"/signin"}>Logg inn</ButtonLink></Button> 
    </Stack>

   
    </>
  );
}

export default SignUp;