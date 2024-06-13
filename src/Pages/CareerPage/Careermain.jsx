import React from 'react'
import { Box, Typography } from '@mui/material'
import WeHiring from './WeHiring'
import CareerOpeningTeam from './CareerOpeningTeam'
import CareerForm from './CareerTogglepage/CareerForm'

const Careermain = () => {
    return (
        <>
            <Box>
                <Box id="about-background" >
                    <Typography id='Heading-h2' variant='h2' padding={7} >Career</Typography>
                </Box>
            </Box>
 
            <WeHiring/>
            <CareerOpeningTeam/>
        </>
    )
}

export default Careermain
