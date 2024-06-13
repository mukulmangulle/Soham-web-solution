import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from "@mui/material";
import Our1 from "../assets/ourCustomer/our1.svg";
import Our2 from "../assets/ourCustomer/our2.svg";
import Our3 from "../assets/ourCustomer/our3.svg";
import Our4 from "../assets/ourCustomer/our4.svg";
import Our5 from "../assets/ourCustomer/our5.svg";
import Our6 from "../assets/ourCustomer/our6.svg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../features/content/contentSlice';


function OurCustomer() {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);





    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        variableWidth: true,
        swipeToSlide: true,
        touchMove: true,
        centerMode: true,
        centerPadding: '0',
    };

    const boxStyle = {
        padding: '0 5px',
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: "13px",

    };

    const imageStyle = {
        width: '160px',
        height: '90px',
        alignItems: "center"

    };

    return (

        <Box className="padding-top-bottom custom-man"  >
            <Box className="customer-child">
                <Typography id='Heading-h2' variant='h2' >
                    {contents.ourCustomers.heading}
                </Typography>
                <Typography width={'75%'} id="Typography-black" paddingTop={2}>
                {contents.ourCustomers.contant}
                </Typography>

            </Box>
            <Slider {...settings}>
                <Box  className="box-white">
                    <Box className="box" style={boxStyle}>
                        <img src={Our1} alt="Our 1" style={imageStyle} />
                    </Box>
                </Box>
                <Box className="box-white">
                    <Box className="box" style={boxStyle}>
                        <img src={Our2} alt="Our 2" style={imageStyle} />
                    </Box>
                </Box>
                <Box  className="box-white">
                    <Box className="box" style={boxStyle}>
                        <img src={Our3} alt="Our 3" style={imageStyle} />
                    </Box>
                </Box>
                <Box  className="box-white">
                    <Box className="box" style={boxStyle}>
                        <img src={Our4} alt="Our 4" style={imageStyle} />
                    </Box>
                </Box>
                <Box  className="box-white">
                    <Box className="box" style={boxStyle}>
                        <img src={Our5} alt="Our 5" style={imageStyle} />
                    </Box>
                </Box>
                <Box className="box-white"  >
                    <Box className="box" style={boxStyle}>
                        <img src={Our6} alt="Our 6" style={imageStyle} />
                    </Box>
                </Box>
            </Slider>
        </Box>
    );
}

export default OurCustomer;
