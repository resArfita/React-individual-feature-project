import "./Regist.css"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

const Login = () => {
    return(
        <>
        <div className="container mx-auto flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-lg">
              <div className="flex justify-center mb-6">
                <img src={logo} alt="Logo" className="w-32 logo" />
              </div>
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="p mt-3">Ruang Aman untuk Pemberdayaan dan Keadilan Perempuan</p>
              </div>
              <form>
                    <div className="mb-4">
                      <label htmlFor="identitas" className="label">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      /></div>
                    <div className="mb-4">
                      <label htmlFor="password" className="label">Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div className="flex justify-center">
                        <Link to="/"><button
                            type="submit"
                            className="px-6 py-2 sm-btn-primary mt-5">
                            Login</button>
                      </Link>
                      
                    </div>
              </form>
              <div className="mt-2 text-center mb-10">
                <Link to="/regist"><small className="small">Belum Punya Akun? <span className="small-b">Daftar</span></small></Link>
              </div>
            </div>
        </div>
        </>
    )
}

export default Login