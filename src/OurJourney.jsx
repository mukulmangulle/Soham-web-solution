import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer2 from './Component/Footer2'
import Journey from "./assets/journey.jpg"

const OurJourney = () => {
   
    return (
        <>
            <Box className='bg-img'>
                <Typography variant='h2' className='primary-heading' >
                    Our Journey
                </Typography>
            </Box>
            <Box className="flex-center padding-top-bottom" >
                <Typography className="primary_subheading"  textAlign={"center"} width={"85%"} >
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                    as a placeholder before the final copy is available.
                </Typography>
            </Box>
            <Box>
                <img className='journey' src={Journey} alt="" />
            </Box>
            <Footer2 />
        </>
    )
}

export default OurJourney
