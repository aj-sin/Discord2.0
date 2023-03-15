import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, provider} from "../firebase"
// import {  signInWithPopup } from "firebase/auth";

import logo from "../assets/logo.svg";
const Header = () => {

  const navigate=useNavigate();
  const [user]=useAuthState(auth);
  console.log(user)
  const signIn=(e)=>{
    e.preventDefault()
    auth.signInWithPopup(provider)
    .then(() => {
      console.log(user)
      navigate("/channels")
    })
    .catch((error) => {
      alert(error.message)
    });

  }
  const signout=(e)=>{
    e.preventDefault()
    auth.signOut() 
  }




  return (
    <header className="flex items-center justify-between py-2 px-6  bg-discord_blue">
      <Link to="/">
        <img src={logo} alt="discord.." className="w-40 h-20 " />
      </Link>
      <div className="hidden lg:flex space-x-6 mr-10 ">
        <Link to="/" className="link">
          Download
        </Link>
        <Link to="/" className="link">
          Why Discord?
        </Link>
        <Link to="/" className="link">
          Nitro
        </Link>
        <Link to="/" className="link">
          Safety
        </Link>
        <Link to="/" className="link">
          Support
        </Link>
        <Link to="/" className="link">
          Blogs
        </Link>
        <Link to="/" className="link">
          Careers
        </Link>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-white p-2 px-4 rounded-full text-xs md:text-sm focus:outline-none 
        hover:shadow-2xl hover:text-discord_blurple transition duration-200 font-medium whitespace-nowrap " onClick={!user?signIn:()=>navigate("/channels")}
        >
          {!user?"Login":"Open Discord"}
        </button>
        <button
          className="bg-white p-2 px-4 rounded-full text-xs md:text-sm focus:outline-none 
        hover:shadow-2xl hover:text-discord_blurple transition duration-200 font-medium whitespace-nowrap " onClick={signout}
        >
          Sign out
        </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-9 text-white cursor-pointer lg:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
      </div>
    </header>
  );
};

export default Header;
