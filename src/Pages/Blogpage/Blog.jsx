import { Box, Typography } from '@mui/material'
import React from 'react'
import blogLatestBlog from "./blogLatestBlog"

const Blog = () => {
    return (
        <>

            <Box id="about-background" >
                <Typography id='Heading-h2' variant='h2' padding={7} >Blog</Typography>
            </Box>

         <blogLatestBlog/>

        </>
    )
}

export default Blog
