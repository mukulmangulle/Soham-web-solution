import React, { useEffect, useState } from 'react'

import AboutSection1 from './OurJourney'
import AboutSection2 from './AboutSohamWeb'
import TecnologicalFoucus from './TecnologicalFoucs'
import LeaderShipTeam from './Leading'
import Someourwork2 from './OurVision'
import ContactInformtion from './ContactInformtion'
import { Box, CircularProgress, Typography } from '@mui/material'
import Footer2 from '../../Component/Footer2'
import AttractiveSlider from './AttractiveSlider'
import OurJourney from './OurJourney'
import AboutSohamWeb from './AboutSohamWeb'
import Leading from './Leading'
import OurVision from './OurVision'

const Aboutmain = () => {
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
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <Box className="bg-img about_first " >
        <Typography className='primary-heading' variant='h1'  >
          About
        </Typography>
      </Box>

      <AboutSohamWeb />
      <OurJourney />
      <TecnologicalFoucus />
      <Leading />
      <OurVision />
      <ContactInformtion />
      <Footer2 />
    </>
  )
}

export default Aboutmain
