import React from 'react'
import Footer2 from '../../Component/Footer2';
import { Box, Typography } from '@mui/material';

const Refund_policy = () => {
    return (
        <>
            <Box className="flex-center bg-img  " >
                <Typography variant='h2' className='primary-heading'> Cancellation & Refund Policy</Typography>
            </Box>
            <Box className=" flex-center padding-top-bottom" >

                <Box className="flex-center-column privacy_man"  >
                    <Typography className='terms_conditon_heading'>Last updated on 22-11-2023</Typography>
                    <Typography className="terms_conditon_content">At Soham Web Solution, we aim to provide a transparent and fair Cancellation & Refund Policy to ensure a positive experience for our clients. Please take a moment to review the following terms and conditions.</Typography>

                    <Typography className='terms_conditon_heading'>1. Cancellation Policy</Typography>

                    <Typography className='terms_conditon_heading'>1.1 Project Cancellation</Typography>
                    <Typography className='terms_conditon_heading'>If, for any reason, you wish to cancel your website development project with Soham Web Solution, please notify us as soon as possible. Cancellations are subject to the following conditions:</Typography>

                    <Typography className='terms_conditon_content'>
                        <b>Cancellation before Project Initiation: </b>A full refund will be provided if the cancellation request is made before the initiation of the project, and no work has been started.
                    </Typography>

                    <Typography className='terms_conditon_content'> <b>Cancellation after Project Initiation:</b> If work has already commenced on your project, a cancellation fee may be applicable. The fee will be determined based on the progress made and resources invested.</Typography>


                    <Typography className='terms_conditon_heading'>1.2 Service Cancellation</Typography>
                    <Typography className='terms_conditon_content'>For ongoing services such as maintenance or support packages, a notice period may be required for cancellation. Please refer to the specific terms outlined in your service agreement.</Typography>

                    <Typography className='terms_conditon_heading'>2. Refund Policy</Typography>
                    <Typography className='terms_conditon_heading'>2.1 Eligibility for Refund</Typography>
                    <Typography className='terms_conditon_content'>Refunds may be applicable under the following circumstances:</Typography>

                    <Typography className='terms_conditon_content'><b>Unsatisfactory Service:</b> If you are dissatisfied with the service provided and can demonstrate that the delivered work does not meet the agreed-upon specifications.</Typography>    
                    <Typography className='terms_conditon_content'><b>Project Cancellation:</b>  Refunds, if applicable, will be processed according to the terms outlined in the Project Cancellation section.</Typography> 

                    <Typography className='terms_conditon_heading'>2.2 Refund Process</Typography>
                    <Typography className='terms_conditon_content'>To request a refund, please contact our customer support team at contact@sohamwebsolution.com within the specified timeframe. Refunds will be processed within 15 business days from the date of approval.</Typography>

                    <Typography className='terms_conditon_heading'>2.3 Non-Refundable Items</Typography>
                    <Typography className='terms_conditon_content'>Certain items and services may be non-refundable, including but not limited to:</Typography>

                    <ul className="terms_conditon_content">
                        <li>Customized design work.</li>
                        <li>Domain registration fees.</li>
                        <li>Third-party software licenses</li>
                    </ul>

                    <Typography className='terms_conditon_heading'>Changes to the Cancellation & Refund Policy</Typography>
                    <Typography className='terms_conditon_content'>Soham Web Solution reserves the right to update or modify this Cancellation & Refund Policy at any time without prior notice. It is the responsibility of clients to review this policy periodically for changes.</Typography>

                    <Typography className='terms_conditon_content'>If you have any questions or concerns regarding our Cancellation & Refund Policy, please contact us for clarification.</Typography>

                    <Typography className='terms_conditon_content'>Thank you for choosing Soham Web Solution for your website development needs!</Typography>


                </Box>
            </Box>

            <Footer2 />

        </>
    )
}

export default Refund_policy;
