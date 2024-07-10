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
//     return (
//         <>

//             <Box className="container_space flex-center"  bgcolor={"#E6EBF3"} >
//                 <Box className="carrer_toogle_section container" >
//                     <Typography className='secondary_heading' variant='h2'    >
//                         Current openings in Team
//                     </Typography>
//                     <Careertoggle1 />
//                     <Careertoggle2 />
//                     <Careertoggle3 />
//                     <Careertoggle4 />
//                     <Careertoggle5 />
//                     <Careertoggle6 />
//                     <Careertoggle7 />
//                 </Box>
//             </Box>

//         </>
//     )
// }

// export default CareerOpeningTeam


import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'

const CareerOpeningTeam = () => {
  return (
    <Box className="container_space flex-center" bgcolor="#E6EBF3">
    <Box className="carrer_toogle_section container">
        <Typography className='secondary_heading' variant='h2'>
            Frequently Asked Questions
        </Typography>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography variant="h6">What is your name?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci deserunt asperiores delectus repellat magni!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                <Typography variant="h6">What is your age?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci deserunt asperiores delectus repellat magni!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary  aria-controls="panel3a-content" id="panel3a-header">
                <Typography variant="h6">What is your location?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci deserunt asperiores delectus repellat magni!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary  aria-controls="panel4a-content" id="panel4a-header">
                <Typography variant="h6">What is your city?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci deserunt asperiores delectus repellat magni!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary  aria-controls="panel5a-content" id="panel5a-header">
                <Typography variant="h6">What is your address?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci deserunt asperiores delectus repellat magni!
                </Typography>
            </AccordionDetails>
        </Accordion>

    </Box>
</Box>
  )
}

export default CareerOpeningTeam
