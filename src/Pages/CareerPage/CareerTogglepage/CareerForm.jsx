

import React, { useState } from 'react';
import { Box, FormControl, Typography, RadioGroup, Radio, Grid, Button, FormControlLabel } from '@mui/material';
import Input1 from '../../../Child-Component/Input';

const CareerForm = ({ onClose, heading }) => {
    const [showExperienceInputs, setShowExperienceInputs] = useState(false);

    const handleRadioChange = (event) => {
        setShowExperienceInputs(event.target.value === 'Experience');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };

    return (
        <Box className="pop-form" sx={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', minHeight: '100vh',
        }} >
            <Box sx={{
                bgcolor: "white", boxShadow: 24, p: 4, borderRadius: 2, height: "80vh", margin: "5px", overflowY: 'scroll',
            }}>
                <Box margin={"auto"} width={"100%"} onClick={onClose}>
                    <FormControl onClick={(e) => e.stopPropagation()}>
                        <Box>
                            <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>Apply Now</Typography>
                            <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>{heading}</Typography>
                        </Box>

                        <Input1 width name="name" label="Name" />
                        <Input1 name="email" label="Email" />
                        <Input1 name="number" label="Phone Number" />
                        <Input1 name="text" label="Current City" />

                        <RadioGroup
                            sx={{ justifyContent: "space-between", flexDirection: "row" }}
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="Fresher" control={<Radio />} label="Fresher" />
                            <FormControlLabel value="Experience" control={<Radio />} label="Experience" />
                        </RadioGroup>

                        {showExperienceInputs && (
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Input1 name="experienceMonths" label="Months of Experience" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Input1 name="experienceYears" label="Years of Experience" />
                                </Grid>
                            </Grid>
                        )}

                        <Input1 name="jobRole" label="Select job role" />
                        <Input1 name="expectedCTC" label="Expected CTC" />

                        <Box sx={{ marginTop: "10px" }} border={2} borderColor={'#0160E7'} padding={0.5} >
                            <Button variant="contained" component="label">
                                Upload Resume
                                <input type="file" hidden />
                            </Button>
                        </Box>

                        <Button sx={{ marginTop: "15px" }} type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

export default CareerForm;
