import logo from "./kafe-meram-logo-1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faMugHot,faKitchenSet,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"
export default function Navbar() {
  return (
    <>
        <div className="cont">
            <div className="navbar">
                <a href="#"><FontAwesomeIcon icon={faHouse} style={{ marginRight:"10px"}} />Anasayfa</a>
                <a href="#subeler"><FontAwesomeIcon icon={faMugHot} style={{marginRight:"10px"}} />Şubeler</a>
                <a href="#" className="logo"><img src={logo} alt="" /></a>
                <a href="#menulerimiz"><FontAwesomeIcon icon={faKitchenSet} style={{marginRight:"10px"}} />Menülerimiz</a>
                <a href="#footer"><FontAwesomeIcon icon={faEnvelope} style={{marginRight:"15px"}} />İletişim</a>   
            </div>
        </div>

    </>
  )
}