import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const Header = () => {
    return (
        <Box className='header'>
            <AppBar position="static">
                <Box className="flex-center">
                    <Box className="header-responsive " >
                        <Box className="header flex-between">
                            <Box className="flex-center" >

                                <a className="text-decortion flex-center" href="tel:+917000335673" target="_blank">
                                    <IoCall className='icon-border' fontSize={18} color='white' />
                                    <Typography className='fontSize14 color-white Typography1' marginLeft={1} >+91 7000335673</Typography>
                                </a>
                                <Box margin={2}>|</Box>
                                <a href="mailto:contact@sohamsolution.com" target="_blank" alignItems={"center"} className="text-decortion flex-center" >
                                    <MdEmail className='icon-border' color='white' fontSize={18} />

                                    <Typography className='fontSize14 color-white' marginLeft={1}>contact@sohamsolution.com</Typography>
                                </a>
                                <Box margin={2} >|</Box>
                                <a className="text-decortion flex-center" target="_blank" href='https://api.whatsapp.com/send/?phone=917000335673&text&type=phone_number&app_absent=0'  >
                                    <FaWhatsapp color='white' className='icon-border' fontSize={18} />
                                    <Typography className='fontSize14 color-white' marginLeft={1} >Whatsapp</Typography>
                                </a>
                            </Box>

                            <Box className="flex-between">
                                <Typography className='fontSize14 color-white' marginRight={1.5} >Hire us on work</Typography>
                                <Link to="https://calendly.com/sws-contact" target="_blank" className="text-decortion flex-center">
                                    <FaCalendarAlt className='icon-border color-white' fontSize={18} />
                                    <Typography className='fontSize14 color-white' marginLeft={0.8} > Schedule Meeting</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </AppBar>
        </Box>
    );
}

export default Header;
