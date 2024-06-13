import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BoxCategories from './BoxCategories';
import Categories_name from './Categories_name';

const Festival_title = ({ Api_url }) => {
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
      <Box id="about-background">
        <Typography id='Heading-h2' variant='h2'paddingTop={10} paddingBottom={5} >
          {showLoader ? <CircularProgress  /> : name}
        </Typography>
      </Box>
      {!showLoader && (
        <>
          <BoxCategories Api_url={Api_url} />
          {/* <Categories_name/> */}
        </>
      )}
    </>
  );
}

export default Festival_title;
