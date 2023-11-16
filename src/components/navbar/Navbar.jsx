import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"


const Navbar = () => {
  return (
    <div className="navbar">
    <Sidebar/>
    <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}}  transition={{duration:0.5}}>Ellan Macasieb</motion.span>
        <div className="social">
            <a href="facebook"><img src="../facebook.png"></img></a>
            <a href="facebook"><img src="../dribbble.png"></img></a>
            <a href="facebook"><img src="../youtube.png"></img></a>
            <a href="facebook"><img src="../instagram.png"></img></a>
        </div>
    </div>
    </div>
  )
}

export default Navbar