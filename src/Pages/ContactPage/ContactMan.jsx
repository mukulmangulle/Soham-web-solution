import React from 'react'
import Lets_Build from './Lets_Build'
import Footer2 from '../../Component/Footer2'
import Map from "../../assets/contactus soham web/map.svg";
import ContactForm from './ContactForm';
import { Box } from '@mui/material';

const ContactMan = () => {
    return (
        <>
            <Lets_Build />
            <Box>
                <img className='map-img' src={Map} alt="" />
            </Box>
            <Footer2 />
        </>
    )
}

export default ContactMan
