import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import "./staff.css"
import {Link} from "react-router-dom"


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
            <div className="staffListContainer">
                <div className="staffListWrapper">
                    <h3>Priest</h3>
                    <hr style={{marginBottom:"40px"}}/>
                </div>
                <div className="staffListwrapperTwo">
                    <div className="staffListLeft">
                        <div className="staffListImg">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                        <div>
                            <h4>Rodney Stratton</h4>
                            <h5>Priest</h5>
                            <p>09098746464674</p>
                        </div>
                    </div>
                    
                    <div className="staffListLeft">
                        <div className="staffListImg">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                        <div>
                            <h4>Rodney Stratton</h4>
                            <h5>Priest</h5>
                            <p>09098746464674</p>
                        </div>
                    </div>
                    
                    <div className="staffListLeft">
                        <div className="staffListImg">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                        <div>
                            <h4>Rodney Stratton</h4>
                            <h5>Priest</h5>
                            <p>09098746464674</p>
                        </div>
                    </div>
                    <div className="staffListLeft">
                        <div className="staffListImg">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                        <div>
                            <h4>Rodney Stratton</h4>
                            <h5>Priest</h5>
                            <p>09098746464674</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="staffListContainer">
                <div className="staffListWrapper">
                    <h3>Church Workers</h3>
                    <hr style={{marginBottom:"40px"}}/>
                </div>
                <div className="staffListwrapperTwo">
                    <div className="staffListLeft">
                        <div className="staffListImgTwo">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                        <div>
                            <h4>Rodney Stratton</h4>
                            <h5>Priest</h5>
                            <p>09098746464674</p>
                        </div>
                    </div>
                    <div className="staffListLeft">
                        <div className="staffListImgTwo">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                        <div>
                            <h4>Rodney Stratton</h4>
                            <h5>Priest</h5>
                            <p>09098746464674</p>
                        </div>
                    </div>
                    <div className="staffListLeft">
                        <div className="staffListImgTwo">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                        <div>
                            <h4>Rodney Stratton</h4>
                            <h5>Priest</h5>
                            <p>09098746464674</p>
                        </div>
                    </div>
                    <div className="staffListLeft">
                        <div className="staffListImgTwo">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                        <div>
                            <h4>Rodney Stratton</h4>
                            <h5>Priest</h5>
                            <p>09098746464674</p>
                        </div>
                    </div>
                    <div className="staffListLeft">
                        <div className="staffListImgTwo">
                            <img src="/Images/omotunde.jpg" alt="" />
                        </div>
                        <div>
                            <h4>Rodney Stratton</h4>
                            <h5>Priest</h5>
                            <p>09098746464674</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
