import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { TbLogin2 } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
  TECollapse,
} from "tw-elements-react";
import Swal from "sweetalert2";

const NavBar = ({ cartItems, userDetails, setUserDetails }) => {
  let activePage = useParams();
  activePage = activePage["*"];
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const navigate = useNavigate();

  const logOut = () => {
    Swal.fire({
      title: "Are you sure,you want to logOut?",
      text: "you will need to login again after this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logOut!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("ta2do4qko");
        setUserDetails(null);
        navigate("/");

        Swal.fire({
          title: "logedOut!",
          text: "your log out is done.",
          icon: "success",
        });
      }
    });
  };

  return (
    <nav className="z-40 bg-[#EBEDEF]  flex justify-between px-14 items-center py-4 text-[#374354] sticky top-0 flex-wrap">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="xs:hidden lg:flex gap-6 text-xl font-bold  ">
        <Link to="/" className={!activePage ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/products"
          className={activePage == "products" ? "active" : ""}
        >
          Shop
        </Link>
      </div>
      <div className="flex gap-6 text-2xl">
        <Link
          to="cart"
          className={activePage == "cart" ? "active relative" : "relative"}
        >
          <FaOpencart />
          <span
            className={`absolute ${
              cartItems.length ? "bg-green-500" : "bg-red-500"
            }  rounded-xl top-[-6px] right-[-6px]  w-4 h-4 flex items-center justify-center text-xs text-white`}
          >
            {cartItems.length}
          </span>
        </Link>

        {userDetails ? (
          <TEDropdown className="flex justify-center">
            <TERipple rippleColor="light">
              <TEDropdownToggle className="flex items-center">
                <div className="relative">
                  <img
                    className="h-7 rounded-xl"
                    src={userDetails.image}
                    alt=""
                  />
                  <span className="absolute bg-green-500 rounded-xl bottom-0 right-0 w-2 h-2"></span>
                </div>
                <FaAngleDown className="text-sm" />
              </TEDropdownToggle>
            </TERipple>

            <TEDropdownMenu>
              <TEDropdownItem
                className={userDetails.role !== "admin" ? "hidden" : ""}
              >
                <Link
                  to="/admin/"
                  className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                >
                  Site Control
                </Link>
              </TEDropdownItem>

              <TEDropdownItem>
                <Link
                  to="/profile"
                  className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                >
                  my profile
                </Link>
              </TEDropdownItem>
              <TEDropdownItem>
                <Link
                  to={`/profile/${userDetails.id}`}
                  className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                >
                  edit profile
                </Link>
              </TEDropdownItem>
              <TEDropdownItem>
                <button
                  onClick={logOut}
                  className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                >
                  log out
                </button>
              </TEDropdownItem>
            </TEDropdownMenu>
          </TEDropdown>
        ) : (
          <Link to="/login">
            <TbLogin2 />
          </Link>
        )}
      </div>

      <button onClick={toggleShow} className="xs:inline-block  lg:hidden">
        <GiHamburgerMenu />
      </button>

      <TECollapse
        show={show}
        className="basis-full grow xs:flex flex-col lg:hidden items-center gap-2 p-2"
      >
        <Link to="/" className={!activePage ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/products"
          className={activePage == "products" ? "active" : ""}
        >
          Shop
        </Link>
      </TECollapse>
    </nav>
  );
};

export default NavBar;
