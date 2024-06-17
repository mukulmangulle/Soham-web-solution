
import React from 'react'
import Careerhome from "../../assets/career/careerhome.svg"
import { Box, Link, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

const WeHiring = () => {
    return (

        <Box className="padding-top-bottom width1920 flex-center hiring"  >
            <Box className="we-man"   >
                <Box className="we-img-section">
                    <img className='we-img' src={Careerhome} alt="" />
                </Box>
                <Box className="growing" >
                    <Typography className='gorw-p1' variant="h3">
                        We're growing our team!
                    </Typography>
                    <Typography className='gorw-p2' >
                        At Soham Web Solution, we're not just building websites; we're crafting digital experiences that resonate with users worldwide. We're on the hunt for creative minds, strategic thinkers, and technology enthusiasts to join our vibrant team.                    </Typography>
                    <Link  className='grow-email' href="mailto:career@sohamwebsolution.com">
                        Career@sohamwebsolution.com
                    </Link>
                </Box>
            </Box>
        </Box>

    )
}

export default WeHiring
