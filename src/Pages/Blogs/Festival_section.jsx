import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BoxCategories from './BoxCategories';
import Categories_name from './Categories';

const Festival_section = ({ Api_url }) => {
  const location = useLocation()
  const { name } = location.state || {};
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // Adjust the timeout value as needed (2 seconds in this case)

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <>
      <Box className="bg-img "  >
        <Typography  variant='h1'className='primary-heading' >
          {showLoader ? <CircularProgress  /> : name}
        </Typography>
      </Box>
      {!showLoader && (
        <>
          <BoxCategories Api_url={Api_url} />
      
         {/* <Categories_name /> */}

        </>
      )}
    </>
  );
}

export default Festival_section;
