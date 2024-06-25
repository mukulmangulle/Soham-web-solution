
import Home from './Home'
import OurUtility from "./OurUtility";
import SameOurWork from "./SameOurWork";
import OurCustomer from "./OurCustomer";
import OurPartner from "./OurPartner";
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Footer from './Footer';
import About_us from './About_us';

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
        <CircularProgress />
      </Box>
    );
  }

    return (
        <>
          <Box className="home-mane-1" >
          <Home />
            <OurUtility />
            <SameOurWork />
            <About_us/>
            <OurCustomer />
            <OurPartner />
         <Footer/>
          </Box>
        </>
    )
}

export default HomeSection
