import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Work1 from '../assets/work/work1.png'
import Work2 from "../assets/work/work2.png"
import Work3 from "../assets/work/work3.png"
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../features/content/contentSlice';

const SameOurWork = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <Box className="work flex-center-coulmn  container_space" >
            <Box className="flex-center-coulmn we-take"  >
                <Typography variant='h2' className='secondary_heading'   >
                    {contents.SomeourWorks.heading}
                </Typography>
                <Typography  textAlign={"center"}  className='primary_subheading our-utality-p' >
                    {contents.SomeourWorks.contant}
                </Typography>

            </Box>

            <Box  className="flex-center card-section"  >

            
            <Box className="flex-center card" >
                        <Box  >
                            <Box className="work-background flex-center" >
                                <img src={Work3} alt="" />
                            </Box>
                        </Box>

                        <Box display={'flex'} variant="h6" className="flex-center" flexDirection={'column'} paddingTop={1}>
                            <Typography className='card-heading text_color_blue'>
                                {contents.SomeourWorks.card.title1}
                            </Typography>
                            <Typography className='ludo-earn-p ' >
                                {contents.SomeourWorks.card.description1}
                            </Typography>
                        </Box>
                        <CardActions>
                            <Button className='view-work' >Visit Website</Button>
                        </CardActions>
                    </Box>
              

                    
                    <Box className="flex-center card" >
                        <Box  >
                            <Box className="work-background flex-center"  >
                                <img src={Work3} alt="" />
                            </Box>
                        </Box>

                        <Box display={'flex'} variant="h6" className="flex-center" flexDirection={'column'} paddingTop={1}>
                            <Typography className='card-heading text_color_blue' >
                                {contents.SomeourWorks.card.title1}
                            </Typography>
                            <Typography className='ludo-earn-p ' >
                                {contents.SomeourWorks.card.description1}
                            </Typography>
                        </Box>
                        <CardActions>
                            <Button className='view-work' >Visit Website</Button>
                        </CardActions>
                    </Box>
                   

            
                    <Box className="flex-center card" >
                        <Box  >
                            <Box className="work-background flex-center"  >
                                <img src={Work3} alt="" />
                            </Box>
                        </Box>

                        <Box display={'flex'} variant="h6" className="flex-center" flexDirection={'column'} paddingTop={1}>
                            <Typography className='card-heading text_color_blue'>
                                {contents.SomeourWorks.card.title3}
                            </Typography>
                            <Typography className='ludo-earn-p ' >
                                {contents.SomeourWorks.card.description3}
                            </Typography>
                        </Box>
                        <CardActions>
                            <Button className='view-work' >Visit Website</Button>
                        </CardActions>
                    </Box>
               
            </Box>
        </Box>
    )
}

export default SameOurWork
