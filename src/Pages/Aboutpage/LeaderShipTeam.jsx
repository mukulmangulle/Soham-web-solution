import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Laravel from "../../assets/AboutSection1/laravel.svg"
import Codeignetor from "../../assets/AboutSection1/codeignetor.svg"
import Sql from "../../assets/AboutSection1/sql.svg"
import co1 from "../../assets/AboutSection1/neeraj malakar.svg"
import co2 from "../../assets/AboutSection1/anil meena.svg"
import co3 from "../../assets/AboutSection1/ravi yadav.svg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchcontents } from '../../features/content/contentSlice'
const LeaderShipTeam = () => {

    const dispatch = useDispatch()
    const { contents, isLoading, isError } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <>
            <Box className="padding-top-bottom leadership">
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                    <Typography paddingY={1} id='Heading-h2' variant='h2' >
                        {contents.Leadership.heading}
                    </Typography>

                    <Typography id="Typography-black" fontWeight={700} padding={1}   >
                        {contents.Leadership.content}
                    </Typography>
                </Box>


                <Box id="team" padding={3} width={'90%'} display={'flex'} alignItems={'center'} justifyContent={"space-evenly"} flexWrap={'wrap'}>
                    <Box className="flex-center-column" margin={2}>
                        <img className='sir' src={co1} alt="" />
                        <Typography id="leadership-name" >Neeraj Malakar</Typography>
                        <Typography className='leadership-p' >Founder & CEO</Typography>
                    </Box>
                    <Box className="flex-center-column" margin={2}>
                        <img className='sir' src={co2} alt=""  />
                        <Typography id="leadership-name">Anil Meena</Typography>
                        <Typography className='leadership-p'>CTO & COO</Typography>
                    </Box>
                    <Box className="flex-center-column" margin={2}>
                        <img className='sir' src={co3} alt=""  />
                        <Typography id="leadership-name">Ravi Yadav</Typography>
                        <Typography className='leadership-p'>Founder & CEO</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default LeaderShipTeam
