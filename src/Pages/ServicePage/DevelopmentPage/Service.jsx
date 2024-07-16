import { Box, Typography } from '@mui/material'
import React from 'react'
import Rightclick from "../../../assets/php-department/rightclick.svg"

const Service = () => {
  return (
    <>
      <Box className="service  flex-center  "  >
        <Box className="container">
          <Box className="services_box_section  " >
            <Typography className='service_box_section_heading ' variant='h3' >Service</Typography>

            <Box className="flex-between servicebox_man " >
              <Box className="service-box flex-center">
                <Box className="flex-center">
                  <img src={Rightclick} alt="" />
                  <Typography> Website Development</Typography>
                </Box>
              </Box>

              <Box className="service-box flex-center">
                <Box className="flex-center">
                  <img src={Rightclick} alt="" />
                  <Typography> CMS Development</Typography>
                </Box>
              </Box>
              <Box className="service-box flex-center">
                <Box className="flex-center" >
                  <img src={Rightclick} alt="" />
                  <Typography> Ecommerce Development</Typography>
                </Box>
              </Box>

              <Box className="service-box flex-center">
                <Box className="flex-center">
                  <img src={Rightclick} alt="" />
                  <Typography>  Custom Framework Development</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Service;
