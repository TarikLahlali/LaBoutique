import React from 'react';
import men from '../assets/men.jpg';
import women from '../assets/women.jpg';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
 
`

const HeroContainer1 = styled.header`
  flex:1;
  background-image: url(${women});
   min-width: 350px;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 60px;
  @media (max-width : 1000px) {
  background-position: center;
  } ;
  @media (max-width : 750px) {
  background-position: top;
  } ;
 

`
const HeroContainer2 = styled.header`
flex:1;
   background-image: url(${men});
   min-width: 350px;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 60px;
  @media (max-width : 1000px) {
  background-position: center;
  } ;



`
const DirectoryLink = styled(Link)`
  display: flex; 
  width: 100%;
  justify-content: space-evenly; 
`

const Button = styled.button`
  width: 50%;
  padding: 0.8rem;
  margin-bottom : 30px;
  background-color: black;
  color: white;
  font-size: 1rem;
  line-height: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
      background-color: #292929;
      color: white;
    }
`


const Directory = () => {
 
  return (
    <>
    <Container>
    <HeroContainer1>
        <DirectoryLink to="/products/Dame">
              <Button>DAME</Button>
        </DirectoryLink>
      </HeroContainer1>
      <HeroContainer2>
          <DirectoryLink to="/products/Herre">
            <Button>HERRE</Button>
          </DirectoryLink> 
      </HeroContainer2>
    </Container>
    </>
    
  );
};

export default Directory;

