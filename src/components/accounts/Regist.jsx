import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Regist.css"

const Regist = () => {
    return(
        <>
        <div className="container mx-auto flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-lg">
              <div className="flex justify-center mb-6">
                <img src={logo} alt="Logo" className="w-32 logo" />
              </div>
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">Daftar Akun</h1>
                <p className="p mt-3">Ruang Aman untuk Pemberdayaan dan Keadilan Perempuan</p>
              </div>
              <form>
                    <div className="mb-4">
                      <label htmlFor="nama" className="label">Nama Lengkap</label>
                      <input
                        type="text"
                        id="nama"
                        placeholder="Nama Lengkap"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="w-1/2">
                        <label htmlFor="gender" className="label">Jenis Kelamin</label>
                        <input
                          type="text"
                          id="gender"
                          placeholder="Jenis Kelamin"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                      <div className="w-1/2">
                        <label htmlFor="ttl" className="label">Tanggal Lahir</label>
                        <input
                          type="date"
                          id="ttl"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                    </div>
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
                      <button
                        type="submit"
                        className="px-6 py-2 sm-btn-primary mt-2"
                      >
                        Daftar
                      </button>
                    </div>
              </form>
              <div className="mt-2 text-center mb-10">
                <Link to="/login"><small className="small">Sudah Punya Akun? <span className="small-b">Masuk</span></small></Link>
              </div>
            </div>
        </div>
        </>
    )
}

export default Regist