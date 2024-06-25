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
    <Box className=" flex-center max-width1920" bgcolor={"black"} flexDirection={'column'} textAlign={"center"} >
        <Typography className='secondary_heading' variant='h2'  >
            {contents.aboutus.heading}
        </Typography>
        <Typography className='primary_subheading our-utality-p' >
            {contents.aboutus.contant}
        </Typography>
    </Box>

    <Box height={'450px'}  display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}bgcolor={"black"} >
        <Box id="dev" borderRadius={50} width={350} height={350} bgcolor={"#053480"} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} >

        </Box>

        <Box id="dev" display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'90%'}  >

            {/* 1 */}
           <Box class="inner blank1">
           <Box className="" class="light_holder">
                {/* <img src={Ab0} alt="" /> */}
                <img src={Ab1} alt=""class="lamp" />

                <Box class="light">
                    <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer1.name}</Typography>
                    <Typography color={'white'}>
                        {contents.aboutus.childContainer1.designation}</Typography>
                </Box>
                <Box margin={1} fontSize={12} width={200} >
                    {contents.aboutus.childContainer1.testimonial}
                </Box>
            </Box>
           </Box>

            {/* 2 */}
           <Box>
           <Box className="blank">
                <Box>
                    <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer2.name}
                    </Typography>
                    <Typography color={'white'}>
                        {contents.aboutus.childContainer2.designation}
                    </Typography>
                </Box>
                <Box margin={1} fontSize={12} width={200}>
                    {contents.aboutus.childContainer2.testimonial}
                </Box>
                <img src={Ab1} alt="" />
            </Box>
           </Box>

            {/* 3*/}
            <Box textAlign={"center"} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                <img src={Ab3} alt="" />
                <Box>
                    <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer3.name}</Typography>
                    <Typography color={'white'}>
                        {contents.aboutus.childContainer3.designation}
                    </Typography>
                </Box>
                <Box fontSize={12} margin={1} width={200}>
                    {contents.aboutus.childContainer3.testimonial}
                </Box>
            </Box>

            {/* 4 */}
            <Box className="blank" >
                <Box>
                    <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer4.name}</Typography>
                    <Typography color={'white'}>
                        {contents.aboutus.childContainer4.designation}
                    </Typography>
                </Box>
                <Box fontSize={12} margin={1} width={200}>
                    {contents.aboutus.childContainer4.testimonial}
                </Box>
                <img src={Ab3} alt="" />
            </Box>

            {/* 5 */}
            <Box className="blank1">
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

</>
  )
}

export default About_us
