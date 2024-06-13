import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Swslogo from "../assets/soham.svg"
import Down from "../assets/down-arow.svg"
import Sidebar from '../Pages/Toggle/Sidebar';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';
import ScrollToTopButton from '../Css/Homepage/ScrollToTopButton';
import CompanyMenu from '../CompanyMenu';
import ServicesMenu from '../ServicesMenu';

const Navbar = () => {
  return (
    <Box className='navbar' position={"sticky"} top={"0%"} display={'flex'} alignItems={'center'} >
      {/* <AppBar position="static" display={'flex'} alignItems={'center'} justifyContent={'center'} >  */}
      {/* <Toolbar >  */}
      <Box className="flex-center" width={"100%"} >

        <Box className="flex-between" height={'90PX'} width={'85%'} >
          <Link to="/" >
            <img color='#FFFFFF' src={Swslogo} alt="" id='sws-logo' />
          </Link>

          <Box flexGrow={1 / 10} className="flex-between ul-list"
           sx={{ display: { xs: 'none', md: 'flex' } }}>

            <Box className="ul-box">
              <Typography className='fontSize16'><CompanyMenu/></Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box>
            <Box className="ul-box">
              <Typography className='fontSize16'><ServicesMenu/></Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box>
{/* 
            <Box className="ul-box" >
              <Typography className='fontSize16'>Soltions</Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box> */}

            {/* <Box className="ul-box">
              <Typography className='fontSize16'>Hire Developers</Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box> */}

            <Box className="ul-box">
              <Typography className='fontSize16'>work</Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box>

            <Box>
              <Button id='hire-button'>Hire Developer</Button>
            </Box>
          </Box>

        </Box>
      
      </Box>
     
     <ScrollToTopButton /> 


      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Sidebar />
      </Box>
      {/* </Toolbar>  */}
      {/* </AppBar> */}
    </Box>
  )
}

export default Navbar;
