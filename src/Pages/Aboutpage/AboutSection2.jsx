import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AboutSectionimg from "../../assets/AboutSection1/aboutsection1.svg"
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../../features/content/contentSlice';

const AboutSection2 = () => {

  const dispatch = useDispatch()
  const { contents, isLoading, isError } = useSelector((state) => state.content);


  useEffect(() => {
    dispatch(fetchcontents())
  }, [dispatch]);
  return (
    <>
      <Box className="bg-img about_first " >
        <Typography className='primary-heading' variant='h1'  >
          {contents.aboutData.heading} </Typography>
      </Box>

      <Box className='aboutsectiocolor container_space  flex-center ' >
        <Box className="flex-center container">
          <img className='about_img' src={AboutSectionimg} alt="" />
          <Box className="about-welcome" >
            <Typography className='about-heading' variant='h3'>{contents.aboutSectionData.heading}</Typography>
            <Typography color={"white"} className='innovation'>  {contents.aboutSectionData.text}</Typography>
          </Box>
        </Box>

      </Box>
    </>
  )
}

export default AboutSection2
