import React from 'react'
import "./quote.css"
import {Link} from "react-router-dom"
function Quote() {
  return (
    <div className="quote">
        <div className="quoteContainer">
            <div className="quoteTop">
                <h3>To grow in Faith and share our Faith in God with the World around us</h3>
            </div>
            <div className="quoteCenter">
                <p>God is not interested in the physical attitude of prayer. It doesn’t make any difference in what horizontal, vertical, 
                    or oblong direction your carcass happens to be; if your soul is not down before God, you are not praying.</p>
            </div>
            <div className="quoteBottom">
                <button><Link to="/about">About Us</Link></button>
                <button style={{marginLeft:"5px"}}><Link to="/about">Mission</Link></button>
                <button style={{marginLeft:"5px"}}><Link to="/contact">Contact Us</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Quote