import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer";
import HomeSection from "./Component/HomeSection";
import Contact from "./Pages/ContactPage/ContactForm";
import Blog from "./Pages/Blogpage/Blog";
import Aboutmain from "./Pages/Aboutpage/Aboutmain";
import Careermain from "./Pages/CareerPage/Careermain";
import Mnavbar from "./Component/M-navbar";
import Service from "./Pages/ServicePage/ServiceMan";
import Festival_title from "./Pages/Blogs/Festival_section";
import Singlecontent from "./Pages/Blogs/Singlecontent";
import AllBlogs from "./Pages/Blogs/AllBlogs";
import ScrollToTop from "./ScrollToTop";

import { Height } from "@mui/icons-material";
import { Box } from "@mui/material";
import OurJourney from "./OurJourney";

import Privacy from "./Pages/FooterPage/Privacy";
import Terms from "./Pages/FooterPage/Terms";
import Support from "./Pages/FooterPage/Support";
import Shipping from "./Pages/FooterPage/Shipping";
import Refund_policy from "./Pages/FooterPage/Refund_policy";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Festival_section from "./Pages/Blogs/Festival_section";
import ServiceMan from "./Pages/ServicePage/ServiceMan";
import ContactMan from "./Pages/ContactPage/ContactMan";

import PhpDepartment from "./Pages/ServicePage/DevelopmentPage/PhpDepartment"
import WordPress from "./Pages/ServicePage/DevelopmentPage/WordPress";
import Shopify from "./Pages/ServicePage/DevelopmentPage/Shopify";
import WebDesigning from "./Pages/ServicePage/DevelopmentPage/WebDesigning";
import Graphic from "./Pages/ServicePage/DevelopmentPage/Graphic";
import Ecommerce from "./Pages/ServicePage/DevelopmentPage/Ecommerce";
import Laraval from "./Pages/ServicePage/DevelopmentPage/Laraval";
import Codeigniter from "./Pages/ServicePage/DevelopmentPage/Codeigniter";
import React_Native from "./Pages/ServicePage/DevelopmentPage/React_Native";


function App() {
  const url_slug = "https://wp.phpcodedemo"
  let Api_url = "https://sohamsolution.com/wp-json/wp/v2/"

  return (
    <Box >
      <Router>
        <ScrollToTop />

        {/* <Mnavbar /> */}
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path={`/${process.env.SLUG_URL}/about/`} element={<Aboutmain />} />
          <Route path={`/${process.env.SLUG_URL}/contact-us/`} element={<ContactMan />} />
          <Route path={`/${process.env.SLUG_URL}/bloges`} element={<Blog />} />

          <Route path={`/${process.env.SLUG_URL}/blogs`} element={<AllBlogs Api_url={Api_url} url_slug={url_slug} />} />
          <Route path={`/${process.env.SLUG_URL}/:id`} element={<Singlecontent Api_url={Api_url} />} />
          <Route path={`/${process.env.SLUG_URL}/categories/:id`} element={<Festival_section url_slug={url_slug} />} />

          <Route path={`/${process.env.SLUG_URL}/career/`} element={<Careermain />} />
          <Route path={`/${process.env.SLUG_URL}/services/`} element={<ServiceMan />} />

          <Route path={`/${process.env.SLUG_URL}/services/php-development/`} element={<PhpDepartment />} />
          <Route path={`/${process.env.SLUG_URL}/services/wordpress-development/`} element={<WordPress />} />
          <Route path={`/${process.env.SLUG_URL}/services/shopify-development/`} element={< Shopify />} />
          <Route path={`/${process.env.SLUG_URL}/services/web-designing/`} element={<WebDesigning />} />
          <Route path={`/${process.env.SLUG_URL}/services/graphic-designing/`} element={<Graphic />} />
          <Route path={`/${process.env.SLUG_URL}/services/ecommerce-development/`} element={<Ecommerce />} />
          <Route path={`/${process.env.SLUG_URL}/services/laraval-development/`} element={<Laraval />} />
          <Route path={`/${process.env.SLUG_URL}/services/codeigniter_development/`} element={<Codeigniter />} />
          <Route path={`/${process.env.SLUG_URL}/services/react-native-development/`} element={<React_Native />} />

          <Route path={`/${process.env.SLUG_URL}/life-at-soham/`} element={<OurJourney />} />


          <Route path={`/${process.env.SLUG_URL}/privacy-policy/`} element={<Privacy />} />
          <Route path={`/${process.env.SLUG_URL}/terms-conditions/`} element={<Terms />} />
          <Route path={`/${process.env.SLUG_URL}/support-and-maintenance-packages/`} element={<Support />} />
          <Route path={`/${process.env.SLUG_URL}/shipping-delivery-policy/`} element={<Shipping />} />
          <Route path={`/${process.env.SLUG_URL}/cancellation-refund-policy/`} element={<Refund_policy />} />

        </Routes>

        <ToastContainer />
      </Router>
    </Box>
  );
}

export default App;
