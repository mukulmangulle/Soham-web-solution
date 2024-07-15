


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { Box, Typography, Grid } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchcontents } from '../../features/content/contentSlice';
// import Figma from "../../assets/AboutSection1/language/Figma.svg"
// import Html from "../../assets/AboutSection1/language/html.svg"
// import Js from "../../assets/AboutSection1/language/JS.svg"
// import Php from "../../assets/AboutSection1/language/php.svg"
// import React_native from "../../assets/AboutSection1/language/reactive native.svg"
// import Shopify from "../../assets/AboutSection1/language/shopify.svg"
// import Sql from "../../assets/AboutSection1/language/SQL.svg"
// import Wordpress from "../../assets/AboutSection1/language/wordpres.svg"
// import React_img from "../../assets/AboutSection1/language/react_library.svg"



// const AntTabs = styled(Tabs)({


//   //  UPPER  BALA BORDER 
//   // borderBottom: '5px solid #e8e8e8',
//   '& .MuiTabs-indicator': {
//     // backgroundColor: 'red',
//   },
// });


// const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
//   textTransform: 'none',

//   [theme.breakpoints.up('sm')]: {

//   },
//   fontWeight: theme.typography.fontWeightRegular,
//   marginRight: theme.spacing(1),
//   color: 'rgba(0, 0, 0, 0.85)',
//   fontFamily: [

//   ].join(','),
//   '&:hover': {
//     color: '#40a9ff',
//     opacity: 1,
//   },
//   '&.Mui-selected': {
//     color: '#1890ff',
//     fontWeight: theme.typography.fontWeightMedium,
//   },
//   '&.Mui-focusVisible': {
//     backgroundColor: '#d1eaff',
//   },
// }));

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   '& .MuiTabs-indicator': {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//   },
//   '& .MuiTabs-indicatorSpan': {
//     maxWidth: 40,
//     width: '100%',
//     // backgroundColor: '#635ee7',
//   },
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({

//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),

//     '&.Mui-focusVisible': {
//       backgroundColor: 'rgba(100, 95, 228, 0.32)',
//     },
//   }),
// );

// export default function CustomizedTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const dispatch = useDispatch()
//   const { contents, isLoading, isError } = useSelector((state) => state.content);


//   React.useEffect(() => {
//     dispatch(fetchcontents())
//   }, [dispatch]);


//   return (
//     <Box  >


//       <Box className="flex-center-coulmn techno ">
//         <Box className="technology_child_section container" textAlign={'center'} >

//           <Box className="flex-center-coulmn" width={"100%"} sx={{ flexWrap: "wrap" }} >
//             <Typography className='secondary_heading' variant='h2'  >
//               {contents.Technologyfocus.heading}
//             </Typography>
//             <Typography className='primary_subheading our-utality-p' >
//               {contents.Technologyfocus.content}
//             </Typography>
//             <Box  className="flex-between " margin={3} >
//               <AntTabs value={value} onChange={handleChange} aria-label="ant example" >
//                 <AntTab sx={{ fontSize: "22px" }} label="Languages" />
//                 <AntTab sx={{ fontSize: "22px" }} label="Frameworks" />
//                 <AntTab sx={{ fontSize: "22px" }} label="CMS" />
//                 <AntTab sx={{ fontSize: "22px" }} label="Database" />
//                 <AntTab sx={{ fontSize: "22px" }} label="Other" />
//               </AntTabs>
//             </Box>

//             <Box className="flex-center">
//               <Box paddingTop={2} width={'100%'} marginY={1}   >
//                 <StyledTabs
//                   value={value}
//                   onChange={handleChange}
//                   aria-label="styled tabs example" className='tecno-content'
//                   display={"flex"} sx={{ flexWrap: "wrap" }}>

//                   <StyledTab
//                     icon={
//                       <Grid display={"flex"} label="Workflows" item xs={12} sm={6} >
//                           <img src={Php} alt="" />
//                            <img src={Js} />
//                            <img src={Sql} />
//                            <img src={Html} alt="" />
//                       </Grid>
//                     } />

//                   <StyledTab
//                     icon={
//                       <Grid display={"flex"}  label="Datasets" item xs={12} sm={6} >
//                           <img src={React_native} />
//                       </Grid>
//                     } />

//                   <StyledTab
//                     icon={
//                       <Grid display={"flex"} label="Connections" item xs={12} sm={6} >
//                           <img src={Wordpress} />
//                           <img src={Shopify} />
//                       </Grid>
//                     } />

//                   <StyledTab
//                     icon={
//                       <Grid display={"flex"} label="message" item xs={12} sm={6} >
//                           <img src={React_img} alt="" />
//                           <img src={Figma} alt="" />
//                       </Grid>
//                     } />
//                 </StyledTabs>

//               </Box>
//             </Box>

//           </Box>
//         </Box>
//       </Box>
//       <Box >
//       </Box>
//     </Box>

//   );
// }



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../../features/content/contentSlice';
import Figma from "../../assets/AboutSection1/language/Figma.svg";
import Html from "../../assets/AboutSection1/language/html.svg";
import Js from "../../assets/AboutSection1/language/JS.svg";
import Php from "../../assets/AboutSection1/language/php.svg";
import React_native from "../../assets/AboutSection1/language/reactive native.svg";
import Shopify from "../../assets/AboutSection1/language/shopify.svg";
import Sql from "../../assets/AboutSection1/language/SQL.svg";
import Wordpress from "../../assets/AboutSection1/language/wordpres.svg";
import React_img from "../../assets/AboutSection1/language/react_library.svg";
import Laraval from "../../assets/AboutSection1/language/laravel.svg";
import Codelgniter from "../../assets/AboutSection1/language/codelgniter.svg";


const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    // Customize indicator if needed
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

export default function TecnologicalFoucus() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const { contents, isLoading, isError } = useSelector((state) => state.content);

  React.useEffect(() => {
    dispatch(fetchcontents());
  }, [dispatch]);

  return (
    <Box>
      <Box className="flex-center-coulmn techno ">
        <Box className="technology_child_section container" textAlign="center">
          <Box className="flex-center-coulmn" width="100%" >
            <Typography className="secondary_heading" variant="h2">
              {contents.Technologyfocus.heading}
            </Typography>
            <Typography className="primary_subheading our-utality-p">
              {contents.Technologyfocus.content}
            </Typography>
            <Box className="flex-between techno_tab" margin={3}>
              <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label="Languages" />
                <AntTab label="Frameworks" />
                <AntTab label="CMS" />
                <AntTab label="Other" />
              </AntTabs>
            </Box>

            <Box className="flex-center">
              <Box paddingTop={2} width="100%" marginY={1}>
                <StyledTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="styled tabs example"
                  className="tecno-content"
                  display="flex"
                  sx={{ flexWrap: "wrap" }}
                >
                  {value === 0 && (
                    <Grid className='Technology_img_box' item xs={12} sm={6}>
                      <img src={Html} alt="HTML" />
                      <img src={Js} alt="JavaScript" />
                      <img src={Php} alt="PHP" />
                      <img src={Sql} alt="SQL" />


                    </Grid>
                  )}
                  {value === 1 && (
                    <Grid className='Technology_img_box' item xs={12} sm={6}>
                      <img src={React_native} alt="React Native" />
                      <img src={Laraval} alt="Laraval" />
                      <img src={Codelgniter} alt="Codelgniter" />
                    </Grid>
                  )}
                  {value === 2 && (
                    <Grid className='Technology_img_box' item xs={12} sm={6}>
                      <img src={Wordpress} alt="WordPress" />
                      <img src={Shopify} alt="Shopify" />
                    </Grid>
                  )}
                  {value === 3 && (
                    <Grid className='Technology_img_box' item xs={12} sm={6}>
                      <img src={React_img} alt="React" />
                      <img src={Figma} alt="Figma" />
                    </Grid>
                  )}
                </StyledTabs>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}