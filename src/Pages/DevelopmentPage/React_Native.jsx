
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form from "./Form"
import Webdesigner_logo from "../../assets/Service/logo/web designing.svg"

const React_Native = () => {
    return (
        <>
            <Box>
                <Box className="bg-img" >
                    <Typography className='primary-heading' variant='h1' >React Native App Development</Typography>
                </Box>
            </Box>

            <Box className="service_primary_section flex-center" >
                <Box className="service-man flex-center-coulmn "  >

                    <Box className="service_container_one flex-between-wrap" width={"100%"}  >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={Webdesigner_logo} alt="" />

                            <Typography variant='h2' className="service_secondary-heading">
                               React Native
                            </Typography>

                            <Typography className="service_text" >
                            Our React Native app development services offer a powerful and efficient way to build cross-platform mobile applications. Whether starting from scratch or integrating React Native into your existing application, our expert team delivers high-quality, customized solutions tailored to your business goals. We manage every phase of the project, from design and development to testing and deployment, ensuring a seamless and robust final product.
React Native's flexibility and performance make it a top choice for modern app development, and our team is dedicated to leveraging its full potential. We also provide continuous support and updates to keep your app current and competitive. Choose our React Native app development services to experience innovative, reliable, and scalable mobile solutions.


                            </Typography>
                            {/* <Link to={`/${process.env.SLUG_URL}/react-native-development/`} style={{ textDecoration: "none", }} >
                    <Button className='btn_apply_now' >
                        Read more
                    </Button>
                </Link> */}

                        </Box>
                        <Box className="background-service flex-center"  >
                            <img src={Php} alt="" />
                        </Box>
                    </Box>

                </Box>
            </Box>

            <Service />
            <Form />
            </>

  )
}

export default React_Native
