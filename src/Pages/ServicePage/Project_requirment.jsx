import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Project_requirment = () => {
    return (
        <>
            <Box className="project-requirement flex-center-coulmn">
                <Typography variant='h4'className='get_the_best'>
                    Get the best quote for your project requirement
                </Typography>
               <Link to={`/${process.env.SLUG_URL}/requirement/`}>
               <Button   className='view-more' >Get in Touch</Button>
               </Link>
            </Box>

        </>
    )
}

export default Project_requirment
