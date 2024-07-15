import React, { useEffect } from 'react';
import { Box, Button, Typography } from "@mui/material";
import Parent1 from "../assets/parent/Parent1.svg";
import Parent2 from "../assets/parent/Parent2.svg";
import Parent3 from "../assets/parent/parent3.svg";
import Parent4 from "../assets/parent/Parent4.svg";
import Parent5 from "../assets/parent/parent5.svg";
import Parent6 from "../assets/parent/parent6.svg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../features/content/contentSlice';
import { Link } from 'react-router-dom';

function OurPartner() {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <>
            <Box className="flex-center  partner  "   >
               <Box className=" container">
               <Box className="flex-center-coulmn"  >
                    <Typography className='secondary_heading' variant='h2' >
                        {contents.ourPartner.heading}
                    </Typography>
                    <Typography textAlign={"center"} className='primary_subheading partner-content our-utality-p'> {contents.ourPartner.childBox.content}</Typography>

                </Box>
                <Box className="flex-center partner-centert "   >
                    <Box >
                        <img className='size-img' src={Parent1} alt="" />

                        <img className='size-img' src={Parent2} alt="" />

                        <img className='size-img' src={Parent3} alt="" />

                        <img className='size-img' src={Parent4} alt="" />

                        <img className='size-img' src={Parent5} alt="" />

                        <img className='size-img' src={Parent6} alt="" />
                    </Box>
                </Box>

               </Box>
            
            </Box>

        </>
    ); F
}

export default OurPartner;




