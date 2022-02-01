import Button from '@mui/material/Button';
import React from 'react';

const MyButton = ({children}) => {
  return <Button  sx={{ width: '100%', padding:"5px 20px", bgcolor:"black", color: "white", borderRadius:"0", ':hover': {
    bgcolor: '#3b3b3b', 
    color: 'white',
  }}}>{children}</Button>;
};

export default MyButton;

