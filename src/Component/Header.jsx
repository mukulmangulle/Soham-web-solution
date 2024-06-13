import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Call from "../assets/call1.svg"
import Whatsapp from "../assets/whatsapp1.svg"
import Email from "../assets/email1.svg"
import Month from "../assets/Month1.svg"

const Header = () => {
    return (
        <Box sx={{ maxWidth: 1920, margin: 'auto'}} className='header'>
            <AppBar position="static">
                <Box className="flex-center">
                    <Box className="header-responsive" width={"85%"} >
                        <Box className="header flex-between">

                            <Box className="flex-center" >
                                <Box className="flex-center">
                                    <img src={Call} alt="" />
                                    <Typography className='fontSize14 color-white Typography1' marginLeft={1} >+91 9009758263</Typography>
                                </Box>
                                <Box margin={2}>|</Box>
                                <Box className="flex-center" >
                                    <img src={Email} alt="" />
                                    <Typography className='fontSize14 color-white'marginLeft={1}>sohamwebsolution@gmail.com</Typography>
                                </Box>
                                <Box margin={2}>|</Box>
                                <Box className="flex-center">
                                    <img src={Whatsapp} alt="" />
                                    <Typography className='fontSize14 color-white' marginLeft={1}>Whatsapp</Typography>
                                </Box>
                            </Box>

                            <Box className="flex-between">
                                <Typography className='fontSize14 color-white' marginRight={1.5} >Hire us on work</Typography>
                                <img src={Month} alt="" />
                                <Typography className='fontSize14 color-white' marginLeft={0.8} > Schedule Meeting</Typography>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </AppBar>
        </Box>
    );
}

export default Header;
