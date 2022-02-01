import styled from "styled-components"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { mobile , medium} from '../responsive';
import { Link } from "react-router-dom";
import MyButton from "./MyButton";

const FooterContainer = styled.footer`
border-top: 0.5px solid #dddddd;
background-color: #f3f3f3;
padding-top: 20px;
padding-bottom: 20px;
width: 100%;
display: flex;
${mobile({flexDirection: "column", width: "100%"})}

`

const FooterRow = styled.div`
flex:1;
padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${medium({marginLeft: "25px", width: "60%"})}
${mobile({flexDirection: "column", width: "90%",  paddingTop:"10px"})}


`

const FooterCol = styled.div`
${mobile({marginBottom: "20px"})}


`
const FooterColSubscribe =styled.div`
flex: 1;
width: 50%;
padding: 50px 30px;

${medium({ width: "60%", marginLeft:"25px"})}
${mobile({marginBottom: "20px", width: "90%", padding:"0"})}


`



const FooterTitle = styled.h4`
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 2vw;
${mobile({marginBottom: "25px"})}
`
const SubscribeTitle = styled.h3`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 2vw;

${medium({marginBottom: "0px"})}

`

const FooterLinks = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: black;
  position: relative;
  padding-right: 10px;
  &:hover {
  text-decoration: underline;
  }

`



const FooterBottom = styled.div`
background-color: rgb(214, 214, 214);
  padding: 3px;
  color: black;
`

const FooterCopy = styled.div`
display: table;
  margin: 0 auto;
  font-size: 16px;
${medium({fontSize: "14px"})}

`

const FooterLi = styled.li`
margin-bottom: 10px;
`

const SubscribeInput = styled.input`
  border: 0.5px solid black ;
  max-height: 40px;
  height: 3rem;
  width: 99.5%;
  margin-bottom: 0.5rem;
  text-indent: 10px;
${medium({margin: "25px 0 10px"})}

`
const Footer = () => {
  return (
    <footer>
    <FooterContainer>
      <FooterRow>
        <FooterCol>
          <FooterTitle>Hjelp og Kontakt</FooterTitle>
          <ul>
            <FooterLi>
            <FooterLinks to="/findus">Kontakt Oss</FooterLinks>
            </FooterLi>
            <FooterLi>
              <FooterLinks to="/bestilling">Bestilling</FooterLinks>
            </FooterLi>
            <FooterLi>
              <FooterLinks to="/frakt">Frakt og leveranse</FooterLinks>
            </FooterLi>
            <FooterLi>
              
              <FooterLinks to="/findus">Finne butikk</FooterLinks>
            </FooterLi>
          </ul>
        </FooterCol>
        <FooterCol>
          <FooterTitle>Om oss</FooterTitle>
          <ul>
            <FooterLi>
              <FooterLinks to="/aboutUs">Om oss</FooterLinks>
            </FooterLi>
            <FooterLi>
              <FooterLinks to="/findus">Presse</FooterLinks>
            </FooterLi>
            <FooterLi>
              <FooterLinks to="/aboutUs">Inverstor Relations</FooterLinks>
            </FooterLi>
            <FooterLi>
              <FooterLinks to="/findus">Ledige stillinger</FooterLinks>
            </FooterLi>
          </ul>
        </FooterCol>
      </FooterRow>

        <FooterColSubscribe>
            <div style={{display:"flex"}}>
              <FooterTitle>følg oss</FooterTitle>
              <div style={{paddingLeft:"15px" , cursor: 'pointer'}}>
                <FooterLinks to="/aboutUs">
                  <FacebookOutlinedIcon/>
                </FooterLinks>
                <FooterLinks to="/findus">
                  <YouTubeIcon/>
                </FooterLinks>
                <FooterLinks to="/aboutUs">
                  <InstagramIcon/>
                </FooterLinks>
                <FooterLinks to="/findus">
                  <TwitterIcon/>
                </FooterLinks>
              </div>
            </div>


              <SubscribeTitle>
              Motta nyheter og stilinspirasjon per e-post fra LaBoutique
              </SubscribeTitle>

            <form >
              <SubscribeInput
                type='email'
                placeholder='Din e-postadresse'
                name='email-adress'
              />

              <MyButton type='submit' value='join' id='subscribe-button'>
                
                <span >Abonner nå</span>
              </MyButton>
            </form>
        </FooterColSubscribe>
    </FooterContainer>
    <FooterBottom>
      <FooterCopy>
        <span>Copyright</span>©{' '}
        <span>
          LaBoutique S.r.l. {new Date().getFullYear()} – All rights reserved
          - laget av Tarik Lahlali
        </span>
      </FooterCopy>
    </FooterBottom>
  </footer>
  )
}

export default Footer
