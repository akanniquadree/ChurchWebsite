import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import "./staff.css"
import {Link} from "react-router-dom"
import Priest from '../../Component/Priests/Priest'
import Footer from '../../Component/Footer/Footer'
import Pastor from '../../Component/Priests/Pastors'


export default function Staff() {
  return (
    <>
        <Topbar/>
        <div className="eventList">
            <div className="eventListTop">
                <h1>Our Staffs</h1>
                <div style={{display:"flex", marginTop:"15px", justifyContent:"center"}}>
                    <Link to="/" className="lik">Home</Link>
                    <p>Our staffs</p>
                </div>
            </div>
            <Priest/>
            <div className="staffListContainer">
                <div className="staffListWrapper">
                    <h3>Church Workers</h3>
                    <hr style={{marginBottom:"40px"}}/>
                </div>
                <Pastor/>
            </div>
        </div>
        <Footer/>
    </>
  )
}
