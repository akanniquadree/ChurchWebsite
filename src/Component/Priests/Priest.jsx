import React from 'react'
import Typography from '@mui/material/Typography';
import { CardActionArea, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Priest(about) {
    const matches = useMediaQuery("(max-width:600px)")
  return (
    <div className="staffListContainer">
                <div className="staffListWrapper">
                    <h3>{about ? "Meet Our Priests" : "Priests"}</h3>
                    <hr style={{marginBottom:"40px"}}/>
                </div>
                <div className="staffListwrapperTwo">
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
                                    <h4>Antony Greizman Legend</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Head Pastor</h5>
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
                                    <h4>Antony Greizman Legend</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Head Pastor</h5>
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
                                    <h4>Antony Greizman Legend</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Head Pastor</h5>
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
                                    <h4>Antony Greizman Legend</h4>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                                    <h5>Head Pastor</h5>
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