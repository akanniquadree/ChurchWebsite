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
        if(window.scrollY > 100){
            setShow(true)
        }else if (window.scrollY < 100) {
            setShow(false)
        }
      };
    useEffect(() => { 
        window.addEventListener("scroll", handleScroll);
        // let scrollPosition = 0;

        // const pageHeight = document.body.offsetHeight;
        // const viewportHeight = window.innerHeight;

        // function handleScroll() {
        // const newScrollPosition = window.scrollY;

        // if (newScrollPosition === scrollPosition) {
        //     return;
        // } 
        // if (newScrollPosition < 0 || newScrollPosition + viewportHeight > pageHeight) {
        //     return;
        // }

        // const shouldShow = newScrollPosition < scrollPosition; 
        // setShow(shouldShow); 

        // scrollPosition = newScrollPosition; 
        // }

        // window.addEventListener('scroll', handleScroll, {passive: true});

        // // ADDED
        // return () => {
        // window.removeEventListener('scroll', handleScroll);
        // };
      }, []);

  return (
    <div id="back" className={`topbar ${show ? "show" : "hide"}`}>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <h4 style={{color: !show ? "white" : "black" }}>RCCG</h4>
            </div>
            <div className="topbarRight">
                <ul className="topbarLists ">
                    <li className={`topbarList ${window.location.pathname === "/" ? "topbarAct":""}`}>
                        <Link to="/"style={{color: !show ? "white" : "black" }}>Home</Link>
                    </li>
                    <li className={`topbarList ${window.location.pathname.startsWith("/events") ? "topbarAct":"none"}`}>
                        <Link to="/events" style={{color: !show ? "white" : "black" }}>Events</Link>
                    </li>
                    <li className={`topbarList ${window.location.pathname === "/staff" ? "topbarAct":""}`}>
                        <Link to="/staff" style={{color: !show ? "white" : "black" }}>Our Team</Link>
                    </li>
                    <li className={`topbarList ${window.location.pathname === "/about" ? "topbarAct":""}`}>
                        <Link to="/about" style={{color: !show ? "white" : "black" }}>About us</Link>
                    </li>
                    <li className={`topbarList ${window.location.pathname === "/contact" ? "topbarAct":""}`}>
                        <Link to="/contact" style={{color: !show ? "white" : "black" }}>Contact us</Link>
                    </li>
                    <li className="hidden burger" onClick={()=>OpenNav()}>
                        {
                            burg ? <Close style={{color: !show ? "white" : "black" }} /> : <Menu  style={{color: !show ? "white" : "black" }}/>
                        }
                       
                    </li>
                    
                </ul>
            </div>
        </div>
        <div className="topbarRightOpen">
                <ul className="topbarListsOpen ">
                    <li className="topbarListOpen">
                        <Link to="#!">Home</Link>
                    </li>
                    <li className="topbarListOpen">
                        <Link to="#!">Events</Link>
                    </li>
                    <li className="topbarListOpen">
                        <Link to="#!">Our Team</Link>
                    </li>
                    <li className="topbarListOpen">
                        <Link to="#!">About us</Link>
                    </li>
                    <li className="topbarListOpen">
                        <Link to="#!">Contact us</Link>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Topbar