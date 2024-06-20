import { Box, Typography } from '@mui/material'
import React from 'react'
import blogLatestBlog from "./blogLatestBlog"

const Blog = () => {
    return (
        <>

            <Box className="bg-img" >
                <Typography id='Heading-h2' variant='h2' className='padding-top-bottom' >Blog</Typography>
            </Box>

         <blogLatestBlog/>

        </>
    )
}

export default Blog
