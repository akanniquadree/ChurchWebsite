import { Menu , Close} from "@material-ui/icons"
import { useState } from "react"
import "./topbar.css"

function Topbar() {
    const [burg, setBurg] = useState(false)
    const OpenNav =  () => {
        const open = document.querySelector(".topbarRightOpen")
        open.classList.toggle("topbarRightOpen-active")
        setBurg((curr) => !curr)
    }
  return (
    <div className="topbar">
        <div className="topbarContainer">
            <div className="topbarLeft">
                <h4>RCCG</h4>
            </div>
            <div className="topbarRight">
                <ul className="topbarLists ">
                    <li className="topbarList topbarAct">
                        <a href="#!">Home</a>
                    </li>
                    <li className="topbarList">
                        <a href="#!">Events</a>
                    </li>
                    <li className="topbarList">
                        <a href="#!">Our Team</a>
                    </li>
                    <li className="topbarList">
                        <a href="#!">About us</a>
                    </li>
                    <li className="topbarList">
                        <a href="#!">Contact us</a>
                    </li>
                    <li className="hidden burger" onClick={()=>OpenNav()}>
                        {
                            burg ? <Close/> : <Menu />
                        }
                       
                    </li>
                    
                </ul>
            </div>
        </div>
        <div className="topbarRightOpen">
                <ul className="topbarListsOpen ">
                    <li className="topbarListOpen topbarAct">
                        <a href="#!">Home</a>
                    </li>
                    <li className="topbarListOpen">
                        <a href="#!">Events</a>
                    </li>
                    <li className="topbarListOpen">
                        <a href="#!">Our Team</a>
                    </li>
                    <li className="topbarListOpen">
                        <a href="#!">About us</a>
                    </li>
                    <li className="topbarListOpen">
                        <a href="#!">Contact us</a>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Topbar