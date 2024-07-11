import React, { useState } from 'react';
import { Box, Typography, TextField, FormControl, Select, MenuItem, Button, Checkbox, FormGroup, FormControlLabel, InputLabel, OutlinedInput } from '@mui/material';

const ContactInformation = ({ onClose }) => {
  const boxShadowStyle = {
    boxShadow: "0px 0px 15px 0px #cccccc",
  };

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    number: '',
    textarea: '',
    requirement: '',
    selectedRequirements: [],
    otherDescription: '',
  });

  const [errors, setErrors] = useState({});
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

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

    if (!formData.requirement.trim()) {
      validationErrors.requirement = 'Select at least one requirement';
    }

    if (formData.selectedRequirements.length === 0) {
      validationErrors.requirements = 'Please select at least one requirement';
    }

    if (showOtherInput && !formData.otherDescription.trim()) {
      validationErrors.otherDescription = 'Please provide a description';
    }

    if (!formData.textarea.trim()) {
      validationErrors.textarea = 'Project information is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      // Reset form fields and state
      setFormData({
        username: '',
        email: '',
        number: '',
        textarea: '',
        requirement: '',
        selectedRequirements: [], // Clear selected checkboxes
        otherDescription: '',
      });
      setErrors({});
      setShowOtherInput(false); // Reset Other input visibility
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

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let updatedRequirements = [...formData.selectedRequirements];

    if (checked && !updatedRequirements.includes(name)) {
      updatedRequirements.push(name);
    } else if (!checked && updatedRequirements.includes(name)) {
      updatedRequirements = updatedRequirements.filter(item => item !== name);
    }

    setFormData({
      ...formData,
      selectedRequirements: updatedRequirements,
    });

    if (!checked && name === 'Other') {
      setFormData({
        ...formData,
        otherDescription: '', // Clear description if unchecked
      });
      setShowOtherInput(false);
    } else if (checked && name === 'Other') {
      setShowOtherInput(true);
    }
  };

  

  return (
   <Box className="flex-center">
     <Box className="form_about container">
      <Typography className='secondary_heading' variant='h2'>Contact Information</Typography>
      <Typography textAlign={"center"} className="primary_subheading">Some of our projects may interest you</Typography>

      <Box className="form-control_man flex-between" width={"100%"} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'column'}>
        <Box className="form-control" style={boxShadowStyle} width={"100%"}>
          <Box width={"100%"} >
            <Typography className="Ready" variant='h3'  fontWeight={600} color={"#053480"}>Ready To work with us? Tell us more about your Project Requirement</Typography>
          </Box>
          <Box className="form_control_child">
            <Box className="contact-1"  >
              <Box >
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
                  className='input'
                />
              </Box>
              <Box >
                <TextField
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  fullWidth
                  required
                  className='input'
                />
              </Box>
              <Box >
                <TextField
                  name="number"
                  label="Phone Number"
                  value={formData.number}
                  onChange={handleChange}
                  error={!!errors.number}
                  helperText={errors.number}
                  fullWidth
                  required
                  className='input'
                />
              </Box>
              <FormControl fullWidth margin="normal" required error={!!errors.requirement}>
              <InputLabel id="requirement-labell">Select Requirement</InputLabel>
                <Select
                  labelId="requirement-label"
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  error={!!errors.requirement}
                  fullWidth
                  className='input'
                  label="Select Requirement"

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
                {errors.requirement && <Typography variant="caption" color="error">{errors.requirement}</Typography>}
              </FormControl> 
              
  

              <TextField
                fullWidth
                id="message"
                name="textarea"
                label="Brief Project Information"
                multiline
                rows={4}
                value={formData.textarea}
                onChange={handleChange}
                error={!!errors.textarea}
                helperText={errors.textarea}
                required
                className='input'
              />
              
            </Box>

            <Box className="contact_section_second">
              <Box className="contact-2">
                <FormControl component="fieldset" fullWidth margin="normal">
                  <Box paddingY={1}>
                    <Typography className="requirement-label border_bottom_form" color={'gray'} variant='h3'>Select Your Requirement</Typography>
                  </Box>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox name="Web Development" onChange={handleCheckboxChange} />} label="Web Development" />
                    <FormControlLabel control={<Checkbox name="Web Designing" onChange={handleCheckboxChange} />} label="Web Designing" />
                    <FormControlLabel control={<Checkbox name="Hire Dedicated Resources" onChange={handleCheckboxChange} />} label="Hire Dedicated Resources " />
                    <FormControlLabel control={<Checkbox name="CMS Development" onChange={handleCheckboxChange} />} label="CMS Development" />
                    <FormControlLabel
                      control={<Checkbox name="Other" checked={showOtherInput} onChange={handleCheckboxChange} />}
                      label="Other"
                    />
                    {showOtherInput && (
                      <Box width={'200px'}>
                        <FormControl component="fieldset" fullWidth >
                          <TextField
                            name="otherDescription"
                            label="Please specify"
                            value={formData.otherDescription}
                            onChange={handleChange}
                            error={!!errors.otherDescription}
                            helperText={errors.otherDescription}
                            fullWidth
                            margin="normal"
                            required={showOtherInput}
                          />
                        </FormControl>
                      </Box>
                    )}
                  </FormGroup>
                </FormControl>
              </Box>
              <Box className="contact-3" width={'200px'}>
                <FormControl component="fieldset" fullWidth margin="normal">
                  <FormGroup>
                    <FormControlLabel control={<Checkbox name="UI/UX Services" onChange={handleCheckboxChange} />} label="UI/UX Services" />
                    <FormControlLabel control={<Checkbox name="Application Services" onChange={handleCheckboxChange} />} label="Application Services" />
                    <FormControlLabel control={<Checkbox name="IT Consultancy" onChange={handleCheckboxChange} />} label="IT Consultancy" />
                  </FormGroup>
                  <Button onClick={handleSubmit} className='submit' variant="contained" >Submit</Button>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
   </Box>
  );
};

export default ContactInformation;
