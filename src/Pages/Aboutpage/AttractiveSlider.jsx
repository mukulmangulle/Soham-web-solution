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

const API_URL = 'https://sohamsolution.com/wp-json/wp/v2/categories'; // Replace with your API URL

const AttractiveSlider = () => {
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
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
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
                <Box className="" key={item.id} sx={{ padding: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}>
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

export default AttractiveSlider;

