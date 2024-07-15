import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../../features/content/contentSlice';

const OurJourney = () => {

  const dispatch = useDispatch()
  const { contents, isLoading, isError } = useSelector((state) => state.content);


  useEffect(() => {
    dispatch(fetchcontents())
  }, [dispatch]);


  return (
    <>
      <Box className="about_our-journey flex-center   " >

        <Box >
          <Box className="flex-center-coulmn about_journey container" textAlign={'center'}>
            <Typography className='secondary_heading' variant='h2' >
              {contents.aboutData.subheading}
            </Typography>

            <Box className="flex-center convert_subheading_man">
              <Box className="subheading-box">
                <Box >
                  <Typography className='primary_subheading convert_subheading' textAlign={"start"} >
                    {contents.aboutData.text1}
                  </Typography>
                </Box>

                <Typography className='primary_subheading convert_subheading ' textAlign={"start"} >
                  {contents.aboutData.text2}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default OurJourney;
