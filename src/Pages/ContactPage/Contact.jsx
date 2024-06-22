

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
                            <Typography className="about-soham">Send Us a Message</Typography>
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
                                            <Button type="submit" variant="contained" color="primary" className="gradientbutton" sx={{ width: "100%", padding: "10px", fontSize: "18px", marginTop: "30PX" }}>Send Message</Button>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </form>
                        </Box>
                        <Box width={{ xl: "550px", xs: "100%", sm: "100%", md: "40%" }} className="GETINTOUCH2" >
                            <Typography variant='h4' id="h4" color={"white"} >Get in Touch</Typography>
                            <Box>
                                <Box paddingY={0.5}>
                                    <Typography id="h4" color={"white"} >Phone</Typography>
                                </Box>
                                <Box className='get_in_touch'>
                                    <Typography color={"white"} >+91 78792-31700
                                    </Typography>
                                    <Typography color={"white"} >+91 70003-35673
                                    </Typography>
                                    <Typography color={"white"} >+91 7984740805
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box paddingY={0.5}>
                                    <Typography color={"white"} id="h4" >Email</Typography>
                                </Box>
                                <Box className='get_in_touch'>
                                    <Typography color={"white"} > contact@sohamsolution.com</Typography>
                                    <Typography color={"white"} >hr@sohamsolution.com
                                    </Typography>
                                    <Typography color={"white"} >soham.solution@yahoo.com</Typography>
                                </Box>
                            </Box>
                            <Box paddingY={0.5}>
                                <Box>
                                    <Typography color={"white"} id="h4">Address</Typography>
                                </Box>
                                <Box className='get_in_touch'>
                                    <Typography color={"white"} >
                                        12 Civil Lines, Chamunda Complex, Dewas
                                    </Typography>
                                </Box>
                            </Box>

                            <Box paddingY={0.5}>
                                <Box>
                                    <Typography color={"white"} id="h4">Business Hours
                                    </Typography>
                                </Box>
                                <Box className='get_in_touch'>
                                    <Typography color={"white"} >
                                        Monday - Saturday: 10:00 AM - 10:00 PM
                                    </Typography>
                                    <Typography color={"white"} >
                                        Sunday: Closed
                                    </Typography>
                                </Box>
                            </Box>

                            <Box paddingY={0.5}>
                                <Box>
                                    <Typography color={"white"} id="h4">
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
