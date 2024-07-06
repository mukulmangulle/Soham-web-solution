import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import Careertoggle1 from './CareerTogglepage/Careertoggle1'
import Careertoggle2 from './CareerTogglepage/Careertoggle2'
import Careertoggle3 from './CareerTogglepage/Careertoggle3'
import Careertoggle4 from './CareerTogglepage/Careertoggle4'
import Careertoggle5 from './CareerTogglepage/Careertoggle5'
import Careertoggle6 from './CareerTogglepage/Careertoggle6'
import Careertoggle7 from './CareerTogglepage/Careertoggle7'


const CareerOpeningTeam = () => {
    return (
        <>

            <Box  className="container_space" margin={"auto"} bgcolor={"#E6EBF3"} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                <Typography className='secondary_heading' variant='h2'    >
                    Current openings in Team
                </Typography>


                <Box className="carrer_toogle_section" >

                    <Careertoggle1 />
                    <Careertoggle2 />
                    <Careertoggle3 />
                    <Careertoggle4 />
                    <Careertoggle5 />
                    <Careertoggle6/>
                    <Careertoggle7/>
                </Box>
            </Box>

        </>
    )
}

export default CareerOpeningTeam
