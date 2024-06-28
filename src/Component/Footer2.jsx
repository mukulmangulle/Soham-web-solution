import { Box, Button, Typography } from "@mui/material"
import Swslogo from "../assets/soham.svg"
import Facebook from "../assets/footer/facebook.svg"
import Insta from "../assets/footer/insta.svg"
import Twitter from "../assets/footer/twitter.svg"
import Youtube from "../assets/footer/youtube.svg"
import Wordpress from "../assets/footer/wordpress.svg"
import Linkdin from "../assets/footer/linkdin.svg"
import call from "../assets/footer/call.svg"
import Phone from "../assets/footer/phone.svg"
import Email from "../assets/footer/email.svg"
import Location from "../assets/footer/location.svg"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchcontents } from "../features/content/contentSlice"
import { Link } from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";



const Footer2 = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);


    return (
        <>

            <Box width={'100%'} color={"#FFFFFF"} className="flex-center footer" flexDirection={'column'}  >
                <Box className="padding-top-bottom" width={'88%'} display={'flex'} alignItems={'start'} justifyContent={"space-between"} flexWrap={'wrap'}>
                    <Box className="footer-sec1" >
                        <Link to="/" >
                            <img className="color-white sws-logo" src={Swslogo} alt="" />
                        </Link>
                        <Typography className="color-white" marginTop={2.5} fontSize={16}>
                            {contents.footerData.aboutText}
                        </Typography>


                    </Box>

                    <Box className="footer-sec2" >
                        <Typography id="footer-h3" variant="h3"  > {contents.footerData.quickLinks.heading}</Typography>
                        <Box className="footer2-box" marginTop={2} display={'flex'} alignItems={"start"} flexDirection={"column"}>
                            <Link to={`/${process.env.SLUG_URL}/about/`} className="text-decortion color-white" >{contents.footerData.quickLinks.text1}</Link>
                            {/* <Link to={`/${process.env.SLUG_URL}/services/`} className="text-decortion" id="typography">{contents.footerData.quickLinks.text2}</Link> */}
                            <Link to={`/${process.env.SLUG_URL}/career/`} className="text-decortion color-white" >{contents.footerData.quickLinks.text3}</Link>
                            <Link to={`/${process.env.SLUG_URL}/contact-us/`} className="text-decortion color-white">{contents.footerData.quickLinks.text4}</Link>
                            <Link to={`/${process.env.SLUG_URL}/blogs`} className="text-decortion color-white" >{contents.footerData.quickLinks.text5}</Link>
                        </Box>
                    </Box>

                    <Box className="footer-sec3 " >
                        <Typography id="footer-h3" variant="h3"  >{contents.footerData.policyLinks.heading}</Typography>
                        <Box className="footer3-box" marginTop={2}  >
                            <Typography > <Link className="color-white text-decortion" to={`/${process.env.SLUG_URL}/services/php-development/`} >PHP Development</Link></Typography>


                            <Typography>
                                <Link className="color-white text-decortion" to={`/${process.env.SLUG_URL}/services/wordpress-development/`}  >Wordpress Development
                                </Link>
                            </Typography>
                            <Typography>
                                <Link className="color-white text-decortion" to={`/${process.env.SLUG_URL}/services/shopify-development/`} >Shopify Development
                                </Link>
                            </Typography>
                            <Typography>
                                <Link className="color-white text-decortion" to={`/${process.env.SLUG_URL}/services/web-designing/`}  >Website Designing
                                </Link>
                            </Typography>
                            <Typography>
                                <Link className="color-white text-decortion" to={`/${process.env.SLUG_URL}/services/graphic-designing/`}>Graphic Designing
                                </Link>
                            </Typography>
                            <Typography>
                                <Link className="color-white text-decortion" to={`/${process.env.SLUG_URL}/services/ecommerce-development/`} >E-commerce Development
                                </Link>
                            </Typography>

                            <Typography>
                                <Link className="color-white text-decortion" to={`/${process.env.SLUG_URL}/services/laraval-development/`}  >Laravel Development
                                </Link>
                            </Typography>

                            <Typography>
                                <Link className="color-white text-decortion" to={`/${process.env.SLUG_URL}/services/Codeigniter_development/`}  >CodeIgniter Development
                                </Link>
                            </Typography>

                            <Typography>
                                <Link className="color-white text-decortion" to={`/${process.env.SLUG_URL}/services/react-native-development/`} >React Native Development
                                </Link>
                            </Typography>




                        </Box>

                    </Box>

                    <Box className="footer-sec4" >
                        <Typography id="footer-h3" variant="h3"    >
                            {contents.footerData.contactDetails.heading}</Typography>
                        <Box className="footer2-box" marginTop={2}>
                            <a target="_blank" className="text-decortion" style={{ display: "flex", alignItems: "center" }}href="tel:+917879231700" margin={0.5}  >
                                <IoCall color="white" fontSize={16} />

                                <Typography paddingLeft={1}>{contents.footerData.contactDetails.text1}</Typography>
                            </a>

                            <a target="_blank" className="text-decortion" style={{ display: "flex", alignItems: "center" }} href="tel:+917000335673" margin={0.5}   >
                                <IoCall color="white" fontSize={16} />
                                <Typography color={"White"} paddingLeft={1}>{contents.footerData.contactDetails.text2}</Typography>
                            </a>

                            <a target="_blank" className="text-decortion" style={{ display: "flex", alignItems: "center" }} href="tel:+917984740805" margin={0.5} >
                                <IoCall color="white" fontSize={16} />
                                <Typography paddingLeft={1}>{contents.footerData.contactDetails.text3}</Typography>
                            </a>

                            <a target="_blank" href="mailto:contact@sohamsolution.com" className="text-decortion" style={{ display: "flex", alignItems: "center" }}  >
                                <MdEmail id="maill" color="white" fontSize={16} />
                                <Typography paddingLeft={1}>{contents.footerData.contactDetails.text4}</Typography>
                            </a>

                            <a target="_blank" href="https://www.google.com/maps/place/Soham+Web+Solution+-+Web+Development+Company/@22.9648902,76.0458359,17z/data=!4m14!1m7!3m6!1s0x3963177600d4efb5:0x33c81c908e54629c!2sSoham+Web+Solution+-+Web+Development+Company!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9!3m5!1s0x3963177600d4efb5:0x33c81c908e54629c!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9"
                                className="text-decortion" style={{ display: "flex", alignItems: "start" }} margin={0.5} >
                                <FaLocationDot fontSize={16} color="white" />

                                <Typography paddingLeft={1}>{contents.footerData.contactDetails.text5}</Typography>
                            </a>
                        </Box>
                        <Box className="flex-between footer-sec-icon"  >
                            <a target="_blank" href="https://www.facebook.com/sohamsolution/"><img src={Facebook} alt="" /></a>
                            <a target="_blank" href="https://www.instagram.com/sohamwebsolution/"><img src={Insta} alt="" /></a>
                            {/* <a target="_blank" href="https://x.com/i/flow/login?redirect_after_login=%2Fsoham_web"><img src={Twitter} alt="" /></a> */}
                            <a target="_blank" href="https://www.youtube.com/@SohamWebSolutionDewas"><img src={Youtube} alt="" /></a>
                            <a target="_blank" href="https://profiles.wordpress.org/sohamwebsolution/"><img src={Wordpress} alt="" /></a>
                            <a target="_blank" href="https://in.linkedin.com/company/soham-web-solution"><img src={Linkdin} alt="" /></a>
                        </Box>
                    </Box>
                </Box>

                
                <Box className="copyright"   >
                    <Box className="copyright-child">
                        <Box>
                            <Typography >
                                {contents.footerData.copyrightText}
                            </Typography>
                        </Box>
                        {/* < Link to={`/${process.env.SLUG_URL}/cancellation-refund-policy/`}  className="color-white " margin={0.5}  >
                               Refund
                            </Link> */}
                        {/* < Link to={`/${process.env.SLUG_URL}/shipping-delivery-policy/`}  className="color-white " margin={0.5}  >
                               shipping
                            </Link> */}

                        <Box className="copyright-privacy" padding={1}>
                            < Link to={`/${process.env.SLUG_URL}/privacy-policy/`}  className="color-white " margin={0.5}  >
                                Privacy
                            </Link>

                            <Typography> |  </Typography>
                            < Link to={`/${process.env.SLUG_URL}/terms-conditions/`}  className="color-white "  margin={0.5}  >
                                Terms
                            </Link>
                            <Typography> |  </Typography>
                            < Link to={`/${process.env.SLUG_URL}/support-and-maintenance-packages/`}  className="color-white "  margin={0.5}  >
                                Support
                            </Link>

                        </Box>
                    </Box>
                </Box>
               
            </Box>
        </>
    )
}
export default Footer2;

