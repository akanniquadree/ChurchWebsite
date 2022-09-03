import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {Link} from "react-router-dom"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width:"200px",
  height:"200px",
  position:"relative"
}));

export default function HomeGallery() {
  return (
    <div className="homeEventContainer" style={{marginBottom:"40px"}}>
        <h1 style={{paddingTop:"50px",padddingBottom:"50px"}}> Gallery</h1>
        <div className="homeEventWrapper" style={{marginTop:"40px"}}>
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
            <Item >
                <img className="imag" src="/Images/slider1.jpg" alt=""/>
                <Link to="/gallery" className='dont'>View More</Link>
            </Item>
            <Item><img  className="imag" src="/Images/slider3.jpg" alt=""/>
                    <Link to="/gallery" className='dont'>View More</Link>
            </Item>
            <Item>
                <img className="imag" src="/Images/slider5.jpg" alt=""/>
                <Link to="/gallery" className='dont'>View More</Link></Item>
            <Item>
                <img className="imag" src="/Images/slider7.jpg" alt=""/>
                <Link to="/gallery" className='dont'>View More</Link>
            </Item>
            <Item>
                <img className="imag" src="/Images/slider2.jpg" alt=""/>
                <Link to="/gallery" className='dont'>View More</Link>
            </Item>
        </Stack>
        </div>
     </div>
  )
}
