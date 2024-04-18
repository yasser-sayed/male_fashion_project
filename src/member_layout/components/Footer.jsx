import React from "react";
import img1 from "../../assets/footerImg1.png";
import img2 from "../../assets/footerImg2.png";
import img3 from "../../assets/footerImg3.png";
import img4 from "../../assets/footerImg4.png";
import lightLogo from "../../assets/lightLogo.png";
import visa from "../../assets/visa.png";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="px-8 font-bold bg-[#000015] text-center text-white   lg:text-left">
      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="flex flex-col justify-between items-center text-center text-gray-300">
            <img src={lightLogo} alt="" className="mb-5" />
            <p>
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <img src={visa} alt="" />
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-xl">
              SHOPPING
            </h6>
            <p className="mb-4">
              <Link to="/" className="text-neutral-300 ">
                Home
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/products" className="text-neutral-300 ">
                Shop
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/" className="text-neutral-300 ">
                About Us
              </Link>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-xl">
              PARTNER
            </h6>
            <div className="grid gap-x-2 gap-y-8 grid-cols-2 items-center justify-center">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
          {/* <!-- Contact section --> */}
          <div className="flex flex-col justify-start w-full items-center gap-6 text-start ">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-xl">
              NEWLETTER
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start text-gray-300 text-md">
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>

            <div className="relative w-full">
              <input
                type="text"
                className="border-0 border-b-2 border-white bg-transparent focus:outline-0 w-full text-gray-300 py-2 "
                placeholder="Your Email"
              />
              <button className="absolute bottom-3 right-3 text-2xl text-gray-300">
                <MdOutlineEmail />
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-[2px] bg-white " />

      {/* <!--Copyright section--> */}
      <div className="bg-[#000015] p-6 text-center ">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold text-gray-300 ">Yasser Sayed</a>
      </div>
    </footer>
  );
};

export default Footer;
