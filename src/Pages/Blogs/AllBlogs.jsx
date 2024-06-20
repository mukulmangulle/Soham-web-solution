import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Carditem from './Carditem';
import { fetchblogcontents } from '../../features/blog/blogsSlice';
import AllPagination2 from './AllPagination2';
import Footer2 from '../../Component/Footer2';

const AllBlogs = ({ Api_url }) => {
    const dispatch = useDispatch();
    const { blogcontents, isLoading } = useSelector((state) => state.blogs);
    const [showPagination, setShowPagination] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchblogcontents());
        };
        fetchData();

        const timeoutId = setTimeout(() => {
            setShowPagination(true);
        });

        return () => clearTimeout(timeoutId);
    }, [dispatch, isLoading]);

    return (
        <Box>
           <Box className="bg-img ">
           <Typography variant='h1' id='Heading-h2' className='padding-top-bottom bg-img' >
                All Blogs
            </Typography>
           </Box>
            <Box  display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box id="blog480-center" width={"87%"} display={'flex'} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
                    {blogcontents.map((blogcontent) => (
                        <Carditem key={blogcontent?.id} blogcontent={blogcontent} />
                    ))}
                    {showPagination && <AllPagination2 Api_url={Api_url} />}
                </Box>
            </Box>
            <Footer2/>
        </Box>
    );
};

export default AllBlogs;

