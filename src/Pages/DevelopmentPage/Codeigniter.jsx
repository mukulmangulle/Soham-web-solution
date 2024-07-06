import React from 'react'
import wordpress_logo from "../../assets/Service/logo/wordpress.svg"
import { Box, Typography } from '@mui/material'
import Service from './Service'
import Form from "./Form"
import Footer2 from '../../Component/Footer2'

const Codeigniter = () => {
    return (
        <>
            <Box >
                <Box className="bg-img  " >
                    <Typography className='primary-heading' variant='h1' >
                        Codeigniter Development
                    </Typography>
                </Box>
            </Box>

            <Box className="service_primary_section flex-center container_space" >

                <Box className="flex-center-coulmn  service_chid"  >
                       

                            <Typography variant='h3' className='service_secondary-heading inner_heading' >
                            CodeIgniter Development Services for Web Applications
                            </Typography>

                            <Typography variant='h5' className='primary_subheading secvice_child_text' >
                            CodeIgniter is an open-source PHP framework designed for developing high-end dynamic websites and applications. For developing custom CodeIgniter, it provides a comprehensive range of tools and libraries. CodeIgniter makes the development process more efficient with less configuration requirements. Programmers and developers can finish projects more quickly and effectively because to its special capabilities, which drastically decrease the need for substantial code.


                            </Typography>
                           

                       
                    </Box>

            </Box>


            <Service />
            <Form />
            <Footer2/>


        </>
    )
}

export default Codeigniter
