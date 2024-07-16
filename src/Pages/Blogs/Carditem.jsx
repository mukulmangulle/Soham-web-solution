import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Carditem = ({ blogcontent }) => {
  return (
    <>
      <Card className='blog-card' >
        <img className='blogsimg' src={blogcontent?.jetpack_featured_media_url} alt="" />
        <CardContent>
          <Link
            to={`/${process.env.SLUG_URL}/${blogcontent?.slug}/`}
            state={{ id: blogcontent?.id }}
            className="text-decortion"
          >
            <Typography id='card-heading'>
              {blogcontent?.title.rendered}
            </Typography>
          </Link>
          <Typography
            className='card_text'
            dangerouslySetInnerHTML={{ __html: blogcontent?.excerpt.rendered }}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Carditem;
