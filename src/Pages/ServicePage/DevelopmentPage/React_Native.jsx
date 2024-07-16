
import { Box, CircularProgress, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Service from './Service'
import Form from "./Form"
import Footer2 from '../../../Component/Footer2'

const React_Native = () => {
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
      <Box>
        <Box className="bg-img" >
          <Typography className='primary-heading' variant='h1' >React Native Development
          </Typography>
        </Box>
      </Box>
      <Box className="service_primary_section  flex-center" >
        <Box className="container">
          <Box className="flex-center-coulmn padding-top-bottom  service_chid"  >
            <Typography variant='h3' className='service_secondary-heading inner_heading' >
              React Native App Development
            </Typography>

            <Typography variant='h5' className='primary_subheading secvice_child_text' >
              Our React Native app development services offer a powerful and efficient way to build cross-platform mobile applications. Whether starting from scratch or integrating React Native into your existing application, our expert team delivers high-quality, customized solutions tailored to your business goals. We manage every phase of the project, from design and development to testing and deployment, ensuring a seamless and robust final product.
              React Native's flexibility and performance make it a top choice for modern app development, and our team is dedicated to leveraging its full potential. We also provide continuous support and updates to keep your app current and competitive. Choose our React Native app development services to experience innovative, reliable, and scalable mobile solutions.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Service />
      <Form />
      <Footer2 />
    </>

  )
}

export default React_Native
