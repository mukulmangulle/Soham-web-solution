import { Box, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Checkbox, FormGroup, RadioGroup, Radio, FormLabel, FormControlLabel, Grid } from '@mui/material'
import { yellow } from '@mui/material/colors';
import React from 'react'
import Input1 from '../../Child-Component/Input';
import contentSlice from '../../features/content/contentSlice';
import { useSelector } from 'react-redux';

const Form = () => {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  const boxShadowStyle = {

    boxShadow: "0px 0px 15px 0px #cccccc",

  };
  return (
    <>
       <Box className="form_about" >
        <Typography className='secondary_heading' variant='h2'>Contact Information </Typography>
        <Typography textAlign={"center"} className="primary_subheading">Our some of these projects may seem interesting to you</Typography>


        <Box width={"100"} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'column'}>

          <Box className="form-control" style={boxShadowStyle} >
            <Box width={"100%"}  >
              <Typography className="Ready" variant='h3' fontSize={'30px'} fontWeight={600} color={"#053480"}>Ready To work with us ? Tell us More about your Project Requirement</Typography>
              <Typography variant="h3" fontSize={"30px"} fontWeight={600} color={"#053480"} gutterBottom>

              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={"space-between"} width={'100%'} flexWrap={'wrap'} >
              <Box className="contact-1" padding={0} paddingTop={1.5}>

                {/* <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  variant="filled"
                  margin="normal"
                  required
                  className='TextField'
                /> */}

                <Input1 name="name" label="Name" />

                <Input1 name="email" label="Email" />

                <Input1 name="number" label="Number" />

                <FormControl fullWidth margin="normal" required  >
                  <Select
                    labelId="requirement-label"
                    id="requirement"
                    name="requirement"
                    label="Select Project Buduget"
                    variant="filled"

                  >

                     <MenuItem value="Enterprise Web Solution">Web Development
                    </MenuItem>
                    <MenuItem value="UI/UX Services">UI/UX Services</MenuItem>
                    <MenuItem value="Mobile Apps Development">Web Designing</MenuItem>
                    <MenuItem value="Application Services">Hire Dedicated Resoures</MenuItem>
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
          name="message"
          label="Brief Project information"
          multiline
          rows={4}
          // variant="outlined"
          variant="filled"
          margin="normal"
        />

              </Box>
              <Box className="contact-2"   >

                <FormControl component="fieldset" fullWidth margin="normal" >
                  <Box paddingY={1} >
                    <Typography className="requirement-label border_bottom_form" color={'gray'} variant='h3'  >Select Your Requirement</Typography>
                    {/* <hr className='border_bottom_form' /> */}
                  </Box>
                  <RadioGroup row aria-label="project-budget" name="project-budget">
                    <Box display={'flex'} alignItems={"start"} justifyContent={"center"} flexDirection={'column'} >
                      <FormControlLabel control={<Checkbox />} label="Web Development
" />
                      <FormControlLabel control={<Checkbox />} label="Web Designing" />
                      <FormControlLabel control={<Checkbox />} label="Hire Dedicated Resoures " />
                      {/* <FormControlLabel control={<Checkbox />} label="Enterprice Solution" /> */}
                      <FormControlLabel control={<Checkbox />} label="CMS Development
" />
                      <FormControlLabel control={<Checkbox />} label="Other " />
                    </Box>
                  </RadioGroup>
                </FormControl>

              </Box>


              {/* section3 */}
              <Box className="contact-3" width={'200px'} paddingTop={4.5}>
                <FormControl component="fieldset" fullWidth margin="normal">

                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="UI/UX Services" />
                    <FormControlLabel control={<Checkbox />} label="Application Services" />
                    {/* <FormControlLabel control={<Checkbox />} label="Framework Development" /> */}
                    <FormControlLabel control={<Checkbox />} label="IT Consultancy" />
                    {/* <FormControlLabel control={<Checkbox />} label="Digital Maketing" /> */}
                  </FormGroup>


                  <Button id='submit'> Submit</Button>
                </FormControl>
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Form
