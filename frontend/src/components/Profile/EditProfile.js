import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarShop } from '../'
import { RiArrowGoBackLine } from 'react-icons/ri'

const EditProfile = () => {
  return (
   <>
      <NavbarShop />
      <div className="w-full h-auto">
        <h1 className="text-center text-4xl py-12 font-bold">
          Edit <span className="text-primary">Profile</span>
        </h1>

        <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl relative flex flex-col justify-center space-y-1 sm:space-y-20 md:space-y-0 sm:flex-row">
         
          <div className="w-full h-[800px] md:w-[790px] md:h-[820px] bg-white flex items-center justify-center flex-col drop-shadow-lg mb-14">
            <Link to="/profile" className="absolute -mt-[690px] -ml-[273px]">
              <RiArrowGoBackLine className="text-3xl text-red-400"/>
            </Link>
            <img src="assets/profile2.jpg" alt="" className="w-32 h-32 rounded-full mb-10"/>
            <form action="">
              <div className="flex flex-col w-[300px]">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Birthday</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Gender</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Avatar</label>
                <input
                  type="file"
                  placeholder="avatar"
                  className="bg-slate-50 mb-4 p-3 rounded focus:outline-none"
                />
                <button type="submit" className="w-full bg-primary p-2 rounded text-white hover:bg-red-600">
                  Submit
                </button>
              </div>
            </form>
        
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile