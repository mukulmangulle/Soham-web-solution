import { Box, Typography } from '@mui/material'
import React from 'react'
import Rightclick from "../../assets/php-department/rightclick.svg"

const Service = () => {
    return (
        <>
            <Box className="service padding-top-bottom" maxWidth={"1920px"} margin={'auto'} display={'flex'} alignItems={'center'} justifyContent={"center"} >
                <Box width={"95%"} marginY={4}  >
                    <Typography textAlign={'center'} variant='h3' color={"white"} fontWeight={600} marginBottom={7} >Service</Typography>
                 <Box display={"flex"} alignItems={"center"} justifyContent={'center'}>
                 <Box width={"89%"} display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>
                        <Box  className="service-box">
                          <img src={Rightclick} alt="" />
                          Website Development
                        </Box>
                        <Box className="service-box" >
                          <img src={Rightclick} alt="" />
                          CMS Development
                        </Box>
                        <Box  className="service-box" >
                          <img src={Rightclick} alt="" />
                          Ecommerce Development                      
                        </Box>
                        <Box  className="service-box">
                          <img src={Rightclick} alt="" />
                          Custom Framework Development
                        </Box>
                    </Box>
                 </Box>
                </Box>
            </Box>
        </>
    )
}

export default Service;
