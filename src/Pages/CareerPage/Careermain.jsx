import React from 'react'
import { Box, Typography } from '@mui/material'
import WeHiring from './WeHiring'
import CareerOpeningTeam from './CareerOpeningTeam'
import CareerForm from './CareerTogglepage/CareerForm'

const Careermain = () => {
    return (
        <>
            <Box  className="bg-img">
                <Box >
                    <Typography id='Heading-h2' variant='h2' className='padding-top-bottom'>Career</Typography>
                </Box>
            </Box>
 
            <WeHiring/>
            <CareerOpeningTeam/>
            
        </>
    )
}

export default Careermain
