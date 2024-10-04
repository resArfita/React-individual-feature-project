import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"

const Home = () => {

    //logout
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("isAuthenticated")
        alert("Anda akan login")
        navigate("/login")
    }
    
    return(
        <>
        <div className="flex justify-space-between">
            <img src={logo} alt="" width={70} className="ml-2" />
            <button className="sm-btn-sec ml-60 mt-2" onClick={logout}>Logout</button>
        </div>
        <div className="my-5 grid grid-rows-2">
            <p className="ml-3.5">Halo, </p>
            <h1 className="pg mt-3">Playground</h1> 
        </div>
        <div className="border-2 border-white-500 shadow-md my-5 mx-3">
            <p className="ml-2 mt-2">Section ini memberikan kamu space untuk belajar dan mendapatkan informasi-informasi menarik dengan interaktif</p>
            <Link to="/playground"><button className="sm-btn-primary mx-2 my-5">Go to Playground</button></Link>
        </div>
        </>
    )
}

export default Home