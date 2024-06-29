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
                    <Box className="flex-between padding-top-bottom" width={"90%"}>
                        {/* 1 */}
                        <Box className=" blank_man inner">
                            <Box className="child_blank" class="light_holder">
                              
                                <img src={Ab1} alt="" class="lamp" />

                                <Box class="light" >
                                <Box >
                                    <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer1.name}</Typography>
                                    <Typography color={'white'}>
                                        {contents.aboutus.childContainer1.designation}</Typography>
                                </Box>
                                <Box margin={1} fontSize={12} width={200} >
                                    {contents.aboutus.childContainer1.testimonial}
                                </Box>
                                </Box>
                            </Box>
                        </Box>

                        {/* 2 */}
                        <Box className="blank_man">
                            <img src={Ab2} alt="" />
                            <Box>
                                <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer5.name}</Typography>
                                <Typography color={'white'}>
                                    {contents.aboutus.childContainer5.designation}
                                </Typography>
                            </Box>
                            <Box fontSize={12} margin={1} width={200}>
                                {contents.aboutus.childContainer5.testimonial}
                            </Box>

                        </Box>

                        {/* 3*/}
                        <Box className="blank_man">
                            <img src={Ab2} alt="" />
                            <Box>
                                <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer5.name}</Typography>
                                <Typography color={'white'}>
                                    {contents.aboutus.childContainer5.designation}
                                </Typography>
                            </Box>
                            <Box fontSize={12} margin={1} width={200}>
                                {contents.aboutus.childContainer5.testimonial}
                            </Box>

                        </Box>

                        {/* 4 */}
                        <Box className="blank_man">
                            <img src={Ab2} alt="" />
                            <Box>
                                <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer5.name}</Typography>
                                <Typography color={'white'}>
                                    {contents.aboutus.childContainer5.designation}
                                </Typography>
                            </Box>
                            <Box fontSize={12} margin={1} width={200}>
                                {contents.aboutus.childContainer5.testimonial}
                            </Box>

                        </Box>

                        {/* 5 */}
                        <Box className="blank_man">
                            <img src={Ab2} alt="" />
                            <Box>
                                <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer5.name}</Typography>
                                <Typography color={'white'}>
                                    {contents.aboutus.childContainer5.designation}
                                </Typography>
                            </Box>
                            <Box fontSize={12} margin={1} width={200}>
                                {contents.aboutus.childContainer5.testimonial}
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default About_us
