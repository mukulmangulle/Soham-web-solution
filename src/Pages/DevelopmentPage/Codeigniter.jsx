import React from 'react'
import wordpress_logo from "../../assets/Service/logo/wordpress.svg"
import { Box, Typography } from '@mui/material'
import Service from './Service'
import Form from "./Form"

const Codeigniter = () => {
    return (
        <>
            <Box>
                <Box className="bg-img  " >
                    <Typography className='primary-heading' variant='h1' >
                        Codeigniter Development
                    </Typography>
                </Box>
            </Box>

            <Box className="service_primary_section flex-center" >
                <Box className="service-man flex-center-coulmn "  >

                    <Box className="service_container_one flex-between-wrap" width={"100%"}  >
                        <Box className="devlopment-text" >
                            <img className='service-logo' src={wordpress_logo} alt="" />

                            <Typography variant='h2' className="service_secondary-heading">
                                Codeigniter Development Services for Web Applications


                            </Typography>

                            <Typography className="service_text" >
                                CodeIgniter is an open-source PHP framework designed for developing high-end dynamic websites and applications. For developing custom CodeIgniter, it provides a comprehensive range of tools and libraries. CodeIgniter makes the development process more efficient with less configuration requirements. Programmers and developers can finish projects more quickly and effectively because to its special capabilities, which drastically decrease the need for substantial code.
                            </Typography>
                            {/* <Link to={`/${process.env.SLUG_URL}/services/php-development/`} style={{ textDecoration: "none", }} >
                                <Button className='btn_apply_now' >
                                    Read more
                                </Button>
                            </Link> */}

                        </Box>
                        <Box className="background-service flex-center"  >
                            {/* <img src={} alt="" /> */}
                        </Box>
                    </Box>

                </Box>
            </Box>


            <Service />
            <Form />


        </>
    )
}

export default Codeigniter
