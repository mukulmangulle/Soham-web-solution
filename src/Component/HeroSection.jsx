import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import Latest from "../assets/homepage.webp"
import Whatsapp from "../assets/whatsapp1.svg"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
    const dispatch = useDispatch()
    const { contents, isLoading, isError } = useSelector((state) => state.content);

    return (
        <Box className="home flex-center " flexDirection={'column'}>
            <Box className="home-continer container flex-between">
                <Box className="home-content "   >
                    <Typography className="home-h1  text_color_blue" variant='h1'  >
                        We Trust In <br></br>
                        <Box className="text-box" >
                            <Box > Creativity</Box>
                            <Box>Enthusiasm</Box>
                            <Box >Commitment</Box>
                        </Box>
                    </Typography>

                    <Typography className='home-p1 text_color_blue' variant='h6' >
                        {contents.homeData.subheading}
                    </Typography>

                    <Box className="schadule-meeting" >
                        <Link target='_blank' className='text-decortion flex-center' to="https://calendly.com/sws-contact" >
                            <Typography className='home-p2 text_color_blue text-shadow' variant='h6' >Schedule Meeting </Typography>
                            <FaLongArrowAltRight className='text_color_blue Aroow_right' />
                        </Link>
                    </Box>
                </Box>

                <Box className='flex-center home_content_img_section'  >
                    <img className='home-img' src={Latest} alt="" />
                </Box>
            </Box>

            <Box className="home-lastSection flex-between container"   >
                <Box display={'flex'} alignItems={"center"} >
                    <a className='text-decortion flex-center text_color_blue' target="_blank" href="tel:%20+91%207879231700" margin={0.5}  >
                        <IoCall fontSize={20} className='text_color_blue' />
                        <Typography paddingLeft={1}>{contents.homeData.contactInfo.number}</Typography>
                    </a>
                </Box>

                <a href="mailto:contact@sohamsolution.com" target="_blank" className='text-decortion flex-center text_color_blue'  >
                    < MdEmail fontSize={20} />
                    <Typography paddingLeft={1}>{contents.homeData.contactInfo.email}</Typography>
                </a>

                <a href='https://api.whatsapp.com/send/?phone=917000335673&text&type=phone_number&app_absent=0' target="_blank" className='text-decortion flex-center text_color_blue'   >
                    <img src={Whatsapp} alt="" />
                    <Typography paddingLeft={1}>
                        {contents.homeData.contactInfo.link}
                    </Typography>
                </a>

                <Box width={140} className="flex-between"  >
                    <a target="_blank" href="https://www.facebook.com/sohamsolution/">
                        <FaFacebookF className='text_color_blue' fontSize={16} />
                    </a>

                    <a target="_blank" href='https://in.linkedin.com/company/soham-web-solution'>
                        <FaLinkedinIn className='text_color_blue' fontSize={16} />                    </a>

                    <a target="_blank" href="https://www.instagram.com/sohamwebsolution/">
                        <AiFillInstagram className='text_color_blue' fontSize={16} />
                    </a>

                </Box>
            </Box>
        </Box>
    )
}

export default HeroSection;
