import React, { useRef } from 'react'
import "./homeEvent.css"
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import Paper from '@mui/material/Paper';



export default function HomeEvent() {
   useEffect(()=>{
    Aos.init({offset: 100,duration: 1000,})
   },[])
  return (
    <div className="homeEventContainer">
        <h1> Upcomming Events</h1>
        <div className="homeEventWrapper">
            <div className="homeEventItems">
                <div className="homeEventItem BoxOne"  data-aos="slide-right" >
                    <h2>Latest Event</h2>
                    <div className="homeEventItemBig">
                        <div className="homeEventItemBigImg">
                            <img src="/Images/bg_pattern.jpg" alt="" />
                        </div>
                        <h3>Our Church 123, New Lenox, Chicago, IL</h3>
                        <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                        <p>Voluptatem accusantium ;kljhggjhfghvhgvhvgvv nhjgfds hghbhhhjhjkhkhkjkjjkjkjkjjkjk doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                    </div>
                </div>
                
                <div className="homeEventItem" >
                    <h2>Recent Events</h2>
                    <Paper elevation={3}>
                    <div className="homeEventItemWrapper">
                        <div className="homeEventItemDetail"  data-aos="slide-left">
                            <div className="homeEventItemDetailImg">
                                <img src="/Images/bg_pattern.jpg" alt="" />
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}} >
                                <h3>Our Church 123, New Lenox,kjhgfghhghghjg Chicago, IL</h3>
                                <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                            </div>
                        </div>
                        <div className="homeEventItemDetail"  data-aos="slide-left">
                            <div className="homeEventItemDetailImg">
                                <img src="/Images/bg_pattern.jpg" alt="" />
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <h3>Our Church 123, New Lenox,kjhgfghhghghjg Chicago, IL</h3>
                                <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                            </div>
                        </div>
                        <div className="homeEventItemDetail"  data-aos="slide-left">
                            <div className="homeEventItemDetailImg">
                                <img src="/Images/bg_pattern.jpg" alt="" />
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <h3>Our Church 123, New Lenox, Chicago, IL</h3>
                                <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                            </div>
                        </div>
                        <div className="homeEventItemDetail"  data-aos="slide-left">
                            <div className="homeEventItemDetailImg">
                                <img src="/Images/bg_pattern.jpg" alt="" />
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}  data-aos="slide-left">
                                <h3>Our Church 123, New Lenox, Chicago, IL</h3>
                                <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                            </div>
                        </div>
                        <Button  data-aos="slide-left" sx={{':hover': {bgcolor: '#678998'},backgroundColor:"#4b646f", marginBottom:"10px", alignSelf:"center", width:"120px"}}><Link to="/events" style={{fontWeight:600,color:"white", fontSize:"15px"}}>View More</Link></Button>
                    </div>
                    </Paper>
                </div>
                
            </div>
        </div>
    </div>
  )
}
