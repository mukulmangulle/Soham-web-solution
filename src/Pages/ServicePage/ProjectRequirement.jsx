import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const ProjectRequirement = () => {
    return (
        <>
            <Box maxWidth={"1920px"} margin={"auto"} className="project-requirement" display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                <Typography variant='h4'color="white" textAlign={"center"}>
                  Get the best quote for your project requirement
                </Typography>
                <Button className='view-more' sx={{marginTop:"30px", height:"45px"}}>Get in Touch</Button>
            </Box>
        </>
    )
}

export default ProjectRequirement
