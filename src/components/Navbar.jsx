import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import RoomIcon from '@mui/icons-material/Room';
import { Capitalize } from "../utils/utils";
import { useLocation } from 'react-router-dom'
import { styled as MuiStyled } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import { signOut } from "../redux/actions/authActions";

let opacit = window.scrollY/100;

const Container = styled.div`
  height: 60px;
  top: 0;  
  width: 100vw;
  z-index: 100;
  display: flex;

  align-items: center;

  ${props => {
    if (props.pos === "fixed") {
      return `
      position: fixed;

    `
    } else if (props.pos === "static") {
      return `
      position: static;
      
    `
    } else {
      return `
      position: sticky;

    `
    }
  }}

`;


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width : 650px) {
  display: none;
 } ;
`;

const MenuLinks= styled.div`
    display: flex;
    opacity:0;
  `

const Center = styled.div`
  flex: 1;
  text-align: center;
  color: black;
  & a {
    text-decoration: none;
  }
  @media (max-width : 650px) {
  text-align: left;
  margin-left: 20px;

 } ;
 @media (max-width : 400px) {
  font-size: 13px;

 } ;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family: "EB Garamond", serif;

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right:${props => props.left ? "-120px ": "-5px"};
  background-color: #f0f0f0;
  min-width: 160px;
  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;

`

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover ${DropdownContent}{
    display: block;
  }
`


const MenuItem = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
  
`;

const StyledBadge = MuiStyled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 10,
    padding: '0 4px',
    backgroundColor: "#000000"
  },
}));

const Navbar = ({pos}) => { 
  const location = useLocation();
  const notHome = location.pathname.split("/")[1];
  const currentUser = useSelector((state) => state.auth.name);
  const { quantity } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false)
  const [opacity, setOpacity] = useState(opacit)
  const [navColor, setNavColor] = useState("black")
  const dispatch = useDispatch();

  useEffect(() => {
    if (!notHome || notHome === "aboutUs") {
      const handleScroll =()=> {
      let show = window.scrollY;
      const opacity = show / 100; 
      if (show) {
        setScrolled(!scrolled);
        setOpacity(opacity)
        
      } else {
        setScrolled(false);
        setOpacity(0)
      }
      if (notHome === "aboutUs"){
        setNavColor("black");
      }
    }
    document.addEventListener('scroll', handleScroll);
    return ()=>{
      document.removeEventListener('scroll', handleScroll)
    }
  
  } else {
    setOpacity(1)
  }
}, [scrolled, notHome])
    

const handleSignOut = () => {
  dispatch(signOut());
  navigate("/signin");
};

 
  return (
    <>
    <Container id="navbar" style={{backgroundColor: `rgba(255, 255, 255, ${opacity})`, color:`${navColor}`}} pos={pos} >
        <Left>
          <MenuItem to="/findus" findus="true">
            <Dropdown>
              <RoomIcon></RoomIcon>
              <DropdownContent left>Finn Oss</DropdownContent>
            </Dropdown>
          </MenuItem>
          <MenuLinks style={{opacity:`${opacity}`}}>
            <MenuItem to="/products/Dame">
                Dame
            </MenuItem>
            <MenuItem to="/products/Herre">
                Herre
            </MenuItem>
          </MenuLinks>
        </Left>

        <Center>
          <Link to={"/"}>
            <Logo onClick={()=>window.scrollTo(0, 0)}>LaBoutique</Logo>
          </Link>
        </Center>
        <Right>
        { !currentUser ? <MenuItem to={"/signin"} ><Dropdown>logg inn</Dropdown></MenuItem> : 
            <Dropdown style={{fontWeight:"600"}} onClick={() => handleSignOut()}>logg ut
              <DropdownContent>{`Du er logged inn som ${Capitalize(currentUser)}`}</DropdownContent>
            </Dropdown>
          }
          <MenuItem to="/cart">
            <StyledBadge badgeContent={quantity} color="primary" sx={{ "& .MuiBadge-badge": {  fontSize: 9, height: 15, minWidth: 15 } }}>
              <ShoppingBagOutlinedIcon />
            </StyledBadge>
          </MenuItem>
        </Right>
    </Container>
     </>
  );
};

export default Navbar;