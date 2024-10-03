import { Link } from "react-router-dom"

const Home = () => {
    
    return(
        <>
        <h1 className="">Home</h1>
        <Link to="/playground"><button className="sm-btn-primary ml-14">Go to Playground</button></Link>
        </>
    )
}

export default Home