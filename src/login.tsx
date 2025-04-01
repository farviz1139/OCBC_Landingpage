import React, { useState } from "react";
import * as XLSX from 'xlsx';

function Login() {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const addstorage = () => {
        localStorage.setItem('username', username)
    }

    return <>
        <div className="flex w-full h-screen">
            <div className="flex flex-col justify-center items-center w-1/2 h-auto bg-gray-700 bg-[url('./src/assets/bg-masthead.jpg')] bg-cover bg-center">
                <h2 className='text-white text-7xl font-semibold tracking-wider'>Welcome!</h2>
                <p className="text-white text-2xl font-semibold mt-4">Login or Signup</p>
            </div>
            <div className="flex flex-col w-1/2 min-h-screen">
                <div className="flex flex-col min-h-screen justify-center items-center mx-auto py-10">
                    <h1 className="text-4xl py-5 font-semibold">Login here!</h1>
                    <input className="w-120 h-16 bg-white border-2 p-4 my-2 rounded-3xl text-black text-xl" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <input className="w-120 h-16 bg-white border-2 p-4 my-2 rounded-3xl text-black text-xl" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button className="w-60 h-16 my-4 bg-blue-500 text-white text-xl rounded-3xl hover:bg-blue-600 transition-colors duration-300" onClick={addstorage}>Login</button>
                </div>
            </div>
        </div>
    </>
}

// min-h-screen 
// min-w-screen
// text-2xl
// text-4xl
// font-semibold
// hover:
// transition-colors

export default Login