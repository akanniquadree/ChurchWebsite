import React from 'react'
import "./homeEvent.css"

export default function HomeEvent() {
  return (
    <div className="homeEventContainer">
        <h1> Upcomming Events</h1>
        <div className="homeEventWrapper">
            <div className="homeEventItems">
                <div className="homeEventItem">
                    <h2>Latest Event</h2>
                    <div className="homeEventItemBig">
                        <div className="homeEventItemBigImg">
                            <img src="/Images/bg_pattern.jpg" alt="" />
                        </div>
                        <h3>Our Church 123, New Lenox, Chicago, IL</h3>
                        <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                        <p>Voluptatem accusantium ;kljhggjhfghvhgvhvgvv nhjgfds hghbhhhjhjkhkhkjkjjkjkjkjjkjk doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                    </div>
                </div>
                <div className="homeEventItem">
                    <h2>Recent Events</h2>
                    <div className="homeEventItemWrapper">
                        <div className="homeEventItemDetail">
                            <div className="homeEventItemDetailImg">
                                <img src="/Images/bg_pattern.jpg" alt="" />
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <h3>Our Church 123, New Lenox,kjhgfghhghghjg Chicago, IL</h3>
                                <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                            </div>
                        </div>
                        <div className="homeEventItemDetail">
                            <div className="homeEventItemDetailImg">
                                <img src="/Images/bg_pattern.jpg" alt="" />
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <h3>Our Church 123, New Lenox,kjhgfghhghghjg Chicago, IL</h3>
                                <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                            </div>
                        </div>
                        <div className="homeEventItemDetail">
                            <div className="homeEventItemDetailImg">
                                <img src="/Images/bg_pattern.jpg" alt="" />
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <h3>Our Church 123, New Lenox, Chicago, IL</h3>
                                <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                            </div>
                        </div>
                        <div className="homeEventItemDetail">
                            <div className="homeEventItemDetailImg">
                                <img src="/Images/bg_pattern.jpg" alt="" />
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <h3>Our Church 123, New Lenox, Chicago, IL</h3>
                                <h5>September 5, 2022 @ 10:00 am - September 1, 2026 @ 11:30 pm</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}