import React from "react";
import darkLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const AdminNav = ({ toggleSide }) => {
  return (
    <div className="bg-[#4F5D73] flex justify-between px-14 items-center py-4 sticky top-0 z-20">
      <div className="flex gap-3 items-center">
        <button
          onClick={toggleSide}
          type="button"
          className="inline-block rounded-lg px-2 py-1 text-2xl font-extrabold  leading-normal text-black hover:bg-slate-500 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          <IoMenu />
        </button>

        <Link to="/">
          <img src={darkLogo} alt="logo" />
        </Link>
      </div>
      <Link
        to="/"
        className="text-md rounded-lg font-extrabold text-white  hover:bg-slate-500 p-2"
      >
        Home
      </Link>
    </div>
  );
};

export default AdminNav;
