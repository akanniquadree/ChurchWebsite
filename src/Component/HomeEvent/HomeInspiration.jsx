import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { useMediaQuery } from '@material-ui/core';

export default function HomeInspiration() {
    const matches = useMediaQuery('(max-width:600px)')
  const theme = useTheme();
  useEffect(()=>{
    Aos.init({offset: 100,duration: 1000,})
   },[])

  return (
    <div style={{width:"100vw",display:"flex", justifyContent:"center"}}>
    <Card sx={{ display: 'flex', height:matches?"500px":"400px", flexDirection: matches ? "column" : "row", width:"80%"}}>
      <Box sx={{ display: 'flex', width: matches ? "100%" :"50%", flexDirection: 'column', justifyContent:"center"}}>
        <CardContent>
          <Typography component="div" variant="h5" sx={{textAlign:"center"}} data-aos="slide-up">
            Preaching to the Unsaved, teaching the Saved to Serve
          </Typography>
        
        <Typography variant="p" color="text.secondary" component="div" sx={{textAlign:"center", marginTop:"25px"}} data-aos="slide-right">
            God is not interested in the physical attitude of prayer. It doesn’t make any difference in what horizontal, vertical, or oblong direction your carcass happens to be; if your soul is not down before God, you are not praying.
        </Typography>
        <Typography variant="p" color="text.secondary" component="div" sx={{textAlign:"center", marginTop:"25px", color:"red"}} data-aos="slide-down">
             -Alexander Moore, Senior Pastor   
        </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: matches ? "100%" :"50%" }}
        image="/images/pastor.jpg"
        alt="Live from space album cover" data-aos="fade"
      />
    </Card>
    </div>
  );
}