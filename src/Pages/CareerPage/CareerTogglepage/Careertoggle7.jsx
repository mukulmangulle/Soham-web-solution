import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, Backdrop, Fade } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Careertoggle7() {
    const [expanded, setExpanded] = useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <Box  expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <Box className="content-toggle" >
                        <Box className="D-CENTER"  >
                            <Typography className='career_toggle_subheading' >Experience :</Typography>
                            <Typography className='Typography-gray-career'  >0-1 year</Typography>
                        </Box>

                        <Box className="D-CENTER" marginY={1}>
                            <Typography className='career_toggle_subheading'>NO of  Openings:</Typography>
                            <Typography className='Typography-gray-career'  >1</Typography>
                        </Box>

                        <Box className="D-CENTER" flexWrap={"wrap"} marginBottom={3}>
                            <Typography className='career_toggle_subheading'>Location :</Typography>
                            <Typography className='Typography-gray-career' > 12,Civil Lines,Chamunda Complex,Dewas  </Typography>
                        </Box>

                        <Box className="career-pregraph ">
                            <Typography className='toggle_heading_career'>Roles & Responsibilities</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >

                                    Lead the recruitment process to attract top-tier talent.</Typography>
                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Develop and implement HR strategies that support business objectives.</Typography>
                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Oversee employee relations, including conflict resolution and performance evaluations</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Manage HR records, such as contracts, leave applications, and attendance data</Typography>

                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >  Organize training & development initiatives to enhance employee skills.
                                </Typography>

                            </Box>

                        </Box>

                        <Box className="careertoggle">
                            <Typography className='toggle_heading_career' >Qualifications:</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" > Proven experience as an HR executive or similar role.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Familiarity with labor laws and HR best practices.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Strong interpersonal and negotiation skills.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >A Proficiency in HR software and Microsoft Office Suite.</Typography>
                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" > A degree in Human Resources or related field.
                                </Typography>
                            </Box>

                        </Box>

                        <Box className="careertoggle">
                            <Typography className='toggle_heading_career'>Why Soham Web Solutions:</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Be part of a company that values its human capital as its greatest asset.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Work in a dynamic environment that encourages innovation and growth.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" > Influence the company culture and play a key role in employee satisfaction.</Typography>

                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Enjoy opportunities for professional development and career advancement.</Typography>

                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >At Soham Web Solutions, we believe that the right HR Executive can be the catalyst for a thriving workplace. If you're ready to take on this challenge and make a significant impact, we'd love to meet you.</Typography>

                            </Box>
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
                        </Box>
                    </Box>
              

        </Box>

    );
}

export default Careertoggle7;

