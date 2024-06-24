


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography, Grid } from '@mui/material';
import Laravel from "../../assets/AboutSection1/laravel.svg"
import Codeignetor from "../../assets/AboutSection1/codeignetor.svg"
import Sql from "../../assets/AboutSection1/sql.svg"
import Node from "../../assets/AboutSection1/node.svg"
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../../features/content/contentSlice';

const AntTabs = styled(Tabs)({


  //  UPPER  BALA BORDER 
  borderBottom: '5px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});


const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',

  [theme.breakpoints.up('sm')]: {

  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [

  ].join(','),
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
    backgroundColor: '#635ee7',
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

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch()
  const { contents, isLoading, isError } = useSelector((state) => state.content);


  React.useEffect(() => {
      dispatch(fetchcontents())
  }, [dispatch]);


  return (
    <Box className="" >


      <Box bgcolor={'#e6f0fd'} paddingBottom={3} width={"100%"} className="flex-center-coulmn techno">
        <Box textAlign={'center'}>

          <Box className="flex-center-coulmn" width={"100%"} sx={{flexWrap:"wrap"}} >
            <Typography className='secondary_heading' variant='h2'  >
              {contents.Technologyfocus.heading}
            </Typography>
            <Typography className='primary_subheading' fontWeight={700}>
              {contents.Technologyfocus.content}
            </Typography>
            <Box width={750} className="flex-between " margin={3} >
              <AntTabs  value={value} onChange={handleChange} aria-label="ant example" >
                <AntTab  sx={{fontSize:"22px"}}     label="Freamworkes" />
                <AntTab  sx={{fontSize:"22px"}}  label="Database" />
                <AntTab sx={{fontSize:"22px"}}  label="Languages" />
                <AntTab sx={{fontSize:"22px"}} label="CMS" />
                <AntTab sx={{fontSize:"22px"}} label="Others" />
              </AntTabs>
            </Box>

            <Box paddingTop={2} width={'100%'} marginY={1} >
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example" className='tecno-content'
                 display={"flex"} sx={{flexWrap:"wrap"}}>

                <StyledTab
                  icon={
                    <Grid  label="Workflows" item xs={12} sm={6} >
                      <Box className="Technology-focus-grid" >
                        <img  src={Laravel} alt=""  />
                      </Box>
                    </Grid>
                  } />

                <StyledTab
                  icon={
                    <Grid label="Datasets" item xs={12} sm={6} >
                      <Box className="Technology-focus-grid" >
                        <img src={Codeignetor} />
                      </Box>
                    </Grid>
                  } />

                <StyledTab
                  icon={
                    <Grid label="Connections" item xs={12} sm={6} >
                      <Box className="Technology-focus-grid" >
                        <img src={Sql} />
                      </Box>
                    </Grid>
                  } />

                <StyledTab
                  icon={
                    <Grid label="message" item xs={12} sm={6} >
                      <Box className="Technology-focus-grid" >
                        <img src={Node}  alt="" />
                      </Box>
                    </Grid>
                  } />
              </StyledTabs>

            </Box>

          </Box>
        </Box>
      </Box>
      <Box >
      </Box>
    </Box>

  );
}

