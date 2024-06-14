import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Call from "../assets/call1.svg"
import Whatsapp from "../assets/whatsapp1.svg"
import Email from "../assets/email1.svg"
import Month from "../assets/Month1.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box className='header width1920'>
            <AppBar position="static">
                <Box className="flex-center">
                    <Box className="header-responsive" >
                        <Box className="header flex-between">
                            <Box className="flex-center" >

                                <a className="text-decortion flex-center" href="tel:%20+91%207879231700" >
                                    <img src={Call} alt="" />
                                    <Typography className='fontSize14 color-white Typography1' marginLeft={1} >+91 9009758263</Typography>
                                </a>
                                <Box margin={2}>|</Box>
                                <a href="mailto:contact@sohamsolution.com" alignItems={"center"} className="text-decortion flex-center" >
                                    <img src={Email} alt="" />
                                    <Typography className='fontSize14 color-white' marginLeft={1}>sohamwebsolution@gmail.com</Typography>
                                </a>
                                <Box margin={2}>|</Box>
                                <a className="text-decortion flex-center" href='https://api.whatsapp.com/send/?phone=917000335673&text&type=phone_number&app_absent=0' >
                                    <img src={Whatsapp} alt="" />
                                    <Typography className='fontSize14 color-white' marginLeft={1}>Whatsapp</Typography>
                                </a>
                            </Box>

                            <Box className="flex-between">
                                <Typography className='fontSize14 color-white' marginRight={1.5} >Hire us on work</Typography>
                                <Link to="https://calendly.com/sws-contact" className="text-decortion flex-center">
                                    <img  src={Month} alt="" />
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
