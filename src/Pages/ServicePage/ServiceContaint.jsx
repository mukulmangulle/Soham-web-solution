import React from 'react'
import { Box, Typography, Button } from '@mui/material'

import { Link } from 'react-router-dom'
import Php_logo from "../../assets/Service/logo/php.svg"
import wordpress_logo from "../../assets/Service/logo/wordpress.svg"
import Shopify_logo from "../../assets/Service/logo/shopify.svg"
import graphic_logo from "../../assets/Service/logo/graphic.svg"
import Webdesigner_logo from "../../assets/Service/logo/web designing.svg"
import Ecommerce_logo from "../../assets/Service/logo/ecommerce.svg"
import Larval_logo from "../../assets/Service/logo/larval.svg"
import codeignitor_logo from "../../assets/Service/logo/codeignitor.svg"
import ReactNativer_logo from "../../assets/Service/logo/reactNative.svg"

import Php from "../../assets/Service/php.svg"
import Wordpress from "../../assets/Service/wordpress.svg"
import Shopify from "../../assets/Service/shopify.svg"
import Webdesigner from "../../assets/Service/webdesigner.svg"
import Graphic from "../../assets/Service/graphic.svg"
import Laraval from "../../assets/Service/laraval.svg"
import Codeigniter from "../../assets/Service/codeigniter.svg"
import Native from "../../assets/Service/reactnative.svg"
import Ecoomerce from "../../assets/Service/ecoomerce.svg"

const ServiceContaint = () => {
    return (
        <>
            <Box className="service_primary_section flex-center" >
                <Box className="service-man flex-center-coulmn "  >

                    {/* 1 */}
                    <Box className="service_container_one container flex-between-wrap"  >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={Php_logo} alt="" />

                            <Typography variant='h2' className="service_secondary-heading">
                                PHP Development
                            </Typography>

                            <Typography className="service_text" >
                               
                                Our specialization lies in developing dependable, expandable, and efficient PHP web applications that are customized to fulfill your unique business requirements. Our skilled programmers use PHP's capabilities to build creative and affordable solutions that are both innovative and cost-effective, ensuring your digital presence is impactful and future-proof.
                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/php-development/`} style={{ textDecoration: "none", }} >
                                <Button className='btn_apply_now' >
                                    Read more
                                </Button>
                            </Link>

                        </Box>
                        <img className='service_img' src={Php} alt="" />

                    </Box>

                    {/* 2 */}
                    <Box className="service_container_tow_man flex-center ">
                        <Box className="service_container_two container flex-between-wrap"  >
                        <img className='service_img' src={Wordpress} alt="" />

                            <Box className="devlopment-text">
                                <img className='service-logo' src={wordpress_logo} alt="" />
                                <Typography variant='h2' className="service_secondary-heading">
                                    WordPress Development Services

                                </Typography>
                                <Typography className="service_text" >
                                  
                                    We harness the power of WordPress to create stunning, functional, and user-friendly websites that drive results. Whether you’re a startup, small business, or large enterprise, our WordPress development services are designed to meet your unique needs and help you achieve your online goals.
                                </Typography>

                                <Link to={`/${process.env.SLUG_URL}/services/wordpress-development/`} style={{ textDecoration: "none" }} >
                                    <Button sx={{ marginTop: "10px" }} type="submit" className='btn_apply_now' >
                                        Read More
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>


                    {/* 3 */}
                    <Box className="service_container_one container flex-between-wrap" >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={Shopify_logo} alt="" />
                            <Typography variant='h2' className="service_secondary-heading">
                                Shopify Development Services
                            </Typography>
                            <Typography className="service_text" >
                                
                                Powerful, personalized Shopify stores that offer a remarkable online shopping experience are our specialty at Soham Web. Our Shopify development services are catered to your specific business needs and may assist you in reaching your e-commerce objectives, regardless of your level of experience as an entrepreneur or brand.
                            </Typography>

                            <Link to={`/${process.env.SLUG_URL}/services/shopify-development/`} style={{ textDecoration: "none" }} >
                                <Button type="submit" className='btn_apply_now' >
                                    Read More
                                </Button>
                            </Link>
                        </Box>
                        <img className='service_img' src={Shopify} alt="" />

                    </Box>


                    {/* 4 */}
                    <Box className="service_container_tow_man flex-center">
                        <Box className="service_container_two container flex-between-wrap"  >
                        <img className='service_img' src={Webdesigner} alt="" />


                            <Box className="devlopment-text" >
                                <img className='service-logo' src={Webdesigner_logo} alt="" />
                                <Typography variant='h2' className="service_secondary-heading">
                                    Web Designing Services
                                </Typography>
                                <Typography className="service_text" >
                                    Web, we believe that great design is the foundation of an effective online presence. Our expert team of designers creates visually stunning, responsive, and user-centric websites that not only look amazing but also deliver a seamless user experience. Whether you're a startup, a small business, or a large corporation, we tailor our web design services to meet your specific needs and goals.
                                </Typography>
                                <Link to={`/${process.env.SLUG_URL}/services/web-designing/`} style={{ textDecoration: "none" }} >
                                    <Button sx={{ marginTop: "10px" }} type="submit" className='btn_apply_now' >
                                        Read More
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                    {/* 5 */}
                    <Box className="service_container_one container flex-between-wrap"  >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={graphic_logo} alt="" />
                            <Typography variant='h2' className="service_secondary-heading">
                                Graphic Designing Services
                            </Typography>
                            <Typography className="service_text" >
                                We understand the power of compelling visuals in capturing attention and communicating your brand's message. Our team of skilled graphic designers is dedicated to creating innovative and eye-catching designs that resonate with your audience and elevate your brand. Whether you need logos, brochures, banners, or any other graphic elements, we’ve got you covered.
                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/graphic-designing/`} style={{ textDecoration: "none" }} >
                                <Button sx={{ marginTop: "10px" }} type="submit" className='btn_apply_now' >
                                    Read More
                                </Button>
                            </Link>
                        </Box>
                        <img className='service_img' src={Graphic} alt="" />

                    </Box>

                    {/* 6 */}
                    <Box className="service_container_tow_man  flex-center">
                        <Box className="service_container_two container flex-between-wrap"   >

                        <img className='service_img' src={Ecoomerce} alt="" />

                            <Box className="devlopment-text" >
                                <img className='service-logo' src={Ecommerce_logo} alt="" />
                                <Typography variant='h2' className="service_secondary-heading">
                                    E-Commerce Development Services
                                </Typography>
                                <Typography className="service_text">
                                  
                                    At Soham Web, we specialize in creating dynamic, user-friendly e-commerce platforms that drive sales and enhance customer engagement. Our comprehensive e-commerce development services are designed to meet the unique needs of your business, whether you’re a startup, small business, or established enterprise. We leverage the latest technologies and industry best practices to build scalable, secure, and high-performance online stores.
                                </Typography>

                                <Link to={`/${process.env.SLUG_URL}/services/ecommerce-development/`} style={{ textDecoration: "none" }} >
                                    <Button sx={{ marginTop: "10px" }} type="submit" className='btn_apply_now' >
                                        Read More
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                    {/* 7 */}
                    <Box className="service_container_one container flex-between-wrap"  >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={Larval_logo} alt="" />

                            <Typography variant='h2' className="service_secondary-heading">
                            Laravel Development                            </Typography>

                            <Typography className="service_text" >
                                
                            Our Laravel development services are designed to deliver high-performance, scalable, and secure web applications tailored to your business needs. Leveraging the power of Laravel, a robust PHP framework, our skilled developers create custom solutions that streamline your operations and enhance user experience. We specialize in everything from building dynamic websites to developing complex web applications with advanced features.

                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/laraval-development/`} style={{ textDecoration: "none", }} >
                                <Button className='btn_apply_now' >
                                    Read more
                                </Button>
                            </Link>

                        </Box>
                        <img className='service_img' src={Laraval} alt="" />
                    </Box>
                    {/* 8 */}
                    <Box className="service_container_tow_man flex-center">
                        <Box className="service_container_two container flex-between-wrap" >

                        <img className='service_img' src={Codeigniter} alt="" />

                            <Box className="devlopment-text" >
                                <img className='service-logo' src={codeignitor_logo} alt="" />
                                <Typography variant='h2' className="service_secondary-heading">
                                CodeIgniter Development
                                </Typography>
                                <Typography className="service_text">
                                Our CodeIgniter development services offer robust, high-performance web applications customized to your specific business needs. Utilizing CodeIgniter, a powerful PHP framework, our experienced developers create scalable and secure solutions that enhance functionality and user experience. From custom web applications to complex portals, we ensure clean code and efficient performance. With a focus on rapid development and seamless integration, our CodeIgniter solutions help streamline your operations and achieve your business objectives. Trust us to deliver reliable and effective web applications with CodeIgniter.

                                </Typography>

                                <Link to={`/${process.env.SLUG_URL}/services/Codeigniter_development/`} style={{ textDecoration: "none" }} >
                                    <Button sx={{ marginTop: "10px" }} type="submit" className='btn_apply_now' >
                                        Read More
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                    {/* 9 */}
                    <Box className="service_container_one container flex-between-wrap"   >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={ReactNativer_logo} alt="" />

                            <Typography variant='h2' className="service_secondary-heading">
                            React Native Development
                            </Typography>

                            <Typography className="service_text" >
                            Our React Native development services specialize in creating high-quality, cross-platform mobile applications that deliver a native-like experience. Whether starting from scratch or integrating React Native into existing projects, our expert team ensures seamless performance and a consistent user interface across both iOS and Android devices. By leveraging React Native's robust capabilities, we provide cost-effective and efficient solutions tailored to your business needs. Our end-to-end services cover everything from design and development to testing and support, ensuring your app is always up-to-date and competitive. Partner with us to build dynamic and scalable mobile applications with React Native.

                            </Typography>
                            <Link to={`/${process.env.SLUG_URL}/services/react-native-development/`} style={{ textDecoration: "none", }} >
                                <Button className='btn_apply_now' >
                                    Read more
                                </Button>
                            </Link>

                        </Box>
                        <img className='service_img' src={Native} alt="" />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default ServiceContaint;

