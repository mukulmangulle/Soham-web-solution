


// import { Box, FormControl, TextField, Typography, Grid, Button } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import Map from "../../assets/contactus soham web/map.svg"
// import Input1 from '../../Child-Component/Input';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchFormData } from '../../features/Form/FormSlice';
// import Footer2 from '../../Component/Footer2';
// import Facebook from "../../assets/footer/facebook.svg"
// import Insta from "../../assets/footer/insta.svg"
// import Twitter from "../../assets/footer/twitter.svg"
// import Linkdin from "../../assets/footer/linkdin.svg"
// import { IoCall } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMdTime } from "react-icons/io";
// import Close from "../../assets/contactus soham web/close.png"
// import { FaClosedCaptioning } from "react-icons/fa6";
// import { IoTimeSharp } from "react-icons/io5";
// import { toast } from 'react-toastify';


// const Contact = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         number: '',
//         subject: '',
//         message: ''
//     });
//     const [errors, setErrors] = useState({});

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const validationErrors = {};
//         if (!formData.username.trim()) {
//             validationErrors.username = 'Username is required';
//         } else if (formData.username.length < 2) {
//             validationErrors.username = 'Username must be at least 2 characters';
//         }

//         if (!formData.email.trim()) {
//             validationErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             validationErrors.email = 'Invalid email format';
//         }

//         if (!formData.number.trim()) {
//             validationErrors.number = 'Phone number is required';
//         } else if (formData.number.length < 10) {
//             validationErrors.number = 'Phone number must be at least 10 characters';
//         }

//         if (!formData.subject.trim()) {
//             validationErrors.subject = 'Subject is required';
//         }

//         if (!formData.message.trim()) {
//             validationErrors.message = 'Message is required';
//         }

//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//         } else {
//             console.log('Form submitted:', formData);
//             setFormData({
//                 username: '',
//                 email: '',
//                 number: '',
//                 subject: '',
//                 message: ''
//             });
//             setErrors({});
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormData({
//             ...formData,
//             [name]: value
//         });

//         // Clear the specific error when user starts typing again
//         setErrors({
//             ...errors,
//             [name]: ''
//         });
//     };


//     return (
//         <>
//             <Box width={"100%"} className="flex-center">
//                 <Box class="contact_form ">
//                     <Box className="shadow-section"  >
//                         <Box className="GETINTOUCH" display={'flex'} justifyContent={"space-between"} flexWrap={'wrap'} >
//                             <Box className="GETINTOUCH1"      >
//                                 <Typography className="about-soham">Get in Touch With Us</Typography>
//                                 <form onSubmit={handleSubmit}>
//                                     <FormControl>
//                                         <Grid container spacing={2} justifyContent="center">
//                                             <Grid item xs={12} sm={6}>
//                                                 <TextField
//                                                     id="name"
//                                                     name="username"
//                                                     label="Name"
//                                                     value={formData.username}
//                                                     onChange={handleChange}
//                                                     error={!!errors.username}
//                                                     helperText={errors.username}
//                                                     fullWidth
//                                                     required
//                                                 />
                                               

//                                             </Grid>
//                                             <Grid item xs={12} sm={6}>
//                                                 <TextField
//                                                     name="email"
//                                                     label="Email"
//                                                     value={formData.email}
//                                                     onChange={handleChange}
//                                                     error={!!errors.email}
//                                                     helperText={errors.email}
//                                                     fullWidth
//                                                     required
//                                                 />

//                                             </Grid>

//                                             <Grid item xs={12} sm={6}>
//                                                 <TextField
//                                                     name="number"
//                                                     label="Phone Number"
//                                                     value={formData.number}
//                                                     onChange={handleChange}
//                                                     error={!!errors.number}
//                                                     helperText={errors.number}
//                                                     fullWidth
//                                                     required
//                                                 />

//                                             </Grid>
//                                             <Grid item xs={12} sm={6}>
//                                                 <TextField
//                                                     name="subject"
//                                                     label="Subject"
//                                                     value={formData.subject}
//                                                     onChange={handleChange}
//                                                     error={!!errors.subject}
//                                                     helperText={errors.subject}
//                                                     fullWidth
//                                                     required
//                                                 />
                                                
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <TextField
//                                                     name="message"
//                                                     label="Message"
//                                                     value={formData.message}
//                                                     onChange={handleChange}
//                                                     error={!!errors.message}
//                                                     helperText={errors.message}
//                                                     fullWidth
//                                                     multiline
//                                                     rows={4}
//                                                     required
//                                                 />
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <Button
//                                                     onClick={handleSubmit}
//                                                     type="submit"
//                                                     variant="contained"
//                                                     color="primary"
//                                                     className="gradientbutton"
//                                                     sx={{ width: '100%', padding: '10px', fontSize: '18px', marginTop: '30px' }}
//                                                 >
//                                                     Submit
//                                                 </Button>
//                                             </Grid>
//                                         </Grid>
//                                     </FormControl>
//                                 </form>
//                             </Box>
//                             <Box width={{ xl: "550px", xs: "100%", sm: "100%", md: "40%" }} className="GETINTOUCH2" >
//                                 <Typography variant='h4' className='get_in_touch_heading'  >To Know More </Typography>
//                                 <Box>
//                                     <Box paddingY={0.5}>
//                                         <Typography id="h4" className='email_phone_heading' >Phone</Typography>
//                                     </Box>
//                                     <Box className='get_in_touch'>
//                                         <a target="_blank" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }} href="tel:+917879231700" margin={0.5}  >
//                                             <IoCall color="white" fontSize={16} />

//                                             <Typography paddingLeft={1}>+91 78792-31700</Typography>
//                                         </a>

//                                         <a target="_blank" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }} href="tel:+917000335673" margin={0.5}   >
//                                             <IoCall color="white" fontSize={16} />
//                                             <Typography paddingLeft={1}>+91 70003-35673</Typography>
//                                         </a>

//                                         <a target="_blank" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }} href="tel:+917984740805" margin={0.5} >
//                                             <IoCall color="white" fontSize={16} />
//                                             <Typography paddingLeft={1}>+91 79847-40805</Typography>
//                                         </a>



//                                     </Box>
//                                 </Box>
//                                 <Box>

//                                     <Box paddingY={0.5}>
//                                         <Typography className='email_phone_heading' >Email</Typography>
//                                     </Box>
//                                     <Box className='get_in_touch'>
//                                         <a target="_blank" href="mailto:contact@sohamsolution.com" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }}  >
//                                             <MdEmail id="maill" color="white" fontSize={16} />
//                                             <Typography paddingLeft={1}>
//                                                 contact@sohamsolution.com
//                                             </Typography>
//                                         </a>


//                                         <a target="_blank" href="mailto:hr@sohamsolution.com" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }}  >
//                                             <MdEmail id="maill" color="white" fontSize={16} />
//                                             <Typography paddingLeft={1}>
//                                                 hr@sohamsolution.com
//                                             </Typography>
//                                         </a>




//                                     </Box>
//                                 </Box>
//                                 <Box paddingY={0.5}>
//                                     <Box>

//                                         <Typography className='email_phone_heading'>Address</Typography>
//                                     </Box>
//                                     <a target="_blank" href="https://www.google.com/maps/place/Soham+Web+Solution+-+Web+Development+Company/@22.9648902,76.0458359,17z/data=!4m14!1m7!3m6!1s0x3963177600d4efb5:0x33c81c908e54629c!2sSoham+Web+Solution+-+Web+Development+Company!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9!3m5!1s0x3963177600d4efb5:0x33c81c908e54629c!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9"
//                                         className="text-decortion color-white" style={{ display: "flex", alignItems: "start" }} margin={0.5} >
//                                         <FaLocationDot fontSize={16} color="white" />

//                                         <Typography paddingLeft={1}>12 Civil Lines, Chamunda Complex, Dewas</Typography>
//                                     </a>
//                                 </Box>

//                                 <Box paddingY={0.5}>
//                                     <Box>

//                                         <Typography className='email_phone_heading'>Business Hours</Typography>
//                                     </Box>
//                                     <Box className='get_in_touch display-flex-start '>
//                                         <IoTimeSharp className='color-white ' fontSize={18} />

//                                         <Typography className='color-white' marginLeft={1}>
//                                             Monday - Saturday: 10:00 AM - 10:00 PM
//                                         </Typography>
//                                     </Box>
//                                     <Box className='get_in_touch display-flex-start '>
//                                         <FaClosedCaptioning className='color-white' marginLeft={1} />
//                                         <Typography className='color-white' marginLeft={1}>
//                                             Sunday: Closed
//                                         </Typography>
//                                     </Box>
//                                 </Box>

//                                 <Box paddingY={0.5}>
//                                     <Box>
//                                         <Typography className='email_phone_heading'>
//                                             Follow Us on
//                                         </Typography>
//                                     </Box>
//                                     <Box >
//                                         <Box className="flex-between footer-sec-icon" width={150} >
//                                             <a target='_blank' href="https://www.facebook.com/sohamsolution/"><img src={Facebook} alt="" /></a>
//                                             <a target='_blank' href="https://www.instagram.com/sohamwebsolution/"><img src={Insta} alt="" /></a>
//                                             <a target='_blank' href="https://x.com/i/flow/login?redirect_after_login=%2Fsoham_web"><img src={Twitter} alt="" /></a>
//                                             <a target='_blank' href="https://profiles.wordpress.org/sohamwebsolution/"><img src={Linkdin} alt="" /></a>
//                                         </Box>
//                                     </Box>
//                                 </Box>


//                             </Box>
//                         </Box>
//                     </Box>
//                 </Box>

//             </Box>
//             <Box >
//                 <img className='map-img' src={Map} alt="" />
//             </Box>
//             <Footer2 />
//         </>
//     )
// }

// export default Contact;



import React, { useState } from 'react';
import { Box, FormControl, TextField, Typography, Grid, Button } from '@mui/material';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaClosedCaptioning } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import Footer2 from '../../Component/Footer2';
import Facebook from "../../assets/footer/facebook.svg";
import Insta from "../../assets/footer/insta.svg";
import Twitter from "../../assets/footer/twitter.svg";
import Linkdin from "../../assets/footer/linkdin.svg";

const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = {};

        // Username validation
        if (!formData.username.trim()) {
            validationErrors.username = 'Username is required';
        } else if (!/^[a-zA-Z]+$/.test(formData.username)) {
            validationErrors.username = 'Username must only contain letters';
        } else if (formData.username.length < 2) {
            validationErrors.username = 'Username must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Invalid email format';
        }

        // Number validation
        if (!formData.number.trim()) {
            validationErrors.number = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.number)) {
            validationErrors.number = 'Phone number must be exactly 10 digits';
        }

        // Subject validation
        if (!formData.subject.trim()) {
            validationErrors.subject = 'Subject is required';
        }

        // Message validation
        if (!formData.message.trim()) {
            validationErrors.message = 'Message is required';
        }

        // Set errors if any validation fails
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Form submission logic (in your case, just logging formData)
            console.log('Form submitted:', formData);

            // Reset form data and errors after successful submission
            setFormData({
                username: '',
                email: '',
                number: '',
                subject: '',
                message: ''
            });
            setErrors({});
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        // Update form data with user input
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear specific error when user starts typing again
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    return (
        <>
        {/* className='contact_form_contorl' */}
            <Box width={"100%"} className="flex-center">
                <Box className="contact_form">
                    <Box className="shadow-section">
                        <Box className="GETINTOUCH contact_form_contorl" display={'flex'} justifyContent={"space-between"} flexWrap={'wrap'}>
                            <Box className="GETINTOUCH1 ">
                                <Typography  className="about-soham">Get in Touch With Us</Typography>
                                <form onSubmit={handleSubmit}>
                                    <FormControl >
                                        <Grid container spacing={2} justifyContent="center">
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="name"
                                                    name="username"
                                                    label="Name"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    error={!!errors.username}
                                                    helperText={errors.username}
                                                    fullWidth
                                                    required
                                                    className="input"

                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    name="email"
                                                    label="Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    error={!!errors.email}
                                                    helperText={errors.email}
                                                    fullWidth
                                                    required
                                                    className="input"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    name="number"
                                                    label="Phone Number"
                                                    value={formData.number}
                                                    onChange={handleChange}
                                                    error={!!errors.number}
                                                    helperText={errors.number}
                                                    fullWidth
                                                    required
                                                    className="input"

                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    name="subject"
                                                    label="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    error={!!errors.subject}
                                                    helperText={errors.subject}
                                                    fullWidth
                                                    required
                                                    className="input"

                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    name="message"
                                                    label="Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    error={!!errors.message}
                                                    helperText={errors.message}
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    required
                                                    className="input"

                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    onClick={handleSubmit}
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    className="gradientbutton"
                                                    sx={{ width: '100%', padding: '10px', fontSize: '18px', marginTop: '30px' }}
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </form>
                            </Box>
                            <Box width={{ xl: "550px", xs: "100%", sm: "100%", md: "40%" }} className="GETINTOUCH2">
                                <Typography variant='h4' className='get_in_touch_heading'>To Know More</Typography>
                                <Box>
                                    <Box paddingY={0.5}>
                                        <Typography id="h4" className='email_phone_heading'>Phone</Typography>
                                    </Box>
                                    <Box className='get_in_touch'>
                                        <a target="_blank" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }} href="tel:+917879231700">
                                            <IoCall color="white" fontSize={16} />
                                            <Typography paddingLeft={1}>+91 78792-31700</Typography>
                                        </a>
                                        <a target="_blank" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }} href="tel:+917000335673">
                                            <IoCall color="white" fontSize={16} />
                                            <Typography paddingLeft={1}>+91 70003-35673</Typography>
                                        </a>
                                        <a target="_blank" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }} href="tel:+917984740805">
                                            <IoCall color="white" fontSize={16} />
                                            <Typography paddingLeft={1}>+91 79847-40805</Typography>
                                        </a>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box paddingY={0.5}>
                                        <Typography className='email_phone_heading'>Email</Typography>
                                    </Box>
                                    <Box className='get_in_touch'>
                                        <a target="_blank" href="mailto:contact@sohamsolution.com" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }}>
                                            <MdEmail id="maill" color="white" fontSize={16} />
                                            <Typography paddingLeft={1}>contact@sohamsolution.com</Typography>
                                        </a>
                                        <a target="_blank" href="mailto:hr@sohamsolution.com" className="text-decortion color-white" style={{ display: "flex", alignItems: "center" }}>
                                            <MdEmail id="maill" color="white" fontSize={16} />
                                            <Typography paddingLeft={1}>hr@sohamsolution.com</Typography>
                                        </a>
                                    </Box>
                                </Box>
                                <Box paddingY={0.5}>
                                    <Box>
                                        <Typography className='email_phone_heading'>Address</Typography>
                                    </Box>
                                    <a target="_blank" href="https://www.google.com/maps/place/Soham+Web+Solution+-+Web+Development+Company/@22.9648902,76.0458359,17z/data=!4m14!1m7!3m6!1s0x3963177600d4efb5:0x33c81c908e54629c!2sSoham+Web+Solution+-+Web+Development+Company!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9!3m5!1s0x3963177600d4efb5:0x33c81c908e54629c!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9"
                                        className="text-decortion color-white" style={{ display: "flex", alignItems: "start" }}>
                                        <FaLocationDot fontSize={16} color="white" />
                                        <Typography paddingLeft={1}>12 Civil Lines, Chamunda Complex, Dewas</Typography>
                                    </a>
                                </Box>
                                <Box paddingY={0.5}>
                                    <Box>
                                        <Typography className='email_phone_heading'>Business Hours</Typography>
                                    </Box>
                                    <Box className='get_in_touch display-flex-start'>
                                        <IoTimeSharp className='color-white' fontSize={18} />
                                        <Typography className='color-white' marginLeft={1}>Monday - Saturday: 10:00 AM - 10:00 PM</Typography>
                                    </Box>
                                    <Box className='get_in_touch display-flex-start'>
                                        <FaClosedCaptioning className='color-white' marginLeft={1} />
                                        <Typography className='color-white' marginLeft={1}>Sunday: Closed</Typography>
                                    </Box>
                                </Box>
                                <Box paddingY={0.5}>
                                    <Box>
                                        <Typography className='email_phone_heading'>Follow Us on</Typography>
                                    </Box>
                                    <Box>
                                        <Box className="flex-between footer-sec-icon" width={150}>
                                            <a target='_blank' href="https://www.facebook.com/sohamsolution/"><img src={Facebook} alt="" /></a>
                                            <a target='_blank' href="https://www.instagram.com/sohamwebsolution/"><img src={Insta} alt="" /></a>
                                            <a target='_blank' href="https://x.com/i/flow/login?redirect_after_login=%2Fsoham_web"><img src={Twitter} alt="" /></a>
                                            <a target='_blank' href="https://profiles.wordpress.org/sohamwebsolution/"><img src={Linkdin} alt="" /></a>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
         
        </>
    );
};

export default Contact;
