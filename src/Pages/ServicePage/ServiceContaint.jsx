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
import MAN from "../../assets/service.png"
import { FaPhp } from "react-icons/fa";
import Php_logo from "../../assets/Service/logo/php.svg"
import wordpress_logo from "../../assets/Service/logo/wordpress.svg"
import Shopify_logo from "../../assets/Service/logo/shopify.svg"
import graphic_logo from "../../assets/Service/logo/graphic.svg"
import Webdesigner_logo from "../../assets/Service/logo/web designing.svg"
import Ecommerce_logo from "../../assets/Service/logo/ecommerce.svg"


const ServiceContaint = () => {
    return (
        <>
            <Box className="service-new" display={'flex'} alignItems={'center'} justifyContent={'center'} >
                <Box className="service-man" display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

                    {/* 1 */}
                        <Box className="man-reverce1 flex-between-wrap" width={"100%"}  >
                            <Box className="devlopment-text" >
                                <img className='service-logo' src={Php_logo} alt=""  />
                               
                                <Typography variant='h4' className="typo-fray-hrading">
                                    PHP Development
                                </Typography>

                                <Typography className="Typo-gray-start" >
                                    <strong >
                                        Creating Dynamic Web Solutions from Ideas
                                    </strong  >
                                    <br></br>
                                    Our specialization lies in developing dependable, expandable, and efficient PHP web applications that are customized to fulfill your unique business requirements. Our skilled
                                </Typography>
                                <Link to={`/${process.env.SLUG_URL}/services/php-development/`} style={{ textDecoration: "none" }} >
                                    <Button className='apply-now' >
                                        Read More
                                    </Button>
                                </Link>

                            </Box>
                            <Box className="img-container"   >
                                <Box className="background-service flex-center"  >
                                    <img src={Php} alt="" />
                                    {/* <img src={MAN} alt="" /> */}

                                </Box>
                            </Box>
                        </Box>
                  


                    {/* 2 */}
                    <Box className="man_s_bg">

                    <Box className="man-reverce2 flex-between-wrap" width={"100%"}   >
                        <Box className="img-container"   >
                            <Box className="background-service flex-center"  >
                                <img src={Wordpress} alt="" />
                            </Box>
                        </Box>
                        <Box className="devlopment-text">
                       
                                <img className='service-logo' src={wordpress_logo} alt=""  />
                            <Typography variant='h4' className="typo-fray-hrading">
                                WordPress Development
                            </Typography>
                            <Typography className="Typo-gray-start" >
                                Empowering Your Digital Presence with WordPress
                                <br></br>

                                We harness the power of WordPress to create stunning, functional, and user-friendly websites that drive results. Whether you’re a startup, small business, or large enterprise, our WordPress development services are designed to meet your unique needs and help you achieve your online goals.
                            </Typography>

                            <Link to={`/${process.env.SLUG_URL}/services/wordpress-development/`} style={{ textDecoration: "none" }} >
                                <Button sx={{ marginTop: "10px" }} type="submit" className='apply-now' >
                                    Read More
                                </Button>
                            </Link>
                        </Box>
</Box>
                    </Box>


                    {/* 3 */}
                  
                    <Box className="man-reverce1 flex-between-wrap" width={"100%"} >
                    <Box className="devlopment-text" >
                                <img className='service-logo' src={Shopify_logo} alt=""  />
                            <Typography variant='h4' className="typo-fray-hrading">
                                Shopify Development
                            </Typography>
                            <Typography className="Typo-gray-start" >
                                Shopify Can Help You Grow Your Online Business
                                <br></br>
                                Powerful, personalized Shopify stores that offer a remarkable online shopping experience are our specialty at Soham Web. Our Shopify development services are catered to your specific business needs and may assist you in reaching your e-commerce objectives, regardless of your level of experience as an entrepreneur or brand.
                            </Typography>

                            <Link to={`/${process.env.SLUG_URL}/services/shopify-development/`} style={{ textDecoration: "none" }} >
                                <Button type="submit" className='apply-now' >
                                    Read More
                                </Button>
                            </Link>
                        </Box>

                        <Box className="img-container" >
                            <Box className="background-service flex-center"  >
                                <img src={Shopify} alt="" />
                            </Box>
                        </Box>
                    </Box>


                    {/* 4 */}
                    <Box className="man_s_bg">
                    <Box className="man-reverce2 flex-between-wrap" width={"100%"}  >

                        <Box className="img-container"   >
                            <Box className="background-service flex-center"  >
                                <img src={Webdesigner} alt="" />
                            </Box>
                        </Box>

                        <Box className="devlopment-text" >
                                <img className='service-logo' src={Webdesigner_logo} alt=""  />
                            <Typography variant='h4' className="typo-fray-hrading">
                                Web Designing
                            </Typography>
                            <Typography className="Typo-gray-start" >
                                Web, we believe that great design is the foundation of an effective online presence. Our expert team of designers creates visually stunning, responsive, and user-centric websites that not only look amazing but also deliver a seamless user experience. Whether you're a startup, a small business, or a large corporation, we tailor our web design services to meet your specific needs and goals.
                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/web-designing/`} style={{ textDecoration: "none" }} >
                                <Button sx={{ marginTop: "10px" }} type="submit" className='apply-now' >
                                    Read More
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    </Box>

                    {/* 5 */}
                    <Box className="man-reverce1 flex-between-wrap" width={"100%"} >
                    <Box className="devlopment-text" >
                                <img className='service-logo' src={graphic_logo} alt=""  />
                            <Typography variant='h4' className="typo-fray-hrading">
                                Graphic Designing
                            </Typography>
                            <Typography className="Typo-gray-start" >We understand the power of compelling visuals in capturing attention and communicating your brand's message. Our team of skilled graphic designers is dedicated to creating innovative and eye-catching designs that resonate with your audience and elevate your brand. Whether you need logos, brochures, banners, or any other graphic elements, we’ve got you covered.
                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/graphic-designing/`} style={{ textDecoration: "none" }} >
                                <Button sx={{ marginTop: "10px" }} type="submit" className='apply-now' >
                                    Read More
                                </Button>
                            </Link>
                        </Box>
                        <Box className="img-container" >
                            <Box className="background-service flex-center"  >
                                <img src={Graphic} alt="" />
                            </Box>
                        </Box>
                    </Box>


                    {/* 6 */}
                    <Box className="man_s_bg">
                        <Box className="man-reverce2 flex-between-wrap" width={"100%"}  >
                            <Box className="img-container"    >
                                <Box className="background-service flex-center"  >
                                    <img src={Ecommerce} alt="" />
                                </Box>
                            </Box>
                            <Box className="devlopment-text" >
                                <img className='service-logo' src={Ecommerce_logo} alt=""  />
                                <Typography variant='h4' className="typo-fray-hrading">
                                    Ecommerce Development
                                </Typography>
                                <Typography className="Typo-gray-start">
                                    Transform Your Online Business with Cutting-Edge E-Commerce Solutions
                                    <br></br>
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

            </Box>
        </>
    )
}

export default ServiceContaint;

