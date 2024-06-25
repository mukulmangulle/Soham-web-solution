import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../../features/content/contentSlice';

const AboutSection1 = () => {

  const dispatch = useDispatch()
  const { contents, isLoading, isError } = useSelector((state) => state.content);


  useEffect(() => {
    dispatch(fetchcontents())
  }, [dispatch]);


  return (
    <>
      <Box className="about_our-journey flex-center" >

        <Box className="flex-center-coulmn about_journey" textAlign={'center'}>
          <Typography  className='secondary_heading' variant='h2' >
            {contents.aboutData.subheading}
          </Typography>
          
          
          <Typography className='primary_subheading' >
            {contents.aboutData.text}
          </Typography>

        </Box>
      </Box>

    </>
  )
}

export default AboutSection1
