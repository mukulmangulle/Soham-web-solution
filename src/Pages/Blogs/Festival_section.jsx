import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BoxCategories from './BoxCategories';

const Festival_section = ({ Api_url }) => {
  const location = useLocation()
  const { name } = location.state || {};
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <>
      <Box className="bg-img "  >
        <Typography variant='h1' className='primary-heading' >
          {showLoader ? <CircularProgress /> : name}
        </Typography>
      </Box>
      {!showLoader && (
        <>
          <BoxCategories Api_url={Api_url} />
        </>
      )}
    </>
  );
}

export default Festival_section;
