import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import Vssion from "../../assets/AboutSection1/vission.svg"
import Mission from "../../assets/AboutSection1/mission.svg"

const Someourwork2 = () => {
    return (
        <Box className="flex-center vision-man ">
          <Box className=" flex-center-coulmn container">
                <Typography className='secondary_heading' variant='h2'  >
                    Our Vision & Mission
                </Typography>
                <Box className="vision-child flex-between ">

                    <Box className="card_1">
                        <Card className='V-CARD'>
                            <CardContent >
                                <Box >
                                    <Box display={"flex"} alignItems={"center"}>
                                        <img src={Vssion} alt="" />
                                        <Typography className='vision-heading' gutterBottom variant="h5" component="div">
                                            Vision
                                        </Typography>

                                    </Box>

                                    <Typography className='lizards' variant="body2" >
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>

                    </Box>

                    <Box className="card_1">
                        <Card className='V-CARD'>
                            <CardContent >
                                <Box >
                                    <Box display={"flex"} alignItems={"center"}>
                                        <img src={Mission} alt="" />

                                        <Typography className='vision-heading' gutterBottom variant="h5" component="div">
                                            Mission
                                        </Typography>

                                    </Box>


                                    <Typography className='lizards' variant="body2" >
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>

                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Someourwork2
