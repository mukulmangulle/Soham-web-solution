
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form from "./Form"
import Webdesigner_logo from "../../assets/Service/logo/web designing.svg"
import Footer2 from '../../Component/Footer2'


const Laraval = () => {
  return (
 <>
    <Box>
    <Box className="bg-img" >
        <Typography className='primary-heading' variant='h1' >Laravel Development</Typography>
    </Box>
</Box>

<Box className="service_primary_section container_space flex-center" >

<Box className="flex-center-coulmn  service_chid"  >
       

            <Typography variant='h3' className='service_secondary-heading inner_heading' >
            Web Development with Laravel PHP
            </Typography>

            <Typography variant='h5' className='primary_subheading secvice_child_text' >
            Best known for its simplicity and beauty, Laravel is a PHP framework that is perfect for creating stunning websites. It provides an extensive feature set that lowers costs and speeds up the development process. Laravel boosts the effectiveness and performance of websites with its built-in routing, authentication, and caching capabilities.


            </Typography>
           

       
    </Box>

</Box>

<Service />
<Form />
<Footer2/>
</>
  )
}

export default Laraval
