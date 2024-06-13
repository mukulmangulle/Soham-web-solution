import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Php from "../../assets/Service/php.svg"
import Wordpress from "../../assets/Service/wordpress.svg"
import Shopify from "../../assets/Service/shopify.svg"
import Webdesigner from "../../assets/Service/webdesigner.svg"
import Graphic from "../../assets/Service/graphic.svg"
import Ecommerce from "../../assets/Service/ecoomerce.svg"
import ServiceButton from '../../Child-Component/ServiceButton'
import ProjectRequirement from './ProjectRequirement'
import { Link } from 'react-router-dom'



const ServiceContaint = () => {
    return (
        <>
            <Box maxWidth={"1920px"} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                <Box className="service-man" width={"84%"} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

                    {/* 1 */}
                    <Box id="man-reverce1" width={"100%"} className="flex-between-wrap"  >
                        <Box width={617} id="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">PHP Development
                            </Typography>
                            <Typography id="Typo-gray-start" >PHP development services focus on implementing secure and powerful server-sides web applications. Our company deliver robust CMSs, and web-based solutions, we manage complex databases,


                            </Typography>
                            {/* <Link to={`/${process.env.SLUG_URL}/services/php-development/`} style={{  textDecoration: "none" }} >
                                 <Button sx={{marginTop:"10px"}}  className='apply-now' >
                                Read More
                            </Button> 
                            </Link>*/}

                        </Box>
                        <Box className="img-container"   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Php} alt="" />
                            </Box>
                        </Box>
                    </Box>


                    {/* 2 */}
                    <Box id="man-reverce2" width={"100%"} className="flex-between-wrap"  >
                        <Box className="img-container"   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Wordpress} alt="" />
                            </Box>
                        </Box>
                        <Box width={617} id="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">WordPress Development</Typography>
                            <Typography id="Typo-gray-start" >We offers all possible WordPress services, ranging from custom WordPress theme development, plugin customization, WordPress speed optimization, SEO, and integration with 3rd party modules and applications with your WordPress website. to meet your business needs


                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/wordpress-development/`} style={{  textDecoration: "none" }} >
                                 <Button sx={{marginTop:"10px"}} type="submit" className='apply-now' >
                                Read More
                            </Button>
                            </Link>
                        </Box>

                    </Box>

                    {/* 3 */}
                    <Box id="man-reverce1" width={"100%"} className="flex-between-wrap" >
                        <Box width={617} id="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">Shopify Development</Typography>
                            <Typography id="Typo-gray-start" >Armed with a team of efficient UI/UX designers and Shopify certified developers, our Shopify web development service will help you with responsive, user-friendly and interactive Shopify themes for your store.
                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/shopify-development/`} style={{  textDecoration: "none" }} >
                                 <Button sx={{marginTop:"10px"}} type="submit" className='apply-now' >
                                Read More
                            </Button>
                            </Link>
                        </Box>
                        <Box className="img-container" >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Shopify} alt="" />
                            </Box>
                        </Box>
                    </Box>


                    {/* 4 */}
                    <Box id="man-reverce2" width={"100%"} className="flex-between-wrap" >

                        <Box className="img-container"   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Webdesigner} alt="" />
                            </Box>
                        </Box>

                        <Box width={617} id="devlopment-text"  >
                            <Typography variant='h4' id="typo-fray-hrading">Web Designing</Typography>
                            <Typography id="Typo-gray-start" >Web designing services are professional services that involve the creation, development, and maintenance of websites for individuals, businesses, organizations, or institutions.
                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/web-designing/`} style={{  textDecoration: "none" }} >
                                 <Button sx={{marginTop:"10px"}} type="submit" className='apply-now' >
                                Read More
                            </Button>
                            </Link>
                        </Box>
                    </Box>

                    {/* 5 */}
                    <Box id="man-reverce1" width={"100%"} className="flex-between-wrap" >
                        <Box width={617} id="devlopment-text">
                            <Typography variant='h4' id="typo-fray-hrading">Graphic Designing</Typography>
                            <Typography id="Typo-gray-start" >Expert Graphic Design Services for a Wide Range of Industries. Our team of experienced graphic designers is here to help you stand out in your industry and drive business growth. Make a statement with professionally designed graphics that reflect your brand’s personality.
                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/graphic-designing/`} style={{  textDecoration: "none" }} >
                                 <Button sx={{marginTop:"10px"}} type="submit" className='apply-now' >
                                Read More
                            </Button>
                            </Link>                     </Box>
                        <Box className="img-container" >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Graphic} alt="" />
                            </Box>
                        </Box>
                    </Box>


                    {/* 6 */}
                    <Box id="man-reverce2" width={"100%"} className="flex-between-wrap"  >
                        <Box id="img-container"    >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Ecommerce} alt="" />
                            </Box>
                        </Box>
                        <Box width={617} id="devlopment-text">
                            <Typography variant='h4' id="typo-fray-hrading">Ecommerce Development</Typography>
                            <Typography id="Typo-gray-start">We develop e-commerce platforms that feature personalized chatbots and payment gateway integration with PayPal, Authorize.Net, and FirstData. In addition, our services include custom e-commerce website design and shopping cart development


                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/ecommerce-development/`} style={{  textDecoration: "none" }} >
                                 <Button sx={{marginTop:"10px"}} type="submit" className='apply-now' >
                                Read More
                            </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default ServiceContaint;

