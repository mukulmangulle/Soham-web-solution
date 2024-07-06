import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcategories } from '../../features/Categories/categoriesSlice';
import { Link } from 'react-router-dom';


const Categories_name = () => {
    const dispatch = useDispatch();
    const { categoriescontents, isLoading } = useSelector((state) => state.categorie);
    const imageListRef = useRef(null);

    useEffect(() => {
        dispatch(fetchcategories());
        initSlider();
    }, [dispatch]);

    const initSlider = () => {
        const imageList = imageListRef.current;
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        let scrollPosition = 0;

        const autoScroll = () => {
            const scrollAmount = imageList.clientWidth / 2; 
            if (scrollPosition >= maxScrollLeft) {
                scrollPosition = 0;
            } else {
                scrollPosition += scrollAmount;
            }
            imageList.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        };

        const autoScrollInterval = setInterval(autoScroll, 5000); 

        return () => clearInterval(autoScrollInterval);
    };  

    if (isLoading) {
        return (
            <Typography margin={"auto"} variant='h5' id="Heading-h2" textAlign={'center'} height={"70vh"}><CircularProgress /></Typography>
        )
    }

    return (
        <>
            <Box className="container " style={{ textAlign: 'center' }}>
                <Box className="slider-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <button id="prev-slide" className="slide-button material-symbols-rounded">
                    </button>
                    <ul className="image-list" ref={imageListRef} style={{ listStyle: 'none', padding: 0 }}>
                        {categoriescontents.map((categoriescontent, index) => (
                            <Box key={index} className="image-item">
                                <Link
                                    to={`/${process.env.SLUG_URL}/categories/${categoriescontent.slug}/`}
                                    state={{ id: categoriescontent.id, name: categoriescontent.name }}
                                    className="text-decortion"
                                >
                                    <Typography id='card-heading'>
                                        {categoriescontent.name}
                                    </Typography>
                                </Link>
                            </Box>
                        ))}
                    </ul>
                    <button id="next-slide" className="slide-button material-symbols-rounded">
                    </button>
                </Box>
                <Box className="slider-scrollbar">
                    <Box className="scrollbar-track">
                        <Box className="scrollbar-thumb"></Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Categories_name;
