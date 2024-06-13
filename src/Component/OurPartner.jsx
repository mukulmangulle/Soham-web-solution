import React, { useEffect } from 'react';
import { Box, Button, Typography } from "@mui/material";
import Parent1 from "../assets/parent/Parent1.svg";
import Parent2 from "../assets/parent/Parent2.svg";
import Parent3 from "../assets/parent/parent3.svg";
import Parent4 from "../assets/parent/Parent4.svg";
import Parent5 from "../assets/parent/parent5.svg";
import Parent6 from "../assets/parent/parent6.svg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../features/content/contentSlice';

function Partner() {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <>
            <Box  paddingTop={"5rem"} sx={{ maxWidth: "1920px", margin: 'auto' }} >
                <Box className="flex-center" flexDirection={'column'} flexWrap={'nowrap'}>
                    <Typography id='Heading-h2' variant='h2' >
                        {contents.ourPartner.heading}
                    </Typography>
                </Box>
                <Box className="flex-center"   >
                    <Box id="partner-centert" marginTop={7} width={"80%"} className="flex-between" alignItems={"center"} flexDirection={'coulmn'} flexWrap={'wrap'}>
                        <img className='size-img' src={Parent1} alt="" />

                        <img className='size-img' src={Parent2} alt="" />

                        <img className='size-img' src={Parent3} alt="" />

                        <img className='size-img' src={Parent4} alt="" />

                        <img className='size-img' src={Parent5} alt="" />

                        <img className='size-img' src={Parent6} alt="" />
                    </Box>
                </Box>

                <Box className="flex-center" maxWidth={"1920px"}  margin={"auto"} >
                    <Box id='want' paddingX={5} width={"85%"} height={280}
                        borderRadius={10} className="flex-center"
                        flexWrap={'wrap'} position={"relative"} top={120}>

                        <Box flex={1}>
                            <Typography fontSize={"30px"} color={"#FFFFFF"} > {contents.ourPartner.childBox.content}</Typography>
                        </Box>
                        <Box id="life-soham">
                            <Button sx={{ padding: "10px", width: "220px", height: "57px", border: "1px solid white", color: "05180", fontSize: "25px", fontWeight: 700, background: "white" }}>Life@Soham</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Partner;




