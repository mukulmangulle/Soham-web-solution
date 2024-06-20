import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Blog1 from "../../assets/BlogPage/blog1.png"
import Blog2 from "../../assets/BlogPage/blog2.png"
import Blog3 from "../../assets/BlogPage/blog3.png"
import BlogButton from '../../Child-Component/BlogButton';
import contentSlice, { fetchcontents } from '../../features/content/contentSlice';
import { useDispatch, useSelector } from 'react-redux';

const blogLatestBlog = ({}) => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);
    return (
        <>
            <Box  display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>

                < Box  width={"84%"} >
                    <Box className="blog-pading-top" >
                        <Typography id="heading-child" variant='h4' >Latest Blog</Typography>
                        <Box
                         id="blog480-center"
                          className="flex-between-wrap">

                            {/* 1 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >
                                        {contents.blogpages.latestblog.title1}
                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.latestblog.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.latestblog.title2}
                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.latestblog.pregraph2}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.latestblog.title3}
                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.latestblog.pregraph3}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box >

                    <Box className="blog-pading-top">
                        <Typography id="heading-child" >Laraval Blog</Typography>

                        <Box  id="blog480-center" className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >
                                        {contents.blogpages.laravalblog.title1}
                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.laravalblog.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.laravalblog.title2}
                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.laravalblog.pregraph2}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.laravalblog.title3}
                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.laravalblog.pregraph3}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box className="blog-pading-top">
                        <Typography id="heading-child" >Fastival Blog</Typography>

                        <Box  id="blog480-center" className="flex-between-wrap">

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >   {contents.blogpages.Fastivalblog.title1}
                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.Fastivalblog.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.Fastivalblog.title2}
                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.Fastivalblog.pregraph2}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.Fastivalblog.title3}
                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.Fastivalblog.pregraph3}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>

                    </Box>

                    <Box className="blog-pading-top">
                        <Typography id="heading-child" > Wordpress Blog</Typography>

                        <Box  id="blog480-center" className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >
                                        {contents.blogpages.Wordpressblog.title1}                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.Wordpressblog.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.Wordpressblog.title2}                                     </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.Wordpressblog.pregraph2}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.Wordpressblog.title3}                                     </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.Wordpressblog.pregraph3}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box className="blog-pading-top">
                        <Typography id="heading-child" >Php Blog</Typography>
                        <Box  id="blog480-center" className="flex-between-wrap">

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >
                                        {contents.blogpages.phpblog.title1}
                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.phpblog.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.phpblog.title2}                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.phpblog.pregraph2}

                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.phpblog.title3}                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.phpblog.pregraph3}

                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box className="blog-pading-top">
                        <Typography id="heading-child" >React Blog</Typography>
                        <Box  id="blog480-center" className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >
                                        {contents.blogpages.Reactblog.title1}                                    </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.Reactblog.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.Reactblog.title2}                                       </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.Reactblog.pregraph2}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                        {contents.blogpages.Reactblog.title3}                                       </Typography>
                                    <Typography id="card-typography" >
                                        {contents.blogpages.Reactblog.pregraph3}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box className="blog-pading-top">
                        <Typography id="heading-child" >Shopify Blog</Typography>
                        <Box  id="blog480-center" className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >
                                    {contents.blogpages.shopifyblog.title1}                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.shopifyblog.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                    {contents.blogpages.shopifyblog.title2} 
                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.shopifyblog.pregraph2}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                    {contents.blogpages.shopifyblog.title3}                                     </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.shopifyblog.pregraph3}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box className="blog-pading-top">
                        <Typography id="heading-child" >Web Development Blog</Typography>
                        <Box  id="blog480-center" className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >
                                    {contents.blogpages.developmentblog.title1}                                      </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.developmentblog.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                    {contents.blogpages.developmentblog.title2}                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.developmentblog.pregraph2}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                    {contents.blogpages.developmentblog.title3}                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.developmentblog.pregraph3}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box className="blog-pading-top">
                        <Typography id="heading-child" >Woo Commerce Blog</Typography>
                        <Box  id="blog480-center" className="flex-between-wrap">

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >
                                    {contents.blogpages.woocommerceblog.title1}     
                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.woocommerceblog.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                    {contents.blogpages.woocommerceblog.title2}
                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.woocommerceblog.pregraph2}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                    {contents.blogpages.woocommerceblog.title3}                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.woocommerceblog.pregraph3}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box className="blog-pading-top">
                        <Typography id="heading-child" >Wordpress Plugins Blog</Typography>
                        <Box  id="blog480-center" className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >
                                    {contents.blogpages.wordpressplugin.title1}
                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.wordpressplugin.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                    {contents.blogpages.wordpressplugin.title2}
                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.wordpressplugin.pregraph2}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                    {contents.blogpages.wordpressplugin.title3}                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.wordpressplugin.pregraph3}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                    <Box className="blog-pading-top">
                        <Typography id="heading-child" >All Blog</Typography>
                        <Box  id="blog480-center" className="flex-between-wrap" >

                            {/* 1 */}
                            <Card id='blog-card'>
                                <img className='blogsimg' src={Blog1} alt="" />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" id="card-heading" >
                                    {contents.blogpages.Allblog.title1}
                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.Allblog.pregraph1}
                                    </Typography>
                                </CardContent>
                            </Card>


                            {/* 2 */}
                            <Card id='blog-card'  >
                                <img className='blogsimg' src={Blog2} alt="" />
                                <CardContent  >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                    {contents.blogpages.Allblog.title2}                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.Allblog.pregraph2}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* 3 */}
                            <Card id='blog-card' >
                                <img className='blogsimg' src={Blog3} alt="" />
                                <CardContent >

                                    <Typography gutterBottom variant="h6" id="card-heading"  >
                                    {contents.blogpages.Allblog.title3}
                                    </Typography>
                                    <Typography id="card-typography" >
                                    {contents.blogpages.Allblog.pregraph3}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box display={"flex"} alignItems={'center'} justifyContent={"center"} marginTop={3}>
                            <BlogButton />
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default blogLatestBlog;