
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form  from "./Form"
import Shopify_logo from "../../assets/Service/logo/shopify.svg"
import Footer2 from '../../Component/Footer2'


const Shopify = () => {
    return (
        <>
          
            <Box>
                <Box className="bg-img " >
                    <Typography className='primary-heading' variant='h1' >Shopify Development</Typography>
                </Box>
            </Box>


            <Box className="service_primary_section  flex-center" >
            <Box className="container">
                <Box className="flex-center-coulmn padding-top-bottom service_chid"  >
                       

                            <Typography variant='h3' className='service_secondary-heading inner_heading' >
                            Shopify E-Commerce Development Services
                            </Typography>

                            <Typography variant='h5' className='primary_subheading secvice_child_text' >
                            Shopify is a leading ecommerce platform designed to help businesses of all sizes build and customize their online stores with ease. Its user-friendly interface, combined with a vast array of themes and plugins, allows for quick and efficient store setup. Shopify development offers robust features, including secure payment gateways, SEO tools, and mobile responsiveness, ensuring a seamless shopping experience for customers.

                            </Typography>
                           

                       
                    </Box>
</Box>
            </Box>
            
            <Service />
            <Form />
            <Footer2/>

        </>
    )
}

export default Shopify