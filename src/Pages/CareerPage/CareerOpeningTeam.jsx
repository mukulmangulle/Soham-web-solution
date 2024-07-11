

import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Careertoggle1 from './CareerTogglepage/Careertoggle1';
import Careertoggle2 from './CareerTogglepage/Careertoggle2';
import Careertoggle3 from './CareerTogglepage/Careertoggle3';
import Careertoggle4 from './CareerTogglepage/Careertoggle4';
import Careertoggle5 from './CareerTogglepage/Careertoggle5';
import Careertoggle7 from './CareerTogglepage/Careertoggle7';
import Careertoggle6 from './CareerTogglepage/Careertoggle6';

const CareerOpeningTeam = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <Box className="container_space flex-center" bgcolor="#E6EBF3">
            <Box className="carrer_toogle_section container">
                <Typography className='secondary_heading' variant='h2'    >
                    Current openings in Team
                </Typography>


                {/* 1 */}
                <Accordion  className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 1} onChange={() => toggleAccordion(1)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            Frontend Developer
                        </Typography>
                    </AccordionSummary>
                    <Careertoggle1 />
                </Accordion>


                {/* 2 */}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 2} onChange={() => toggleAccordion(2)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            PHP Developer
                        </Typography>
                    </AccordionSummary>
                    <Careertoggle2 />
                </Accordion>

                {/* 3 */}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 3} onChange={() => toggleAccordion(3)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            Wordpress Developer
                        </Typography>
                    </AccordionSummary>
                    <Careertoggle3 />
                </Accordion>


                {/* 4 */}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 4} onChange={() => toggleAccordion(4)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            Shopify Developer
                        </Typography>
                    </AccordionSummary>
                    <Careertoggle4 />
                </Accordion>


                {/* 5 */}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 5} onChange={() => toggleAccordion(5)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            Graphic Designer
                        </Typography>
                    </AccordionSummary>
                    <Careertoggle5 />
                </Accordion>



                {/* 6 */}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 6} onChange={() => toggleAccordion(6)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            Mobile App Developer (React Native)
                        </Typography>
                    </AccordionSummary>
                    <Careertoggle6 />
                </Accordion>

                {/* 7 */}
                <Accordion className="current_opning careertoggle" id="box-shadow" expanded={activeAccordion === 7} onChange={() => toggleAccordion(7)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                        <Typography variant='h5' className="Hr-excutive"   >
                            HR Executive
                        </Typography>
                    </AccordionSummary>
                    <Careertoggle7 />
                </Accordion>

            </Box>
        </Box>
    );
}

export default CareerOpeningTeam;
