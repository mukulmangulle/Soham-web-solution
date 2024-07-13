import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, Backdrop, Fade } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Careertoggle6() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleCloseModal = () => {
        setShowForm(false);
    };

    return (
        <Box  >

            <Box className="content-toggle" >
                <Box className="D-CENTER"  >
                    <Typography className='career_toggle_subheading' >Experience :</Typography>
                    <Typography className='Typography-gray-career space_career_toggle'  > 0-1 year</Typography>
                </Box>

                <Box className="D-CENTER" marginY={1}>
                    <Typography className='career_toggle_subheading'>Number of opening:</Typography>
                    <Typography className='Typography-gray-career space_career_toggle' > 1</Typography>
                </Box>

                <Box className="D-CENTER" flexWrap={"wrap"} marginBottom={3}>
                    <Typography className='career_toggle_subheading'>Location :</Typography>
                    <Typography className='Typography-gray-career space_career_toggle'> 12,Civil Lines,Chamunda Complex,Dewas  </Typography>
                </Box>

                <Box className="career-pregraph ">
                    <Typography className='toggle_heading_career'>Roles & Responsibilities</Typography>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >

                            Develop high-quality mobile applications using React Native framework.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Collaborate with cross-functional teams to define, design, and ship new features.</Typography>
                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Ensure robust code quality and responsiveness of applications.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Maintain code and write automated tests to ensure the product is of the highest quality.</Typography>

                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Troubleshoot and debug to optimize performance.
                        </Typography>

                    </Box>

                </Box>

                <Box className="careertoggle">
                    <Typography className='toggle_heading_career'>Qualifications:</Typography>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Proficiency in React Native with a solid understanding of its ecosystem.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Experience with third-party libraries and APIs.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Familiarity with code versioning tools (such as Git).</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >A Strong problem-solving skills and a detail-oriented mindset.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" > Ability to work in a fast-paced environment and adapt to changing requirements.</Typography>
                    </Box>

                </Box>

                <Box className="careertoggle">
                    <Typography className='toggle_heading_career' >Why Soham Web Solutions:</Typography>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Be at the forefront of mobile technology in a company that champions innovation.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Collaborate with a team that values creativity and fresh ideas.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Work on projects that reach a diverse and global audience.</Typography>

                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Enjoy a culture that supports continuous learning and career growth.</Typography>

                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className="Typography-gray-career margin-left-1" >If you're eager to take on the challenge and shape the future of mobile applications with Soham Web Solutions, we would love to hear from you. Together, let's turn visionary concepts into user-friendly realities.</Typography>

                    </Box>


                </Box>
                <Box>
                    <CareerButton onClick={toggleForm} />

                    <Modal
                        open={showForm}
                        onClose={handleCloseModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            sx: { backdropFilter: 'blur(0.01px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '100vh',
                        }}>
                            <CareerForm heading="Mobile App Developer (React Native) " onClose={handleCloseModal} />
                        </Box>
                    </Modal>
                </Box>
            </Box>


        </Box>

    );
}

export default Careertoggle6;

