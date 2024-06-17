import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, Backdrop, Fade } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Careertoggle4() {
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
                        Shopify Developer (Any Graduate can apply)                        </Typography>
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
                                Develop custom Shopify themes and modify pre-existing templates to meet client needs.</Typography>
                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Implement and maintain Shopify apps to enhance website functionality.</Typography>
                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Ensure the technical feasibility of UI/UX designs and optimize for mobile platforms.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Collaborate with cross-functional teams to ensure a consistent and effective end-user experience.</Typography>

                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Conduct website performance tests and optimize for speed and scalability.
                                </Typography>

                            </Box>

                        </Box>

                        <Box className="careertoggle">
                            <Typography className='toggle-typo' marginY={2} >Qualifications:</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Proven experience as a Shopify Developer with a strong understanding of the Shopify platform.
</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Proficiency in web technologies such as HTML5, CSS3, JavaScript, and Liquid.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Experience with Shopify's theming system and store setup.
</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >A Familiarity with payment gateway integration and third-party APIs.</Typography>
                            </Box>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" > Strong grasp of responsive design principles and e-commerce best practices.</Typography>
                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" > Excellent problem-solving skills and the ability to work in a fast-paced environment.</Typography>
                            </Box>

                        </Box>

                        <Box className="careertoggle">
                            <Typography  className='toggle-typo' marginY={2} >Why Soham Web Solutions:</Typography>

                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Be at the forefront of e-commerce development and work with the latest technologies.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography className="Typography-gray-career margin-left-1" >Join a team that values creativity, collaboration, and innovation.</Typography>

                            </Box>
                            <Box className="D-CENTER" >
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" > Participate in diverse projects that push the boundaries of online retail.</Typography>

                            </Box>
                            <Box className="D-CENTER">
                                <Typography className='dot'>•</Typography>
                                <Typography  className="Typography-gray-career margin-left-1" >Enjoy a culture that supports professional growth and personal achievement.</Typography>

                            </Box>

                            <Box className="D-CENTER" >
                                <Typography  className="Typography-gray-career margin-left-1" >If you're ready to take your Shopify expertise to new heights and contribute to the success of online businesses, Soham Web Solutions is your next destination. Apply now and let's revolutionize the e-commerce space together!</Typography>

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

export default Careertoggle4;

