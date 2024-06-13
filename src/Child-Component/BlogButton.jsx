import { Box, Button } from '@mui/material'
import React from 'react'

const BlogButton = (props) => {
    const { children, style, onClick,  placeholder} = props
    return (
        <> <Box display={"flex"} alignItems={'center'} justifyContent={"start"} marginTop={3}>
            <Button type="submit" className='view-more' onClick={onClick} props={props} placeholder={placeholder}>
              View More
            </Button>
        </Box>
        </> 
    )
}

export default BlogButton
