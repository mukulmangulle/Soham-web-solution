import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import WeHiring from './WeGrowing'
import CareerOpeningTeam from './CurrentOpenings'
import CareerForm from './CareerTogglepage/CareerForm'
import Footer2 from '../../Component/Footer2'
import Cookies from 'js-cookie'
import WeGrowing from './WeGrowing'
import CurrentOpenings from './CurrentOpenings'

const Careermain = () => {
    useEffect(() => {
        Cookies.set('page-name', 'Career')
    })
    return (
        <>
            <Box className="bg-img ">
                <Typography variant='h1' className='primary-heading '>Career</Typography>
            </Box>

            <WeGrowing />
            <CurrentOpenings/>
            <Footer2 />
        </>
    )
}

export default Careermain
