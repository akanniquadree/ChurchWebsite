import "./singleEvent.css"
import React from 'react'
import Topbar from "../../Component/Topbar/Topbar"
import {Link} from "react-router-dom"


export default function SingleEvent() {
  return (
    <>
        <Topbar/>
        <div className="singleEventList">
            <div className="singleEventListTop">
                <h1>College & Young Adults - The Journey Worshipt</h1>
                <div style={{display:"flex", marginTop:"15px", justifyContent:"center"}}>
                    <Link to="/" className="liks">Home</Link>
                    <Link to="/events" className="liks">Event</Link>
                    <p>College & Young Adults - The Journey Worship</p>
                </div>
            </div>
            <div className="singleImage">
                <div className="singleEventName">
                    <h1>College & Young Adults - The Journey Worshipt</h1>
                    <h4>October 5, 2023 @ 8:00 am - November 12, 2023 @ 5:00 pm</h4>
                </div>
            </div>
            <div className="singleImage">
                <div className="singleImageWrapper">
                    <img src="/Images/omotunde.jpg" alt=""/>
                </div>
            </div>
            <div className="singleEventdetail">
                <div className="singleEventdetails">
                    <p>
                            Working from home meant we could vary snack and coffee breaks, change our desks or view, goof off, drink on the job, even spend the day in pajamas, and often meet to gossip or share ideas. On the other hand, we bossed ourselves around, set impossible goals, and demanded longer hours
                            than office jobs usually entail. It was the ultimate “flextime,” in that it depended on how flexible we felt each day, given deadlines, distractions, and workaholic crescendos.
                            Aristotle made several efforts to explain how moral conduct contributes to the good life for human agents, including the Eqikh EudaimonhV and the Magna Moralia, but the most complete surviving statement of his views on morality occurs in the Eqikh Nikomacoi .
                            Successful people ask better questions.
                            But on Aristotle’s view, the lives of individual human beings are invariably linked together in a social context. In the Peri PoliV he speculated about the origins of the state, described and assessed the relative merits of various types of government, and listed the obligations of the individual citizen.
                    </p>
                    <p>
                    Luctus fermentum commodo
                            Working from home meant we could vary snack and coffee breaks, change our desks or view, goof off, drink on the job, even spend the day in pajamas, and often meet to gossip or share ideas. On the other hand, we bossed ourselves around, set impossible goals, and demanded longer hours than office jobs usually entail. It was the ultimate “flextime,” in that it depended on how flexible we felt each day, given deadlines, distractions, and workaholic crescendos.

                            Working from home meant we could vary snack and coffee breaks, change our desks or view, goof off, drink on the job, even spend the day in pajamas, and often meet to gossip or share ideas. On the other hand, we bossed ourselves around, set impossible goals, and demanded longer hours than office jobs usually entail. It was the ultimate “flextime,” in that it depended on how flexible we felt each day, given deadlines, distractions, and workaholic crescendos.
                    </p>
                </div>
            </div>
            <div className="singleEventBottom">
                <div className="singleEventBottomWrapper">
                    <div className="singleEventBottomLeft">
                            <div className="singleEventBottomLeftTop">
                                <h5>Details</h5>
                                <h6>Start</h6>
                                <p>October 5, 2023 @ 8:00 am</p>
                                <h6>End</h6>
                                <p>November 12, 2023 @ 5:00 pm</p>
                                <h6>Event Category:</h6>
                                <p>Conference</p>
                            </div>
                            <div className="singleEventBottomLeftDown">
                                <h5>Organizer</h5>
                                <h6>OceanThemes</h6>
                                <p>October 5, 2023 @ 8:00 am</p>
                                <h6>Phone</h6>
                                <p>+1234998800</p>
                                <h6>website</h6>
                                <p>https://goo.gl/qxhm2P</p>
                            </div>
                       
                    </div>
                    <div className="singleEventBottomRight">
                                <div className="singleEventBottomLeftTop">
                                    <h5>Venue</h5>
                                    <h6>Catholic Church
                                        121 King Street, Melbourne Victoria 3000 Australia
                                        Melbourne, Australia
                                        + Google Map
                                    </h6>
                                </div>
                                <div className="singleEventBottomRightDown">
                                    <img src="/Images/bg_pattern.jpg" alt=""/>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
