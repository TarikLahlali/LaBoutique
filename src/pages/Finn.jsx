import React,{useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Map from '../components/Map';
import { medium } from '../responsive';

const Container = styled.header`
  display: flex;
  height: calc(100vh - 60px);
  margin-bottom: 80px;
  justify-content: center;
  width: 90%;
  margin:  auto;
  ${medium({flexDirection: "column"})}

`
const FinnOss = styled.div`
 flex: 1;
 padding: 20px;
margin: 30px auto;
`
const MapContainer = styled.div`
  flex: 2;
  ${medium({margin: "30px 0"})}

`

const Title = styled.h2`
margin: 20px 0px;

`

const Finn = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  
  }, []);
  return <>
    <Navbar/>
    <Container>
      <FinnOss>
        <Title>Kontakt oss</Title>
        <p> Vi er her for å hjelpe deg og setter stor pris på å høre fra deg.</p>
        <p> her finner du adresse om du ønsker å komme i kontakt med vår butikk</p>
        <Title>Ring oss</Title>
        <Title>000000000</Title>
        <p> Vi er klare for å hjelpe deg mellom kl. 09-18 (man – fre) og 09-17 (lør).</p>
      </FinnOss>
      <MapContainer>
        <Map></Map>
        </MapContainer>
    </Container>
    <Footer/>
  </>;
};

export default Finn;
