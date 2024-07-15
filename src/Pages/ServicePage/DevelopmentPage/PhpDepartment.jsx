import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Service from './Service'
import Form from "./Form"
import Footer2 from '../../../Component/Footer2'


const PHPDevelopment = () => {
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
                    <Typography className='primary-heading' variant='h1' >PHP Development</Typography>
                </Box>
            </Box>

            <Box className="service_primary_section flex-center" >
                <Box className="container">

                    <Box className="flex-center-coulmn service_chid padding-top-bottom"  >


                        <Typography variant='h3' className='service_secondary-heading inner_heading' >
                            PHP Development Services for Web Applications
                        </Typography>

                        <Typography variant='h5' className='primary_subheading secvice_child_text' >
                            Server-side programming languages like PHP (Hypertext Preprocessor) are widely used in web development. PHP is a versatile language that functions smoothly on all platforms and provides outstanding productivity. It is an open-source, free platform with robust documentation and a vibrant user base. PHP web development efficiently addresses the requirement for enhanced customization and creative solutions in response to the growing need for dynamic content.
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

export default PHPDevelopment
