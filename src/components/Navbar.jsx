import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-800 h-[10vh] flex items-center p-5 justify-between">
        <div className="logo cursor-pointer">
        <span className="text-white font-extrabold text-lg">Password</span>
        <span className="text-green-500 font-extrabold text-lg">OP</span>
        </div>
        <div className="github text-sm cursor-pointer">
            <div className="shape bg-green-700 rounded-full p-2 font-bold text-white border-2 border-white">GitHub</div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
