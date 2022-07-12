import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs:"70px"},
        ml: { sm: '50px'} 
    }}
    position="relative"
    p="20px"
    >
        <Typography color="#0077b6" fontWeight="600" fontSize="26px">
            Easy Fitness
        </Typography>
        <Typography color="#00b4d8" fontWeight="700"
         sx={{ fontSize: { lg: '44px', xs: '40px'}}} mb="23px" mt="22px">
            Search, Find <br /> and Grind.
        </Typography>
        <Typography color="#90e0ef" fontSize="22px" lineHeight='35px' mb={'20px'}>
            Find exercises for your workouts
        </Typography>
        <Button variant="contained" href="#exercises">Explore</Button>
        <Typography color="#0582ca" sx={{ opacity: 0.2, display: { lg: 'block', xs:"none"}}} fontSize="200px">
            Grind   
        </Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner