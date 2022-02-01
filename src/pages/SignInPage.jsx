import React from 'react';
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';
import styled from 'styled-components';

const SignInWrap = styled.div`
  width: 40%;
  min-width: 300px;
  padding-top: 5rem;
  margin: 0 auto;
  
`
const SignInPage = () => {
  return <>
    <Navbar/>
    <SignInWrap>
    <SignIn/>
    </SignInWrap>
  </>
};

export default SignInPage;
