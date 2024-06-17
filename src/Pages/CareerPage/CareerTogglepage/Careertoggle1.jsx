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
        <Box margin={2.5} id="box-shadow"   >
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} > 
                <AccordionSummary   >
                    <Box className="flex-between careertoggle"  >
                        <Typography variant='h5' className="Hr-excutive"   >
                            Frontend Developer (Any Graduate can apply)
                        </Typography>
                        <AddIcon className='add-icon' />
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="content-toggle" >
                        <Box className="D-CENTER"  >
                            <Typography className='toggle-typo' >Experience :</Typography>
                            <Typography  color={"gray"}  >0-1 year</Typography>
                        </Box>

                        <Box className="D-CENTER" marginY={1}>
                            <Typography className='toggle-typo'>NO of  Openings:</Typography>
                            <Typography  color={"gray"}  >1</Typography>
                        </Box>

                        <Box className="D-CENTER" flexWrap={"wrap"}  marginBottom={3}>
                            <Typography className='toggle-typo'>Location :</Typography>
                            <Typography  color={"gray"} > 12,Civil Lines,Chamunda Complex,Dewas  </Typography>
                        </Box>

                        <Box className="career-pregraph ">
                            <Typography className='toggle-typo' marginY={2} >Roles & Responsibilities</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >

                                    Transform design concepts into reality using HTML, CSS, and JavaScript.</Typography>
                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Ensure a seamless user experience with responsive design and cross-browser compatibility.</Typography>
                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Collaborate with backend developers to integrate APIs and other server-side functionalities.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Optimize web applications for maximum speed and scalability.</Typography>

                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Stay up-to-date with emerging trends and technologies in frontend development.
                                </Typography>

                            </Box>

                        </Box>

                        <Box className="careertoggle">
                            <Typography className='toggle-typo' marginY={2} >Qualifications:</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Proficiency in frontend languages and frameworks (e.g., React, Vue.js, Angular).</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >A strong understanding of web markup and pre-processing platforms (e.g., SASS, LESS).</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Familiarity with code versioning tools (e.g., Git) and agile methodologies.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >A portfolio that showcases your ability to turn ideas into visual narratives.</Typography>
                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" > Excellent problem-solving skills and attention to detail.</Typography>
                            </Box>

                        </Box>

                        <Box className="careertoggle">
                            <Typography  className='toggle-typo' marginY={2} >Why Soham Web Solutions:</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Work with a team that values innovation and creativity.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Engage in projects that challenge and enhance your skills.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" > Enjoy a collaborative work environment that fosters growth.</Typography>

                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Be part of a company that's at the forefront of web technology.</Typography>

                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Ready to code your career path with us? Apply now and let's build the web of tomorrow, together!</Typography>

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

