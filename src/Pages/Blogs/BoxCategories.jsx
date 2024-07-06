
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchcategories } from '../../features/Categories/categoriesSlice';
import Carditem from './Carditem';
import Footer2 from '../../Component/Footer2';

const BoxCategories = ({ Api_url }) => {
  const dispatch = useDispatch();
  const { categoriescontents, isLoading: categoriesLoading } = useSelector((state) => state.categorie);
  const [loading, setLoading] = useState(true);
  const [blogContentForPageTwo, setBlogContentForPageTwo] = useState([]);

  const params = useParams();
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    dispatch(fetchcategories());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://sohamsolution.com/wp-json/wp/v2/posts?categories=${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.slug}`);
          }
          return response.json();
        })
        .then(data => {
          setBlogContentForPageTwo(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (categoriesLoading || loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box className="flex-center flex-coulmn box-card " >
        <Box className="blog480-center" >
          {Array.isArray(blogContentForPageTwo) ? (
            blogContentForPageTwo.map((blog) => (
              <Carditem key={blog.id} blogcontent={blog} />
            ))
          ) : (
            <Box>Data is not an array</Box>
          )}
        </Box>

        <Box  className="box-section container_space" >
          <Typography variant='h3' id='Heading-h2'  className='box-all-categories'>All Categories</Typography>

          <Box  className="flex-between-wrap box-center"  >
            {categoriescontents?.slice(0, 4).map((categoriescontent) => (
              <Box className="categories-box " key={categoriescontent?.id}>
                <Link
                  to={`/${process.env.SLUG_URL}/categories/${categoriescontent?.slug}/`}
                  state={{ id: categoriescontent?.id, name: categoriescontent?.name }}
                  className="text-decortion"
                >
                  <Typography id='card-heading' >
                    {categoriescontent.name}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer2/>
    </>
  );
}

export default BoxCategories;



