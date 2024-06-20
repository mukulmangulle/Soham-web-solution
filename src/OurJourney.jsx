import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer2 from './Component/Footer2'
import Journey from "./assets/journey.jpg"

const OurJourney = () => {
   
    return (
        <>
            <Box className='padding-top-bottom bg-img'>
                <Typography variant='h2' id='Heading-h2' >
                    Our Journey
                </Typography>
            </Box>
            <Box className="flex-center">
                <Typography id="Typography-black " className='padding-top-bottom ' textAlign={"center"} width={"85%"} >
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                    as a placeholder before the final copy is available.
                </Typography>
            </Box>
            <Box>
                <img width={"100%"} src={Journey} alt="" />
            </Box>
            <Footer2 />
        </>
    )
}

export default OurJourney
