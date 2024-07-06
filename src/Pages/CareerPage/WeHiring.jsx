
import React from 'react'
import Careerhome from "../../assets/career/careerhome.svg"
import { Box, Link, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

const WeHiring = () => {
    return (

        <Box className=" flex-center we_man_first"  >
            <Box className="we-man  container_space"   >
                <Box className="we-img-section">
                    <img className='we-img' src={Careerhome} alt="" />
                </Box>
                <Box className="growing" >
                    <Typography className='gorw-p1' variant="h3">
                        We're growing our team!
                    </Typography>
                    <Typography className='primary_subheading' >
                        At Soham Web Solution, we're not just building websites; we're crafting digital experiences that resonate with users worldwide. We're on the hunt for creative minds, strategic thinkers, and technology enthusiasts to join our vibrant team.                    </Typography>
                    <Link  className='grow-email' target="_blank" href="mailto:hr@sohamsolution.com">
                    hr@sohamsolution.com
                    </Link>
                </Box>
            </Box>
        </Box>

    )
}

export default WeHiring
