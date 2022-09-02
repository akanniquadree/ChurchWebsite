import React from 'react'

export default function Priest(about) {
  return (
    <div className="staffListContainer">
                <div className="staffListWrapper">
                    <h3>{about ? "Meet Our Priests" : "Priests"}</h3>
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
  )
}
