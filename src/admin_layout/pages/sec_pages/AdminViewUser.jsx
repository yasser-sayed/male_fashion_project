import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const AdminViewUser = () => {
  const { userid } = useParams();
  const [userDet, setUserDet] = useState(null);

  useEffect(() => {
    axios({ method: "get", url: `http://localhost:3000/users/${userid}` }).then(
      (res) => setUserDet(res.data)
    );
  }, []);

  return (
    <div className="gap-6 grid xs:p-7 md:p-20 text-[#394455] relative">
      <Link
        to="/admin/users"
        className="fixed top-[90px] start-6 z-10 text-xl rounded-lg   hover:bg-slate-300 p-2"
      >
        <IoMdArrowRoundBack />
      </Link>

      <h1 className="font-extrabold text-2xl">{userDet?.userName} </h1>
      <hr />

      <div className="flex justify-center">
        {" "}
        <img
          src={userDet?.image}
          alt="user image"
          className="h-[40vh] rounded-full"
        />
      </div>

      <hr />

      <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">First Name :</h1>
          <h2 className="text-lg font-bold">{userDet?.firstName}</h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">Last Name :</h1>
          <h2 className="text-lg font-bold">{userDet?.lastName}</h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">User Name :</h1>
          <h2 className="text-lg font-bold">{userDet?.userName}</h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold"> Email :</h1>
          <h2 className="text-lg font-bold">{userDet?.email}</h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">Password :</h1>
          <h2 className="text-lg font-bold">{userDet?.password}</h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">City :</h1>
          <h2 className="text-lg font-bold">{userDet?.city}</h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">Gender :</h1>
          <h2 className="text-lg font-bold">{userDet?.gender}</h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">Phone Number :</h1>
          <h2 className="text-lg font-bold">{userDet?.phoneNumber}</h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold"> Role :</h1>
          <h2 className="text-lg font-bold">{userDet?.role}</h2>
        </div>
      </section>
    </div>
  );
};

export default AdminViewUser;
