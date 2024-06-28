import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer2 from '../../Component/Footer2'

const Shipping = () => {
    return (
        <>
            <Box className="flex-center bg-img  " >
                <Typography variant='h2' className='primary-heading'> Shipping & Delivery Policy</Typography>
            </Box>
            <Box className=" flex-center padding-top-bottom" >

                <Box className="flex-center-column privacy_man"  >
                    <Typography className='terms_conditon_heading'>Last updated on 22-11-2023</Typography>
                    <Typography className="terms_conditon_content">At Soham Web Solution, we strive to provide a seamless and efficient experience for our clients throughout the website development process. Please take a moment to review our Shipping & Delivery Policy to understand how we handle the delivery of our digital services.</Typography>


                    <Typography className='terms_conditon_heading'>1. Digital Product Delivery</Typography>
                    <Typography className="terms_conditon_content">Our services are primarily digital in nature, and there is no physical shipping involved. Upon the completion of your website development project, all deliverables, including source code, design files, and relevant documentation, will be provided to you electronically.</Typography>

                    <Typography className='terms_conditon_heading'>2. Turnaround Time</Typography>
                    <Typography className="terms_conditon_content">The turnaround time for your website project may vary based on its complexity, scope, and specific requirements. Our team will provide you with a detailed timeline during the project consultation phase. We are committed to delivering high-quality websites within the agreed-upon timeframe.</Typography>

                    <Typography className='terms_conditon_heading'>3. Communication during Development</Typography>
                    <Typography className="terms_conditon_content">We believe in transparent communication throughout the development process. Our team will keep you informed about the progress of your project, and you can reach out to us at any time for updates. Regular check-ins and milestone reviews ensure that your project aligns with your expectations.</Typography>

                    <Typography className='terms_conditon_heading'>4. Client Responsibilities</Typography>
                    <Typography className="terms_conditon_content">To facilitate a smooth development process and timely delivery, we request our clients to:</Typography>
                    <ul className="terms_conditon_content">
                        <li>Provide timely feedback during the development stages.</li>
                        <li>Collaborate in the decision-making process for design, features, and functionality.</li>
                        <li>Ensure clear communication regarding any changes or additional requirements.</li>
                    </ul>

                    <Typography className='terms_conditon_heading'>5. Revisions and Edits</Typography>
                    <Typography className="terms_conditon_content">We understand that revisions and edits may be necessary to achieve the desired outcome. We offer a specified number of revisions as outlined in our project agreement. Additional revisions beyond the agreed-upon limit may be subject to additional charges.</Typography>

                    <Typography className='terms_conditon_heading'>6. Support and Maintenance</Typography>
                    <Typography className="terms_conditon_content">Post-delivery, we provide ongoing support and maintenance services to ensure the continued smooth operation of your website. Our team is available to address any issues promptly and efficiently. Details of our support and maintenance packages can be found here.</Typography>

                    <Typography className='terms_conditon_heading'>7. Changes to the Shipping & Delivery Policy</Typography>
                    <Typography className="terms_conditon_content">Soham Web Solution reserves the right to update or modify this Shipping & Delivery Policy at any time without prior notice. It is the responsibility of clients to review this policy periodically for changes.</Typography>


                    <Typography className="terms_conditon_content">If you have any questions or concerns regarding our Shipping & Delivery Policy, please contact us for clarification.</Typography>

                    <Typography className='terms_conditon_content'>Thank you for choosing Soham Web Solution for your website development needs!</Typography>

                </Box>
            </Box>

            <Footer2 />

        </>
    )
}

export default Shipping
