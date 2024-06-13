import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export default function Mnavbar({ slug }) {
  return (
    <Box sx={{ maxWidth: 1920, margin: 'auto' }} bgcolor={"lightsteelblue"} position={'sticky'} top={0} color={'white'} width={"100%"} display={'flex'} flexWrap={"wrap"} padding={3} alignItems={"center"} justifyContent={"space-evenly"}>

      <Link to={`/${process.env.SLUG_URL}/about/`}>About</Link>
      <Link to={`/${process.env.SLUG_URL}/bloges`}> blog</Link>
      <Link to={`/${process.env.SLUG_URL}/contact-us/`} >Contact</Link>
      <Link to={`/${process.env.SLUG_URL}/career/`}>career</Link>
      <Link to={`/${process.env.SLUG_URL}/services/`}>Service</Link>

      <Link to={`/${process.env.SLUG_URL}/Php_department`}>Php department</Link>
      <Link to={`/${process.env.SLUG_URL}/blogs/`} >All Blog</Link>






    </Box>
  );
}