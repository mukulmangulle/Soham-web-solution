
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form from "./Form"
import Ecommerce_logo from "../../assets/Service/logo/ecommerce.svg"
import Footer2 from '../../Component/Footer2'


const Ecommerce = () => {
    return (
        <> <Box>
            <Box className="bg-img  " >
                <Typography className='primary-heading' variant='h1' >Ecommerce Development</Typography>
            </Box>
        </Box>

            <Box className="service_primary_section flex-center" >
                <Box className="service-man flex-center-coulmn "  >

                    <Box className="service_primary_section  flex-center" >
                    <Box className="container">
                        <Box className="flex-center-coulmn padding-top-bottom service_chid"  >


                            <Typography variant='h3' className='service_secondary-heading inner_heading' >
                                OpenCart E-Commerce Development Services                            </Typography>

                            <Typography variant='h5' className='primary_subheading secvice_child_text' >
                                OpenCart Development involves creating and customizing ecommerce stores using the OpenCart platform, a robust and open-source solution known for its flexibility and ease of use. OpenCart provides a comprehensive set of features that enable businesses to build and manage online stores efficiently.

                                Our OpenCart development services cover a wide range of needs, from setting up new online stores to customizing existing ones for enhanced functionality and user experience. We specialize in creating custom themes, integrating essential plugins, and optimizing store performance to ensure a seamless shopping experience for your customers. With features like multi-store management, SEO optimization, and a user-friendly admin interface, OpenCart empowers businesses to reach their full potential in the digital marketplace.
                            </Typography>



                        </Box>
</Box>
                    </Box>

                </Box>
            </Box>


            <Service />
            <Form />
            <Footer2 />

        </>
    )
}

export default Ecommerce