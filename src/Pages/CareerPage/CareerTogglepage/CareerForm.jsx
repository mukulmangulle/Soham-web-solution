

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
        <Box sx={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', minHeight: '100vh',
            background: 'rgba(255, 255, 255, 0.7)',
        }} >

            <Box
                sx={{
                    bgcolor: 'white', boxShadow: 24, p: 4, borderRadius: 2, height: "80vh", margin: "5px", overflowY: 'scroll',
                }}>
                <Box margin={"auto"} width={"100%"} onClick={onClose}>
                    <FormControl onClick={(e) => e.stopPropagation()}>


                        <Box>
                            <Typography textAlign={"CENTER"} color={"#0160E7"} fontSize={25} fontWeight={700}>Apply Now</Typography>
                            <Box>
                                <Typography textAlign={"CENTER"} color={"#0160E7"} fontSize={25} fontWeight={700}>{heading}</Typography>
                            </Box>


                        </Box>
                        <Input1 name="name" label="Name*" />
                        <Input1 name="email" label="Email*" />
                        <Input1 name="number" label="Phone Number*" />
                        <Input1 name="text" label="Current City*" />
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
                        <Input1 name="name" label="Select job role*" />
                        <Input1 name="name" label="Exected CTC**" />

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




// import { Typography,TextField,Button, makeStyles,Container } from '@mui/material';
// import React, { useState } from 'react';
// // import {  }';

// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     marginTop: theme.spacing(4),
//   },
//   textField: {
//     marginBottom: theme.spacing(2),
//   },
// }));

// const ApplyForm = () => {
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     city: '',
//     fresher: false,
//     experience: '',
//     jobRole: '',
//     expectedCTC: '',
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({
//       ...formData,
//       resume: file,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle form submission, like sending data to the server
//     console.log(formData);
//   };

//   return (
//     <Container maxWidth="sm" className={classes.formContainer}>
//       <Typography variant="h5" gutterBottom>
//         Apply Now
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           className={classes.textField}
//           fullWidth
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <TextField
//           className={classes.textField}
//           fullWidth
//           label="Email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <TextField
//           className={classes.textField}
//           fullWidth
//           label="Phone"
//           name="phone"
//           type="tel"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <TextField
//           className={classes.textField}
//           fullWidth
//           label="Current City"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//         />
//         <TextField
//           className={classes.textField}
//           fullWidth
//           label="Experience"
//           name="experience"
//           value={formData.experience}
//           onChange={handleChange}
//         />
//         {/* Add more fields as needed */}
//         <Button variant="contained" component="label">
//           Upload Resume
//           <input type="file" hidden onChange={handleFileChange} />
//         </Button>
//         <Button className={classes.textField} type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default ApplyForm;
