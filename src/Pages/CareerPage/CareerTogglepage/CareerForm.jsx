import React, { useState, useRef } from 'react';
import { Box, FormControl, Typography, RadioGroup, Radio, Grid, Button, FormControlLabel, TextField } from '@mui/material';
import { ImCross } from 'react-icons/im';

const CareerForm = ({ onClose, heading }) => {
    const [showExperienceInputs, setShowExperienceInputs] = useState(false);
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        city: '',
        message: '',
        experienceMonths: '',
        experienceYears: '',
        jobRole: '',
        expectedCTC: '',
    });
    const [errors, setErrors] = useState({});

    const handleRadioChange = (event) => {
        setShowExperienceInputs(event.target.value === 'Experience');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        const validationErrors = {};

        if (!formData.username.trim()) {
            validationErrors.username = 'Username is required';
        } else if (!/^[a-zA-Z]+$/.test(formData.username)) {
            validationErrors.username = 'Username must only contain letters';
        } else if (formData.username.length < 2) {
            validationErrors.username = 'Username must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Invalid email format';
        }

        if (!formData.number.trim()) {
            validationErrors.number = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.number)) {
            validationErrors.number = 'Phone number must be exactly 10 digits';
        }

        if (!formData.city.trim()) {
            validationErrors.city = 'Current City is required';
        }

        if (!formData.message.trim()) {
            validationErrors.message = 'Message is required';
        }

        if (showExperienceInputs) {
            if (!formData.experienceMonths.trim()) {
                validationErrors.experienceMonths = 'Months of experience is required';
            }
            if (!formData.experienceYears.trim()) {
                validationErrors.experienceYears = 'Years of experience is required';
            }
        }
        if (!formData.jobRole.trim()) {
            validationErrors.jobRole = 'Job role is required';
        }

        const expectedCTC = formData.expectedCTC.trim();

        if (!expectedCTC) {
            validationErrors.expectedCTC = 'Expected CTC is required';
        } else {
            if (!/^\d+(\.\d+)?$/.test(expectedCTC)) {
                validationErrors.expectedCTC = 'Expected CTC must be a valid number';
            }
        }

        return validationErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            const formData = new FormData(formRef.current);
            const data = Object.fromEntries(formData.entries());
            console.log("form data", data);
            resetForm();
        }
    };

    const resetForm = () => {
        formRef.current.reset();
        setShowExperienceInputs(false);
        setFormData({
            username: '',
            email: '',
            number: '',
            city: '',
            message: '',
            experienceMonths: '',
            experienceYears: '',
            jobRole: '',
            expectedCTC: '',
        });
        setErrors({});
    };

    return (
        <Box className="pop-form" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Box className="pop_form_child" sx={{ boxShadow: 24, p: 4, borderRadius: 2, width: '600px', height: '80vh', margin: '5px', overflowY: 'scroll' }}>
                <Box width={"100%"} onClick={onClose}>
                    <FormControl onClick={(e) => e.stopPropagation()}>
                        <Box textAlign={"end"} marginRight={1}>
                            <ImCross onClick={onClose} />
                        </Box>

                        <Box>
                            <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>Apply Now</Typography>
                            <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>{heading}</Typography>
                        </Box>

                        <form ref={formRef} onSubmit={handleSubmit}>
                            <TextField
                                id="name"
                                name="username"
                                label="Name*"
                                value={formData.username}
                                onChange={handleChange}
                                error={!!errors.username}
                                helperText={errors.username}
                                fullWidth
                                className='input' />

                            <TextField
                                name="email"
                                label="Email*"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                fullWidth
                                className='input' />

                            <TextField
                                name="number"
                                label="Phone Number*"
                                value={formData.number}
                                onChange={handleChange}
                                error={!!errors.number}
                                helperText={errors.number}
                                fullWidth
                                className='input' />

                            <TextField
                                name="city"
                                label="Current City*"
                                value={formData.city}
                                onChange={handleChange}
                                error={!!errors.city}
                                helperText={errors.city}
                                fullWidth
                                className='input' />

                            <TextField
                                name="message"
                                label="Message*"
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                                fullWidth
                                multiline
                                rows={4}
                                className='input' />


                            <RadioGroup
                                sx={{ justifyContent: "space-between", flexDirection: "row" }}
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                onChange={handleRadioChange}>

                                <FormControlLabel value="Fresher" control={<Radio />} label="Fresher*" />
                                <FormControlLabel value="Experience" control={<Radio />} label="Experience*" />
                            </RadioGroup>

                            {showExperienceInputs && (
                                <Box display={"flex"} gap={2}>
                                    <TextField
                                        name="experienceMonths"
                                        label="Months of Experience*"
                                        value={formData.experienceMonths}
                                        onChange={handleChange}
                                        error={!!errors.experienceMonths}
                                        helperText={errors.experienceMonths}
                                        fullWidth
                                        className='input' />

                                    <TextField
                                        name="experienceYears"
                                        label="Years of Experience*"
                                        value={formData.experienceYears}
                                        onChange={handleChange}
                                        error={!!errors.experienceYears}
                                        helperText={errors.experienceYears}
                                        fullWidth
                                        className='input' />
                                </Box>
                            )}
                            <TextField
                                name="jobRole"
                                label="Select job role*"
                                value={formData.jobRole}
                                onChange={handleChange}
                                error={!!errors.jobRole}
                                helperText={errors.jobRole}
                                fullWidth
                                className='input' />


                            <TextField
                                name="expectedCTC"
                                label="Expected CTC*"
                                value={formData.expectedCTC}
                                onChange={handleChange}
                                error={!!errors.expectedCTC}
                                helperText={errors.expectedCTC}
                                fullWidth
                                className='input' />

                            <Box sx={{ marginTop: "10px", border: 1, borderRadius: 1, borderColor: '#0160E7', padding: 0.7 }}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    sx={{
                                        backgroundColor: '#0160E7',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#014BB7',
                                            transform: 'scale(1.05)',
                                            transition: 'all 0.3s ease-in-out',
                                        },
                                        '&:active': {
                                            transform: 'scale(0.95)',
                                        },
                                    }} >
                                    Upload Resume
                                    <input type="file" hidden />
                                </Button>
                            </Box>
                            
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="gradientbutton"
                                sx={{ width: '100%', padding: '5px', fontSize: '16px', marginTop: '15px' }} >
                                Submit
                            </Button>
                        </form>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    );
};

export default CareerForm;







