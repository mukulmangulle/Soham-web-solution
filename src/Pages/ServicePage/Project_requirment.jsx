

import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Serviceform from './Serviceform';

const Project_requirment = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Box className="project-requirement flex-center-coulmn">
        <Typography variant='h4' className='get_the_best'>
          Get the best quote for your project requirement
        </Typography>
        <Button className='view-more' onClick={openPopup}>Get in Touch</Button>
      </Box>

      {showPopup && < Serviceform onClose={closePopup} />}
    </>
  );
};

export default Project_requirment;