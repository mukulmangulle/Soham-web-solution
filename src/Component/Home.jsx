import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import Homeimg from "../assets/home.svg"
import Latest from "../assets/homepage.webp"
import Arrow from "../assets/arrow.svg"
import Call from "../assets/call1.svg"
import Whatsapp from "../assets/whatsapp1.svg"
import Email from "../assets/email1.svg"
import Facebook from "../assets/media/facebook.svg"
import X from "../assets/media/x.svg"
import Linkdin from "../assets/media/linkdin.svg"
import Insta from "../assets/media/insta.svg"
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../features/content/contentSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";




const Home = () => {
    const dispatch = useDispatch()
    const { contents, isLoading, isError } = useSelector((state) => state.content);

    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);



    return (
        <Box className="home flex-center" flexDirection={'column'}>
            <Box className="home-continer flex-between"
            >
                <Box className="home-content"  >
                    <Typography className="home-h1" variant='h1'>
                        {contents.homeData.heading}
                    </Typography>

                    <Typography className='home-p1' variant='h6' >
                        {contents.homeData.subheading}
                    </Typography>

                    <Box className="schadule-meeting" >
                        <Link className='text-decortion flex-center' to="https://calendly.com/sws-contact" >
                            <Typography className='home-p2 ' marginRight={2} color="#FFFFFF" variant='h6' fontWeight={500}>Schadule Meeting </Typography>
                            <img src={Arrow} width={25} alt="" />
                        </Link>
                    </Box>
                </Box>

                <Box marginY={2} display={"flex"} alignItems={"center"}>
                    {/* <img className='home-img' src={Homeimg} alt="" /> */}
                    <img className='home-img' src={Latest} alt="" height={550}  />

                </Box>
            </Box>


            <Box className="home-lastSection flex-between" width={'85.5%'} paddingY={3} flexWrap={"wrap"}  >
                <Box display={'flex'} alignItems={"center"} >
                    <a className='text-decortion flex-center' href="tel:%20+91%207879231700" margin={0.5}  >
                        <IoCall fontSize={20} color='white' />

                        <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text1}</Typography>
                    </a>
                </Box>

                <a href="mailto:contact@sohamsolution.com" className='text-decortion flex-center'  >

                    < MdEmail fontSize={20} color='white' />
                    <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text4}</Typography>
                </a>

                <a href='https://api.whatsapp.com/send/?phone=917000335673&text&type=phone_number&app_absent=0' className='text-decortion flex-center'   >

                    <img src={Whatsapp} alt="" />
                    <Typography id="typography" paddingLeft={1}>
                        {contents.homeData.contactInfo.link}
                    </Typography>
                </a>




                <Box width={140} className="flex-between"  >
                    <a href="https://www.facebook.com/sohamsolution/">
                        <FaFacebookF color='white' fontSize={16} />
                    </a>

                    <a href='https://x.com/i/flow/login?redirect_after_login=%2Fsoham_web'>
                        <BsTwitterX color='white' fontSize={16} />
                    </a>

                    <a href='https://in.linkedin.com/company/soham-web-solution'>
                        <FaLinkedinIn color='white' fontSize={16} />                    </a>

                    <a href="https://www.instagram.com/sohamwebsolution/">
                        <AiFillInstagram color='white' fontSize={16} />
                    </a>



                </Box>
            </Box>

        </Box>
    )
}

export default Home;
