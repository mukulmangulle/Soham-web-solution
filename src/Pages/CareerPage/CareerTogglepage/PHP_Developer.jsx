
import React, { useState } from 'react';
import { Typography, Box, Modal, Backdrop } from '@mui/material';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function PHP_Developer() {
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
                    <Typography className='career_toggle_subheading' >Experience :</Typography>
                    <Typography className='Typography-gray-career space_career_toggle' > 0-1 year</Typography>
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
                            Develop and maintain dynamic websites and web applications using PHP.
                        </Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Utilize various PHP frameworks such as Laravel, Symfony, or CodeIgniter to create scalable applications.</Typography>
                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Collaborate with frontend developers to ensure seamless integration with user interfaces.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Write clean, well-designed code and contribute to all phases of the development lifecycle.
                        </Typography>

                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Troubleshoot, test, and maintain the core product software to ensure strong optimization and functionality.
                        </Typography>

                    </Box>
                </Box>

                <Box className="careertoggle">
                    <Typography className='toggle_heading_career' >Qualifications:</Typography>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Strong knowledge of PHP web frameworks and understanding of MVC design patterns.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Proficiency in front-end technologies, including JavaScript, HTML5, and CSS3.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Experience with SQL/NoSQL databases and their declarative query languages.</Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >A Familiarity with object-oriented PHP programming and common PHP or web server exploits and their solutions.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" > Knowledge of code versioning tools, such as Git.</Typography>
                    </Box>
                </Box>

                <Box className="careertoggle">
                    <Typography className='toggle_heading_career' >Why Soham Web Solutions:</Typography>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >
                            Be part of a forward-thinking company that embraces new technologies.                                    </Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Work in a collaborative environment that values each team member's input.</Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Engage with diverse projects that challenge your skills and help you grow.</Typography>
                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Enjoy a culture that supports work-life balance and employee well-being.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Are you ready to code with a purpose? If you're a PHP Developer looking for an opportunity to make an impact, apply to Soham Web Solutions today and let's innovate together!</Typography>
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

                            <CareerForm heading=" PHP Developer" onClose={handleCloseModal} />
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </Box>
    );
}

export default PHP_Developer;

