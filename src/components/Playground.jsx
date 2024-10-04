import { Link } from "react-router-dom"
import Headings from "./Headings"

const Playground = () => {
    
    return(
        <>
        <Headings to="/" heading="Playground" />
        <div className="mx-1">
            <p className="my-4 mx-2"></p>
            <div className="grid grid-rows-2 mt-5">
                <div className="border-2 border-white-500 shadow-md m-2 py-5">
                    <div className="grid grid-cols-2">
                        <p className="mx-2">Belajar Percakapan bahasa Inggris</p>
                        <Link to="/chatbot"><button className="sm-btn-primary ml-14">Open</button></Link>
                    </div>   
                </div>
                <div className="border-2 border-white-500 shadow-md m-2 py-5">
                    <div className="grid grid-cols-2">
                        <p className="mx-2">Motivation Booster</p>
                        <Link to="/chatbot"><button className="sm-btn-primary ml-14">Open</button></Link>
                    </div>   
                </div>
            </div>
        </div>
        
        
        
        </>
    )
}

export default Playground