import Quotes from "./Quotes"
import "./Motivation.css"
import { Link } from "react-router-dom"
import backIcon from "../assets/back-icon2.png"
import background from "../assets/bg1.jpg"
import audio from "../assets/audio.png"

const MotivationBooster = () => {

    return(
        <>
        <div className="carousel">
            <Link to="/playground"><img src={backIcon} width={25} alt="" className="back" /></Link>
            <img src={audio} width={20} alt="" className="audio" />
            <Quotes />
            <img src={background} alt="background" className="slide" />
        </div>
        
        </>
    )
}

export default MotivationBooster