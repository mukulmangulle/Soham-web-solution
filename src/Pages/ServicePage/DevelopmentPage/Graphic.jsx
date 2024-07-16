
import { Box, CircularProgress, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Service from './Service'
import Form from "./Form"
import Footer2 from '../../../Component/Footer2'

const Graphic = () => {
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
                <Box className="bg-img  " >
                    <Typography className='primary-heading' variant='h1' >Graphic Designing</Typography>
                </Box>
            </Box>
            <Box className="service_primary_section  flex-center" >
            <Box className="container">
                <Box className="flex-center-coulmn padding-top-bottom service_chid"  >


                    <Typography variant='h3' className='service_secondary-heading inner_heading' >
                        Creative Graphic Design Solutions
                    </Typography>
                    <Typography variant='h5' className='primary_subheading secvice_child_text' >
                        Graphic designing is at the heart of visual communication, transforming ideas into compelling visuals that captivate and engage audiences. Our graphic design services encompass a wide range of solutions, from logo and brand identity creation to marketing materials and digital graphics. We blend creativity with strategic thinking to produce designs that not only look stunning but also effectively convey your brand message. Our team of talented designers is dedicated to crafting high-quality visuals that elevate your brand and leave a lasting impression. Whether you need a complete brand overhaul or specific design elements, we are here to bring your vision to life.
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

export default Graphic