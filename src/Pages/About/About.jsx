import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import {Link} from "react-router-dom"
import "./about.css"
import Priest from '../../Component/Priests/Priest'
import Footer from '../../Component/Footer/Footer'

export default function About() {
  return (
    <>
        <Topbar/>
        <div className="eventList">
            <div className="eventListTop">
                <h1>About us</h1>
                <div style={{display:"flex", marginTop:"15px", justifyContent:"center"}}>
                    <Link to="/" className="lik">Home</Link>
                    <p>About us</p>
                </div>
            </div>
            <div className="aboutContainer">
                <div className="aboutContainerWrapper">
                    <div className="aboutContainerRight">
                        <h4>Welcome to Our World</h4>
                        <p>Whatever your age or life story, you are welcome! Our mission is simple: People are our heart and Jesus is our message.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </div>
                    <div className="aboutContainerLeft">
                        <div className="aboutContainerLeftImage">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutContainer">
                <div className="aboutContainerWrapper" style={{backgroundColor:"#eee"}}>
                    <div className="aboutContainerLeft" style={{justifyContent:"flex-end"}}>
                        <div className="aboutContainerLeftImage">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                    </div>
                    <div className="aboutContainerRight">
                        <h4>Our Mission</h4>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts…
                            chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                        <h4>Our Vision</h4>
                        <p>
                            Whatever your age or life story, you are welcome! Our mission is simple: People are our heart and Jesus is our message.
                            chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className="aboutContainer">
                    <Priest about/>
            </div>
        </div>
        <Footer/>
    </>
  )
}
