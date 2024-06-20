

import { Box, FormControl, TextField, Typography, Grid, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Map from "../../assets/contactus soham web/map.svg"
import Input1 from '../../Child-Component/Input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../features/Form/FormSlice';
import Footer2 from '../../Component/Footer2';

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
            <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} marginBottom={5} >
                <Box id="boxShadow" borderRadius={4} margin={5} sx={{ boxShadow: "0px 0px 20px 1px gray" }}>
                    <Box className="GETINTOUCH" display={'flex'} justifyContent={"space-between"} width={'100%'} flexWrap={'wrap'} >
                        <Box className="GETINTOUCH1" padding={7} width={{ xl: "900px", xs: "100%", sm: "100%", md: "60%" }}  >
                            <Typography className="send-us-message"   textAlign={"center"} fontWeight={600} color={"#053480"} margin={2} >Send Us a Message</Typography>
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
                        <Box width={{ xl: "550px", xs: "100%", sm: "100%", md: "40%" }} className="GETINTOUCH2" paddingY={5} paddingX={13} >
                            <Typography variant='h4' id="h4" color={"white"} >Get in Touch</Typography>
                            <Box>
                                <Box paddingY={1.5}>
                                    <Typography id="h4" color={"white"} >Phone</Typography>
                                </Box>
                                <Box >
                                    <Typography id="typography" color={"white"} >+9009 140 325</Typography>
                                    <Typography id="typography" color={"white"} >+91 787 923 1700</Typography>
                                    <Typography id="typography" color={"white"} >+91 774 801 8188</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box paddingY={1.5}>
                                    <Typography color={"white"} id="h4" >Email</Typography>
                                </Box>
                                <Box>
                                    <Typography id="typography" color={"white"} >contact@sohamsolution.com</Typography>
                                    <Typography id="typography" color={"white"} >hr@sohamsolution.com</Typography>
                                    <Typography id="typography" color={"white"} >soham.solution@yahoo.com</Typography>
                                </Box>
                            </Box>
                            <Box paddingY={1.5}>
                                <Box>
                                    <Typography color={"white"} id="h4">Address</Typography>
                                </Box>
                                <Box>
                                    <Typography id="typography" color={"white"} >
                                        12 Civil Line Chamunda Complex,
                                        Dewas, Madhya Pradesh, PIN:
                                        455001
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box maxWidth={"1920px"} margin={"auto"}>
                <img className='map-img' src={Map} alt="" />
            </Box>
            <Footer2/>
        </>
    )
}

export default Contact;
