import React from 'react'
import { Profile, EditProfile, Order } from "..";
import { Routes, Route } from "react-router-dom";

const ProfileRoute = () => {
  return (
    <>
      <Routes>

        <Route path="profile" element={<Profile/>}></Route>
        <Route path="edit" element={<EditProfile/>}></Route>
        <Route path="order" element={<Order/>}></Route>

      </Routes>
    </>
  )
}

export default ProfileRoute