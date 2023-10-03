import React from 'react'
import backgound from '../image/background-login.jpg'
import login from '../image/login.jpg'
import logo from '../image/logo-telkom-indonesia.jpg'
import user from '../image/user.jpg'
import password from '../image/password.jpeg'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className="relative h-screen">
        {/* Latar Belakang Gambar */}
        <img src={backgound} alt="Deskripsi Gambar" className="w-full h-full object-cover absolute inset-0" />

        {/* Konten Tengah */}
        <div className="h-screen flex items-center justify-center relative">
          <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg rounded-lg">
            {/* Konten Kiri (Teks dan Inputan) */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center">
              <div className="text-center">
          {/* Teks "WELCOME TO" dengan ukuran besar */}
        <h1 className="text-4xl font-semibold mb-2">WELCOME TO</h1>

        {/* Teks "Telkom Regional VII" */}
        <h2 className="text-xl font-semibold mb-4">Telkom Regional VII</h2>
        <div className="flex justify-center items-center mb-4">
            <img src={logo} alt="Deskripsi Gambar" className="w-32 object-cover" />
          </div>
          <form>
          <div className="mb-4 relative">
            <img
              src={user} // Ganti dengan path gambar Anda
              alt="User Icon"
              className="absolute left-3 top-2.5 h-5 w-5" // Sesuaikan ukuran dan posisi gambar
            />
            <input
              type="text"
              id="username"
              className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
              placeholder="Username"
            />
          </div>
          <div className="mb-4 relative">
            <img
              src={password} // Ganti dengan path gambar Anda
              alt="Lock Icon"
              className="absolute left-4 top-3 h-4 w-4 filter grayscale-100" // Sesuaikan ukuran dan posisi gambar
            />
            <input
              type="password"
              id="password"
              className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
              placeholder="Password"
            />
          </div>
          <Link to='/afterlogin'> 
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Login
            </button>
          </Link>
        </form>
        </div>
            </div>
              {/* Konten Kanan (Gambar) */}
              <div className="hidden md:block md:w-1/2 bg-cover bg-center">
                <img src={login}/>
                {/* Gambar akan mengisi seluruh bagian kanan kotak */}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login