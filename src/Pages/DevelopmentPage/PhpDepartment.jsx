import { Box, Typography } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form  from "./Form"
import Php_logo from "../../assets/Service/logo/php.svg"
import { Link } from 'react-router-dom'

const PHPDevelopment = () => {
    return (
        <>
            <Box>
                <Box className="bg-img  " >
                    <Typography className='primary-heading' variant='h1' >PHP Development</Typography>
                </Box>
            </Box>

            <Box className="service_primary_section flex-center" >
                {/* <Box className="service-man flex-center-coulmn "  > */}

                <Box className=" flex-between-wrap padding-top-bottom service_chid" width={"75%"}   >
                       

                            <Typography variant='h3' className='service_secondary-heading inner_heading' >
                            PHP Development Services for Web Applications
                            </Typography>

                            <Typography variant='h5' className='primary_subheading' textAlign={"center"} marginTop={3}>
                            Server-side programming languages like PHP (Hypertext Preprocessor) are widely used in web development. PHP is a versatile language that functions smoothly on all platforms and provides outstanding productivity. It is an open-source, free platform with robust documentation and a vibrant user base. PHP web development efficiently addresses the requirement for enhanced customization and creative solutions in response to the growing need for dynamic content.

                            </Typography>
                           

                       
                    </Box>

                {/* </Box> */}
            </Box>

            
            <Service />
            <Form />
           
        </>
    )
}

export default PHPDevelopment
