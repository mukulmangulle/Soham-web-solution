import { Box, Typography } from "@mui/material"
import Soham from "../assets/footer/soham.svg"
import Facebook from "../assets/footer/facebook.svg"
import Insta from "../assets/footer/insta.svg"
import Twitter from "../assets/footer/twitter.svg"
import Youtube from "../assets/footer/youtube.svg"
import Wordpress from "../assets/footer/wordpress.svg"
import call from "../assets/footer/call.svg"
import Phone from "../assets/footer/phone.svg"
import Email from "../assets/footer/email.svg"
import Location from "../assets/footer/location.svg"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchcontents } from "../features/content/contentSlice"
import { Link } from "react-router-dom"

const Footer = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);


    return (
        <>
            <Box sx={{ maxWidth: 1920, margin: 'auto' }} width={'100%'} color={"#FFFFFF"} className="flex-center" flexDirection={'column'} bgcolor={"#053480"} >
                <Box width={'87%'} paddingTop={20} display={'flex'} alignItems={'start'} justifyContent={"space-between"} flexWrap={'wrap'}>
                    <Box className="footer-sec1" >
                        <Link to="/">  <img src={Soham} alt="" /></Link>
                        <Typography color={'#FFFFFF'} marginTop={2.5} fontSize={16}>
                            {contents.footerData.aboutText}
                        </Typography>

                        <Box className="flex-between footer-sec-icon"  >
                            <a href="https://www.facebook.com/sohamsolution/"><img src={Facebook} alt="" /></a>
                            <a href="https://www.instagram.com/sohamwebsolution/"><img src={Insta} alt="" /></a>
                            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsoham_web"><img src={Twitter} alt="" /></a>
                            <a href="https://www.youtube.com/@SohamWebSolutionDewas"><img src={Youtube} alt="" /></a>
                            <a href="https://profiles.wordpress.org/sohamwebsolution/"><img src={Wordpress} alt="" /></a>



                        </Box>
                    </Box>

                    <Box className="footer-sec2" >
                        <Typography id="footer-h3" variant="h3"  > {contents.footerData.quickLinks.heading}</Typography>
                        <Box className="footer2-box" marginTop={2} display={'flex'} alignItems={"start"} flexDirection={"column"}>
                            <Link to={`/${process.env.SLUG_URL}/about/`} className="text-decortion" id="typography">{contents.footerData.quickLinks.text1}</Link>
                            <Link to={`/${process.env.SLUG_URL}/services/`} className="text-decortion" id="typography">{contents.footerData.quickLinks.text2}</Link>
                            <Link to={`/${process.env.SLUG_URL}/career/`} className="text-decortion" id="typography">{contents.footerData.quickLinks.text3}</Link>
                            <Link to={`/${process.env.SLUG_URL}/contact-us/`} className="text-decortion" id="typography">{contents.footerData.quickLinks.text4}</Link>
                            <Link to={`/${process.env.SLUG_URL}/blogs`} className="text-decortion" id="typography">{contents.footerData.quickLinks.text5}</Link>
                        </Box>
                    </Box>

                    <Box className="footer-sec3 " >
                        <Typography id="footer-h3" variant="h3"  >{contents.footerData.policyLinks.heading}</Typography>
                        <Box className="footer3-box" marginTop={2}  >
                            <Typography >{contents.footerData.policyLinks.text1}</Typography>
                            <Typography>{contents.footerData.policyLinks.text2}</Typography>
                            <Typography >{contents.footerData.policyLinks.text3}</Typography>
                            <Typography >{contents.footerData.policyLinks.text4}</Typography>
                            <Typography >{contents.footerData.policyLinks.text5}</Typography>
                        </Box>

                    </Box>

                    <Box className="footer-sec4" >
                        <Typography id="footer-h3" variant="h3"    >
                            {contents.footerData.contactDetails.heading}</Typography>
                        <Box className="footer2-box" marginTop={2}>
                            <a className="text-decortion" style={{display: "flex" }} href="tel:%20+91%207879231700"  margin={0.5}  >
                                <img src={call} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text1}</Typography>
                            </a>

                            <a className="text-decortion" style={{ display: "flex" }} href="tel:+91%2070003-35673%20"  margin={0.5}   >
                                <img src={call} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text2}</Typography>
                            </a>

                            <a className="text-decortion" style={{display: "flex" }}  href="tel:+91%2077480-18188"  margin={0.5} >
                                <img src={call} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text3}</Typography>
                            </a>

                            <a href="mailto:contact@sohamsolution.com" alignItems={"center"} className="text-decortion"  style={{display: "flex" }}  >

                                <img src={Email} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text4}</Typography>
                            </a>

                            <a href="https://www.google.com/maps/place/Soham+Web+Solution+-+Web+Development+Company/@22.9648902,76.0458359,17z/data=!4m14!1m7!3m6!1s0x3963177600d4efb5:0x33c81c908e54629c!2sSoham+Web+Solution+-+Web+Development+Company!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9!3m5!1s0x3963177600d4efb5:0x33c81c908e54629c!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9"
                               className="text-decortion" style={{display: "flex" }}  margin={0.5} >
                                <img id="logo-margin" src={Location} alt="" />
                                <Typography color={"white"} paddingLeft={1}>{contents.footerData.contactDetails.text5}</Typography>
                            </a>
                        </Box>
                    </Box>
                </Box>

                <Box bgcolor={"#053480"} padding={4} >
                    <Typography fontSize={16} textAlign={'CENTER'} color='#FFFFFF'>
                        {contents.footerData.copyrightText}

                    </Typography>
                </Box>
            </Box>
        </>
    )
}
export default Footer;

