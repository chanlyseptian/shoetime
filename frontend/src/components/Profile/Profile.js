import React from "react";
import { NavbarShop } from "../";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <NavbarShop />
      <div className="w-full h-auto">
        <h1 className="text-center text-4xl py-12 font-bold">
          My <span className="text-primary">Profile</span>
        </h1>

        <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl relative flex flex-col justify-center space-y-1 sm:space-y-20 md:space-y-0 sm:flex-row">
          <div className="w-full h-[430px] md:w-[750px] bg-white flex items-center justify-between flex-row drop-shadow-lg">
            <div className="ml-44 border-r-2 border-gray-700">
              <img
                src="assets/profile2.jpg"
                alt=""
                className="w-12 h-12 sm:w-32 sm:h-32 rounded-full ml-6 mb-8"
              />
              <div className="flex items-center justify-center space-x-2">
                <Link to="/edit" className="w-24 p-1.5 text-sm hover:bg-green-700 text-white bg-green-500 rounded text-center">
                  Edit Profile
                </Link>
                <Link to="/order" className="">
                  <span className="w-24 py-1.5 px-2 text-sm hover:bg-amber-600 text-white bg-amber-500 rounded mr-6">
                    My Order
                  </span>
                </Link>
              </div>
            </div>
            <form action="">
              <div className="flex flex-col w-[300px]">
                <label className="text-gray-500">Username</label>
                <input
                  value="Alexandra"
                  className="bg-transparent mb-4 rounded focus:outline-none"
                  disabled
                />

                <label className="text-gray-500">Email</label>
                <input
                  value="asd@gmail.com"
                  className="bg-transparent mb-4 rounded focus:outline-none"
                  disabled
                />

                <label className="text-gray-500">Birthday</label>
                <input
                  value="6 June 1999"
                  className="bg-transparent mb-4 rounded focus:outline-none"
                  disabled
                />

                <label className="text-gray-500">Gender</label>
                <input
                  value="asd@gmail.com"
                  className="bg-transparent mb-4 rounded focus:outline-none"
                  disabled
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;