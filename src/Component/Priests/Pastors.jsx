import Typography from '@mui/material/Typography';
import { CardActionArea,useMediaQuery } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Aos from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react"

export default function Pastor() {
    const matches = useMediaQuery("(max-width:600px)")
    useEffect(()=>{
        Aos.init({offset: 100,duration: 1000,})
       },[])
  return (
                <div className="staffListwrapperTwo" data-aos="slide-left">
                    <Card sx={{ maxWidth: matches ?300: 200, marginTop:"15px" }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height= {matches ? "170" :"140"}
                            image="/Images/pastor.jpg"
                            alt="green iguana"
                            sx={{borderRadius:"50%",margin:"auto", padding:"10px", width:"70%", alignSelf:"center"}}
                            />
                            <CardContent>
                                <div className="staffListLeft">
                                    <h4>Rodney Stratton</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Chior Master</h5>
                                    <h6>080986535689</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: matches ?300: 200, marginTop:"15px" }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height= {matches ? "170" :"140"}
                            image="/Images/pastor.jpg"
                            alt="green iguana"
                            sx={{borderRadius:"50%",margin:"auto", padding:"10px", width:"70%", alignSelf:"center"}}
                            />
                            <CardContent>
                                <div className="staffListLeft">
                                    <h4>Rodney Stratton</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Chior Master</h5>
                                    <h6>080986535689</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: matches ?300: 200, marginTop:"15px" }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height= {matches ? "170" :"140"}
                            image="/Images/pastor.jpg"
                            alt="green iguana"
                            sx={{borderRadius:"50%",margin:"auto", padding:"10px", width:"70%", alignSelf:"center"}}
                            />
                            <CardContent>
                                <div className="staffListLeft">
                                    <h4>Rodney Stratton</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Chior Master</h5>
                                    <h6>080986535689</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: matches ?300: 200 , marginTop:"15px"}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height= {matches ? "170" :"140"}
                            image="/Images/pastor.jpg"
                            alt="green iguana"
                            sx={{borderRadius:"50%",margin:"auto", padding:"10px", width:"70%", alignSelf:"center"}}
                            />
                            <CardContent>
                                <div className="staffListLeft">
                                    <h4>Rodney Stratton</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Chior Master</h5>
                                    <h6>080986535689</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: matches ?300: 200, marginTop:"15px" }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height= {matches ? "170" :"140"}
                            image="/Images/pastor.jpg"
                            alt="green iguana"
                            sx={{borderRadius:"50%",margin:"auto", padding:"10px", width:"70%", alignSelf:"center"}}
                            />
                            <CardContent>
                                <div className="staffListLeft">
                                    <h4>Rodney Stratton</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Chior Master</h5>
                                    <h6>080986535689</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
  )
}