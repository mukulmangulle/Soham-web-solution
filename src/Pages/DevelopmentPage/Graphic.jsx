
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form  from "./Form"
import Footer2 from '../../Component/Footer2'

const Graphic = () => {
    return (
        <>
    <Box>
                <Box className="bg-img  " >
                    <Typography className='primary-heading' variant='h1' >Graphic Designing</Typography>
                </Box>
            </Box>
            <Box className="service_primary_section container_space flex-center" >

<Box className="flex-center-coulmn  service_chid"  >
       

            <Typography variant='h3' className='service_secondary-heading inner_heading' >
            Creative Graphic Design Solutions       
                 </Typography>

            <Typography variant='h5' className='primary_subheading secvice_child_text' >
            Graphic designing is at the heart of visual communication, transforming ideas into compelling visuals that captivate and engage audiences. Our graphic design services encompass a wide range of solutions, from logo and brand identity creation to marketing materials and digital graphics. We blend creativity with strategic thinking to produce designs that not only look stunning but also effectively convey your brand message. Our team of talented designers is dedicated to crafting high-quality visuals that elevate your brand and leave a lasting impression. Whether you need a complete brand overhaul or specific design elements, we are here to bring your vision to life.


            </Typography>
           

       
    </Box>

</Box>

            
            <Service />
            <Form />
            <Footer2/>

        </>
    )
}

export default Graphic