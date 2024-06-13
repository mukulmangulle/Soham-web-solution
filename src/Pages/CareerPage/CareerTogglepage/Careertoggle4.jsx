import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, Backdrop } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Careertoggle4() {
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
                    Shopify Developer (Any Graduate can apply) </Typography>
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

                            Develop custom Shopify themes and modify pre-existing templates to meet client needs.</Typography>
                        </Box>

                        <Box display={"flex"} alignItems={"start"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Implement and maintain Shopify apps to enhance website functionality.</Typography>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Ensure the technical feasibility of UI/UX designs and optimize for mobile platforms.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Collaborate with cross-functional teams to ensure a consistent and effective end-user experience.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Conduct website performance tests and optimize for speed and scalability.</Typography>

                        </Box>

                    </Box>

                    <Box width={"70%"}>
                        <Typography fontWeight={600} fontSize={22} marginY={2} >Qualifications:</Typography>

                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Proven experience as a Shopify Developer with a strong understanding of the Shopify platform.
</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Strong Proficiency in web technologies such as HTML5, CSS3, JavaScript, and Liquid.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" > Experience with Shopify's theming system and store setup.
 </Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Familiarity with payment gateway integration and third-party APIs.</Typography>
                        </Box>

                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Strong grasp of responsive design principles and e-commerce best practices.</Typography>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Excellent problem-solving skills and the ability to work in a fast-paced environment.
                            </Typography>
                        </Box>

                    </Box>

                    <Box width={"70%"}>
                        <Typography fontWeight={600} fontSize={22} marginY={2} >Why Soham Web Solutions:</Typography>

                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Join a team that values creativity, collaboration, and innovation.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >Participate in diverse projects that push the boundaries of online retail.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" > Enjoy a culture that supports professional growth and personal achievement.</Typography>

                        </Box>
                        <Box display={"flex"} alignItems={"center"} margin={1}>
                            <Typography fontSize={"25px"}>•</Typography>
                            <Typography marginLeft={1} id="Typography-gray-career" >If you're ready to take your Shopify expertise to new heights and contribute to the success of online businesses, Soham Web Solutions is your next destination. Apply now and let's revolutionize the e-commerce space together!
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

                 <CareerForm heading="Shopify Developer"/>
                     
                            
                    
                </Modal>


        </Accordion>

    </Box>
    );
}

export default Careertoggle4;
