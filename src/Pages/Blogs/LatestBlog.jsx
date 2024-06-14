import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Month from "../../assets/single blog page/Month.svg";
import { Link, useParams } from 'react-router-dom';

const LatestBlog = ({ Api_url }) => {

    
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
   

    const { id } = useParams();
    useEffect(() => {
        fetch(`${Api_url}posts/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
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
    }, []);
// console.log(process.env.SLUG_URL)
    return (
        <>
            <Box id="unlocking">
                <Typography id='categorie-heading'>Latest Blogs</Typography>

                {loading ? (
                    <CircularProgress />
                ) : (
                    blog.slice(1, 4).map((blog) => (
                        <Box key={blog?.id} id="unlocking-child" display={'flex'} marginY={3}>
                            <img id='unlocking-img' src={blog.jetpack_featured_media_url} alt="" />
                            <Box padding={1} display={"flex"} alignItems={"start"} justifyContent={"center"} flexDirection={"column"}>
                                <Link
                                    to={`/${process.env.SLUG_URL}/${blog?.slug}/`}
                                    state={{ id: blog?.id }}
                                    className="text-decortion"
                                    id='date-title'>
                                    {blog.title.rendered}
                                </Link>
                              
                                <Box display={"flex"} marginTop={1.2}>
                                    <img src={Month} alt="" height={25} />
                                    <Typography color={"#053480"} marginLeft={1}>
                                        {blog.modified}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))
                )}
            </Box>
        </>
    )
}
export default LatestBlog;


