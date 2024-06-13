import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, Backdrop } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Careertoggle7() {
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
                        HR Executive (Any Graduate can apply) </Typography>
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

                                Lead the recruitment process to attract top-tier talent.

                                </Typography>
                            </Box>

                            <Box display={"flex"} alignItems={"start"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Develop and implement HR strategies that support business objectives.

                                </Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Oversee employee relations, including conflict resolution and performance evaluations

                                </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Manage HR records, such as contracts, leave applications, and attendance data
                                </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" > Organize training & development initiatives to enhance employee skills.

                                </Typography>

                            </Box>

                        </Box>

                        <Box width={"70%"}>
                            <Typography fontWeight={600} fontSize={22} marginY={2} >Qualifications:</Typography>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" > Proven experience as an HR executive or similar role.


                                </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Familiarity with labor laws and HR best practices.

                                </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" > Strong interpersonal and negotiation skills.
                                </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Proficiency in HR software and Microsoft Office Suite.

                                </Typography>
                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Strong grasp of responsive design principles and e-commerce best practices.

                                </Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >A degree in Human Resources or related field.


                                </Typography>
                            </Box>

                        </Box>

                        <Box width={"70%"}>
                            <Typography fontWeight={600} fontSize={22} marginY={2} >Why Soham Web Solutions:

                            </Typography>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Be part of a company that values its human capital as its greatest asset.

                                </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Work in a dynamic environment that encourages innovation and growth.

                                </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >  Influence the company culture and play a key role in employee satisfaction.

                                </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >  Enjoy opportunities for professional development and career advancement.

                                </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >At Soham Web Solutions, we believe that the right HR Executive can be the catalyst for a thriving workplace. If you're ready to take on this challenge and make a significant impact, we'd love to meet you.
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

                 <CareerForm heading="HR Executive "/>
                     
                            
                    
                </Modal>


            </Accordion>

        </Box>

    );
}

export default Careertoggle7;
