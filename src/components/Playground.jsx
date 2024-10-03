import { Link } from "react-router-dom"

const Playground = () => {
    
    return(
        <>
        <h1>Nobody told you this!</h1>
        <p>Section ini memberikan kamu space untuk belajar terkait kumpulan mitos dan fakta and even learn English conversation interactively</p>
        <Link to="/chatbot"><button className="sm-btn-primary ml-14">Go to Playground</button></Link>
        
        </>
    )
}

export default Playground