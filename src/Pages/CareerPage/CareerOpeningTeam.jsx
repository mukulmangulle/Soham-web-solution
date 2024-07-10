// import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
// import React from 'react'
// import Careertoggle1 from './CareerTogglepage/Careertoggle1'
// import Careertoggle2 from './CareerTogglepage/Careertoggle2'
// import Careertoggle3 from './CareerTogglepage/Careertoggle3'
// import Careertoggle4 from './CareerTogglepage/Careertoggle4'
// import Careertoggle5 from './CareerTogglepage/Careertoggle5'
// import Careertoggle6 from './CareerTogglepage/Careertoggle6'
// import Careertoggle7 from './CareerTogglepage/Careertoggle7'


// const CareerOpeningTeam = () => {
//     let acc = document.getElementsByClassName("accordion");
//     let i;

//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function () {

//             // active
//             this.classList.toggle("active");

//             // show/hide
//             let panel = this.nextElementSibling;
//             if (panel.style.maxHeight) {
//                 panel.style.maxHeight = null;
//             } else {

//                 // close 
//                 closeAllPanels();
//                 panel.style.maxHeight = panel.scrollHeight + "px";
//             }
//         });
//     }

//     function closeAllPanels() {

//         let panels = document.getElementsByClassName("panel");
//         for (let j = 0; j < panels.length; j++) {
//             panels[j].style.maxHeight = null;
//         }


//         let accordions = document.getElementsByClassName("accordion");
//         for (let k = 0; k < accordions.length; k++) {
//             accordions[k].classList.remove("active");
//         }
//     }
//     return (

//         <>

//             <Box className="container_space flex-center" bgcolor={"#E6EBF3"} >
//                 <Box className="carrer_toogle_section container" >
//                     <Typography className='secondary_heading' variant='h2'    >
//                         Current openings in Team
//                     </Typography>

//                     <Box  className="accordion" >
//                         <Careertoggle1 className="panel"/>
//                     </Box>


//                     <Box className="accordion">
//                     <Careertoggle2 className="panel" />
//                     </Box>





                    
//                     <Careertoggle3 className="accordion" />
//                     <Careertoggle4 className="accordion" />
//                     <Careertoggle5 className="accordion" />
//                     <Careertoggle6 className="accordion" />
//                     <Careertoggle7 className="accordion" />
//                 </Box>
//             </Box>

//         </>
//     )
// }

// export default CareerOpeningTeam
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Careertoggle1 from './CareerTogglepage/Careertoggle1';
import Careertoggle2 from './CareerTogglepage/Careertoggle2';
import Careertoggle3 from './CareerTogglepage/Careertoggle3';
import Careertoggle4 from './CareerTogglepage/Careertoggle4';
import Careertoggle5 from './CareerTogglepage/Careertoggle5';
import Careertoggle6 from './CareerTogglepage/Careertoggle6';
import Careertoggle7 from './CareerTogglepage/Careertoggle7';

const CareerOpeningTeam = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <Box className="container_space flex-center" bgcolor={"#E6EBF3"}>
            <Box className="carrer_toogle_section container">
                <Typography className='secondary_heading' variant='h2'>
                    Current openings in Team
                </Typography>

                <Box className={`accordion ${activeAccordion === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
                    <Careertoggle1 className="panel" />
                </Box>

                <Box className={`accordion ${activeAccordion === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
                    <Careertoggle2 className="panel" />
                </Box>

                {/* Add similar boxes for Careertoggle3 to Careertoggle7 */}
                <Box className={`accordion ${activeAccordion === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
                    <Careertoggle3 className="panel" />
                </Box>

                {/* Repeat for Careertoggle4 to Careertoggle7 */}
            </Box>
        </Box>
    );
}

export default CareerOpeningTeam;
