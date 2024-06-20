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
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} >
                <Box className="service-man" width={"84%"} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

                    {/* 1 */}
                    <Box id="man-reverce1" width={"100%"} className="flex-between-wrap"  >
                        <Box width={617} id="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">PHP Development
                            </Typography>

                            <Typography id="Typo-gray-start" >
                                Creating Dynamic Web Solutions from Ideas <br></br>
                                Our specialization lies in developing dependable, expandable, and efficient PHP web applications that are customized to fulfill your unique business requirements. Our skilled programmers use PHP's capabilities to build creative and affordable solutions that are both innovative and cost-effective, ensuring your digital presence is impactful and future-proof.



                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/php-development/`} style={{ textDecoration: "none" }} >
                                <Button sx={{ marginTop: "10px" }} className='apply-now' >
                                    Read More
                                </Button>
                            </Link>

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
                            <Typography id="Typo-gray-start" >Empowering Your Digital Presence with WordPress <br></br>

                                We harness the power of WordPress to create stunning, functional, and user-friendly websites that drive results. Whether you’re a startup, small business, or large enterprise, our WordPress development services are designed to meet your unique needs and help you achieve your online goals.


                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/wordpress-development/`} style={{ textDecoration: "none" }} >
                                <Button sx={{ marginTop: "10px" }} type="submit" className='apply-now' >
                                    Read More
                                </Button>
                            </Link>
                        </Box>

                    </Box>

                    {/* 3 */}
                    <Box id="man-reverce1" width={"100%"} className="flex-between-wrap" >
                        <Box width={617} id="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">Shopify Development</Typography>
                            <Typography id="Typo-gray-start" >Shopify Can Help You Grow Your Online Business<br></br>

Powerful, personalized Shopify stores that offer a remarkable online shopping experience are our specialty at Soham Web. Our Shopify development services are catered to your specific business needs and may assist you in reaching your e-commerce objectives, regardless of your level of experience as an entrepreneur or brand.

                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/shopify-development/`} style={{ textDecoration: "none" }} >
                                <Button sx={{ marginTop: "10px" }} type="submit" className='apply-now' >
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
                            <Typography id="Typo-gray-start" >Web, we believe that great design is the foundation of an effective online presence. Our expert team of designers creates visually stunning, responsive, and user-centric websites that not only look amazing but also deliver a seamless user experience. Whether you're a startup, a small business, or a large corporation, we tailor our web design services to meet your specific needs and goals.

                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/web-designing/`} style={{ textDecoration: "none" }} >
                                <Button sx={{ marginTop: "10px" }} type="submit" className='apply-now' >
                                    Read More
                                </Button>
                            </Link>
                        </Box>
                    </Box>

                    {/* 5 */}
                    <Box id="man-reverce1" width={"100%"} className="flex-between-wrap" >
                        <Box width={617} id="devlopment-text">
                            <Typography variant='h4' id="typo-fray-hrading">Graphic Designing</Typography>
                            <Typography id="Typo-gray-start" >We understand the power of compelling visuals in capturing attention and communicating your brand's message. Our team of skilled graphic designers is dedicated to creating innovative and eye-catching designs that resonate with your audience and elevate your brand. Whether you need logos, brochures, banners, or any other graphic elements, we’ve got you covered.

                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/graphic-designing/`} style={{ textDecoration: "none" }} >
                                <Button sx={{ marginTop: "10px" }} type="submit" className='apply-now' >
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
                            <Typography id="Typo-gray-start">Transform Your Online Business with Cutting-Edge E-Commerce Solutions<br></br>

At Soham Web, we specialize in creating dynamic, user-friendly e-commerce platforms that drive sales and enhance customer engagement. Our comprehensive e-commerce development services are designed to meet the unique needs of your business, whether you’re a startup, small business, or established enterprise. We leverage the latest technologies and industry best practices to build scalable, secure, and high-performance online stores.



                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/ecommerce-development/`} style={{ textDecoration: "none" }} >
                                <Button sx={{ marginTop: "10px" }} type="submit" className='apply-now' >
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

