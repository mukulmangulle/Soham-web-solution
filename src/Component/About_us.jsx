import React, { useEffect } from 'react';
// import Ab0 from "../assets/About/ab0.svg"
import Ab1 from "../assets/About/ab1.svg"
import Ab2 from "../assets/About/ab2.svg"
import Ab3 from "../assets/About/ab3.svg"
import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchcontents } from '../features/content/contentSlice'

const About_us = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);
    return (
        < >
            <Box bgcolor={"gray"} className="flex-center-column" width={"100%"}>
                <Box  >
                    <Typography className='secondary_heading' variant='h2'  >
                        {contents.aboutus.heading}
                    </Typography>
                    <Typography margin={"auto"} className='primary_subheading our-utality-p' >
                        {contents.aboutus.contant}
                    </Typography>
                </Box>

                <Box className="flex-center">
                    <Box className="flex-between padding-top-bottom"  width={"100%"} flexWrap={"wrap"}>
                        {/* 1 */}
                        <Box className=" blank_man inner flex-center-column">
                            <Box className="child_blank light_holder">
                                <Typography class="lamp" ></Typography>


                                <Box class="light" >
                                    <img src={Ab1} alt="" />
                                    <Typography fontSize={14} fontWeight={700} color={'white'}>{contents.aboutus.childContainer1.name}</Typography>
                                    <Typography fontSize={13} color={'white'}>
                                        {contents.aboutus.childContainer1.designation}</Typography>

                                    <Typography fontSize={12} width={220}>
                                        {contents.aboutus.childContainer1.testimonial}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* 2 */}
                        <Box className=" blank_man inner">
                            <Box className="child_blank light_holder">
                                <Typography class="lamp" ></Typography>


                                <Box class="light" >
                                    <img src={Ab1} alt="" />
                                    <Typography fontSize={14} fontWeight={700} color={'white'}>{contents.aboutus.childContainer1.name}</Typography>
                                    <Typography fontSize={13} color={'white'}>
                                        {contents.aboutus.childContainer1.designation}</Typography>

                                    <Typography fontSize={12} width={220}>
                                        {contents.aboutus.childContainer1.testimonial}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>


                        {/* 3*/}
                        <Box className=" blank_man inner">
                            <Box className="child_blank light_holder">
                                <Typography class="lamp" ></Typography>


                                <Box class="light" >
                                    <img src={Ab1} alt="" />
                                    <Typography fontSize={14} fontWeight={700} color={'white'}>{contents.aboutus.childContainer1.name}</Typography>
                                    <Typography fontSize={13} color={'white'}>
                                        {contents.aboutus.childContainer1.designation}</Typography>

                                    <Typography fontSize={12} width={220}>
                                        {contents.aboutus.childContainer1.testimonial}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* 4 */}
                        <Box className=" blank_man inner">
                            <Box className="child_blank light_holder">
                                <Typography class="lamp" ></Typography>


                                <Box class="light" >
                                    <img src={Ab1} alt="" />
                                    <Typography fontSize={14} fontWeight={700} color={'white'}>{contents.aboutus.childContainer1.name}</Typography>
                                    <Typography fontSize={13} color={'white'}>
                                        {contents.aboutus.childContainer1.designation}</Typography>

                                    <Typography fontSize={12} width={220}>
                                        {contents.aboutus.childContainer1.testimonial}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default About_us
