import { Menu , Close} from "@material-ui/icons"
import { useEffect, useState } from "react"
import "./topbar.css"
import {Link} from "react-router-dom"

function Topbar() {
    const [burg, setBurg] = useState(false)
    const [show, setShow] = useState(false)
    const OpenNav =  () => {
        const open = document.querySelector(".topbarRightOpen")
        open.classList.toggle("topbarRightOpen-active")
        setBurg((curr) => !curr)
    }
    const handleScroll = (e) =>{
        if(window.scrollY > 0){
            setShow(true)
        }else if (window.scrollY < 100) {
            setShow(false)
        }
      };
    useEffect(() => { 
        window.addEventListener("scroll", handleScroll);
      }, []);
  return (
    <div id="back" className={`topbar ${show ? "show" : ""}`}>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <h4 style={{color: !show ? "white" : "black" }}>RCCG</h4>
            </div>
            <div className="topbarRight">
                <ul className="topbarLists ">
                    <li className={`topbarList ${window.location.pathname === "/" ? "topbarAct":""}`}>
                        <Link to="/" style={{color: !show ? "white" : "black" }}>Home</Link>
                    </li>
                    <li className={`topbarList ${window.location.pathname.includes("/even") ? "topbarAct":"none"}`}>
                        <Link to="/events" style={{color: !show ? "white" : "black" }}>Events</Link>
                    </li>
                    <li className={`topbarList ${window.location.pathname === "/staff" ? "topbarAct":""}`}>
                        <Link to="/staff" style={{color: !show ? "white" : "black" }}>Our Team</Link>
                    </li>
                    <li className={`topbarList ${window.location.pathname === "/gallery" ? "topbarAct":""}`}>
                        <Link to="/gallery" style={{color: !show ? "white" : "black" }}>Gallery</Link>
                    </li>
                    <li className={`topbarList ${window.location.pathname === "/about" ? "topbarAct":""}`}>
                        <Link to="/about" style={{color: !show ? "white" : "black" }}>About us</Link>
                    </li>
                    <li className={`topbarList ${window.location.pathname === "/contact" ? "topbarAct":""}`}>
                        <Link to="/contact" style={{color: !show ? "white" : "black" }}>Contact us</Link>
                    </li>
                    <li className="hidden burger" onClick={()=>OpenNav()}>
                        {
                            burg ? <Close style={{color: !show ? "white" : "black" ,transition:"all 0.5 ease"}} /> : <Menu  style={{color: !show ? "white" : "black", transition:"all 0.5 ease" }}/>
                        }
                       
                    </li>
                    
                </ul>
            </div>
        </div>
        <div className="topbarRightOpen">
                <ul className="topbarListsOpen ">
                    <li className="topbarListOpen">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="topbarListOpen">
                        <Link to="/events">Events</Link>
                    </li>
                    <li className="topbarListOpen">
                        <Link to="/staff">Our Team</Link>
                    </li>
                    <li className="topbarListOpen">
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className="topbarListOpen">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="topbarListOpen">
                        <Link to="/contact">Contact us</Link>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Topbar