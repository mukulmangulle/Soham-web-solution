import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, Backdrop } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Careertoggle6() {
    const [expanded, setExpanded] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box margin={2.5} id="box-shadow" >
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary   >
                <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} paddingY={1.5}>
                    <Typography variant='h5' id="Hr-excutive" paddingLeft={1.5}  >
                    Mobile App Developer (React Native) (Any Graduate can apply)</Typography>
                    <AddIcon fontSize='large' sx={{ color: "#0160E7" }} />
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box paddingX={1.5} >

                    <Box display={'flex'}>
                        <Typography fontSize={22} fontWeight={600}>Experience :</Typography>
                        <Typography id="Typography-gray-career" >0-1 year</Typography>
                    </Box>

                    <Box display={'flex'} marginY={1}>
                        <Typography fontSize={22} fontWeight={600} >NO of  Openings:</Typography>
                        <Typography id="Typography-gray-career" >1</Typography>
                    </Box>

                    <Box display={'flex'} flexWrap={"wrap"} marginBottom={3}>
                        <Typography fontSize={22} fontWeight={600}>Location :</Typography>
                        <Typography id="Typography-gray-career" > 12,Civil Lines,Chamunda Complex,Dewas </Typography>
                    </Box>

                    <Box className="career-pregraph ">
                        <Typography fontWeight={600} fontSize={22} marginY={2} >Roles & Responsibilities</Typography>

                        <Box display={"flex"} alignItems={"start"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >

                            Develop high-quality mobile applications using React Native framework.</Typography>
                        </Box>

                        <Box display={"flex"} alignItems={"start"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Collaborate with cross-functional teams to define, design, and ship new features.</Typography>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Ensure robust code quality and responsiveness of applications.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Maintain code and write automated tests to ensure the product is of the highest quality.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Troubleshoot and debug to optimize performance.</Typography>

                        </Box>

                    </Box>

                    <Box width={"70%"}>
                        <Typography fontWeight={600} fontSize={22} marginY={2} >Qualifications:</Typography>

                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Proficiency in React Native with a solid understanding of its ecosystem.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Experience with third-party libraries and APIs.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" > Familiarity with code versioning tools (such as Git). </Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Strong problem-solving skills and a detail-oriented mindset.</Typography>
                        </Box>

                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Ability to work in a fast-paced environment and adapt to changing requirements.</Typography>
                        </Box>
                       

                    </Box>

                    <Box width={"70%"}>
                        <Typography fontWeight={600} fontSize={22} marginY={2} >Why Soham Web Solutions:</Typography>

                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Be at the forefront of mobile technology in a company that champions innovation.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Collaborate with a team that values creativity and fresh ideas.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" > Work on projects that reach a diverse and global audience.</Typography>

                        </Box>

                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Enjoy a culture that supports continuous learning and career growth.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >If you're eager to take on the challenge and shape the future of mobile applications with Soham Web Solutions, we would love to hear from you. Together, let's turn visionary concepts into user-friendly realities.
                            </Typography>

                        </Box>
                    </Box>
                </Box>
            </AccordionDetails>
            <CareerButton onClick={toggleForm}/>
                    <Modal
                        open={showForm}
                        onClose={toggleForm}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >

                 <CareerForm heading="  Mobile App Developer (React Native)"/>
                     
                            
                    
                </Modal>

        </Accordion>

    </Box>

    );
}

export default Careertoggle6;
