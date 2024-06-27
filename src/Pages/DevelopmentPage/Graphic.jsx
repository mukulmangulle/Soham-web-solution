
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form  from "./Form"

const Graphic = () => {
    return (
        <>
    <Box>
                <Box className="bg-img  " >
                    <Typography className='primary-heading' variant='h1' >Graphic Designing</Typography>
                </Box>
            </Box>
            <Box className="service_primary_section flex-center" >
                <Box className="service-man flex-center-coulmn "  >

                <Box className="service_container_one flex-between-wrap" width={"100%"}  >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={Php} alt="" />

                            <Typography variant='h2' className="service_secondary-heading">
                            Graphic Designing                  
                                          </Typography>

                            <Typography className="service_text" >
                            Graphic designing is at the heart of visual communication, transforming ideas into compelling visuals that captivate and engage audiences. Our graphic design services encompass a wide range of solutions, from logo and brand identity creation to marketing materials and digital graphics. We blend creativity with strategic thinking to produce designs that not only look stunning but also effectively convey your brand message. Our team of talented designers is dedicated to crafting high-quality visuals that elevate your brand and leave a lasting impression. Whether you need a complete brand overhaul or specific design elements, we are here to bring your vision to life.

                            </Typography>
                            {/* <Link to={`/${process.env.SLUG_URL}/services/php-development/`} style={{ textDecoration: "none", }} >
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

export default Graphic