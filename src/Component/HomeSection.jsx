import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Footer from './Footer';
import HeroSection from './HeroSection';
import OurUtility from './OurUtility';
import OurWork from './OurWork';
import ClientAbout from './ClientAbout';
import OurCustomer from './OurCustomer';
import OurPartner from './OurPartner';

const HomeSection = () => {
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
      <Box>
        <HeroSection />
        <OurUtility />
        <OurWork />
        <ClientAbout />
        <OurCustomer />
        <OurPartner />
        <Footer />
      </Box>
    </>
  )
}

export default HomeSection
