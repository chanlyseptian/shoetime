import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarShop } from "../";
import { RiArrowGoBackLine } from "react-icons/ri";
import { update } from "../../features/auth/authAction";

import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../features/auth/authSlice";
import Swal from "sweetalert2";
import { uploadImage } from "../../fetchs/userFetch";

const EditProfile = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [profilname, setName] = useState(user.foundEmail.userName);
  const [profilemail, setEmail] = useState(user.foundEmail.userEmail);
  const [profilpassword, setPassword] = useState(user.foundEmail.userPassword);
  const [profilbirth, setBirth] = useState(user.foundEmail.userBirthdate);
  const [profilgender, setGender] = useState(user.foundEmail.userGender);
  const [imageData, setImageData] = useState({} || user.foundEmail.userAvatar);

  const handleItemUpload = (event) => {
    setImageData(event.target.files[0]);
  };

  const submitUser = (imageName) => {
    const userObj = {
      userName: profilname,
      userEmail: profilemail,
      userPassword: profilpassword,
      userBirthdate: profilbirth,
      userGender: profilgender,
      userAvatar: Math.round(new Date() / 1000) + "--" + imageName,
    };
    if (userObj.image.substring(12) === "undefined") {
      Swal.fire({
        icon: "warning",
        title: "Can't be empty!",
        text: `Please enter data!`,
      });
    } else {
      dispatch(update(userObj));
      Swal.fire({
        icon: "success",
        title: "Add Post Success!",
        text: `You've successfully created an post!`,
      });
      navigate("/edit");
    }
  };

  const submitUserHandler = () => {
    const data = new FormData();
    data.append("userAvatar", imageData);
    uploadImage(data);
    submitUser(imageData.name);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

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
              <RiArrowGoBackLine className="text-3xl text-red-400" />
            </Link>
            <img
              src="assets/profile2.jpg"
              alt=""
              className="w-32 h-32 rounded-full mb-10"
            />
            <form action="">
              <div className="flex flex-col w-[300px]">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  defaultValue={
                    user.foundEmail.userName ? user.foundEmail.userName : "name"
                  }
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Username"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  defaultValue={
                    user.foundEmail.userEmail
                      ? user.foundEmail.userEmail
                      : "email"
                  }
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  // defaultValue={user.foundEmail.userPassword ? user.foundEmail.userPassword : 'password'}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Birthday</label>
                <input
                  type="date"
                  defaultValue={
                    user.foundEmail.userBirthdate
                      ? user.foundEmail.userBirthdate
                      : "birthdate"
                  }
                  onChange={(event) => setBirth(event.target.value)}
                  placeholder="Username"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Gender</label>
                <select
                  className="mb-2 bg-slate-100 p-1.5 rounded"
                  defaultValue={
                    user.foundEmail.userGender
                      ? user.foundEmail.userGender
                      : "male"
                  }
                  onChange={(event) => setGender(event.target.value)}
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
                <label htmlFor="">Avatar</label>
                <input
                  type="file"
                  placeholder="avatar"
                  className="bg-slate-50 mb-4 p-3 rounded focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary p-2 rounded text-white hover:bg-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
