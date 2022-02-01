import React from 'react';
import Page from '../components/Page';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  /* width: 100%;
  height: 100%;
  border: 1px solid red; */

`


const Bestilling = () => {
  const title1 = "Bestilling"
const title2 = "Hvordan kan jeg endre eller kansellere en bestilling?"
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptas? Dolores consequatur nulla, quaerat libero cumque illum delectus. Neque consequuntur, quos maxime perspiciatis tempore commodi obcaecati tenetur. Ducimus, rem sunt."

  return <Container>
    <Page title1={title1} title2={title2} text={text}/>
  </Container>;
};

export default Bestilling;
