import React from 'react'
import Topbar from '../Topbar/Topbar'
import "./eventList.css"
import {Link} from "react-router-dom"
import { Search } from '@material-ui/icons'
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

function EventList() {
  return (
    <>
        <Topbar/>
        <div className="eventList">
            <div className="eventListTop">
                <h1>Upcoming Event</h1>
                <div style={{display:"flex", marginTop:"15px", justifyContent:"center"}}>
                    <Link to="/" className="lik">Home</Link>
                    <p>Upcoming Event</p>
                </div>
            </div>
            <div className="eventListsearch">
                <div className="eventListsearchWrapper">
                    <Search htmlColor="#f9e699" size={20} style={{fontWeight:800}}/>
                    <input type="search" placeholder='Search for an Event'/>
                </div>
               {/* <div className="eventListPadination">
                  <Stack spacing={2}>
                    <Pagination count={10} shape="rounded" />
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>  
                </div>*/}
            </div>

            <div className="eventListsearch">
                <div className="eventListDate">
                    <span>02 September 2020</span>
                    <hr/>
                </div>
            </div>
            <div className="eventLists">
                <div className="eventListsWrapper">
                    <div className="eventListsLeft">
                        <h6>Mon</h6>
                        <p>9</p>
                    </div>
                    <div className="eventListsCenter">
                        <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                        <Link to=""><h1>College & Young Adults – The Journey Worship </h1></Link>
                        <h6>Our Church 123, New Lenox, Chicago, IL</h6>
                        <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                    </div>
                    <div className="eventListsRight">
                        <Link to="">
                            <div className="eventListsImage">
                                <img src="/Images/omotunde.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

             <div className="eventListsearch">
                <div className="eventListDate">
                    <span>02 September 2020</span>
                    <hr/>
                </div>
            </div>
            <div className="eventLists">
                <div className="eventListsWrapper">
                    <div className="eventListsLeft">
                        <h6>Mon</h6>
                        <p>9</p>
                    </div>
                    <div className="eventListsCenter">
                        <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                        <Link to=""><h1>College & Young Adults – The Journey Worship </h1></Link>
                        <h6>Our Church 123, New Lenox, Chicago, IL</h6>
                        <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                    </div>
                    <div className="eventListsRight">
                        <Link to="">
                            <div className="eventListsImage">
                                <img src="/Images/omotunde.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="eventListsearch">
                <div className="eventListDate">
                    <span>02 September 2020</span>
                    <hr/>
                </div>
            </div>
            <div className="eventLists">
                <div className="eventListsWrapper">
                    <div className="eventListsLeft">
                        <h6>Mon</h6>
                        <p>9</p>
                    </div>
                    <div className="eventListsCenter">
                        <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                        <Link to=""><h1>College & Young Adults – The Journey Worship </h1></Link>
                        <h6>Our Church 123, New Lenox, Chicago, IL</h6>
                        <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                    </div>
                    <div className="eventListsRight">
                        <Link to="">
                            <div className="eventListsImage">
                                <img src="/Images/omotunde.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="eventListsearch">
                <div className="eventListDate">
                    <span>02 September 2020</span>
                    <hr/>
                </div>
            </div>
            <div className="eventLists">
                <div className="eventListsWrapper">
                    <div className="eventListsLeft">
                        <h6>Mon</h6>
                        <p>9</p>
                    </div>
                    <div className="eventListsCenter">
                        <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                        <Link to=""><h1>College & Young Adults – The Journey Worship </h1></Link>
                        <h6>Our Church 123, New Lenox, Chicago, IL</h6>
                        <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                    </div>
                    <div className="eventListsRight">
                        <Link to="">
                            <div className="eventListsImage">
                                <img src="/Images/omotunde.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="eventListsearch">
                <div className="eventListDate">
                    <span>02 September 2020</span>
                    <hr/>
                </div>
            </div>
            <div className="eventLists">
                <div className="eventListsWrapper">
                    <div className="eventListsLeft">
                        <h6>Mon</h6>
                        <p>9</p>
                    </div>
                    <div className="eventListsCenter">
                        <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                        <Link to=""><h1>College & Young Adults – The Journey Worship </h1></Link>
                        <h6>Our Church 123, New Lenox, Chicago, IL</h6>
                        <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                    </div>
                    <div className="eventListsRight">
                        <Link to="">
                            <div className="eventListsImage">
                                <img src="/Images/omotunde.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default EventList