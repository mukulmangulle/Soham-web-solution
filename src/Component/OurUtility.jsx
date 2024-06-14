
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Email from "../assets/whatsapp1.svg"
import Our1 from "../assets/our service/our1.svg"
import Our2 from "../assets/our service/our2.svg"
import Our3 from "../assets/our service/our3.svg"
import Our4 from "../assets/our service/our4.svg"
import Our5 from "../assets/our service/our5.svg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchcontents } from '../features/content/contentSlice'
import React, { useEffect } from 'react'

const OurUtility = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);


    return (
        <Box className="flex-center padding-top-bottom  width1920" flexDirection={'column'}  >
            <Box className="flex-center-coulmn">
                <Typography variant='h2' id='Heading-h2'>
                    {contents.ourutility.heading}
                </Typography>
                <Typography id="Typography-gray " className='our-utality-p '>
                    {contents.ourutility.contant}
                </Typography>
            </Box>

            <Box className="web-devlopment flex-between " >
                <Box className=' flex-center margin2'  >
                    <img src={Our1} alt="" />
                    <Typography >
                        {contents.ourutility.order.text1}
                    </Typography>
                </Box>

                <Box className=' flex-center margin2'  >
                    <img src={Our2} alt="" />
                    <Typography  >
                        {contents.ourutility.order.text2}
                    </Typography>
                </Box>

                <Box className=' flex-center margin2'  >
                    <img src={Our3} alt="" />
                    <Typography  >
                        {contents.ourutility.order.text3}
                    </Typography>
                </Box>

                <Box className=' flex-center margin2'  >
                    <img src={Our4} alt="" />
                    <Typography >
                        {contents.ourutility.order.text4}
                    </Typography>
                </Box>

                <Box className=' flex-center margin2'  >
                    <img src={Our5} alt="" />
                    <Typography   >
                        {contents.ourutility.order.text5}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default OurUtility
