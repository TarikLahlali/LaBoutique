import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import shop from "../assets/shop2.jpeg"
import shop3 from "../assets/shop3.jpg"

const Container = styled.div`
background-color: white;
height: 900px;
position: fixed;
top:0;
z-index:-1;
`
const ImgContainer = styled.div`
height: 60%;
width: 100vw;

`

const Image = styled.img`
height: 100%;
width: 100vw;
background-size: cover;
background-repeat: no-repeat;

background-image: url(${shop});
@media (max-width : 850px) {
  background-image: url(${shop3})
  } ;

`

const TitleContainer = styled.div`
background-color: transparent;
height: 100px;
  margin-top: 450px;
`


const Title = styled.div`
  background-color: #0000003e;
  width: 200px;
  color: #ffffff;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  font-size: 20px;
`


const TextContainer = styled.div`
    background-color: white;
    min-height: 500px;
    padding: 50px;

`
const TextWrapper = styled.div`
background-color: transparent;
max-width: 700px;
margin: 30px auto;
`

const AboutUs = () => {

useEffect(() => {
  window.scrollTo(0,0)

}, []);

  return <>
    <Navbar pos="fixed" />
  <Container>
    <ImgContainer>
     <Image/>
    </ImgContainer>

  </Container>
  
  <TitleContainer>
    <Title>OM OSS</Title>
  </TitleContainer>
    <TextContainer > <TextWrapper>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis, perspiciatis debitis sequi, hic voluptates, facere ab neque quidem qui harum repellat accusantium necessitatibus nesciunt? <br/><br/>Consequuntur nostrum, nemo explicabo pariatur facilis repudiandae ut hic consequatur. Placeat in sequi veritatis odit delectus. <br/><br/>sed ab inventore quas velit sint officia magnam ullam! Voluptatibus deserunt veritatis corrupti reiciendis aliquam possimus consequatur est officiis ipsam tempore! Quibusdam, dolores, facere laboriosam velit modi vero ducimus maiores voluptates doloremque asperiores molestiae fugiat.<br/><br/> assumenda commodi incidunt! Eos quis atque corrupti maxime neque delectus similique quaerat adipisci libero, debitis fuga natus alias reiciendis ducimus! Impedit soluta, neque animi voluptate vitae, dignissimos error nisi quas rem autem qui tenetur reiciendis enim accusamus. Illo, libero? Harum aliquam quos laborum ipsum!<br/><br/> Blanditiis cumque excepturi, impedit similique tenetur totam est officia at perspiciatis veritatis molestias ducimus mollitia voluptatum labore laborum cupiditate, quo animi non? Aliquid quod quis, id eligendi at aut quisquam beatae error, atque cumque eius sunt molestiae laborum minus iusto ea, temporibus odit eaque consequatur officiis ab eveniet!<br/><br/> Deleniti quos iusto similique veritatis corporis repellendus, perferendis, magni ut accusantium molestiae adipisci excepturi cumque ea earum. Molestias mollitia voluptatibus suscipit a aut doloremque, facere perspiciatis optio perferendis ipsam id iure harum repudiandae repellat, deserunt error quisquam provident numquam libero. <br/><br/>Quis consequuntur culpa a, exercitationem ullam repellendus reiciendis aperiam? Voluptatum sit ipsa nostrum cum inventore accusamus ipsam temporibus impedit.<br/><br/> 
    </TextWrapper>
    </TextContainer>
    <Footer/>
    </>

};

export default AboutUs;
