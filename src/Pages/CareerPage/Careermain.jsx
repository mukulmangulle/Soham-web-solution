import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import WeHiring from './WeHiring'
import CareerOpeningTeam from './CareerOpeningTeam'
import CareerForm from './CareerTogglepage/CareerForm'
import Footer2 from '../../Component/Footer2'
import Cookies from 'js-cookie'

const Careermain = () => {
    useEffect(()=>{
        Cookies.set('page-name','Career')
    })
    return (
        <>
            <Box  className="bg-img ">
               
                    <Typography variant='h1' className='primary-heading '>Career</Typography>
                
            </Box>
 
            <WeHiring/>
            <CareerOpeningTeam/>
            <Footer2/>
        </>
    )
}

export default Careermain
