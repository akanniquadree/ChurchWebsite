import React , {useEffect} from 'react'
import Typography from '@mui/material/Typography';
import { CardActionArea, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Aos from "aos"
import "aos/dist/aos.css"

export default function Priest(about) {
    const matches = useMediaQuery("(max-width:600px)")
    useEffect(()=>{
        Aos.init({offset: 100,duration: 1000,})
       },[])
  return (
    <div className="staffListContainer">
                <div className="staffListWrapper">
                    <h3>{about ? "Meet Our Priests" : "Priests"}</h3>
                    <hr style={{marginBottom:"40px"}}/>
                </div>
                <div className="staffListwrapperTwo">
                    <Card sx={{ maxWidth: matches ?300: 200, marginTop:"15px" }} data-aos="flip-up">
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
                                    <h4>Antony Greizman Legend</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Head Pastor</h5>
                                    <h6>080986535689</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: matches ?300: 200, marginTop:"15px" }} data-aos="flip-down">
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
                                    <h4>Antony Greizman Legend</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Head Pastor</h5>
                                    <h6>080986535689</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: matches ?300: 200, marginTop:"15px" }} data-aos="flip-left">
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
                                    <h4>Antony Greizman Legend</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Head Pastor</h5>
                                    <h6>080986535689</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: matches ?300: 200 , marginTop:"15px"}} data-aos="flip-left">
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
                                    <h4>Antony Greizman Legend</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Head Pastor</h5>
                                    <h6>080986535689</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: matches ?300: 200, marginTop:"15px" }} data-aos="flip-up">
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
                                    <h4>Antony Greizman Legend</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Head Pastor</h5>
                                    <h6>080986535689</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                  
                </div>
            </div>
  )
}