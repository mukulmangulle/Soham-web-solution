import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../../features/content/contentSlice';
import AboutSectionimg1 from "../../assets/AboutSection1/aboutsection2/about1.svg"
import AboutSectionimg2 from "../../assets/AboutSection1/aboutsection2/about2.svg"
import AboutSectionimg3 from "../../assets/AboutSection1/aboutsection2/about3.svg"
import AboutSectionimg4 from "../../assets/AboutSection1/about_section_first/about4.svg"
import AboutSectionimg5 from "../../assets/AboutSection1/about_section_first/about5.svg"

const AboutSohamWeb = () => {
  const dispatch = useDispatch()
  const { contents, isLoading, isError } = useSelector((state) => state.content);

  useEffect(() => {
    dispatch(fetchcontents())
  }, [dispatch]);
  return (
    <>
      <Box className='aboutsectiocolor  flex-center ' >
        <Box className="flex-center container">
          <Box class="gallery"  >
            <img src={AboutSectionimg1} />
            <img src={AboutSectionimg2} />
            <img src={AboutSectionimg3} />
            <img src={AboutSectionimg4} />
            <img src={AboutSectionimg5} />
          </Box>
          <Box>

          </Box>
          <Box className="about-welcome" >
            <Typography className='about-heading' variant='h3'>{contents.aboutSectionData.heading}</Typography>
            <Typography color={"white"} className='innovation'>  {contents.aboutSectionData.text}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AboutSohamWeb;
