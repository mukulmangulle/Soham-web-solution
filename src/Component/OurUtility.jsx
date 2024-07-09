
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Email from "../assets/whatsapp1.svg"
import Our1 from "../assets/our service/our1.svg"
import Our2 from "../assets/our service/our2.svg"
import Our3 from "../assets/our service/our3.svg"
import Our4 from "../assets/our service/our4.svg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchcontents } from '../features/content/contentSlice'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const OurUtility = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);


    return (
        <Box className="container_space">
            <Box className="flex-center-column utility "  >

                <Box className="flex-center-coulmn ">
                    <Typography variant='h2' className='secondary_heading'>
                        {contents.ourutility.heading}
                    </Typography>
                    <Typography className='primary_subheading our-utality-p '>
                        {contents.ourutility.contant}
                    </Typography>
                </Box>

                <Box className="web-devlopment flex-between " >
                    <Link to={`/${process.env.SLUG_URL}/services/web-designing/`} className='text-decortion flex-center  box_utility flex-center-coulmn' >
                        <img src={Our1} alt="" className="zoom-img" />
                        <Typography >
                            Web Designing  <br />& Development
                        </Typography>
                    </Link>

                    <Link to={`/${process.env.SLUG_URL}/services/graphic-designing/`} className='text-decortion flex-center  box_utility flex-center-coulmn'   >
                        <img src={Our2} alt="" className="zoom-img" />
                        <Typography  >
                            Graphic <br /> Design
                        </Typography>
                    </Link>

                    <Link  to={`/${process.env.SLUG_URL}/services/ecommerce-development/`} className='text-decortion flex-center  box_utility flex-center-coulmn'  >
                        <img src={Our3} alt="" className="zoom-img" />
                        <Typography  >
                            E-commerce <br /> Development
                        </Typography>
                    </Link>

                    <Link to={`/${process.env.SLUG_URL}/services/react-native-development/`} className='text-decortion flex-center  box_utility flex-center-coulmn'  >
                        <img src={Our4} alt="" className="zoom-img" />
                        <Typography >
                            Mobile App <br /> Development
                        </Typography>
                    </Link>


                </Box>

            </Box>
        </Box>
    )
}

export default OurUtility
