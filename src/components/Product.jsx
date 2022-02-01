import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 5px;
  max-height: 650px;
  max-width: 550px;
  padding-bottom: 20px;


`
const Button = styled.button`
  width: 70%;
  position: absolute;
  bottom: 20px;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  opacity:0;
  transition: all 0.5s ease; 
`

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  max-height: 550px;
  display: flex;
  justify-content: center;
  background-color: #f3f3f3;
  position: relative;
  &:hover ${Button}{
    opacity:  1;
  }

`
const Image = styled.img`
  margin-top: 20px;
  max-width: 80%;
  object-fit: contain;
`


const Info = styled.div`
  margin: 5px;
`

const Product = ({item}) => {

  return (
    <Container to = {`/product/${item._id}`} >
      <ImageWrapper>
        <Image src={item.img}/>
        <Button>Klikk for mer detaljer</Button>
      </ImageWrapper>
      <Info>
        <div>{item.title}</div>
        <div>{item.price}kr</div>
      </Info>
    </Container>
  )
}

export default Product
