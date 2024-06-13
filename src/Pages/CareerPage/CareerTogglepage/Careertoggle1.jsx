import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, Backdrop, Fade } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Careertoggle1() {
    const [expanded, setExpanded] = useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <Box margin={2.5} id="box-shadow" >
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary   >
                    <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} paddingY={1.5}>
                        <Typography variant='h5' id="Hr-excutive" paddingLeft={1.5}  >
                            Frontend Developer Any Graduate can apply)
                        </Typography>
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
                            <Typography id="Typography-gray-career" > 12,Civil Lines,Chamunda Complex,Dewas  </Typography>
                        </Box>

                        <Box className="career-pregraph ">
                            <Typography fontWeight={600} fontSize={22} marginY={2} >Roles & Responsibilities</Typography>

                            <Box display={"flex"} alignItems={"start"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >

                                    Transform design concepts into reality using HTML, CSS, and JavaScript.</Typography>
                            </Box>

                            <Box display={"flex"} alignItems={"start"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Ensure a seamless user experience with responsive design and cross-browser compatibility.</Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Collaborate with backend developers to integrate APIs and other server-side functionalities.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Optimize web applications for maximum speed and scalability.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Stay up-to-date with emerging trends and technologies in frontend development.
                                </Typography>

                            </Box>

                        </Box>

                        <Box width={"70%"}>
                            <Typography fontWeight={600} fontSize={22} marginY={2} >Qualifications:</Typography>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Proficiency in frontend languages and frameworks (e.g., React, Vue.js, Angular).</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >A strong understanding of web markup and pre-processing platforms (e.g., SASS, LESS).</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Familiarity with code versioning tools (e.g., Git) and agile methodologies.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >A portfolio that showcases your ability to turn ideas into visual narratives.</Typography>
                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" > Excellent problem-solving skills and attention to detail.</Typography>
                            </Box>

                        </Box>

                        <Box width={"70%"}>
                            <Typography fontWeight={600} fontSize={22} marginY={2} >Why Soham Web Solutions:</Typography>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Work with a team that values innovation and creativity.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Engage in projects that challenge and enhance your skills.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" > Enjoy a collaborative work environment that fosters growth.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Be part of a company that's at the forefront of web technology.</Typography>

                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Ready to code your career path with us? Apply now and let's build the web of tomorrow, together!</Typography>

                            </Box>
                        </Box>
                    </Box>
                </AccordionDetails >

                <CareerButton onClick={toggleForm} />

                <Modal
                    open={showForm}
                    onClose={toggleForm}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >

                    <CareerForm heading=" Frontend Developer" />



                </Modal>
            </Accordion>

        </Box>

    );
}

export default Careertoggle1;

