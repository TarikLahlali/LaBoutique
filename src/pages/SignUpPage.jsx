import React from 'react';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';
import styled from 'styled-components';

const SignInWrap = styled.div`
  width: 40%;
  min-width: 300px;
  padding-top: 3rem;
  margin: 0 auto 50px;

  
`
const SignInPage = () => {
  return <>
    <Navbar/>
    <SignInWrap>
    <SignUp/>
    </SignInWrap>
  </>
};

export default SignInPage;
