import React, { useEffect, useState } from 'react'
import Lets_Build from './Lets_Build'
import Footer2 from '../../Component/Footer2'
import Map from "../../assets/contactus soham web/map.svg";
import { Box, CircularProgress } from '@mui/material';

const ContactMan = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = () => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };


  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <Box className="loder_shadow">
          <CircularProgress />
        </Box>
      </Box>
    );
  }
  return (
    <>
      <Lets_Build />
      <Box>
        <img className='map-img' src={Map} alt="" />
      </Box>
      <Footer2 />
    </>
  )
}

export default ContactMan
