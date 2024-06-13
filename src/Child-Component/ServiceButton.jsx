import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ServiceButton = (props) => {
  const { children, style ,onClick} = props
  return (
    <>
    <Link  to={`/${process.env.SLUG_URL}/Php_department`}  style={{ textDecoration: "none" }}>
     <Box  display={"flex"} alignItems={'center'} justifyContent={"start"} marginTop={3}>
      <Button type="submit" className='apply-now' onClick={onClick} props={props}>
      Read More 
      </Button>
    </Box>
    </Link>
    </>
  )
}

export default ServiceButton
