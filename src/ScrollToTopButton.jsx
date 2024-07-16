
import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ScrollToTopButton = () => {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
const handleScroll = () => {
setIsVisible(window.scrollY > 200); // Button tabhi dikhai dega jab scroll 200px se zyada ho
};

window.addEventListener('scroll', handleScroll);
return () => {
window.removeEventListener('scroll', handleScroll);
};
}, []);

const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: 'smooth' // Smooth scrolling ke liye
});
};

return (
isVisible && (
<Tooltip title="Scroll to Top" arrow>
<IconButton
aria-label="scroll to top"
onClick={scrollToTop}
sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 999, background: 'white', width: '50px', height: '50px', borderRadius: '50px', color: 'blue' }}
>
<ArrowUpwardIcon sx={{ background: 'white', width: '30px', height: '30px', borderRadius: '50px', color: 'blue' }} />
</IconButton>
</Tooltip>
)
);
};

export default ScrollToTopButton;