

import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Careertoggle1 from './CareerTogglepage/Frontend_Developer';
import Careertoggle2 from './CareerTogglepage/PHP_Developer';
import Careertoggle3 from './CareerTogglepage/Wordpress_Developer';
import Careertoggle4 from './CareerTogglepage/Shopify_Developer';
import Careertoggle5 from './CareerTogglepage/Graphic_Designer';
import Careertoggle7 from './CareerTogglepage/HR_Executive';
import Careertoggle6 from './CareerTogglepage/React_Native';
import Frontend_Developer from './CareerTogglepage/Frontend_Developer';
import PHP_Developer from './CareerTogglepage/PHP_Developer';
import Wordpress_Developer from './CareerTogglepage/Wordpress_Developer';
import Shopify_Developer from './CareerTogglepage/Shopify_Developer';
import Graphic_Designer from './CareerTogglepage/Graphic_Designer';
import React_Native from './CareerTogglepage/React_Native';
import HR_Executive from './CareerTogglepage/HR_Executive';

const CurrentOpenings = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <Box className=" flex-center" bgcolor="#E6EBF3">
            <Box className="carrer_toogle_section container">
                <Typography className='secondary_heading' variant='h2'    >
                    Current openings in Team
                </Typography>


                {/*  Frontend Developer*/}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 1} onChange={() => toggleAccordion(1)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            Frontend Developer
                        </Typography>
                    </AccordionSummary>
                    <Frontend_Developer />
                </Accordion>

                {/* PHP Developer*/}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 2} onChange={() => toggleAccordion(2)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            PHP Developer
                        </Typography>
                    </AccordionSummary>
                    <PHP_Developer />
                </Accordion>

                {/*  Wordpress Developer */}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 3} onChange={() => toggleAccordion(3)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            Wordpress Developer
                        </Typography>
                    </AccordionSummary>
                    <Wordpress_Developer />
                </Accordion>

                {/* Graphic Designer */}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 4} onChange={() => toggleAccordion(4)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            Graphic Designer
                        </Typography>
                    </AccordionSummary>
                    < Shopify_Developer />
                </Accordion>

                {/*  Graphic Designer*/}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 5} onChange={() => toggleAccordion(5)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            Graphic Designer
                        </Typography>
                    </AccordionSummary>
                    <Graphic_Designer />
                </Accordion>

                {/* Mobile App Developer (React Native)*/}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 6} onChange={() => toggleAccordion(6)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            Mobile App Developer (React Native)
                        </Typography>
                    </AccordionSummary>
                    <React_Native />
                </Accordion>

                {/*  HR_Executive */}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 7} onChange={() => toggleAccordion(7)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            HR Executive
                        </Typography>
                    </AccordionSummary>
                    < HR_Executive />
                </Accordion>
            </Box>
        </Box>
    );
}

export default CurrentOpenings;
