import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';
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
    <SignIn/>
    </SignInWrap>
  </>
};

export default SignInPage;
