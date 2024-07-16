import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'
import Footer2 from '../../Component/Footer2'
import WeGrowing from './WeGrowing'
import CurrentOpenings from './CurrentOpenings'

const Careermain = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = () => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <Box className="loder_shadow">
          <CircularProgress />
        </Box>
      </Box>
    );
  }
  return (
    <>
      <Box className="bg-img ">
        <Typography variant='h1' className='primary-heading '>Career</Typography>
      </Box>

      <WeGrowing />
      <CurrentOpenings />
      <Footer2 />
    </>
  )
}

export default Careermain
