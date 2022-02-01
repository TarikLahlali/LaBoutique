import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import DescriptionAccordion from '../components/DescriptionAccordion'
import {mobile} from "../responsive"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "../redux/cartRedux";



import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';

const Container = styled.div`
  background-color: white;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  ${mobile({padding: "20px", flexDirection: "column"})}
`;

const ImgContainer = styled.div`
  flex: 1;
  min-width:400px;
  margin: 0 auto;
`;

const Image = styled.img`
`;

const InfoContainer = styled.div`
  flex: 1;
  min-width: 400px;
  padding: 40px 50px;
  background-color: white;
  ${mobile({padding: "20px"})}

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 18px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;

`;

const FilterContainer = styled.div`
  width: 90%;
  margin: 30px 0px;

  display: flex;
  justify-content: space-between;
  ${mobile({width: "100%"})}

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 20px;
`;


const AddContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  ${mobile({width: "100%"})}
`;

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [warn, setWarn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  console.log("product size "+size)

  useEffect(() => {
    dispatch(getTotals());
    setWarn(false)
  }, [size, cart, dispatch]);


  const handleAddToCart = () => {
    if (size){
      dispatch(
        addToCart({ ...product, size })
      )
    } else{
      setWarn(true);
    }
  };

  console.log("warning " + warn)
  console.log("size " + size)
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
          {product.desc}
          </Desc>
          <Price>{product.price} kr</Price>
          <FilterContainer>
          <Filter>
              <FilterTitle>Farge:</FilterTitle>{product.color}
          </Filter>
          <Filter>
          <FilterTitle>Farge:  </FilterTitle>

          <Box sx={{ minWidth: 50, }}>

            <FormControl required >
              <Select
                displayEmpty
                value={size}
                onChange={(e) => setSize(e.target.value)}>
                  {
                    product.size?.map((s, index) => (
                      <MenuItem key={index} value={s}>{s}</MenuItem>
                    ))

                  }
              </Select>
            </FormControl>
          </Box>
          </Filter>

          </FilterContainer>
          {/* {warn && <Alert severity="warning">This is a warning alert — check it out!</Alert>} */}
          <AddContainer>

            <Box sx={{ width: '100%' }}>
                       <Collapse in={warn}>
                        <Alert
                        severity="warning"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setWarn(!warn);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                          sx={{ mb: 2 }}
                        >
                          Velg størrelse
                        </Alert>
                      </Collapse>
                      <Button
                      sx={{ width: '100%', bgcolor:"black", color: "white", borderRadius:"0", ':hover': {
                        bgcolor: '#3b3b3b',
                        color: 'white',
                        border: "1px solid #3b3b3b",
                      }}}
                        // disabled={warn}
                        variant="outlined"
                        onClick={() => {
                          handleAddToCart();
                        }}
                      >
                        Legg in handlekurven
                      </Button>
                    </Box>
          </AddContainer>


          <DescriptionAccordion/>



        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default ProductPage
