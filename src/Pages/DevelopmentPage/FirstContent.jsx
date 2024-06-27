
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form  from "./Form"
import Php_logo from "../../assets/Service/logo/php.svg"
import { Link } from 'react-router-dom'


const FirstContent = () => {
    return (
        <>
         <Box className="service_primary_section flex-center" >
                <Box className="service-man flex-center-coulmn "  >

                <Box className="service_container_one flex-between-wrap" width={"100%"}  >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={Php_logo} alt="" />

                            <Typography variant='h2' className="service_secondary-heading">
                            PHP Development Services for Web Applications
                            </Typography>

                            <Typography className="service_text" >
                            Server-side programming languages like PHP (Hypertext Preprocessor) are widely used in web development. PHP is a versatile language that functions smoothly on all platforms and provides outstanding productivity. It is an open-source, free platform with robust documentation and a vibrant user base. PHP web development efficiently addresses the requirement for enhanced customization and creative solutions in response to the growing need for dynamic content.

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

export default FirstContent