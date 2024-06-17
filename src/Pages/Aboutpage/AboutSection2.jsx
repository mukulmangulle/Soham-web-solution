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
<Box id="about-background" >
        <Typography id='Heading-h2' variant='h2' paddingY={6} >
          {contents.aboutData.heading} </Typography>
      </Box>
      <Box className='aboutsectiocolor padding-top-bottom ' >

        <img   src={AboutSectionimg} alt="" />

        <Box  className="about-welcome" >
          <Typography id='about-heading'  variant='h3' fontSize={40}  fontWeight={'600'} textAlign={'center'} paddingBottom={3} color={'white'}>{contents.aboutSectionData.heading}</Typography>
          <Typography id="typography">  {contents.aboutSectionData.text}</Typography>

        </Box>
      </Box>
    </>
  )
}

export default AboutSection2
