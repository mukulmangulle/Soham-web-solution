import { Box, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Facebook from "../../assets/single blog page/facebook.svg";
import Twitter from "../../assets/single blog page/twitter.svg";
import Pintrest from "../../assets/single blog page/pintrest.svg";
import Linkdin from "../../assets/single blog page/linkdin.svg";
import Blckt from "../../assets/single blog page/blact.svg";
import Youtuve from "../../assets/single blog page/youtuve.svg";
import Wordpress from "../../assets/single blog page/wordpress.svg";
import { useLocation, useParams } from 'react-router';
import Categories_name from './Categories';
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
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>

      <Box className="flex-center padding-top--bottom" flexDirection={"column"}>


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

