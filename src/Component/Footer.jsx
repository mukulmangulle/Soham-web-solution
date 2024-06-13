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
                    <Box  className="footer-sec1" >
                      <Link to="/">  <img src={Soham} alt="" /></Link>
                        <Typography color={'#FFFFFF'} marginTop={2.5} fontSize={16}>
                            {contents.footerData.aboutText}
                        </Typography>

                        <Box  className="flex-between footer-sec-icon"  >
                            <img src={Facebook} alt="" />
                            <img src={Insta} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Youtube} alt="" />
                            <img src={Wordpress} alt="" />
                        </Box>
                    </Box>

                    <Box className="footer-sec2" >
                        <Typography  id="footer-h3" variant="h3"  > {contents.footerData.quickLinks.heading}</Typography>
                        <Box marginTop={2} display={'flex'} alignItems={"start"} flexDirection={"column"}>
                            <Link  to={`/${process.env.SLUG_URL}/about/`} style={{ textDecoration: "none" }} id="typography">{contents.footerData.quickLinks.text1}</Link>
                            <Link to={`/${process.env.SLUG_URL}/services/`} style={{ textDecoration: "none" }} id="typography">{contents.footerData.quickLinks.text2}</Link>
                            <Link to={`/${process.env.SLUG_URL}/career/`} style={{ textDecoration: "none" }} id="typography">{contents.footerData.quickLinks.text3}</Link>
                            <Link to={`/${process.env.SLUG_URL}/contact-us/`} style={{ textDecoration: "none" }} id="typography">{contents.footerData.quickLinks.text4}</Link>
                            <Link to={`/${process.env.SLUG_URL}/blogs`} style={{ textDecoration: "none" }} id="typography">{contents.footerData.quickLinks.text5}</Link>
                        </Box>
                    </Box>

                    <Box className="footer-sec3" >
                        <Typography    id="footer-h3" variant="h3"  >{contents.footerData.policyLinks.heading}</Typography>
                        <Box marginTop={2} fontSize={50} >
                            <Typography id="typography">{contents.footerData.policyLinks.text1}</Typography>
                            <Typography id="typography">{contents.footerData.policyLinks.text2}</Typography>
                            <Typography id="typography">{contents.footerData.policyLinks.text3}</Typography>
                            <Typography id="typography">{contents.footerData.policyLinks.text4}</Typography>
                            <Typography id="typography">{contents.footerData.policyLinks.text5}</Typography>
                        </Box>

                    </Box>

                    <Box className="footer-sec4" >
                        <Typography   id="footer-h3" variant="h3"    >
                            {contents.footerData.contactDetails.heading}</Typography>
                        <Box marginTop={2}>
                            <Box display={'flex'} margin={0.5}  >
                                <img src={call} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text1}</Typography>
                            </Box>

                            <Box display={'flex'} margin={0.5}   >
                                <img src={call} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text2}</Typography>
                            </Box>

                            <Box display={'flex'} margin={0.5} >
                                <img src={call} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text3}</Typography>
                            </Box>

                            <Box display={'flex'} margin={0.5}  >
                                <img src={Email} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text4}</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'start'} margin={0.5} >
                                <img id="logo-margin" src={Location} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text5}</Typography>
                            </Box>
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

