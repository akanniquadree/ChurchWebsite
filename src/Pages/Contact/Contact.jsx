import "./contact.css"
import React from 'react'
import {Link} from "react-router-dom"
import Topbar from "../../Component/Topbar/Topbar"
import { AccessTime, Home, Phone } from "@material-ui/icons"
import Footer from "../../Component/Footer/Footer"




function Contact() {
  return (
    <>
        <Topbar/>
        <div className="eventList">
            <div className="eventListTop">
                <h1>Contact Us</h1>
                <div style={{display:"flex", marginTop:"15px", justifyContent:"center"}}>
                    <Link to="/" className="lik">Home</Link>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="contactContainer">
                <div className="contactWrapper">
                    <h1>FIND US</h1>
                    <div className="contactDetails">
                        <div className="contactDetail">
                            <div className="icon">
                                <Home htmlColor="white" fontSize="large"/>
                            </div>
                            <h4>Our Address</h4>
                            <p>123, New Lenox Chicago, IL 60606</p>
                        </div>
                        <div className="contactDetail">
                            <div className="icon">
                                <Phone htmlColor="white" fontSize="large"/>
                            </div>
                            <h4>Call Us</h4>
                            <p>08098764563</p>
                            <p>08098764563</p>
                            <p>08098764563</p>
                        </div>
                        <div className="contactDetail">
                            <div className="icon">
                                <AccessTime htmlColor="white" fontSize="large"/>
                            </div>
                            <h4>Service Times</h4>
                            <p>Wednesday 6:00 PM</p>
                            <p>Saturday 6:00 PM</p>
                            <p>Sunday: 9:45 AM & 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact