import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Folder from '../assets/images/folder.png'

const NavBar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px" >
        <Link to="/">
            <img src={Folder} alt="logo" style={{
                width: '48px',
                height: '48px',
                margin: '0 20px',
            }} />
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
            <Link to='/' style={{ textDecoration: "none", color:"black", borderBottom: "3px solid black" }}>Home</Link>
            <a href="#excersises" style={{
                textDecoration: "none", color: "black",
            }}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default NavBar