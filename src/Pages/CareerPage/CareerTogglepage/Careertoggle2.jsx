import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, Backdrop } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Careertoggle2() {
    const [expanded, setExpanded] = useState(false);
   

    const [showForm, setShowForm] = useState(false);
   

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <Box margin={2.5} id="box-shadow" >
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary   >
                    <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} paddingY={1.5}>
                        <Typography  id="Hr-excutive" variant='h5'  paddingLeft={1.5}  >PHP Developer (Any Graduate can apply) </Typography>
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

                                Develop and maintain dynamic websites and web applications using PHP.</Typography>
                            </Box>

                            <Box display={"flex"} alignItems={"start"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Utilize various PHP frameworks such as Laravel, Symfony, or CodeIgniter to create scalable applications.</Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Collaborate with frontend developers to ensure seamless integration with user interfaces.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Write clean, well-designed code and contribute to all phases of the development lifecycle.
</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Troubleshoot, test, and maintain the core product software to ensure strong optimization and functionality.</Typography>

                            </Box>

                        </Box>

                        <Box width={"70%"}>
                            <Typography fontWeight={600} fontSize={22} marginY={2} >Qualifications:</Typography>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Strong knowledge of PHP web frameworks and understanding of MVC design patterns.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Proficiency in front-end technologies, including JavaScript, HTML5, and CSS3.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Experience with SQL/NoSQL databases and their declarative query languages. </Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Familiarity with object-oriented PHP programming and common PHP or web server exploits and their solutions.</Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Knowledge of code versioning tools, such as Git.</Typography>
                            </Box>

                        </Box>

                        <Box width={"70%"}>
                            <Typography fontWeight={600} fontSize={22} marginY={2} >Why Soham Web Solutions:</Typography>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >
                                Be part of a forward-thinking company that embraces new technologies.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Work in a collaborative environment that values each team member's input.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" > Engage with diverse projects that challenge your skills and help you grow.</Typography>

                            </Box>
                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >•  Enjoy a culture that supports work-life balance and employee well-being.</Typography>

                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Are you ready to code with a purpose? If you're a PHP Developer looking for an opportunity to make an impact, apply to Soham Web Solutions today and let's innovate together!</Typography>

                            </Box>


                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Annual trips</Typography>

                            </Box>

                            <Box display={"flex"} alignItems={"center"} margin={1}>
                                <Typography fontSize={"25px"}>•</Typography>
                                <Typography marginLeft={1} id="Typography-gray-career" >Supportive seniors</Typography>

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

                 <CareerForm heading=" PHP Developer"/>
                     
                            
                    
                </Modal>

            </Accordion>

        </Box>
    );
}

export default Careertoggle2;
