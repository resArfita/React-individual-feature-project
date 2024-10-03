import { Link } from "react-router-dom"
import Headings from "./Headings"

const Playground = () => {
    
    return(
        <>
        <Headings to="/" heading="Playground" />
        <div className="mx-1">
            <p className="my-4 mx-2">Section ini memberikan kamu space untuk belajar terkait kumpulan mitos dan fakta yang banyak beredar di masyarakat, kamu juga bisa berlatih percakapan bahasa Inggris secara interaktif dengan bot AI</p>
            <div className="grid grid-rows-2">
                <div className="border-2 border-white-500 shadow-md m-2 py-5">
                    <div className="grid grid-cols-2">
                        <p className="mx-2">Belajar Percakapan bahasa Inggris</p>
                        <Link to="/chatbot"><button className="sm-btn-primary ml-14">Learn</button></Link>
                    </div>   
                </div>
                <div className="border-2 border-white-500 shadow-md m-2 py-5">
                    <div className="grid grid-cols-2">
                        <p className="mx-2">Lihat Mitos & Fakta</p>
                        <Link to="/chatbot"><button className="sm-btn-primary ml-14">Learn</button></Link>
                    </div>   
                </div>
            </div>
        </div>
        
        
        
        </>
    )
}

export default Playground