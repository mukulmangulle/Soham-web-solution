

import React, { useState } from 'react';
import { Box, Typography, TextField, FormControl, Select, MenuItem, Button, ClickAwayListener, FormControlLabel, Checkbox, FormGroup } from '@mui/material';

const  Serviceform = ({ onClose }) => {
  const boxShadowStyle = {
    boxShadow: "0px 0px 15px 0px #cccccc",
  };

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    number: '',
    textarea: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Name is required';
    } else if (formData.username.length < 2) {
      validationErrors.username = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.number.trim()) {
      validationErrors.number = 'Phone number is required';
    } else if (formData.number.length < 10) {
      validationErrors.number = 'Phone number must be at least 10 characters';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      setFormData({
        username: '',
        email: '',
        number: '',
        textarea: '',
      });
      setErrors({});
    }
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

  return (
    <ClickAwayListener onClickAway={onClose}>
      <Box className="form_about container_space">
        <Typography className='secondary_heading' variant='h2'>Contact Information</Typography>
        <Typography textAlign={"center"} className="primary_subheading">Some of our projects may interest you</Typography>

        <Box width={"100%"} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'column'}>
          <Box className="form-control" style={boxShadowStyle}>
            <Box width={"100%"} >
              <Typography className="Ready" variant='h3' fontSize={'30px'} fontWeight={600} color={"#053480"}>Ready To work with us? Tell us more about your Project Requirement</Typography>
            </Box>
            <Box className="form_control_child">
              <Box className="contact-1" padding={0} paddingTop={1.5}>
                <Box marginTop={3}>
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
                  />
                </Box>
                <Box marginTop={3}>
                  <TextField
                    name="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                    required
                  />
                </Box>
                <Box marginTop={3}>
                  <TextField
                    name="number"
                    label="Phone Number"
                    value={formData.number}
                    onChange={handleChange}
                    error={!!errors.number}
                    helperText={errors.number}
                    fullWidth
                    required
                  />
                </Box>
                <FormControl fullWidth margin="normal" required>
                  <Select
                    labelId="requirement-label"
                    id="requirement"
                    name="requirement"
                    label="Select Project Budget"
                  >
                    <MenuItem value="Enterprise Web Solution">Web Development</MenuItem>
                    <MenuItem value="UI/UX Services">UI/UX Services</MenuItem>
                    <MenuItem value="Mobile Apps Development">Web Designing</MenuItem>
                    <MenuItem value="Application Services">Hire Dedicated Resources</MenuItem>
                    <MenuItem value="Hire Dedicated Resources">CMS Development</MenuItem>
                    <MenuItem value="Framework Development">Framework Development</MenuItem>
                    <MenuItem value="Enterprise Solution">Enterprise Solution</MenuItem>
                    <MenuItem value="IT Consultancy">IT Consultancy</MenuItem>
                    <MenuItem value="CMS Development">CMS Development</MenuItem>
                    <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  id="message"
                  name="textarea"
                  label="Brief Project Information"
                  multiline
                  rows={4}
                  margin="normal"
                />
              </Box>

              <Box className="contact_section_second">
                <Box className="contact-2">
                  <FormControl component="fieldset" fullWidth margin="normal">
                    <Box paddingY={1}>
                      <Typography className="requirement-label border_bottom_form" color={'gray'} variant='h3'>Select Your Requirement</Typography>
                    </Box>
                    <Box display={'flex'} alignItems={"start"} justifyContent={"center"} flexDirection={'column'}>
                      <FormControlLabel control={<Checkbox />} label="Web Development" />
                      <FormControlLabel control={<Checkbox />} label="Web Designing" />
                      <FormControlLabel control={<Checkbox />} label="Hire Dedicated Resources " />
                      <FormControlLabel control={<Checkbox />} label="CMS Development" />
                      <FormControlLabel control={<Checkbox />} label="Other" />
                    </Box>
                  </FormControl>
                </Box>

                <Box className="contact-3" width={'200px'}>
                  <FormControl component="fieldset" fullWidth margin="normal">
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="UI/UX Services" />
                      <FormControlLabel control={<Checkbox />} label="Application Services" />
                      <FormControlLabel control={<Checkbox />} label="IT Consultancy" />
                    </FormGroup>
                    <Button onClick={handleSubmit} id='submit' variant="contained" color="primary">Submit</Button>
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default  Serviceform;