import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Swslogo from "../assets/soham.svg"
import Down from "../assets/down-arow.svg"
import Sidebar from '../Pages/Toggle/Sidebar';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';
import CompanyMenu from '../CompanyMenu';
import ServicesMenu from '../ServicesMenu';
import { Margin } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Box className='navbar' position={"sticky"} top={"0%"} display={'flex'} alignItems={'center'} >
      {/* <AppBar position="static" display={'flex'} alignItems={'center'} justifyContent={'center'} >  */}
      {/* <Toolbar >  */}
      <Box className="flex-center" >

        <Box className="flex-between navbar-height"  >
          <Link to="/" >
            <img color='#FFFFFF' src={Swslogo} alt="" className='sws-logo' />
          </Link>

          <Box flexGrow={1 / 10} className="flex-between ul-list"
            sx={{ display: { xs: 'none', md: 'flex' } }}>

            {/* <Box className="ul-box">
              <Typography className='fontSize16'><CompanyMenu /></Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box> */}

            <Box className="ul-box" >
              <Link className='color-white text text-decortion' to={`/${process.env.SLUG_URL}/about/`}  >Company</Link>
              <Typography className='fontSize16'  marginTop={"2px"}><CompanyMenu /></Typography>
            </Box>


            <Box className="ul-box " >
              <Link className='color-white text text-decortion ' to={`/${process.env.SLUG_URL}/services/`}  >Services</Link>
              <Typography className='fontSize16' marginTop={"2px"}><ServicesMenu /></Typography>
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
            {/* 
            <Box className="ul-box">
              <Typography className='fontSize16'>Work</Typography>
              <img className='down-arrow' src={Down} alt="" />
            </Box> */}


            <Link className="text-decortion flex-center hire-button" to={`/${process.env.SLUG_URL}/contact-us/`}>Contact us</Link>

          </Box>
        </Box>
      </Box>

      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Sidebar />
      </Box>
      {/* </Toolbar>  */}
      {/* </AppBar> */}
    </Box>
  )
}

export default Navbar;
