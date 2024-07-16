import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const API_URL = 'https://sohamsolution.com/wp-json/wp/v2/categories';

const Categories = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Box className="container box_category " style={{ textAlign: 'center' }}>
                <Typography variant='h3' className='box-all-categories'>All Categories</Typography>
                <Slider {...settings}>
                    {data.map(item => (
                        <Box className="blog_box" key={item.id} >
                            <Box className="image-item">
                                <Link to={`/${process.env.SLUG_URL}/categories/${item.slug}/`}
                                    state={{ id: item.id, name: item.name }}
                                    className="text-decortion">

                                    <Typography className="text-decortion" variant="body2">{item.name}</Typography>
                                </Link>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </>
    );
};
export default Categories;

