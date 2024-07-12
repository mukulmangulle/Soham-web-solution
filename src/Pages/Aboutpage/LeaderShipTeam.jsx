import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import co1 from "../../assets/AboutSection1/neeraj malakar.svg"
import co2 from "../../assets/AboutSection1/anil meena.svg"
import co3 from "../../assets/AboutSection1/ravi yadav.svg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchcontents } from '../../features/content/contentSlice'
const LeaderShipTeam = () => {

    const dispatch = useDispatch()
    const { contents, isLoading, isError } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <>
          <Box className="flex-center">
          <Box className=" leadership container"  >
                <Box className="flex-center-coulmn ">
                    <Typography className='secondary_heading' variant='h2' >
                        {contents.Leadership.heading}
                    </Typography>

                    <Typography className='primary_subheading our-utality-p'   >
                        {contents.Leadership.content}
                    </Typography>
                </Box>


                <Box className="team flex-center" >
                    <Box className="flex-center-column leadership_box">
                        <img className='img_ceo' src={co1} alt="" />
                        <Typography className="ceo_name" >Neeraj Malakar</Typography>
                        <Typography className='leadership-p' >Founder & CEO</Typography>
                    </Box>
                    <Box className="flex-center-column leadership_box">
                        <img className='img_ceo' src={co2} alt=""  />
                        <Typography className="ceo_name">Anil Meena</Typography>
                        <Typography className='leadership-p'>CTO & COO</Typography>
                    </Box>
                    <Box className="flex-center-column leadership_box">
                        <img className='img_ceo' src={co3} alt=""  />
                        <Typography className="ceo_name">Ravi Yadav</Typography>
                        <Typography className='leadership-p'>Founder & CEO</Typography>
                    </Box>
                </Box>
            </Box>
          </Box>
        </>
    )
}

export default LeaderShipTeam
