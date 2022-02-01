
import Slider from "react-slick";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import axios from "axios";

import './Highlights.css'
import { Link } from "react-router-dom";


const settings = {
  dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
}

const HighlightsSection = styled.section`
  margin-top: 4px;
  text-align: center;
  letter-spacing: 0.5px;
  margin-bottom: 30px;

`

const CarouselContainer = styled.div`
  width: 95vw;
  margin: 0 auto;
  /* max-height:500px; */
  background-color: #F3F3F3;
  @media (max-width : 1200px) {
   max-height: 500px;
    width: 90vw;
  } ;
 
`

const SliderTitle = styled.h2`
  margin-bottom :50px;
`
const CardDetails = styled.div`

  position: absolute;
  width: 100%;
  height:100%;
  background: #f3f3f3;
  margin-top: 20px;
  opacity: 0;
  outline: none;

`
const CardWrapper = styled.div`
  height: 400px ;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  @media (max-width : 1200px) {
    /* height: 50vh; */
  } ;
  &:hover ${CardDetails} {
  opacity: 1;
  transition: 0.6s;
  }
`

const Image = styled.img`
 height: 40vh;
 margin: 0 auto;
 max-height:320px;
  

`
const Title = styled.h1`
  font-size: 16px;
  margin-bottom: 10px;
`
const Carousel = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        
        const prods = [res.data[0],res.data[25],res.data[4],res.data[27],res.data[5],res.data[28],res.data[21],res.data[26]];
        setProducts(prods);
        console.log(prods);

      } catch (err) {}
    };
    getProducts();
  }, []);

  
  return (
    
     <HighlightsSection>
     <SliderTitle>Utvalgte høydepunkter</SliderTitle>
      
    <CarouselContainer>
    <Slider {...settings}>
        {
          products.map(({_id, img, title,price}) => (
          <CardWrapper key={_id}> 
            <Link to = {`/product/${_id}`}>
              <Image src={img}/>
              <CardDetails>
                <Title> {title}</Title>
                <span>{`${price} kr`}</span>
              </CardDetails>
              </Link>
          </CardWrapper>
          ))
        }
    </Slider>
    </CarouselContainer>
   
    </HighlightsSection>
    
  )
}

export default Carousel

