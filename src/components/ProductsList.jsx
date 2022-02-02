import { useEffect, useState } from "react";
import styled from 'styled-components'
import Product from './Product'
import axios from "axios";

const Container = styled.div`
background-color: white;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
const Wrapper = styled.div`
background-color: white;
display: flex;
flex-direction: column;
 
`
const Button = styled.button`
margin: 0 auto 50px;
padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover {
      background-color: #424242;
    }
`
const ProductsList = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
 
  const [visible, setVisible] = useState(8);

console.log(filteredProducts);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`https://laboutique-node.herokuapp.com/api/products?category=${cat}`);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);


  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  console.log(filteredProducts.length)
  const showMoreItems = () => { 
    setVisible((visible)=> visible + 8)
  }

  return (
    <Wrapper>
    <Container>
     {
        filteredProducts.slice(0,visible).map((item, index)=>(
         <Product key={`${index}_${item._id}}`} item={item}/>
        ))
       
      }
    </Container>
  {
    visible < products.length && filteredProducts.length > 8 &&
 
      <Button  onClick={() => showMoreItems()}>Se flere produkter</Button>
    }
    </Wrapper>
  );
};

export default ProductsList;
