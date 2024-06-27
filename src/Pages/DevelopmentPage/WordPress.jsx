import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form from "./Form"
import wordpress_logo from "../../assets/Service/logo/wordpress.svg"


const WordPress = () => {
    return (
        <>
           
            <Box>
                <Box className="bg-img  " >
                    <Typography  className='primary-heading' variant='h1' >Wordpress Development</Typography>
                </Box>
            </Box>

            <Box className="service_primary_section flex-center" >
                <Box className="service-man flex-center-coulmn "  >

                <Box className="service_container_one flex-between-wrap" width={"100%"}  >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={wordpress_logo} alt="" />

                            <Typography variant='h2' className="service_secondary-heading">
                            Customized Services for WordPress Development                   
                                     </Typography>

                            <Typography className="service_text" >
                            All websites are powered by WordPress, the industry-leading content management system. Web developers and designers may construct or update websites with minimal work thanks to this CMS's well-known ease of modification. With its many built-in capabilities, WordPress is perfect for building up both a simple content management system and a powerful blogging platform, which improves search engine exposure. Additionally, because of its adaptability, it may be easily integrated into a variety of platforms, such as e-commerce and content resource management systems.

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

export default WordPress
