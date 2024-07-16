import { Box, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import NextPrevious from './NextPrevious';
import Footer2 from '../../Component/Footer2';
import Categories from './Categories';

const Singlecontent = ({ Api_url }) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const location = useLocation();
  const id = location.state ? location.state.id : null;

  useEffect(() => {
    if (!id) {
      console.error('No id found in location state');
      return;
    }

    fetch(`${Api_url}posts/${id}`)
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
  }, [id, Api_url]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <Box className="flex-center " flexDirection={"column"}>
        <Box className="bg-img " >
          <Typography className='single_blog_heading primary-heading' margin="auto" variant='h1' >
            {blog?.title?.rendered}
          </Typography>
        </Box>

        <Box className="singleblogpage-man ">
          <Box className="all-pg420 container">
            <Box className="bg-img single_blog_heading" >
            </Box>
            <img className='singleblogpage-img' src={blog?.jetpack_featured_media_url} alt="" />
            <Box className="singlepage-section2 ">
              <Typography flexWrap={'wrap'} className='singleblog_text' marginY={3} dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }} />

              <NextPrevious currentId={id} Api_url={Api_url} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="flex-center">
        <Categories Api_url={Api_url} />
      </Box>
      <Footer2 />
    </>
  )
}
export default Singlecontent;

