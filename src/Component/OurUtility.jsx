
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
        <Box  sx={{ maxWidth: 1920, margin: 'auto' }} className="flex-center padding-top-bottom" flexDirection={'column'}  >
            <Box  display={'flex'} alignItems={'center'} flexDirection={'column'}>
                 <Typography variant='h2' id='Heading-h2'>
                    {contents.ourutility.heading}
                </Typography>
                <Typography id="Typography-gray " className='our-utality-p '>
                    {contents.ourutility.contant}
                </Typography>
            </Box>

            <Box  width={'70%'} className="web-devlopment flex-between " >
                <Box className='web-devlopment-child flex-center margin2'  >
                    <img className='web-devlopment-img' src={Our1} alt="" />
                    <Typography className='web-devlopment-typo our-box'>   {contents.ourutility.order.text1}</Typography>
                </Box>

                <Box className='web-devlopment-child flex-center margin2'  >
                    <img className='web-devlopment-img' src={Our2} alt="" />
                    <Typography className='web-devlopment-typo our-box' > {contents.ourutility.order.text2}</Typography>
                </Box>

                <Box className='web-devlopment-child flex-center margin2'  >
                    <img className='web-devlopment-img' src={Our3} alt=""/>
                    <Typography className='web-devlopment-typo our-box' >  {contents.ourutility.order.text3}</Typography>
                </Box>

                <Box className='web-devlopment-child flex-center margin2'  >
                    <img className='web-devlopment-img' src={Our4} alt=""   />
                    <Typography className='web-devlopment-typo our-box' >{contents.ourutility.order.text4}</Typography>
                </Box>

                <Box className='web-devlopment-child flex-center margin2'  >
                    <img className='web-devlopment-img' src={Our5} alt=""  />
                    <Typography className='web-devlopment-typo our-box'  >  {contents.ourutility.order.text5}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default OurUtility
