import React from 'react'
import "./homeTeam.css"
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"

export default function HomeTeam() {
  return (
    <div className="homeEventContainer" style={{backgroundColor:"#eee"}}>
        <h1 style={{paddingTop:"50px"}}> Meet Our Pastors</h1>
        <div className="homeEventWrapper">
            <div className="homeTeamWrapper">
                <div className="homeTeamItems">
                        <div className="homeTeamImg">
                            <img src="/Images/omotunde.jpg" alt=""/>
                        </div>
                        <h4>Chief Pastor</h4>
                </div>
                <div className="homeTeamItems">
                    <h6>“Every mountain top is within reach if you just keep climbing.”</h6>
                    <p> 
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero 
                        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te 
                        feugait nulla facilisi.
                    </p>   

                     <span> — Richard James Molloy</span>  
                     <Button sx={{':hover': {bgcolor: '#678998'},backgroundColor:"#4b646f", marginTop:"15px", alignSelf:"center", width:"120px"}}><Link to="/staff" style={{fontWeight:600,color:"white", fontSize:"15px"}}>View More</Link></Button>
                </div>
                <div className="homeTeamItems">
                    <div className="homeTeamItems">
                            <div className="homeTeamImg">
                                <img src="/Images/omotunde.jpg" alt=""/>
                            </div>
                            <h4>Chief Pastor</h4>
                    </div>
                </div>
               
            </div>
        </div>
     </div>
  )
}
