


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
        <Box expanded={expanded === 'panel1'} onChange={handleChange('panel1')}   >
           
                    <Box className="content-toggle" >
                        <Box className="D-CENTER"  >
                            <Typography className='career_toggle_subheading' >Experience :</Typography>
                            <Typography className='Typography-gray-career'   >0-1 year</Typography>
                        </Box>

                        <Box className="D-CENTER" marginY={1}>
                            <Typography className='career_toggle_subheading'>NO of  Openings:</Typography>
                            <Typography className='Typography-gray-career'   >1</Typography>
                        </Box>

                        <Box className="D-CENTER" flexWrap={"wrap"} marginBottom={3}>
                            <Typography className='career_toggle_subheading'>Location :</Typography>
                            <Typography className='Typography-gray-career'  > 12,Civil Lines,Chamunda Complex,Dewas  </Typography>
                        </Box>

                        <Box className="career-pregraph ">
                            <Typography className='toggle_heading_career'  >Roles & Responsibilities</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >

                                    Transform design concepts into reality using HTML, CSS, and JavaScript.</Typography>
                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Ensure a seamless user experience with responsive design and cross-browser compatibility.</Typography>
                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Collaborate with backend developers to integrate APIs and other server-side functionalities.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Optimize web applications for maximum speed and scalability.</Typography>

                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography className=" Typography-gray-career    margin-left-1" >Stay up-to-date with emerging trends and technologies in frontend development.
                                </Typography>

                            </Box>

                        </Box>

                        <Box className="careertoggle">
                            <Typography className='toggle_heading_career'  >Qualifications:</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Proficiency in frontend languages and frameworks (e.g., React, Vue.js, Angular).</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >A strong understanding of web markup and pre-processing platforms (e.g., SASS, LESS).</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Familiarity with code versioning tools (e.g., Git) and agile methodologies.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >A portfolio that showcases your ability to turn ideas into visual narratives.</Typography>
                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" > Excellent problem-solving skills and attention to detail.</Typography>
                            </Box>

                        </Box>

                        <Box className="careertoggle">
                            <Typography className='toggle_heading_career'  >Why Soham Web Solutions:</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Work with a team that values innovation and creativity.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Engage in projects that challenge and enhance your skills.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" > Enjoy a collaborative work environment that fosters growth.</Typography>

                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Be part of a company that's at the forefront of web technology.</Typography>

                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Ready to code your career path with us? Apply now and let's build the web of tomorrow, together!</Typography>

                            </Box>
                       

                        <CareerButton onClick={toggleForm} />

                        <Modal
                            open={showForm}
                            onClose={toggleForm}
                            closeAfterTransition
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

export default Careertoggle1;

