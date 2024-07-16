import React, { useState } from 'react';
import { Typography, Box, Modal, Backdrop } from '@mui/material';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Shopify_Developer() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleCloseModal = () => {
        setShowForm(false);
    };

    return (
        <Box >
            <Box className="content-toggle" >
                <Box className="D-CENTER"  >
                    <Typography className='career_toggle_subheading'>Experience :</Typography>
                    <Typography className='Typography-gray-career space_career_toggle'  > 0-1 year</Typography>
                </Box>

                <Box className="D-CENTER" marginY={1}>
                    <Typography className='career_toggle_subheading'>Number of opening:</Typography>
                    <Typography className='Typography-gray-career space_career_toggle'  > 1</Typography>
                </Box>

                <Box className="D-CENTER" flexWrap={"wrap"} marginBottom={3}>
                    <Typography className='career_toggle_subheading'>Location :</Typography>
                    <Typography className='Typography-gray-career space_career_toggle'> 12,Civil Lines,Chamunda Complex,Dewas  </Typography>
                </Box>

                <Box className="career-pregraph ">
                    <Typography className='toggle_heading_career' >Roles & Responsibilities</Typography>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >
                            Develop custom Shopify themes and modify pre-existing templates to meet client needs.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Implement and maintain Shopify apps to enhance website functionality.</Typography>
                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Ensure the technical feasibility of UI/UX designs and optimize for mobile platforms.</Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Collaborate with cross-functional teams to ensure a consistent and effective end-user experience.</Typography>
                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Conduct website performance tests and optimize for speed and scalability.
                        </Typography>
                    </Box>
                </Box>

                <Box className="careertoggle">
                    <Typography className='toggle_heading_career' >Qualifications:</Typography>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Proven experience as a Shopify Developer with a strong understanding of the Shopify platform.
                        </Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Proficiency in web technologies such as HTML5, CSS3, JavaScript, and Liquid.</Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Experience with Shopify's theming system and store setup.
                        </Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >A Familiarity with payment gateway integration and third-party APIs.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" > Strong grasp of responsive design principles and e-commerce best practices.</Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" > Excellent problem-solving skills and the ability to work in a fast-paced environment.</Typography>
                    </Box>
                </Box>

                <Box className="careertoggle">
                    <Typography className='toggle_heading_career'>Why Soham Web Solutions:</Typography>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Be at the forefront of e-commerce development and work with the latest technologies.</Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Join a team that values creativity, collaboration, and innovation.</Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Participate in diverse projects that push the boundaries of online retail.</Typography>
                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Enjoy a culture that supports professional growth and personal achievement.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className="Typography-gray-career margin-left-1" >If you're ready to take your Shopify expertise to new heights and contribute to the success of online businesses, Soham Web Solutions is your next destination. Apply now and let's revolutionize the e-commerce space together!</Typography>
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
                        }}  >
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '100vh',
                        }}>
                            <CareerForm heading="Shopify Developer" onClose={handleCloseModal} />
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </Box>

    );
}

export default Shopify_Developer;

