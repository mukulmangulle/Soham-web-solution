import React, { useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import Homeimg from "../assets/home.svg"
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


const Home = () => {

    const dispatch = useDispatch()
    const { contents, isLoading, isError } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);



    return (
        <Box  className="home flex-center" flexDirection={'column'}>
            <Box  className="home-continer flex-between"    
                >
                <Box  marginY={1} width={590} >
                    <Typography id="home-h1" variant='h1'>
                        {contents.homeData.heading}
                    </Typography>

                    <Typography id='home-p1' variant='h6' >
                        {contents.homeData.subheading}
                    </Typography>

                    <Box id="schadule-meeting" paddingTop={2} display={"flex"} 
                    paddingBottom={4} >
                        <Link to="https://calendly.com/sws-contact" style={{  textDecoration: "none",  display:"flex"  }}>
                        <Typography  id='home-p2 ' marginRight={2}  color="#FFFFFF" variant='h6' fontWeight={500}>Schadule Meeting </Typography>
                        <img src={Arrow} width={25} alt="" />
                       </Link>
                    </Box>
                </Box>

                <Box marginY={2}>
                    <img className='home-img' src={Homeimg} alt="" />
                </Box>
            </Box>


            <Box className="home-lastSection flex-between" width={'84.5%'} paddingY={3} flexWrap={"wrap"}  >
                <Box display={'flex'} alignItems={"center"} >
                <a style={{  textDecoration: "none" , display:"flex" }} href="tel:%20+91%207879231700" display={'flex'} margin={0.5}  >
                                <img src={Call} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text1}</Typography>
                            </a>
                </Box>

                <a href="mailto:contact@sohamsolution.com"  alignItems={"center"} style={{  textDecoration: "none" ,display:"flex" }} >

                    <img src={Email} alt="" />
                    <Typography   id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text4}</Typography>
                </a>


                <Box display={'flex'} alignItems={"center"}    >
                    <img src={Whatsapp} alt="" />
                    <Typography className='fontSize14 color-white' marginLeft={1}>
                        {contents.homeData.contactInfo.link}
                    </Typography>
                    
                </Box>

                <Box width={140} className="flex-between" >
                    <img src={Facebook} alt="" />
                    <img src={X} alt="" />
                    <img src={Linkdin} alt="" />
                    <img src={Insta} alt="" />
                </Box>
            </Box>

    </Box>
    )
}

export default Home;
