import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, Backdrop } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Careertoggle3() {
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
                            Wordpress Developer (Any Graduate can apply) </Typography>
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

                                    Design and implement attractive and functional websites using WordPress.</Typography>
                            </Box>

                            <Box display={"flex"} alignItems={"start"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Customize WordPress themes and plugins to meet client specifications.</Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Ensure website performance and troubleshoot issues.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Collaborate with the design team to ensure visual coherence and user experience.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Maintain and update website features and security.</Typography>

                            </Box>

                        </Box>

                        <Box width={"70%"}>
                            <Typography fontWeight={600} fontSize={22} marginY={2} >Qualifications:</Typography>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Proficiency in WordPress, including custom theme and plugin development.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Strong understanding of front-end technologies, such as HTML5, CSS3, JavaScript, and jQuery.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" > Experience with PHP and MySQL. </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Familiarity with website architecture and aesthetics.</Typography>
                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Knowledge of SEO best practices.</Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Excellent problem-solving skills and attention to detail.
                                </Typography>
                            </Box>

                        </Box>

                        <Box width={"70%"}>

                            <Typography fontWeight={600} fontSize={22} marginY={2} >Why Soham Web Solutions:</Typography>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Work on projects that challenge your skills and allow for personal growth.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Enjoy a supportive work environment that encourages new ideas.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" > Contribute to projects that make a real difference for our clients.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >If you're a WordPress enthusiast with a knack for creating stunning and user-friendly websites, we'd love to have you on board. Apply to Soham Web Solutions and let's create digital masterpieces together!
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

                 <CareerForm heading=" Wordpress Developer"/>
                     
                            
                    
                </Modal>


            </Accordion>

        </Box>
    );
}

export default Careertoggle3;
