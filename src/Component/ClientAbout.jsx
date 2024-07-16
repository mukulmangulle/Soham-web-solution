import React, { useEffect } from 'react';
import Ab1 from "../assets/About/ab1.svg"
import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchcontents } from '../features/content/contentSlice'
import Pendant from "../assets/pendant_lamp.svg"

const ClientAbout = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);

    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);
    return (
        < >
            <Box className="flex-center ">
                <Box className="  about  container" >
                    <Box  >
                        <Typography className='secondary_heading' variant='h2'  >
                            {contents.aboutus.heading}
                        </Typography>
                        <Typography margin={"auto"} className='primary_subheading our-utality-p' >
                            {contents.aboutus.contant}
                        </Typography>
                    </Box>

                    <Box className="flex-center">
                        <Box className="flex-between  client-section-child"  >

                            {/* 1 */}
                            <Box className=" inner">
                                <Box className=" light_holder">
                                    <img class="lamp " src={Pendant} alt="" />
                                    <Box class="light" >
                                        <img src={Ab1} alt="" />
                                        <Typography variant='h5'>{contents.aboutus.childContainer1.name}</Typography>
                                        <Typography className='designtion' >
                                            {contents.aboutus.childContainer1.designation}</Typography>
                                        <Typography className='client_content'>
                                            {contents.aboutus.childContainer1.testimonial}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* 2 */}
                            <Box className=" inner">
                                <Box className=" light_holder">
                                    <img class="lamp " src={Pendant} alt="" />
                                    <Box class="light" >
                                        <img src={Ab1} alt="" />
                                        <Typography variant='h5'>{contents.aboutus.childContainer1.name}</Typography>
                                        <Typography className='designtion' >
                                            {contents.aboutus.childContainer1.designation}</Typography>
                                        <Typography className='client_content'>
                                            {contents.aboutus.childContainer1.testimonial}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* 3*/}
                            <Box className=" inner">
                                <Box className=" light_holder">
                                    <img class="lamp " src={Pendant} alt="" />
                                    <Box class="light" >
                                        <img src={Ab1} alt="" />
                                        <Typography variant='h5'>{contents.aboutus.childContainer1.name}</Typography>
                                        <Typography className='designtion' >
                                            {contents.aboutus.childContainer1.designation}</Typography>
                                        <Typography className='client_content'>
                                            {contents.aboutus.childContainer1.testimonial}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ClientAbout;
