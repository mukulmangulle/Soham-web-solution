
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form from "./Form"
import Webdesigner_logo from "../../assets/Service/logo/web designing.svg"


const Laraval = () => {
  return (
 <>
    <Box>
    <Box className="bg-img" >
        <Typography className='primary-heading' variant='h1' >Laravel Development</Typography>
    </Box>
</Box>

<Box className="service_primary_section flex-center" >
    <Box className="service-man flex-center-coulmn "  >

    <Box className="service_container_one flex-between-wrap" width={"100%"}  >
            <Box className="devlopment-text" >
                <img className='service-logo' src={Webdesigner_logo} alt="" />

                <Typography variant='h2' className="service_secondary-heading">
                Web Development with Laravel PHP                                        
                         </Typography>

                <Typography className="service_text" >
                Best known for its simplicity and beauty, Laravel is a PHP framework that is perfect for creating stunning websites. It provides an extensive feature set that lowers costs and speeds up the development process. Laravel boosts the effectiveness and performance of websites with its built-in routing, authentication, and caching capabilities.

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
<Form /></>
  )
}

export default Laraval
