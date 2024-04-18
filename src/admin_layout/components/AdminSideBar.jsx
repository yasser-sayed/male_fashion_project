import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="  w-full bg-[#2F4F4F] flex min-h-screen bg-opacity-100 items-center flex-col justify-evenly text-white font-extrabold xs:text-xs  md:text-2xl ">
      <Link className="rounded-lg    hover:bg-slate-500 p-2" to="/admin/">
        DashBoard
      </Link>

      <Link className="rounded-lg    hover:bg-slate-500 p-2" to="/admin/users">
        Users
      </Link>

      <Link
        className="rounded-lg    hover:bg-slate-500 p-2"
        to="/admin/products"
      >
        Products
      </Link>
    </div>
  );
};

export default AdminSideBar;
