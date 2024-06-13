import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import Errowleft from "../../assets/single blog page/errowleft.svg";
import Errowright from "../../assets/single blog page/errowright.svg";
import { Link, useLocation } from 'react-router-dom';

const NextPrevious = ({ Api_url }) => {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageChangeLoading, setPageChangeLoading] = useState(false);
    const location = useLocation();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`${Api_url}posts/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setBlog(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [Api_url]);

    useEffect(() => {
        if (location.state && location.state.slug) {
            const index = blog.findIndex(item => item.slug === location.state.slug);
            if (index !== -1) {
                setCurrentIndex(index);
            }
        }
    }, [location, blog]);

    useEffect(() => {
        if (pageChangeLoading) {
            const timer = setTimeout(() => {
                setPageChangeLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [pageChangeLoading]);

    const handleNext = () => {
        if (currentIndex < blog.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setPageChangeLoading(true);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setPageChangeLoading(true);
        }
    };

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} >
                {currentIndex > 0 && (
                    <Link to={`/${process.env.SLUG_URL}/${blog[currentIndex - 1].slug}/`} state={{ id: blog[currentIndex - 1].id }}>
                        <Button onClick={handlePrevious}>
                            <img height={30} src={Errowleft} alt="" />
                        </Button>
                    </Link>
                )}
                <Typography id='pregraph' margin={1}>Previous</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} >
                <Typography id='pregraph' margin={1}>Next</Typography>
                {currentIndex < blog.length - 1 && (
                    <Link to={`/${process.env.SLUG_URL}/${blog[currentIndex + 1].slug}/`} state={{ id: blog[currentIndex + 1].id }}>
                        <Button onClick={handleNext}>
                            <img height={30} src={Errowright} alt="" />
                        </Button>
                    </Link>
                )}
            </Box>
            {loading || pageChangeLoading ? (
                <Box position="fixed" top={0} left={0} width="100%" display="flex" justifyContent="center" alignItems="center" height="100%" bgcolor="rgba(255, 255, 255, 0.5)">
                    <CircularProgress />
                </Box>
            ) : null}
        </Box>
    );
};

export default NextPrevious;
