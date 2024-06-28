import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Swslogo from "../assets/soham.svg"
import Down from "../assets/down-arow.svg"
import Sidebar from '../Pages/Toggle/Sidebar';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';

import { Margin } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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


            <Box className="ul-box service_child_menu" >
              <Link className='color-white text text-decortion' to={`/${process.env.SLUG_URL}/about/`}  >Company</Link>
              <Typography className='fontSize16' marginTop={"2px"}>
                <div style={{ position: 'relative' }} ref={menuRef}>
                  <div style={{ cursor: 'pointer' }} className='navbar-ul'>
                    <img className='down-arrow' src={Down} alt="" />
                  </div>

                  <div className='dropdown_menu' style={{ borderRadius: 5, position: 'absolute', top: '100%', left: '0', width: "180px", color: "#053480", background: "white", border: '1px solid #ccc' }}>
                    <ul style={{ display: "flex", flexDirection: "column", listStyleType: 'none', margin: 0, padding: 0, marginTop: 15, marginBottom: 15, marginLeft: 10 }} >
                      <Link to={`/${process.env.SLUG_URL}/about/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>About us</Link>

                      <Link  to={`/${process.env.SLUG_URL}/career/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Career</Link>

                      {/* <Link to={`/${process.env.SLUG_URL}/services/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Services</Link> */}

                      <Link to={`/${process.env.SLUG_URL}/blogs/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Blogs</Link>

                      <Link to={`/${process.env.SLUG_URL}/contact-us/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Contact us</Link>
                      {/* <Link to={`/${process.env.SLUG_URL}/bloges`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}> blog</Link> */}
                    </ul>
                  </div>

                </div>

              </Typography>
            </Box>
            <Box className="ul-box service_child_menu" >
              <Link className='color-white text text-decortion' to={`/${process.env.SLUG_URL}/about/`}  >Services</Link>
              <Typography className='fontSize16' marginTop={"2px"}>
                <div style={{ position: 'relative' }} ref={menuRef}>
                  <div style={{ cursor: 'pointer' }} className='navbar-ul'>
                    <img className='down-arrow' src={Down} alt="" />
                  </div>

                  <div className='dropdown_menu' style={{ borderRadius: 5, position: 'absolute', top: '100%', left: '0', width: "250px", color: "#053480", background: "white", border: '1px solid #ccc' }}>
                    <ul style={{ display: "flex", flexDirection: "column", listStyleType: 'none', margin: 0, padding: 0, marginTop: 15, marginBottom: 15, marginLeft: 10 }} >

                      <Link to={`/${process.env.SLUG_URL}/services/php-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>PHP Development</Link>

                      <Link to={`/${process.env.SLUG_URL}/services/wordpress-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Wordpress Development</Link>

                      <Link to={`/${process.env.SLUG_URL}/services/shopify-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Shopify Development</Link>

                      <Link to={`/${process.env.SLUG_URL}/services/web-designing/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Website Designing
                      </Link>
                      <Link to={`/${process.env.SLUG_URL}/services/graphic-designing/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>
                        Graphic Designing</Link>
                      <Link to={`/${process.env.SLUG_URL}/services/ecommerce-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>E-commerce Development</Link>
                      <Link to={`/${process.env.SLUG_URL}/services/laraval-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>
                        Laravel Development</Link>
                      <Link to={`/${process.env.SLUG_URL}/services/Codeigniter_development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>CodeIgniter Development</Link>

                      <Link to={`/${process.env.SLUG_URL}/services/react-native-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>React Native Development</Link>

                    </ul>
                  </div>

                </div>

              </Typography>
            </Box>

            {/* <Box className="ul-box " >
              <Link className='color-white text text-decortion ' to={`/${process.env.SLUG_URL}/services/`}  >Services</Link>
              <Typography className='fontSize16' marginTop={"2px"}>
                <ServicesMenu />
                
                
                </Typography>
            </Box> */}
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
