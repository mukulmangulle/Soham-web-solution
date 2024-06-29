

import { Box, FormControl, TextField, Typography, Grid, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Map from "../../assets/contactus soham web/map.svg"
import Input1 from '../../Child-Component/Input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../features/Form/FormSlice';
import Footer2 from '../../Component/Footer2';
import Facebook from "../../assets/footer/facebook.svg"
import Insta from "../../assets/footer/insta.svg"
import Twitter from "../../assets/footer/twitter.svg"
import Linkdin from "../../assets/footer/linkdin.svg"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import Close from "../../assets/contactus soham web/close.png"
import { FaClosedCaptioning } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";


const Contact = () => {
    const dispatch = useDispatch();
    const { formData, isLoading } = useSelector((state) => state.Form);

    const [localFormData, setLocalFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        dispatch(fetchFormData())
    }, [dispatch]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://crud-api-mlhz.onrender.com/api/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(localFormData)
            });
            if (!response.ok) {
                throw new Error("Failed to send message");
            }
            console.log("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message:", error.message);
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLocalFormData({ ...localFormData, [name]: value });
    };

    return (
        <>
            <Box width={"100%"} className="flex-center">
                <Box class="contact_form">
                    <Box className="shadow-section"  >
                        <Box className="GETINTOUCH" display={'flex'} justifyContent={"space-between"} flexWrap={'wrap'} >
                            <Box className="GETINTOUCH1"      >
                                <Typography className="about-soham">Get in Touch With Us</Typography>
                                <form onSubmit={handleSubmit}>
                                    <FormControl>
                                        <Grid container spacing={2} justifyContent="center">
                                            <Grid item xs={12} sm={6}>
                                                <Input1 name="name" label="Name" value={localFormData.name} onChange={handleInputChange} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Input1 name="email" label="Email" value={localFormData.email} onChange={handleInputChange} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Input1 name="subject" label="Subject" value={localFormData.subject} onChange={handleInputChange} />
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <Input1 name="phone" label="Phone Number" value={localFormData.phone} onChange={handleInputChange} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField required fullWidth multiline rows={4} label="Message" variant="filled" name="message" value={localFormData.message} onChange={handleInputChange} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button type="submit" variant="contained" color="primary" className="gradientbutton" sx={{ width: "100%", padding: "10px", fontSize: "18px", marginTop: "30PX" }}>Submit</Button>
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </form>
                            </Box>
                            <Box width={{ xl: "550px", xs: "100%", sm: "100%", md: "40%" }} className="GETINTOUCH2" >
                                <Typography variant='h4' className='get_in_touch_heading'  >Get in Touch</Typography>
                                <Box>
                                    <Box paddingY={0.5}>
                                        <Typography id="h4" className='email_phone_heading' >Phone</Typography>
                                    </Box>
                                    <Box className='get_in_touch'>
                                        <a target="_blank" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }} href="tel:+917879231700" margin={0.5}  >
                                            <IoCall color="white" fontSize={16} />

                                            <Typography paddingLeft={1}>+91 78792-31700</Typography>
                                        </a>

                                        <a target="_blank" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }} href="tel:+917000335673" margin={0.5}   >
                                            <IoCall color="white" fontSize={16} />
                                            <Typography paddingLeft={1}>+91 70003-35673</Typography>
                                        </a>

                                        <a target="_blank" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }} href="tel:+917984740805" margin={0.5} >
                                            <IoCall color="white" fontSize={16} />
                                            <Typography paddingLeft={1}>+91 79847-40805</Typography>
                                        </a>



                                    </Box>
                                </Box>
                                <Box>

                                    <Box paddingY={0.5}>
                                        <Typography className='email_phone_heading' >Email</Typography>
                                    </Box>
                                    <Box className='get_in_touch'>
                                        <a target="_blank" href="mailto:contact@sohamsolution.com" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }}  >
                                            <MdEmail id="maill" color="white" fontSize={16} />
                                            <Typography paddingLeft={1}>
                                                contact@sohamsolution.com
                                            </Typography>
                                        </a>


                                        <a target="_blank" href="mailto:hr@sohamsolution.com" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }}  >
                                            <MdEmail id="maill" color="white" fontSize={16} />
                                            <Typography paddingLeft={1}>
                                                hr@sohamsolution.com
                                            </Typography>
                                        </a>




                                    </Box>
                                </Box>
                                <Box paddingY={0.5}>
                                    <Box>

                                        <Typography className='email_phone_heading'>Address</Typography>
                                    </Box>
                                    <a target="_blank" href="https://www.google.com/maps/place/Soham+Web+Solution+-+Web+Development+Company/@22.9648902,76.0458359,17z/data=!4m14!1m7!3m6!1s0x3963177600d4efb5:0x33c81c908e54629c!2sSoham+Web+Solution+-+Web+Development+Company!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9!3m5!1s0x3963177600d4efb5:0x33c81c908e54629c!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9"
                                        className="text-decortion color-white" style={{ display: "flex", alignItems: "start" }} margin={0.5} >
                                        <FaLocationDot fontSize={16} color="white" />

                                        <Typography paddingLeft={1}>12 Civil Lines, Chamunda Complex, Dewas</Typography>
                                    </a>
                                </Box>

                                <Box paddingY={0.5}>
                                    <Box>

                                        <Typography className='email_phone_heading'>Business Hours</Typography>
                                    </Box>
                                    <Box className='get_in_touch display-flex-start '>
                                        <IoMdTime className='color-white ' fontSize={18} />
                                        <IoTimeSharp />

                                        <Typography className='color-white' marginLeft={1}>
                                            Monday - Saturday: 10:00 AM - 10:00 PM
                                        </Typography>
                                    </Box>
                                    <Box className='get_in_touch display-flex-start '>
                                    <FaClosedCaptioning className='color-white' marginLeft={1} />
                                        <Typography className='color-white' marginLeft={1}>
                                        Sunday: Closed
                                        </Typography>
                                    </Box>
                                  
                                </Box>



                                <Box paddingY={0.5}>
                                    <Box>
                                        <Typography className='email_phone_heading'>
                                            Follow Us on Social Media
                                        </Typography>
                                    </Box>
                                    <Box >
                                        <Box className="flex-between footer-sec-icon" width={150} >
                                            <a href="https://www.facebook.com/sohamsolution/"><img src={Facebook} alt="" /></a>
                                            <a href="https://www.instagram.com/sohamwebsolution/"><img src={Insta} alt="" /></a>
                                            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsoham_web"><img src={Twitter} alt="" /></a>

                                            <a href="https://profiles.wordpress.org/sohamwebsolution/"><img src={Linkdin} alt="" /></a>



                                        </Box>
                                    </Box>
                                </Box>


                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box maxWidth={"1920px"} margin={"auto"}>
                <img className='map-img' src={Map} alt="" />
            </Box>
            <Footer2 />
        </>
    )
}

export default Contact;
