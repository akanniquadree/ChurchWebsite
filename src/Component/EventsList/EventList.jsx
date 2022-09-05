import React, { useState } from 'react'
import Topbar from '../Topbar/Topbar'
import "./eventList.css"
import {Link} from "react-router-dom"
import { Search } from '@material-ui/icons'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material'
import { EventL } from './EventListData'
import usePagination from './Pagination'
import Footer from '../Footer/Footer'


function EventList() {
    const matches = useMediaQuery('(max-width:600px)')
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const PER_PAGE = 10;
    const count = Math.ceil(EventL.length / PER_PAGE);
    const _DATA = usePagination(EventL, PER_PAGE, search);
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
        _DATA.jump(newPage);
    }

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
            <div className="eventListsearch" >
                <div className="eventListsearchWrapper">
                    <Search htmlColor="#f9e699" size={20} style={{fontWeight:800}}/>
                    <input type="search" placeholder='Search for an Event, Date, Month or Venue' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>
            </div>
            <div className="eventListsearch" style={{marginTop:" 30px"}}>
                <div className="eventListPadination">
                    <Stack spacing={matches ? 1 :2}>
                        <Pagination
                        page={page}
                        onChange={handleChangePage}
                        boundaryCount={matches ? 1 : 3} 
                        count={count} variant="outlined" shape="rounded" />
                    </Stack>  
                </div>
            </div>
            {
              _DATA.currentData().map((itm, index)=>(
                    <React.Fragment key={index}>
                            <div className="eventListsearch">
                                <div className="eventListDate">
                                    <span>{itm.date}</span>
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
                                        <h5>{itm.eventDate}</h5>
                                        <Link to={`/event/${index}`}><h1>{itm.heading}</h1></Link>
                                        <h6>{itm.venue}</h6>
                                        <p>{itm.para}</p>
                                    </div>
                                    <div className="eventListsRight">
                                        <Link to="">
                                            <div className="eventListsImage">
                                                <img src={itm.img} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                    </React.Fragment>
                ))
            }
        </div>
        <Footer/>
    </>
  )
}

export default EventList