

import { Box, FormControl, TextField, Typography, Grid, Button, FormControlLabel, Checkbox, RadioGroup, Radio, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Map from "../../../assets/contactus soham web/map.svg"
import Input1 from '../../../Child-Component/Input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../../features/Form/FormSlice';


const CareerForm = ({ onClose, heading }) => {
    const dispatch = useDispatch();
    const { FormData, isLoading } = useSelector((state) => state.Form);

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };
    useEffect(() => {
        dispatch(fetchFormData())
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
    };

    return (
        <Box className="pop-form" sx={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', minHeight: '100vh',
        }} >

            <Box 
                sx={{
                  bgcolor:"white",  boxShadow: 24, p: 4, borderRadius: 2, height: "80vh", margin: "5px", overflowY: 'scroll',
                }}>
                <Box  margin={"auto"} width={"100%"} onClick={onClose}>
                    <FormControl onClick={(e) => e.stopPropagation()}>


                        <Box>
                            <Typography textAlign={"CENTER"} color={"#0160E7"} fontSize={25} fontWeight={700}>Apply Now</Typography>
                            <Box>
                                <Typography textAlign={"CENTER"} color={"#0160E7"} fontSize={25} fontWeight={700}>{heading}</Typography>
                            </Box>


                        </Box>
                        <Input1 name="name" label="Name" />
                        <Input1 name="email" label="Email" />
                        <Input1 name="number" label="Phone Number" />
                        <Input1 name="text" label="Current City" />
                        <RadioGroup sx={{ justifyContent: "space-between", flexDirection: "row" }}
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                        >
                            <FormControlLabel value="Fresher" control={<Radio />} label="Fresher" />
                            <FormControlLabel value="Experience" control={<Radio />} label="Experience" />
                        </RadioGroup>
                        <Grid width={"100%"} display={"flex"} >
                            <Grid item xs={12} sm={6} marginRight={"5px"}>
                                <Input1 name="name" label="Name" />
                            </Grid>
                            <Grid item xs={12} sm={6} marginLeft={"5px"}>
                                <Input1 name="email" label="Email" />
                            </Grid>
                        </Grid>
                        <Input1 name="name" label="Select job role" />
                        <Input1 name="name" label="Exected CTC" />

                        <Box  sx={{ marginTop: "10px" }} border={2} borderColor={'#0160E7'} padding={0.5} >

                            <Button variant="contained" component="label">
                                Upload Resume
                        
                            </Button>

                        </Box>


                        <Button sx={{ marginTop: "15px" }} type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

export default CareerForm;


