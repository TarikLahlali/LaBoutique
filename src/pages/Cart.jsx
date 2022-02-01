import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { medium, mobile } from '../responsive';
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { addToCart, removeFromCart, decreaseCart, getTotals } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MyButton from '../components/MyButton';
const KEY = process.env.REACT_APP_STRIPE;
const Container = styled.div`

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 40px auto;
  ${medium({flexDirection: "column", width: "90%"})}
  ${mobile({width: "98%"})}

`;

const EmptyCard = styled.div`
  height: calc(100vh - 100px);
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const EmptyCartTitle1 = styled.h3`
margin: 20vh 20px 20px;
`
const EmptyCartTitle2 = styled.h3`
margin-bottom: 40px;
`
const EmptyCartButtons = styled.div`
  width: 300px;
  display:flex;
  justify-content: space-between;
`


const ProductsWrapper = styled.div`
background-color: white;
margin-right:10px;
  ${medium({flexDirection: "column", margin:"0"})}
  ${mobile({padding: "0px", margin:0})}
flex: 2;
`;


const TopText = styled.h2`
padding: 20px;
margin-bottom: 20px;

`;


const Product = styled.div`
border-bottom: 0.5px solid lightgray;
padding: 20px 0;
margin: 0 20px ;
  display: flex;


`;

const Image = styled.img`
width: 150px;
  min-width: 150px;
  ;
  ${medium({minWidth: "40px",  maxHeight: "170px"})}

`;

const Details = styled.div`
  flex: 2;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column" })}

`;
const ProductInfo = styled.div`
  flex: 2;
   display: flex;
   flex-direction: column;
  justify-content: space-between;
  min-height: 150px;

`;

const ProductName = styled.h4`
`;

const ProductId = styled.span``;

const ProductSize = styled.span``;
const ProductColor = styled.span``;

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  ${mobile({flexDirection: "row" , justifyContent: "space-between" , marginLeft: "-145px" })}
`;


const ProductAmountContainer  = styled.div`
    width: 100px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    font-size: 25px;
    
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-top: 1rem ;

`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;

`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 600;

`;


const Summary = styled.div`
  flex: 1;
  background-color: white;
  padding: 20px;
  max-height: 350px;
  ${medium({ marginTop:"20px"})}

`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`

  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const RemoveButton = styled.button`
  width: 70px;
  display: flex;
  align-items: center;
  color: black;
  background-color: white;
  font-weight: 600;
  cursor: pointer;
`;


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);



  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async (status) => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        })
        console.log(res);
          navigate("/success", { state: {stripeData: res.data,
            products: cart}
             })

      } catch {}
    };
    stripeToken && cart.total >=1 && makeRequest();
  }, [stripeToken, cart.total, navigate, cart]);


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      {cart.total ? <Wrapper>
        <ProductsWrapper>
            <TopText>Handlekurv ( {cart.quantity} varer)</TopText>
            {cart.products.map((product, index)=> (<Product key={`${index}_${product._id}}`}>
                <Image src={product.img} />
                <Details>
                    <ProductInfo>
                          <ProductName>
                              {product.title}
                            </ProductName>
                            <ProductId>
                              <b>ID:</b> {product._id}
                            </ProductId>
                            <ProductColor>
                            <b>Farge: </b>  {product.color}
                            </ProductColor>
                            <ProductSize>
                              <b>Størrelse: </b> {product.size}
                            </ProductSize>
                            <RemoveButton onClick={()=>{handleRemoveFromCart(product)}}><DeleteOutlineIcon/>Fjern</RemoveButton>
                    </ProductInfo>
                    <PriceDetail>
                       <ProductAmountContainer>
                       <AmountContainer>
                            <RemoveIcon style={{cursor: "pointer"}}onClick={() => handleDecreaseCart(product)}/>
                              <Amount>{product.cartquantity}</Amount>
                            <AddIcon style={{cursor: "pointer"}} onClick={() => handleAddToCart(product)}/>
                            </AmountContainer>
                      </ProductAmountContainer>
                      <ProductPrice>{product.price * product.cartquantity} kr</ProductPrice>

                    </PriceDetail>
                  </Details>
            </Product>))}
          </ProductsWrapper>
          <Summary>
            <SummaryTitle>Total sum</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Mellomsum</SummaryItemText>
              <SummaryItemPrice>{cart.total} kr</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frakt</SummaryItemText>
              <SummaryItemPrice>100 kr</SummaryItemPrice>
            </SummaryItem>
            {
              cart.total > 1000 ?
              <>
                <SummaryItem>
                  <SummaryItemText>Frakt rabatt</SummaryItemText>
                  <SummaryItemPrice> - 100 kr </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total sum</SummaryItemText>
                  <SummaryItemPrice>{cart.total} kr</SummaryItemPrice>
                </SummaryItem>
              </> :
              <>
                <SummaryItem type="total">
                  <SummaryItemText>Total sum</SummaryItemText>
                  <SummaryItemPrice>{cart.total} kr</SummaryItemPrice>
                </SummaryItem>
              </>
            }
            <StripeCheckout
             name="LaBoutique"
             billingAddress
             shippingAddress
             description={`Your total is kr ${cart.total}`}
             amount={cart.total}
             token={onToken}
             stripeKey={KEY}
            >
            <MyButton>TIL KASSEN</MyButton>
            </StripeCheckout>
          </Summary>
      </Wrapper> :
      <EmptyCard> 
        <EmptyCartTitle1>
        Du har ingen produkter i handlekurven.
        </EmptyCartTitle1>
        <EmptyCartTitle2>
              Shop videre.
        </EmptyCartTitle2>
       
            <EmptyCartButtons>
       <Link to="/products/Dame"> <MyButton >Dame</MyButton> </Link>
       <Link to="/products/Herre"> <MyButton >Herre</MyButton> </Link>
            </EmptyCartButtons>
      </EmptyCard>
      }
      <Footer />
    </Container>
  );
};

export default Cart;