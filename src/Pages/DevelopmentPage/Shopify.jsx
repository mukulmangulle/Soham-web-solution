
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form  from "./Form"
import Shopify_logo from "../../assets/Service/logo/shopify.svg"


const Shopify = () => {
    return (
        <>
          
            <Box>
                <Box className="bg-img " >
                    <Typography className='primary-heading' variant='h1' >Shopify Development</Typography>
                </Box>
            </Box>


            <Box className="service_primary_section flex-center" >
                <Box className="service-man flex-center-coulmn "  >

                <Box className="service_container_one flex-between-wrap" width={"100%"}  >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={Shopify_logo} alt="" />

                            <Typography variant='h2' className="service_secondary-heading">
                            Shopify E-Commerce Development Services                                     </Typography>

                            <Typography className="service_text" >
                            Shopify is a leading ecommerce platform designed to help businesses of all sizes build and customize their online stores with ease. Its user-friendly interface, combined with a vast array of themes and plugins, allows for quick and efficient store setup. Shopify development offers robust features, including secure payment gateways, SEO tools, and mobile responsiveness, ensuring a seamless shopping experience for customers.

                            </Typography>
                            {/* <Link to={`/${process.env.SLUG_URL}/services/php-development/`} style={{ textDecoration: "none", }} >
                                <Button className='btn_apply_now' >
                                    Read more
                                </Button>
                            </Link> */}

                        </Box>
                        <Box className="background-service flex-center"  >
                            <img src={Php} alt="" />
                        </Box>
                    </Box>

                </Box>
            </Box>
            
            <Service />
            <Form />

        </>
    )
}

export default Shopify