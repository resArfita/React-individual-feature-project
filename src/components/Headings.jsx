/* eslint-disable react/prop-types */
import backIcon from "../assets/back-icon.png"
import { Link } from "react-router-dom";
import styles from "./playground.module.css"

const Headings = ({to, heading}) => {

    return(
        <>
        <div className="py-10">
            <div className="flex justify-center items-center">
                <Link to={to}><img src={backIcon} width={30} alt="" className={styles.welcome} /></Link>
                <h1 className={styles.welcome}>{heading}</h1>
            </div>
        </div>
        
        </>
    )
}

export default Headings