

// import React, { useState } from 'react';
// import { Box, FormControl, Typography, RadioGroup, Radio, Grid, Button, FormControlLabel } from '@mui/material';
// import Input1 from '../../../Child-Component/Input';

// const CareerForm = ({ onClose, heading }) => {
//     const [showExperienceInputs, setShowExperienceInputs] = useState(false);

//     const handleRadioChange = (event) => {
//         setShowExperienceInputs(event.target.value === 'Experience');
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const data = Object.fromEntries(formData.entries());
//         console.log(data);
//     };


    
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     number: '',
//     textarea: '',
//     requirement: '',
//     selectedRequirements: [],
//     otherDescription: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [showOtherInput, setShowOtherInput] = useState(false);

//   const handleSubmite = (event) => {
//     event.preventDefault();

//     const validationErrors = {};

//     if (!formData.username.trim()) {
//       validationErrors.username = 'Username is required';
//     } else if (!/^[a-zA-Z]+$/.test(formData.username)) {
//       validationErrors.username = 'Username must only contain letters';
//     } else if (formData.username.length < 2) {
//       validationErrors.username = 'Username must be at least 2 characters';
//     }

//     if (!formData.email.trim()) {
//       validationErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       validationErrors.email = 'Invalid email format';
//     }

//     if (!formData.number.trim()) {
//       validationErrors.number = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.number)) {
//       validationErrors.number = 'Phone number must be exactly 10 digits';
//     }

//     if (!formData.requirement.trim()) {
//       validationErrors.requirement = 'Select at least one requirement';
//     }

//     if (formData.selectedRequirements.length === 0) {
//       validationErrors.requirements = 'Please select at least one requirement';
//     }

//     if (showOtherInput && !formData.otherDescription.trim()) {
//       validationErrors.otherDescription = 'Please provide a description';
//     }

//     if (!formData.textarea.trim()) {
//       validationErrors.textarea = 'Project information is required';
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       console.log('Form submitted:', formData);
//       // Reset form fields and state
//       setFormData({
//         username: '',
//         email: '',
//         number: '',
//         textarea: '',
//         requirement: '',
//         selectedRequirements: [], 
//         otherDescription: '',
//       });
//       setErrors({});
//       setShowOtherInput(false); 
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//   };

//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     let updatedRequirements = [...formData.selectedRequirements];

//     if (checked && !updatedRequirements.includes(name)) {
//       updatedRequirements.push(name);
//     } else if (!checked && updatedRequirements.includes(name)) {
//       updatedRequirements = updatedRequirements.filter(item => item !== name);
//     }

//     setFormData({
//       ...formData,
//       selectedRequirements: updatedRequirements,
//     });

//     if (!checked && name === 'Other') {
//       setFormData({
//         ...formData,
//         otherDescription: '', 
//       });
//       setShowOtherInput(false);
//     } else if (checked && name === 'Other') {
//       setShowOtherInput(true);
//     }
//   };

//     return (
//         <Box className="pop-form" sx={{
//             display: 'flex', alignItems: 'center',
//             justifyContent: 'center', minHeight: '100vh',
//         }} >
//             <Box className="pop_form_child" sx={{
//                 bgcolor: "white", boxShadow: 24, p: 4, borderRadius: 2, width:"600px", height: "80vh", margin: "5px", overflowY: 'scroll',
//             }}>
//                 <Box width={"100%"} onClick={onClose}>
//                     <FormControl onClick={(e) => e.stopPropagation()}>
//                         <Box>
//                             <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>Apply Now</Typography>
//                             <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>{heading}</Typography>
//                         </Box>

//                         <Input1  
//                         id="name"
//                         name="username"
//                         label="Name"
//                         value={formData.username}
//                         onChange={handleChange}
//                         error={!!errors.username}
//                         helperText={errors.username}
//                         fullWidth
//                         required
//                         className='input'
                        
                        
                        
//                         />
//                         <Input1 name="email" label="Email" />
//                         <Input1 name="number" label="Phone Number" />
//                         <Input1 name="text" label="Current City" />

//                         <RadioGroup
//                             sx={{ justifyContent: "space-between", flexDirection: "row" }}
//                             aria-labelledby="demo-controlled-radio-buttons-group"
//                             name="controlled-radio-buttons-group"
//                             onChange={handleRadioChange}
//                         >
//                             <FormControlLabel value="Fresher" control={<Radio />} label="Fresher" />
//                             <FormControlLabel value="Experience" control={<Radio />} label="Experience" />
//                         </RadioGroup>

//                         {showExperienceInputs && (
//                             <Grid container spacing={2}>
//                                 <Grid item xs={6}>
//                                     <Input1 name="experienceMonths" label="Months of Experience" />
//                                 </Grid>
//                                 <Grid item xs={6}>
//                                     <Input1 name="experienceYears" label="Years of Experience" />
//                                 </Grid>
//                             </Grid>
//                         )}

//                         <Input1 name="jobRole" label="Select job role" />
//                         <Input1 name="expectedCTC" label="Expected CTC" />

//                         <Box sx={{ marginTop: "10px" }} border={2} borderColor={'#0160E7'} padding={0.5} >
//                             <Button variant="contained" component="label">
//                                 Upload Resume
//                                 <input type="file" hidden />
//                             </Button>
//                         </Box>

//                         <Button onClick={handleSubmite} sx={{ marginTop: "15px" }} type="submit" variant="contained" color="primary" >
//                             Submit
//                         </Button>
//                     </FormControl>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }

// export default CareerForm;









// import React, { useState } from 'react';
// import { Box, FormControl, Typography, RadioGroup, Radio, Grid, Button, FormControlLabel, TextField } from '@mui/material';

// const CareerForm = ({ onClose, heading }) => {
//     const [showExperienceInputs, setShowExperienceInputs] = useState(false);

//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         number: '',
//         textarea: '',
//         text: '',
//         experienceMonths: '',
//         experienceYears: '',
//         jobRole: '',
//         expectedCTC: '',
//     });

//     const [errors, setErrors] = useState({});

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const validationErrors = validateFormData(formData);
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//         } else {
//             console.log('Form submitted:', formData);
//             // Clear form fields and state
//             setFormData({
//                 username: '',
//                 email: '',
//                 number: '',
//                 textarea: '',
//                 text: '',
//                 experienceMonths: '',
//                 experienceYears: '',
//                 jobRole: '',
//                 expectedCTC: '',
//             });
//             setErrors({});
//             setShowExperienceInputs(false); // Reset any conditional UI state related to experience inputs
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormData({
//             ...formData,
//             [name]: value,
//         });

//         // Clear error for this field when user starts typing
//         setErrors({
//             ...errors,
//             [name]: '',
//         });
//     };

//     const handleRadioChange = (event) => {
//         setShowExperienceInputs(event.target.value === 'Experience');
//     };

//     const validateFormData = (data) => {
//         const errors = {};

//         if (!data.username.trim()) {
//             errors.username = 'Username is required';
//         } else if (!/^[a-zA-Z]+$/.test(data.username)) {
//             errors.username = 'Username must only contain letters';
//         } else if (data.username.length < 2) {
//             errors.username = 'Username must be at least 2 characters';
//         }

//         if (!data.email.trim()) {
//             errors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//             errors.email = 'Invalid email format';
//         }

//         if (!data.number.trim()) {
//             errors.number = 'Phone number is required';
//         } else if (!/^\d{10}$/.test(data.number)) {
//             errors.number = 'Phone number must be exactly 10 digits';
//         }

//         if (!data.textarea.trim()) {
//             errors.textarea = 'Project information is required';
//         }

//         if (!data.text.trim()) {
//             errors.text = 'Current City is required';
//         }

//         if (showExperienceInputs) {
//             if (!data.experienceMonths.trim()) {
//                 errors.experienceMonths = 'Months of Experience is required';
//             } else if (!/^\d+$/.test(data.experienceMonths)) {
//                 errors.experienceMonths = 'Months of Experience must be a number';
//             }

//             if (!data.experienceYears.trim()) {
//                 errors.experienceYears = 'Years of Experience is required';
//             } else if (!/^\d+$/.test(data.experienceYears)) {
//                 errors.experienceYears = 'Years of Experience must be a number';
//             }
//         }

//         if (!data.jobRole.trim()) {
//             errors.jobRole = 'Select job role is required';
//         }

//         if (!data.expectedCTC.trim()) {
//             errors.expectedCTC = 'Expected CTC is required';
//         } else if (!/^\d+$/.test(data.expectedCTC)) {
//             errors.expectedCTC = 'Expected CTC must be a number';
//         }

//         return errors;
//     };

//     return (
//         <Box className="pop-form" sx={{
//             display: 'flex', alignItems: 'center',
//             justifyContent: 'center', minHeight: '100vh',
//         }}>
//             <Box className="pop_form_child" sx={{
//                 bgcolor: "white", boxShadow: 24, p: 4, borderRadius: 2, width: "600px", height: "80vh", margin: "5px", overflowY: 'scroll',
//             }}>
//                 <Box width={"100%"} onClick={onClose}>
//                     <FormControl onClick={(e) => e.stopPropagation()}>
//                         <Box>
//                             <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>Apply Now</Typography>
//                             <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>{heading}</Typography>
//                         </Box>

//                         <TextField
//                             id="username"
//                             name="username"
//                             label="Username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             error={!!errors.username}
//                             helperText={errors.username}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <TextField
//                             id="email"
//                             name="email"
//                             label="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             error={!!errors.email}
//                             helperText={errors.email}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <TextField
//                             id="number"
//                             name="number"
//                             label="Phone Number"
//                             value={formData.number}
//                             onChange={handleChange}
//                             error={!!errors.number}
//                             helperText={errors.number}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <TextField
//                             id="text"
//                             name="text"
//                             label="Current City"
//                             value={formData.text}
//                             onChange={handleChange}
//                             error={!!errors.text}
//                             helperText={errors.text}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <RadioGroup
//                             sx={{ justifyContent: "space-between", flexDirection: "row" }}
//                             aria-labelledby="demo-controlled-radio-buttons-group"
//                             name="controlled-radio-buttons-group"
//                             value={showExperienceInputs ? 'Experience' : 'Fresher'}
//                             onChange={handleRadioChange}
//                         >
//                             <FormControlLabel value="Fresher" control={<Radio />} label="Fresher" />
//                             <FormControlLabel value="Experience" control={<Radio />} label="Experience" />
//                         </RadioGroup>

//                         {showExperienceInputs && (
//                             <Grid container spacing={2}>
//                                 <Grid item xs={6}>
//                                     <TextField
//                                         id="experienceMonths"
//                                         name="experienceMonths"
//                                         label="Months of Experience"
//                                         value={formData.experienceMonths}
//                                         onChange={handleChange}
//                                         error={!!errors.experienceMonths}
//                                         helperText={errors.experienceMonths}
//                                         fullWidth
//                                         required
//                                         sx={{ marginTop: "10px" }} 
//                                     />
//                                 </Grid>
//                                 <Grid item xs={6}>
//                                     <TextField
//                                         id="experienceYears"
//                                         name="experienceYears"
//                                         label="Years of Experience"
//                                         value={formData.experienceYears}
//                                         onChange={handleChange}
//                                         error={!!errors.experienceYears}
//                                         helperText={errors.experienceYears}
//                                         fullWidth
//                                         required
//                                         sx={{ marginTop: "10px" }} 
//                                     />
//                                 </Grid>
//                             </Grid>
//                         )}

//                         <TextField
//                             id="jobRole"
//                             name="jobRole"
//                             label="Select job role"
//                             value={formData.jobRole}
//                             onChange={handleChange}
//                             error={!!errors.jobRole}
//                             helperText={errors.jobRole}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <TextField
//                             id="expectedCTC"
//                             name="expectedCTC"
//                             label="Expected CTC"
//                             value={formData.expectedCTC}
//                             onChange={handleChange}
//                             error={!!errors.expectedCTC}
//                             helperText={errors.expectedCTC}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />
// {/* 
//                         <Box sx={{ marginTop: "10px" }} border={2} borderColor={'#0160E7'} padding={0.5} >
//                             <Button variant="contained" component="label">
//                                 Upload Resume
//                                 <input type="file" hidden />
//                             </Button>
//                         </Box> */}

//                         <Button
//                             onClick={handleSubmit}
//                             sx={{ marginTop: "15px" }}
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                         >
//                             Submit
//                         </Button>
//                     </FormControl>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default CareerForm;















// import React, { useState, useRef, useEffect } from 'react';
// import { Box, FormControl, Typography, RadioGroup, Radio, Grid, Button, FormControlLabel, TextField } from '@mui/material';

// const CareerForm = ({ onClose, heading }) => {
//     const [showExperienceInputs, setShowExperienceInputs] = useState(false);

//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         number: '',
//         textarea: '',
//         text: '',
//         experienceMonths: '',
//         experienceYears: '',
//         jobRole: '',
//         expectedCTC: '',
//     });

//     const [errors, setErrors] = useState({});
//     const formRef = useRef(null);

//     useEffect(() => {
//         // Add event listener to detect clicks outside the form
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             // Clean up event listener on component unmount
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleClickOutside = (event) => {
//         // Close the form if clicked outside of the form element
//         if (formRef.current && !formRef.current.contains(event.target)) {
//             onClose(); // Call onClose function passed from parent component
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const validationErrors = validateFormData(formData);
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//         } else {
//             console.log('Form submitted:', formData);
//             // Clear form fields and state
//             setFormData({
//                 username: '',
//                 email: '',
//                 number: '',
//                 textarea: '',
//                 text: '',
//                 experienceMonths: '',
//                 experienceYears: '',
//                 jobRole: '',
//                 expectedCTC: '',
//             });
//             setErrors({});
//             setShowExperienceInputs(false); // Reset any conditional UI state related to experience inputs
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormData({
//             ...formData,
//             [name]: value,
//         });

//         // Clear error for this field when user starts typing
//         setErrors({
//             ...errors,
//             [name]: '',
//         });
//     };

//     const handleRadioChange = (event) => {
//         setShowExperienceInputs(event.target.value === 'Experience');
//     };

//     const validateFormData = (data) => {
//         const errors = {};

//         // Validation logic...
        
//         return errors;
//     };

//     return (
//         <Box className="pop-form" sx={{
//             display: 'flex', alignItems: 'center',
//             justifyContent: 'center', minHeight: '100vh',
//         }}>
//             <Box className="pop_form_child" sx={{
//                 bgcolor: "white", boxShadow: 24, p: 4, borderRadius: 2, width: "600px", height: "80vh", margin: "5px", overflowY: 'scroll',
//             }} ref={formRef}>
//                 <Box width={"100%"}>
//                     <FormControl>
//                         <Box>
//                             <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>Apply Now</Typography>
//                             <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>{heading}</Typography>
//                         </Box>

//                         <TextField
//                             id="username"
//                             name="username"
//                             label="Username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             error={!!errors.username}
//                             helperText={errors.username}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         {/* Other form fields... */}

//                         <Button
//                             onClick={handleSubmit}
//                             sx={{ marginTop: "15px" }}
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                         >
//                             Submit
//                         </Button>
//                     </FormControl>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default CareerForm;










// import React, { useState, useRef, useEffect } from 'react';
// import { Box, FormControl, Typography, RadioGroup, Radio, Grid, Button, FormControlLabel, TextField } from '@mui/material';

// const CareerForm = ({ onClose, heading }) => {
//     const [showExperienceInputs, setShowExperienceInputs] = useState(false);

//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         number: '',
//         textarea: '',
//         text: '',
//         experienceMonths: '',
//         experienceYears: '',
//         jobRole: '',
//         expectedCTC: '',
//     });

//     const [errors, setErrors] = useState({});
//     const formRef = useRef(null);

//     useEffect(() => {
//         // Add event listener to detect clicks outside the form
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             // Clean up event listener on component unmount
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleClickOutside = (event) => {
//         // Close the form if clicked outside of the form element
//         if (formRef.current && !formRef.current.contains(event.target)) {
//             onClose(); // Call onClose function passed from parent component
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const validationErrors = validateFormData(formData);
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//         } else {
//             console.log('Form submitted:', formData);
//             // Clear form fields and state
//             setFormData({
//                 username: '',
//                 email: '',
//                 number: '',
//                 textarea: '',
//                 text: '',
//                 experienceMonths: '',
//                 experienceYears: '',
//                 jobRole: '',
//                 expectedCTC: '',
//             });
//             setErrors({});
//             setShowExperienceInputs(false); // Reset any conditional UI state related to experience inputs
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormData({
//             ...formData,
//             [name]: value,
//         });

//         // Clear error for this field when user starts typing
//         setErrors({
//             ...errors,
//             [name]: '',
//         });
//     };

//     const handleRadioChange = (event) => {
//         setShowExperienceInputs(event.target.value === 'Experience');
//     };

//     const validateFormData = (data) => {
//         const errors = {};

//         if (!data.username.trim()) {
//             errors.username = 'Username is required';
//         } else if (!/^[a-zA-Z]+$/.test(data.username)) {
//             errors.username = 'Username must only contain letters';
//         } else if (data.username.length < 2) {
//             errors.username = 'Username must be at least 2 characters';
//         }

//         if (!data.email.trim()) {
//             errors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//             errors.email = 'Invalid email format';
//         }

//         if (!data.number.trim()) {
//             errors.number = 'Phone number is required';
//         } else if (!/^\d{10}$/.test(data.number)) {
//             errors.number = 'Phone number must be exactly 10 digits';
//         }

//         if (!data.textarea.trim()) {
//             errors.textarea = 'Project information is required';
//         }

//         if (!data.text.trim()) {
//             errors.text = 'Current City is required';
//         }

//         if (showExperienceInputs) {
//             if (!data.experienceMonths.trim()) {
//                 errors.experienceMonths = 'Months of Experience is required';
//             } else if (!/^\d+$/.test(data.experienceMonths)) {
//                 errors.experienceMonths = 'Months of Experience must be a number';
//             }

//             if (!data.experienceYears.trim()) {
//                 errors.experienceYears = 'Years of Experience is required';
//             } else if (!/^\d+$/.test(data.experienceYears)) {
//                 errors.experienceYears = 'Years of Experience must be a number';
//             }
//         }

//         if (!data.jobRole.trim()) {
//             errors.jobRole = 'Select job role is required';
//         }

//         if (!data.expectedCTC.trim()) {
//             errors.expectedCTC = 'Expected CTC is required';
//         } else if (!/^\d+$/.test(data.expectedCTC)) {
//             errors.expectedCTC = 'Expected CTC must be a number';
//         }

//         return errors;
//     };

//     return (
//         <Box className="pop-form" sx={{
//             display: 'flex', alignItems: 'center',
//             justifyContent: 'center', minHeight: '100vh',
//         }}>
//             <Box className="pop_form_child" sx={{
//                 bgcolor: "white", boxShadow: 24, p: 4, borderRadius: 2, width: "600px", height: "80vh", margin: "5px", overflowY: 'scroll',
//             }} ref={formRef}>
//                 <Box width={"100%"} onClick={onClose}>
//                     <FormControl onClick={(e) => e.stopPropagation()}>
//                         <Box>
//                             <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>Apply Now</Typography>
//                             <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>{heading}</Typography>
//                         </Box>

//                         <TextField
//                             id="username"
//                             name="username"
//                             label="Username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             error={!!errors.username}
//                             helperText={errors.username}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <TextField
//                             id="email"
//                             name="email"
//                             label="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             error={!!errors.email}
//                             helperText={errors.email}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <TextField
//                             id="number"
//                             name="number"
//                             label="Phone Number"
//                             value={formData.number}
//                             onChange={handleChange}
//                             error={!!errors.number}
//                             helperText={errors.number}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <TextField
//                             id="text"
//                             name="text"
//                             label="Current City"
//                             value={formData.text}
//                             onChange={handleChange}
//                             error={!!errors.text}
//                             helperText={errors.text}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <RadioGroup
//                             sx={{ justifyContent: "space-between", flexDirection: "row" }}
//                             aria-labelledby="demo-controlled-radio-buttons-group"
//                             name="controlled-radio-buttons-group"
//                             value={showExperienceInputs ? 'Experience' : 'Fresher'}
//                             onChange={handleRadioChange}
//                         >
//                             <FormControlLabel value="Fresher" control={<Radio />} label="Fresher" />
//                             <FormControlLabel value="Experience" control={<Radio />} label="Experience" />
//                         </RadioGroup>

//                         {showExperienceInputs && (
//                             <Grid container spacing={2}>
//                                 <Grid item xs={6}>
//                                     <TextField
//                                         id="experienceMonths"
//                                         name="experienceMonths"
//                                         label="Months of Experience"
//                                         value={formData.experienceMonths}
//                                         onChange={handleChange}
//                                         error={!!errors.experienceMonths}
//                                         helperText={errors.experienceMonths}
//                                         fullWidth
//                                         required
//                                         sx={{ marginTop: "10px" }} 
//                                     />
//                                 </Grid>
//                                 <Grid item xs={6}>
//                                     <TextField
//                                         id="experienceYears"
//                                         name="experienceYears"
//                                         label="Years of Experience"
//                                         value={formData.experienceYears}
//                                         onChange={handleChange}
//                                         error={!!errors.experienceYears}
//                                         helperText={errors.experienceYears}
//                                         fullWidth
//                                         required
//                                         sx={{ marginTop: "10px" }} 
//                                     />
//                                 </Grid>
//                             </Grid>
//                         )}

//                         <TextField
//                             id="jobRole"
//                             name="jobRole"
//                             label="Select job role"
//                             value={formData.jobRole}
//                             onChange={handleChange}
//                             error={!!errors.jobRole}
//                             helperText={errors.jobRole}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <TextField
//                             id="expectedCTC"
//                             name="expectedCTC"
//                             label="Expected CTC"
//                             value={formData.expectedCTC}
//                             onChange={handleChange}
//                             error={!!errors.expectedCTC}
//                             helperText={errors.expectedCTC}
//                             fullWidth
//                             required
//                             sx={{ marginTop: "10px" }} 
//                         />

//                         <Button
//                             onClick={handleSubmit}
//                             sx={{ marginTop: "15px" }}
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                         >
//                             Submit
//                         </Button>
//                     </FormControl>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default CareerForm;







import React, { useState, useRef, useEffect } from 'react';
import { Box, FormControl, Typography, RadioGroup, Radio, Grid, Button, FormControlLabel, TextField } from '@mui/material';

const CareerForm = ({ onClose, heading }) => {
    const [showExperienceInputs, setShowExperienceInputs] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        textarea: '',
        text: '',
        experienceMonths: '',
        experienceYears: '',
        jobRole: '',
        expectedCTC: '',
    });

    const [errors, setErrors] = useState({});
    const formRef = useRef(null);

    useEffect(() => {
        // Add event listener to detect clicks outside the form
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        // Close the form if clicked outside of the form element
        if (formRef.current && !formRef.current.contains(event.target)) {
            onClose(); // Call onClose function passed from parent component
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Form submitted:', formData);
            // Clear form fields and state
            setFormData({
                username: '',
                email: '',
                number: '',
                textarea: '',
                text: '',
                experienceMonths: '',
                experienceYears: '',
                jobRole: '',
                expectedCTC: '',
            });
            setErrors({});
            setShowExperienceInputs(false); // Reset any conditional UI state related to experience inputs
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error for this field when user starts typing
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleRadioChange = (event) => {
        setShowExperienceInputs(event.target.value === 'Experience');
    };

    const validateFormData = (data) => {
        const errors = {};

        if (!data.username.trim()) {
            errors.username = 'Username is required';
        } else if (!/^[a-zA-Z]+$/.test(data.username)) {
            errors.username = 'Username must only contain letters';
        } else if (data.username.length < 2) {
            errors.username = 'Username must be at least 2 characters';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Invalid email format';
        }

        if (!data.number.trim()) {
            errors.number = 'Phone number is required';
        } else if (!/^\d{10}$/.test(data.number)) {
            errors.number = 'Phone number must be exactly 10 digits';
        }

        if (!data.textarea.trim()) {
            errors.textarea = 'Project information is required';
        }

        if (!data.text.trim()) {
            errors.text = 'Current City is required';
        }

        if (showExperienceInputs) {
            if (!data.experienceMonths.trim()) {
                errors.experienceMonths = 'Months of Experience is required';
            } else if (!/^\d+$/.test(data.experienceMonths)) {
                errors.experienceMonths = 'Months of Experience must be a number';
            }

            if (!data.experienceYears.trim()) {
                errors.experienceYears = 'Years of Experience is required';
            } else if (!/^\d+$/.test(data.experienceYears)) {
                errors.experienceYears = 'Years of Experience must be a number';
            }
        }

        if (!data.jobRole.trim()) {
            errors.jobRole = 'Select job role is required';
        }

        if (!data.expectedCTC.trim()) {
            errors.expectedCTC = 'Expected CTC is required';
        } else if (!/^\d+$/.test(data.expectedCTC)) {
            errors.expectedCTC = 'Expected CTC must be a number';
        }

        return errors;
    };

    return (
        <Box className="pop-form" sx={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', minHeight: '100vh',
        }}>
            <Box className="pop_form_child" sx={{
                bgcolor: "white", boxShadow: 24, p: 4, borderRadius: 2, width: "600px", height: "80vh", margin: "5px", overflowY: 'scroll',
            }} ref={formRef}>
                <FormControl>
                    <Box>
                        <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>Apply Now</Typography>
                        <Typography textAlign={"center"} color={"#0160E7"} fontSize={25} fontWeight={700}>{heading}</Typography>
                    </Box>

                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        value={formData.username}
                        onChange={handleChange}
                        error={!!errors.username}
                        helperText={errors.username}
                        fullWidth
                        required
                        sx={{ marginTop: "10px" }} 
                    />

                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        fullWidth
                        required
                        sx={{ marginTop: "10px" }} 
                    />

                    <TextField
                        id="number"
                        name="number"
                        label="Phone Number"
                        value={formData.number}
                        onChange={handleChange}
                        error={!!errors.number}
                        helperText={errors.number}
                        fullWidth
                        required
                        sx={{ marginTop: "10px" }} 
                    />

                    <TextField
                        id="text"
                        name="text"
                        label="Current City"
                        value={formData.text}
                        onChange={handleChange}
                        error={!!errors.text}
                        helperText={errors.text}
                        fullWidth
                        required
                        sx={{ marginTop: "10px" }} 
                    />

                    <RadioGroup
                        sx={{ justifyContent: "space-between", flexDirection: "row" }}
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={showExperienceInputs ? 'Experience' : 'Fresher'}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="Fresher" control={<Radio />} label="Fresher" />
                        <FormControlLabel value="Experience" control={<Radio />} label="Experience" />
                    </RadioGroup>

                    {showExperienceInputs && (
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    id="experienceMonths"
                                    name="experienceMonths"
                                    label="Months of Experience"
                                    value={formData.experienceMonths}
                                    onChange={handleChange}
                                    error={!!errors.experienceMonths}
                                    helperText={errors.experienceMonths}
                                    fullWidth
                                    required
                                    sx={{ marginTop: "10px" }} 
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="experienceYears"
                                    name="experienceYears"
                                    label="Years of Experience"
                                    value={formData.experienceYears}
                                    onChange={handleChange}
                                    error={!!errors.experienceYears}
                                    helperText={errors.experienceYears}
                                    fullWidth
                                    required
                                    sx={{ marginTop: "10px" }} 
                                />
                            </Grid>
                        </Grid>
                    )}

                    <TextField
                        id="jobRole"
                        name="jobRole"
                        label="Select job role"
                        value={formData.jobRole}
                        onChange={handleChange}
                        error={!!errors.jobRole}
                        helperText={errors.jobRole}
                        fullWidth
                        required
                        sx={{ marginTop: "10px" }} 
                    />

                    <TextField
                        id="expectedCTC"
                        name="expectedCTC"
                        label="Expected CTC"
                        value={formData.expectedCTC}
                        onChange={handleChange}
                        error={!!errors.expectedCTC}
                        helperText={errors.expectedCTC}
                        fullWidth
                        required
                        sx={{ marginTop: "10px" }} 
                    />

                    <Button
                        onClick={handleSubmit}
                        sx={{ marginTop: "15px" }}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
}

export default CareerForm;
