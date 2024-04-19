import React, { useState } from "react";
import img1 from "../../assets/footerImg1.png";
import img2 from "../../assets/footerImg2.png";
import img3 from "../../assets/footerImg3.png";
import img4 from "../../assets/footerImg4.png";
import lightLogo from "../../assets/lightLogo.png";
import visa from "../../assets/visa.png";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Footer = () => {
  const [det, setDet] = useState({
    from_name: "",
    message: "",
    user_email: "",
  });

  const [check, setCheck] = useState("");

  const sendEmail = () => {
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    !det.from_name.length
      ? setCheck("please enter your name first!")
      : !emailValid.test(det.user_email)
      ? setCheck("invalid email!")
      : !det.message.length
      ? setCheck("please enter your message!")
      : (setCheck(""),
        emailjs.send("service_gxk5z1b", "template_ymvhf88", det, {
          publicKey: "dCvT675f8gKndvgyv",
        }),
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your email sent we will reaply you soon!",
          showConfirmButton: false,
          timer: 1500,
        }));
  };

  return (
    <footer className="px-8 font-bold bg-[#000015] text-center text-white   lg:text-left">
      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="flex flex-col justify-start gap-8 items-center text-center text-gray-300">
            <img src={lightLogo} alt="" className="mb-5 " />
            <p className="text-xl">
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
            <div className="grid gap-x-2 gap-y-8 xs:grid-cols-1 md:grid-cols-2 items-center justify-center">
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
            <div>
              <input
                value={det.from_name}
                onChange={(inp) =>
                  setDet({ ...det, from_name: inp.target.value })
                }
                name="from_name"
                type="text"
                className="border-0 border-b-2 border-white bg-transparent focus:outline-0 w-full text-gray-300 py-2 "
                placeholder="enter you Name "
              />
            </div>

            <div>
              <input
                value={det.user_email}
                onChange={(inp) =>
                  setDet({ ...det, user_email: inp.target.value })
                }
                name="user_email"
                type="text"
                className="border-0 border-b-2 border-white bg-transparent focus:outline-0 w-full text-gray-300 py-2 "
                placeholder="Your Email"
              />
            </div>

            <div className="relative w-full">
              <textarea
                value={det.message}
                onChange={(inp) =>
                  setDet({ ...det, message: inp.target.value })
                }
                rows="3"
                name="message"
                type="text"
                className="border-0 border-b-2 rounded-xl border-white bg-transparent  w-full text-gray-300 py-2 "
                placeholder="Your message"
              ></textarea>
              <button
                onClick={sendEmail}
                className="absolute bottom-3 right-3 text-2xl text-gray-300"
              >
                <MdOutlineEmail />
              </button>
            </div>

            <p
              className={`${
                check ? "inline-block" : "hidden"
              } text-red-700 bg-red-300 py-2 px-4`}
            >
              {check}
            </p>
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
