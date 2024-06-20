
import Home from './Home'
import OurUtility from "./OurUtility";
import SameOurWork from "./SameOurWork";
import About from "./About";
import OurCustomer from "./OurCustomer";
import OurPartner from "./OurPartner";
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Footer from './Footer';

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
            {/* <About /> */}
            <OurCustomer />
            <OurPartner />
         <Footer/>
          </Box>
        </>
    )
}

export default HomeSection
