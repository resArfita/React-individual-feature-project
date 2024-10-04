import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Home = () => {
    
    return(
        <>
        <img src={logo} alt="" width={70} className="ml-2" />
        <div className="my-5 grid grid-rows-2">
            <p className="ml-3"></p>
            <h1 className="font-medium text-lg">Playground</h1> 
        </div>
        <div className="border-2 border-white-500 shadow-md my-5 mx-3">
            <p className="ml-2 mt-2">Section ini memberikan kamu space untuk belajar dan mendapatkan informasi-informasi menarik dengan interaktif</p>
            <Link to="/playground"><button className="sm-btn-primary mx-2 my-5">Go to Playground</button></Link>
        </div>
        </>
    )
}

export default Home