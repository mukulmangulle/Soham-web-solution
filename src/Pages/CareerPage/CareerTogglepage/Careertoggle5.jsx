import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, Backdrop, Fade } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Careertoggle5() {
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
                        Graphic Designer (Any Graduate can apply)                        </Typography>
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

                                Design stunning graphics that resonate with our clients' vision.</Typography>
                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Work closely with our web development team to ensure aesthetic coherence.</Typography>
                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Stay updated with the latest design trends to keep our creations cutting-edge.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Handle a diverse range of projects, including website graphics, promotional materials, and brand identity design.</Typography>

                            </Box>
                           

                        </Box>

                        <Box className="careertoggle">
                            <Typography className='toggle-typo' marginY={2} >Qualifications:</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Proficiency in graphic design software, particularly the Adobe Creative Suite.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >A robust portfolio demonstrating a variety of design styles and projects.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Strong communication skills to effectively convey design concepts.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >A An eye for detail and a commitment to delivering high-quality work.</Typography>
                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" > The ability to manage time effectively and meet project deadlines.</Typography>
                            </Box>

                        </Box>

                        <Box className="careertoggle">
                            <Typography  className='toggle-typo' marginY={2} >Why Soham Web Solutions:</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Be part of a dynamic company that thrives on creativity and innovation.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Work in an environment that encourages skill development and personal growth.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" > Collaborate with a diverse range of clients from various sectors.</Typography>

                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Enjoy a supportive workplace that values your creative input and well-being.</Typography>

                            </Box>

                            <Box className="D-CENTER" >
                               
                                <Typography  className="Typography-gray-career margin-left-1" >If you're ready to unleash your creative spirit and make a lasting impact in the digital realm, Soham Web Solutions is your platform. Let's innovate, inspire, and implement designs that tell stories.</Typography>

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

export default Careertoggle5;

