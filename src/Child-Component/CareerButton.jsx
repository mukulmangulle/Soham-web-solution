import { Box, Button } from '@mui/material'
import React from 'react'

const CareerButton = (props) => {
  const { children, style ,onClick} = props
  return (
    <> <Box  display={"flex"} alignItems={'center'} justifyContent={"start"}  >
      <Button type="submit" className='apply-now-Team' onClick={onClick} props={props}>
     Apply Now
      </Button>
    </Box>
    </>
  )
}

export default CareerButton
