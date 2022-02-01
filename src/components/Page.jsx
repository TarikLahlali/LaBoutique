import React, { useEffect } from 'react';
import styled from "styled-components";
import Navbar from './Navbar';
import Footer from './Footer';


const Container = styled.div`
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
`
const MainTitle = styled.h1`
  padding-bottom: 20px;
`
const Title = styled.h3`
  padding-bottom: 20px;
`
const Text = styled.p`
  padding-bottom: 40px;
`

const Page = ({title1, title2, text}) => {
  useEffect(() => {
    window.scrollTo(0,0);
  
  
  }, []);
  
  return <>
  <Navbar pos="static"></Navbar>
  <Container>
  <MainTitle>{title1}</MainTitle>
  <Title>{title2}</Title>
  <Text>{text}</Text>
  <Title>{title2}</Title>
  <Text>{text}</Text>
  <Title>{title2}</Title>
  <Text>{text}</Text>
  <Title>{title2}</Title>
  <Text>{text}</Text>
  </Container>
  <Footer></Footer>
  </>
};

export default Page;
