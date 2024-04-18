import React, { useEffect, useState } from "react";
import { TEAlert, TEInput } from "tw-elements-react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LogIn = ({ users, getUsers, setUserDetails }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [loginCheck, setLoginCheck] = useState("");
  const [showPass, setShowPass] = useState(true);

  const navigate = useNavigate();

  const checkUser = () => {
    const userCheck = users.filter((user) => user.email == userData.email);
    !userCheck.length
      ? setLoginCheck("user email not found,try to create new account")
      : userCheck[0].password !== userData.password
      ? setLoginCheck("incorrect password")
      : (setLoginCheck(""),
        setUserDetails(userCheck[0]),
        (localStorage.ta2do4qko = userCheck[0].id),
        navigate("/"));
  };

  const logIn = () => {
    !userData.email
      ? setLoginCheck("please enter your email first")
      : !userData.password
      ? setLoginCheck("please enter your password")
      : checkUser();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-[#C0C0C0] flex  justify-center items-center xs:py-20  md:p-20 font-semibold">
      <div className="flex flex-col gap-4">
        <label htmlFor="emailLog" className="text-black text-lg">
          Email Address
        </label>

        <div>
          <TEInput
            type="text"
            id="emailLog"
            label="enter your email"
            value={userData.email}
            onChange={(inp) =>
              setUserData({ ...userData, email: inp.target.value })
            }
            className="bg-white rounded-lg"
          ></TEInput>
          <p className="text-gray-500 block text-sm">
            We'll never share your email whith anyone else.
          </p>
        </div>

        <label htmlFor="passLog" className="text-black text-lg">
          Password
        </label>

        <div>
          <TEInput
            type={showPass ? "password" : "text"}
            id="passLog"
            label="Password "
            value={userData.password}
            onChange={(inp) =>
              setUserData({ ...userData, password: inp.target.value })
            }
            className="bg-white rounded-lg relative "
          >
            {" "}
            <button
              onClick={() => setShowPass(!showPass)}
              className="absolute end-[5%] top-[27%] text-lg font-bold text-[#5141E0] duration-300"
            >
              {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>{" "}
          </TEInput>
        </div>

        <div>
          <input
            type="checkbox"
            id="remmberMe"
            className="w-4 h-4 rounded-lg "
          />{" "}
          <label htmlFor="remmberMe" className="text-black text-lg">
            Remmber Me
          </label>
        </div>

        <TEAlert
          staticAlert
          open={loginCheck}
          className="mt-2"
          color="bg-danger-100 text-danger-700"
        >
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {loginCheck}
        </TEAlert>

        <div className="flex gap-3">
          <button
            onClick={logIn}
            className="inline-block rounded-xl font-bold bg-[#321FDB] p-3 xs:text-xs md-text-md   leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-[#5141e0a6] hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-[#5141e073] active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          >
            Login
          </button>

          <Link
            to="/signup"
            className="inline-block rounded-xl font-bold bg-[#321FDB] p-3 xs:text-xs md-text-md   leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-[#5141e0a6] hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-[#5141e073] active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          >
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
