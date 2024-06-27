
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form  from "./Form"
import Ecommerce_logo from "../../assets/Service/logo/ecommerce.svg"


const Ecommerce = () => {
    return (
        <> <Box>
        <Box className="bg-img  " >
            <Typography className='primary-heading' variant='h1' >Ecommerce Development</Typography>
        </Box>
    </Box>
          
    <Box className="service_primary_section flex-center" >
                <Box className="service-man flex-center-coulmn "  >

                <Box className="service_container_one flex-between-wrap" width={"100%"}  >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={Ecommerce_logo} alt="" />

                            <Typography variant='h2' className="service_secondary-heading">
                            OpenCart E-Commerce Development Services                                   </Typography>

                            <Typography className="service_text" >
                            OpenCart Development involves creating and customizing ecommerce stores using the OpenCart platform, a robust and open-source solution known for its flexibility and ease of use. OpenCart provides a comprehensive set of features that enable businesses to build and manage online stores efficiently.

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

export default Ecommerce