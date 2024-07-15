// import { Box, CircularProgress, Typography } from '@mui/material';
// import React, { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchcategories } from '../../features/Categories/categoriesSlice';
// import { Link } from 'react-router-dom';


// const Categories_name = () => {
//     const dispatch = useDispatch();
//     const { categoriescontents, isLoading } = useSelector((state) => state.categorie);
//     const imageListRef = useRef(null);

//     useEffect(() => {
//         dispatch(fetchcategories());
//         initSlider();
//     }, [dispatch]);

//     const initSlider = () => {
//         const imageList = imageListRef.current;
//         const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
//         let scrollPosition = 0;

//         const autoScroll = () => {
//             const scrollAmount = imageList.clientWidth / 2;
//             if (scrollPosition >= maxScrollLeft) {
//                 scrollPosition = 0;
//             } else {
//                 scrollPosition += scrollAmount;
//             }
//             imageList.scrollTo({
//                 left: scrollPosition,
//                 behavior: 'smooth'
//             });
//         };

//         const autoScrollInterval = setInterval(autoScroll, 5000);

//         return () => clearInterval(autoScrollInterval);
//     };

//     if (isLoading) {
//         return (
//             <Typography margin={"auto"} variant='h5' id="Heading-h2" textAlign={'center'} height={"70vh"}><CircularProgress /></Typography>
//         )
//     }

//     return (
//         <>
//             <Box className="container box_category " style={{ textAlign: 'center' }}>
//                 <Typography variant='h3' className='box-all-categories'>All Categories</Typography>

//                 <Box className="slider-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


//                     <button id="prev-slide" className="slide-button material-symbols-rounded">
//                     </button>

//                     <ul className="image-list" ref={imageListRef} style={{ listStyle: 'none', padding: 0 }}>
//                         {categoriescontents.map((categoriescontent, index) => (
//                             <Box key={index} className="image-item">
//                                 <Link
//                                     to={`/${process.env.SLUG_URL}/categories/${categoriescontent.slug}/`}
//                                     state={{ id: categoriescontent.id, name: categoriescontent.name }}
//                                     className="text-decortion"
//                                 >
//                                     <Typography id='card-heading'>
//                                         {categoriescontent.name}
//                                     </Typography>
//                                 </Link>
//                             </Box>
//                         ))}
//                     </ul>
//                     <button id="next-slide" className="slide-button material-symbols-rounded">
//                     </button>
//                 </Box>
                
//             </Box>
//         </>
//     );
// }

// export default Categories_name;


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const AttractiveSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           initialSlide: 3,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings}>
//       <div>
//         <img src="image1.jpg" alt="slide1" />
//       </div>
//       <div>
//         <img src="image2.jpg" alt="slide2" />
//       </div>



//     </Slider>
//   );
// };

// export default AttractiveSlider;



// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const AttractiveSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           initialSlide: 3,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings}>
//       <div>
//         <img src="image1.jpg" alt="slide1" />
//       </div>
//       <div>
//         <img src="image2.jpg" alt="slide2" />
//       </div>



//     </Slider>
//   );
// };

// export default AttractiveSlider;




// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import axios from 'axios';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Box, Typography } from '@mui/material';

// const API_URL = 'https://sohamsolution.com/wp-json/wp/v2/categories'; // Replace with your API URL

// const AttractiveSlider = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get(API_URL)
//             .then(response => {
//                 setData(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1,
//                 },
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2,
//                 },
//             },
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     initialSlide: 3,
//                 },
//             },
//         ],
//     };

//     return (
//         <Slider {...settings}>
//             {data.map(item => (
//                 <Box key={item.id} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}>
//                     <Typography variant="h6">{item.name}</Typography>
//                 </Box>
//             ))}
//         </Slider>
//     );
// };

// export default AttractiveSlider;



import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const API_URL = 'https://sohamsolution.com/wp-json/wp/v2/categories'; 

const Categories = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
<>
<Box className="container box_category " style={{ textAlign: 'center' }}>
        <Typography variant='h3' className='box-all-categories'>All Categories</Typography>


        <Slider {...settings}>
            {data.map(item => (
                <Box className="blog_box" key={item.id} >
                  <Box  className="image-item">
                   <Link
                                    to={`/${process.env.SLUG_URL}/categories/${item.slug}/`}
                                    state={{ id: item.id, name: item.name }}
                                    className="text-decortion"
                                >
                  
                    <Typography className="text-decortion" variant="body2">{item.name}</Typography>
                    </Link>
                    </Box>
                </Box>
            ))}
        </Slider>
        </Box>
        </>
    );
   
};

export default Categories;

