import React, { useState} from 'react'
import Navbar from '../components/Navbar'
import ProductsList from '../components/ProductsList'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';


const Title = styled.h2`
  margin: 50px 20px 20px;
  text-transform: uppercase;
`;

const FilterContainer = styled.div`
  display: flex;
  @media (max-width : 600px) {
  justify-content: center;
  } ;

`;

const Filter = styled.div`
  margin: 20px;
  @media (max-width : 600px) {
  margin: 10px 5px;
  } ;
 
`;

const ProductsPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [filters, setFilters] = useState({},{});

  
  const colorChange = (e) => {
    const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name] : value,
      })
      value && setColor(value);
     }

  const categoryChange = (e) => {
    const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name] : value,
      })
      value && setCategory(value);
     }

  return (
    <>
      <Announcement/>
      <Navbar/>
      <Title>klær til {cat}</Title>
      <FilterContainer>
        <Filter>
          <Box sx={{ minWidth: 100}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Farge</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={color}
                name='color'
                label="Farge"
                onChange={colorChange}>
                  <MenuItem value="Hvit">Hvit</MenuItem>
                  <MenuItem value="Svart">Svart</MenuItem>
                  <MenuItem value="Rød">Rød</MenuItem>
                  <MenuItem value="Blå">Blå</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Filter> 

        <Filter>
          <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Kategorier</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                name='categories'
                label="Kategorier"
                onChange={categoryChange}>
                    <MenuItem value="Genser">Genser</MenuItem>
                    <MenuItem value="Jakker">Jakker</MenuItem>
                    <MenuItem value="T-skjorter">T-skjorter</MenuItem>
                    <MenuItem value="Skjorter">Skjorter</MenuItem>
                    <MenuItem value="Bukser">Bukser</MenuItem>
              </Select>
              </FormControl>
              </Box>
          </Filter> 

          <Filter>
           <Box sx={{ minWidth: 100  }}>
            <FormControl fullWidth  >
             <InputLabel id="demo-simple-select-label" >Sorter</InputLabel>
             <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={sort}
               label="Sorter"
               onChange={(e) => setSort(e.target.value)}
              
               >
               <MenuItem value="asc">Laveste pris</MenuItem>
               <MenuItem value="dsc">Høyeste pris</MenuItem>
             </Select>
           </FormControl>
           </Box>
          </Filter> 
        </FilterContainer> 
      <ProductsList cat={cat} filters={filters} sort={sort}/>
      <Footer/>
    </>
  );
}

export default ProductsPage
