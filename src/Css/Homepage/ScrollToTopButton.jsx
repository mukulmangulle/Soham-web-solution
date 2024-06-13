
import React, { useState, useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ScrollToTopBottomButton = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottomOffset = window.innerHeight + window.scrollY;
      setIsBottom(bottomOffset >= document.body.scrollHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  };

  return (
    <Tooltip title={isBottom ? 'Scroll to Top' : 'Scroll to Bottom'} arrow>
      <IconButton
        aria-label={isBottom ? 'scroll to top' : 'scroll to bottom'}
        onClick={() => scrollTo(isBottom ? 0 : document.body.scrollHeight)}
        sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 999,background:"white", width:"30px", height:"30px", borderRadius:"50PX", color:"blue" }}
      >
        {isBottom ? <ArrowUpwardIcon /> : <ArrowDownwardIcon sx={{background:"white", width:"30px", height:"30px", borderRadius:"50PX", color:"blue"}}/>}
      </IconButton>
    </Tooltip>
  );
};

export default ScrollToTopBottomButton;
