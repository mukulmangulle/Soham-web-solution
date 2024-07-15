import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Typography, Button } from '@mui/material'
import Service from './Service'
import Form from "./Form"
import Footer2 from '../../../Component/Footer2'


const WordPress = () => {
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
                    <Typography className='primary-heading' variant='h1' >Wordpress Development</Typography>
                </Box>
            </Box>

            <Box className="service_primary_section  flex-center" >
                <Box className="container">
                    <Box className="flex-center-coulmn padding-top-bottom service_chid"  >


                        <Typography variant='h3' className='service_secondary-heading inner_heading' >
                            Customized Services for WordPress Development
                        </Typography>

                        <Typography variant='h5' className='primary_subheading secvice_child_text' >
                            All websites are powered by WordPress, the industry-leading content management system. Web developers and designers may construct or update websites with minimal work thanks to this CMS's well-known ease of modification. With its many built-in capabilities, WordPress is perfect for building up both a simple content management system and a powerful blogging platform, which improves search engine exposure. Additionally, because of its adaptability, it may be easily integrated into a variety of platforms, such as e-commerce and content resource management systems .

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

export default WordPress
