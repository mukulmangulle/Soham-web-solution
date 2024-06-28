import { Box, Typography } from '@mui/material';
import React from 'react'
import Footer2 from '../../Component/Footer2';

const Support = () => {
    return (
        <>
            <Box className="flex-center bg-img  " >
                <Typography variant='h2' className='primary-heading'> Support and Maintenance Packages
                </Typography>
            </Box>
            <Box className=" flex-center padding-top-bottom" >

                <Box className="flex-center-column privacy_man"  >
                    <Typography className='terms_conditon_heading'>Ensuring Your Website’s Peak Performance
                    </Typography>
                    <Typography className="terms_conditon_content">At Soham Web Solution, we understand the importance of a seamlessly operating website. Our Support and Maintenance Packages are designed to keep your online presence robust, secure, and up-to-date, allowing you to focus on your core business activities. Explore our packages below to find the one that best suits your needs.</Typography>


                    <Typography className='terms_conditon_heading'> Package Options</Typography>
                    <Typography className='terms_conditon_heading'>Basic Care</Typography>


                    <ul className="terms_conditon_content">
                        <li><b className='terms_conditon_heading'>Monthly Performance Check</b>Regular assessments to ensure optimal website speed and functionality.</li>
                        <li><b className='terms_conditon_heading'>Security Updates</b>Stay protected with timely security patches and updates.</li>
                        <li><b className='terms_conditon_heading'> Content Updates</b>Routine content updates and minor adjustments.</li>
                    </ul>

                    <Typography className="terms_conditon_content">Ideal for smaller websites with basic maintenance needs</Typography>


                    <Typography className='terms_conditon_heading'>Pro Support</Typography>


                    <ul className="terms_conditon_content">
                        <li><b className='terms_conditon_heading'>24/7 Monitoring:</b>Continuous monitoring for potential issues, providing proactive solutions.</li>
                        <li><b className='terms_conditon_heading'>Priority Issue Resolution:</b>Immediate attention to critical issues, ensuring minimal downtime.</li>
                        <li><b className='terms_conditon_heading'>Bi-weekly Performance Optimization:</b>Ongoing tweaks for improved speed and efficiency.</li>
                    </ul>

                    <Typography className="terms_conditon_content">Perfect for growing businesses with a moderate volume of traffic.</Typography>



                    <Typography className='terms_conditon_heading'>Elite Management</Typography>


                    <ul className="terms_conditon_content">
                        <li><b className='terms_conditon_heading'>Dedicated Account Manager:</b>Personalized service and strategic planning for your website.</li>
                        <li><b className='terms_conditon_heading'>Custom Development Hours:</b>Exclusive hours for additional features, improvements, or enhancements.</li>
                        <li><b className='terms_conditon_heading'>Weekly Performance Audits:</b> In-depth analysis to identify and address potential bottlenecks.</li>
                    </ul>

                    <Typography className="terms_conditon_content">Tailored for high-traffic websites or those with complex functionalities</Typography>



                    <Typography className='terms_conditon_heading'>Why Choose Soham Web Solution’s Support and Maintenance?</Typography>


                    <ul className="terms_conditon_content">
                        <li><b className='terms_conditon_heading'>Experienced Team:</b>Our team of experts is well-versed in the latest technologies and industry best practices.</li>
                        <li><b className='terms_conditon_heading'>Proactive Approach: </b>We believe in proactive maintenance, preventing issues before they impact your website.</li>
                        <li><b className='terms_conditon_heading'>Flexible Packages:</b> Choose the package that aligns with your website’s specific needs and growth trajectory.</li>
                    </ul>
                    <Typography className='terms_conditon_heading'>Get Started</Typography>
                    <Typography className="terms_conditon_content">Selecting the right support and maintenance package is a crucial investment in the longevity and success of your online presence. Click on the package links above to explore the detailed offerings, pricing, and benefits.</Typography>

                    <Typography className="terms_conditon_content">If you have any questions or need assistance in choosing the right package, feel free to contact us. We’re here to ensure your website operates at its best!</Typography>




                </Box>
            </Box>

            <Footer2 />
        </>
    )
}

export default Support;
