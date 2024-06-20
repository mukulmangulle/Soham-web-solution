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
import Categories_name from './Categories_name';
import NextPrevious from './NextPrevious';
import Footer2 from '../../Component/Footer2';

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
      <Box  className="flex-center padding-top--bottom"  flexDirection={"column"}>
        <Box className="bg-img ">
          <Typography id="heading-1" variant='h1'>
            {blog?.title?.rendered}
          </Typography>
        </Box>
        <Box className="singleblogpage-man">
          <Box className="all-pg420">
            <img className='singleblogpage-img' src={blog?.jetpack_featured_media_url} alt="" />
            <Box className="singlepage-section2">
              <Typography flexWrap={'wrap'} id='pregraph' marginY={3} dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }} />


              <NextPrevious currentId={id} Api_url={Api_url} />


              <Box className="logo" width={280} display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginTop={4} >
              <a href="https://www.facebook.com/sohamsolution/"> <img height={36} src={Facebook} alt="" /></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsoham_web"> <img height={30} src={Twitter} alt="" /></a>
              <a href="https://www.pinterest.com/pin/create/button/?url=https://sohamsolution.com/9-steps-to-creating-a-wordpress-plugin/&description=9%20Steps%20to%20Creating%20a%20WordPress%20Plugin%20for%20Beginners">  <img height={30} src={Pintrest} alt="" /></a>
              <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fsohamsolution.com%2F9-steps-to-creating-a-wordpress-plugin%2F%26title%3D9%2520Steps%2520to%2520Creating%2520a%2520WordPress%2520Plugin%2520for%2520Beginners%26summary%3Dhttps%3A%2F%2Fsohamsolution.com%26source%3DSoham%2520Web%2520Solution%2520-%2520Website%2520Development%2520Company%2520India"> <img height={30} src={Linkdin} alt="" /></a>
              <a href="https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fsohamsolution.com%2F9-steps-to-creating-a-wordpress-plugin%2F&posttype=link&title=9+Steps+to+Creating+a+WordPress+Plugin+for+Beginners&caption=A+WordPress+plugin+is+a+software+that+can+be+added+to+a+WordPress+website+to+enhance+its+functionality+and+add+new+features.+It+acts+as+an+add-on%2C+eliminating+the+need+for+coding+or+technical+knowledge.+Plugins+are+created+by+developers+and+can+be+downloaded+from+the+WordPress+plugin+directory+or+third-party+websites.&content=https%3A%2F%2Fsohamsolution.com%2F9-steps-to-creating-a-wordpress-plugin%2F"><img height={30} src={Blckt} alt="" /></a>
              <a href="https://www.youtube.com/@SohamWebSolutionDewas"> <img height={30} src={Youtuve} alt="" /></a>
              <a href="https://profiles.wordpress.org/sohamwebsolution/"> <img height={30} src={Wordpress} alt="" /></a>
              </Box>
            </Box>
          </Box>
          <Categories_name Api_url={Api_url} />
        </Box>
      </Box>
      <Footer2/>
    </>
  )
}
export default Singlecontent;

