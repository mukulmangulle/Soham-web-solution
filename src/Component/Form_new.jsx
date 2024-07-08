
import { Box, Button, Container, FormControl, Typography } from "@mui/material"
import React, { useState } from 'react';


function Form_new() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        textarea:"",
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = {};
        if (!formData.username.trim()) {
            validationErrors.username = 'Username is required';
        } else if (formData.username.length < 2) {
            validationErrors.username = ' at least 2 characters';
        }

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Invalid email format';
        }
        if (!formData.number.trim()) {
            validationErrors.number = 'number is required';
        } else if (formData.number.length < 10) {
            validationErrors.number = 'Number must be at least 10 characters';
        }


        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {

            console.log('Form submitted:', formData);

            setFormData({
                username: '',
                email: '',
                number: '',
                subject:"",
            });

            setErrors({});
        }
    };


    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ''
        });
    };

    // console.log(formData);

    return (
        <>
            <Container className="form" sx={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Box className="form1" sx={{ width: "100%", padding: "70px 0px" }}>

                    <Box>
                        <Typography sx={{ color: " #FE4C1C", fontWeight: "900" }}><li>GET IN TOUCH</li></Typography>
                        <Typography variant="h5" sx={{
                            width: "80%", marginTop: "20px", fontSize: "30px", fontWeight: "650", color: "black"
                        }}>Empowering Tomorrow's Energy Landscape through Cutting-Edge Solar Solutions for a Sustainable Future.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: "12px", width: "85%", marginTop: "20PX" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        </Typography>
                    </Box>

                    <Box>
                        <Box>
                            <img src="" alt="" />
                            <Box sx={{ width: "100%" }}>
                                <Typography sx={{ color: " #FE4C1C", fontSize: "15px" }}> Send Us a Message</Typography>
                                <Typography sx={{ fontSize: "12px", color: "gray" }}> All aspects of your software assets including purchasing,
                                    deployment & maintenance</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ width: "55%" }}>
                            <img src="" alt="" />
                            <Box>
                                <Typography sx={{ color: " #FE4C1C", fontSize: "15px" }}>Our Staff Will Call You </Typography>
                                <Typography sx={{ fontSize: "12px" }}>All aspects of your software assets including purchasing,
                                    deployment & maintenance</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ width: "60%" }}>
                            <img src="" alt="" />
                            <Box>
                                <Typography sx={{ color: " #FE4C1C", fontSize: "15px" }}>Get Deal and Installment </Typography>
                                <Typography sx={{ fontSize: "12px", color: "gray" }}>All aspects of your software assets including purchasing,
                                    deployment & maintenance </Typography>
                            </Box>
                        </Box>

                    </Box>

                </Box >




                <Box className="form2" sx={{ width: "70%", height: "100%" ,display: "flex", alignItems: " center", justifyContent: "space-evenly" ,
                background: "#f4d7d7" }}>
                    <FormControl onSubmit={handleSubmit} id="form" sx={{ display: "flex", alignItems: " center", justifyContent: "space-evenly" }}>
                        <Box sx={{ display: "flex", alignItems: "start", justifyContent: "start", width: "90%" }}>
                            <Typography sx={{ marginTop: "30PX", marginBottom: "20px", color: "#FE4C1C", fontWeight: "650" }}>   Get In Touch  </Typography>
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                            {/* < Box sx={{width:"110%"}}> */}
                            <input id="name"
                                className="input0"
                                placeholder="Enter Your Name"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required />
                            {errors.username && <  span>{errors.username}</span>}
                            {/* </Box> */}

                            {/* < Box sx={{width:"100%"}}> */}
                            <input
                                className="input00"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                            {errors.email && <  span>{errors.email}</span>}
                            {/* </Box> */}

                        </Box>
                        <Box sx={{ width: "100%" }}>
                            <input id="subject"
                                className="input1"
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required />
                        </Box>


                        < Box sx={{ width: "100%" }}>
                            <input
                                id="number"
                                placeholder="Your Phone Number"
                                className="input1"
                                type="Number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                required />
                            {errors.number && <span>{errors.number}</span>}
                        </Box>

                        < Box sx={{ width: "100%" }}>
                            <input
                                id="number"
                                placeholder="Submit"
                                className="input1"
                                type="submit"
                                name="submit"
                                value={formData.submit}
                                onChange={handleChange}
                                required />
                            {/* {errors.email && <span>{errors.email}</span>} */}
                        </Box>

                        <textarea id="text-area"
                            className="text-area"
                            name="textarea"
                            cols="30"
                            rows="10"
                            type="text">
                        </textarea>

                        <Button type="submit" variant="contained"
                            onClick={handleSubmit}
                            sx={{
                                marginBottom: "30px", width: "90%", borderRadius:
                                    "30px", background: " #FE4C1C", marginTop: "20px"
                            }}>Submite</Button>
                    </FormControl>
                </Box >

            </Container >


        </>
    )
}

export default Form_new










