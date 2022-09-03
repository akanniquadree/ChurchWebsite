import "./Footer.css"
import * as React from 'react';
import {Link} from 'react-router-dom';


export default function Footer() {
  return (
    <div className="footer">
        <div className="footerWrapper">
            <div className="footerWrapperDetails align">
               <Link to="/"><h1>RCCG</h1></Link> 
            </div>
            <div className="footerWrapperDetails align2">
                <Link to="/contact"><h5>Contact us</h5></Link>
                <ul>
                    <li>Sundays @ 10:00a London, UK 10, Firs Avenue, Muswell Hill</li>
                    <li>Tel: 02 562-958</li>
                    <li>Mobile: 02 562-95</li>
                </ul>
            </div>
            <div className="footerWrapperDetails align2">
                <h5>Main Link</h5>
                <ul>
                  <li><Link to="/gallery"><span>Gallery</span></Link></li>
                  <li><Link to="/events"><span>Events</span></Link></li>
                  <li><Link to="/staff"><span>Our Team</span></Link></li>
                </ul>
            </div>
            <div className="footerWrapperDetails align2">
                <Link to="/contact"><h5>About us</h5></Link>
                <ul>
                    <li><Link to="/about"><span>Who are we</span></Link></li>
                    <li><Link to="/about"><span>Mission</span></Link></li>
                    <li><Link to="/about"><span>Vission</span></Link></li>
                </ul>
            </div>
        </div>
        <div className="footerBottom">
            <span>CopyWrite c 2022 by Akanni Quadree. All Rights Reserved.</span>
        </div>

    </div>
  );
}