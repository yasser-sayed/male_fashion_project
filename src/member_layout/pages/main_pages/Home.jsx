import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar, FaSearch, FaRegHeart } from "react-icons/fa";
import { AiOutlineSwap } from "react-icons/ai";
import img1 from "../../../assets/cardImg1.jpg";
import img2 from "../../../assets/cardImg2.jpg";
import img3 from "../../../assets/cardImg3.jpg";
import img4 from "../../../assets/cardImg4.jpg";

const Home = () => {
  return (
    <div className="text-[#384354]">
      <div className="bg-home-first min-h-screen bg-no-repeat bg-[45%] flex items-center ">
        <div className="flex flex-col gap-8 px-14 items-start justify-center w-[35em] ">
          <h2 className="text-red-500 font-bold">SUMMER COLLECTION</h2>
          <h1 className="font-md text-5xl">Fall - Winter Collections 2023</h1>
          <p>
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
          <Link
            to="/products"
            className="btn-danger bg-red-500 px-12 py-3 flex items-center font-bold text-md md:text-lg gap-4"
          >
            S H O P N O W <FaLongArrowAltRight />
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center my-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:self-end ">
          <div className="lg:w-1/3">
            <h1 className="font-md text-5xl mb-6">Clothing collection 2023</h1>
            <Link
              to="/products"
              className="border-b-2 border-black hover:bg-gradient-to-r duration-150 from-red-500 to-transparent hover:border-red-500"
            >
              S H O P N O W
            </Link>
          </div>
          <img
            src="https://male-fashion-ten.vercel.app/static/media/banner-1.45fe2b268cef81900571.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex items-start ps-6 flex-col">
            <img
              src="https://male-fashion-ten.vercel.app/static/media/banner-2.09aec17ea3a36d2e2a44.jpg"
              alt=""
            />

            <div className="">
              <h1 className="font-md text-5xl mb-6">Accessories</h1>
              <Link
                to="/products"
                className="border-b-2 border-black hover:bg-gradient-to-r duration-150 from-red-500 to-transparent hover:border-red-500"
              >
                S H O P N O W
              </Link>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center ps-2 pe-6 me-6 mt-5">
            <div className="">
              <h1 className="font-md text-5xl mb-6">Shoes Spring 2023</h1>
              <Link
                to="/products"
                className="border-b-2 border-black hover:bg-gradient-to-r duration-150 from-red-500 to-transparent hover:border-red-500"
              >
                S H O P N O W
              </Link>
            </div>

            <img
              src="https://male-fashion-ten.vercel.app/static/media/banner-3.902e072bfedc4a1cabdf.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="text-white md:text-4xl font-bold p-4 text-center bg-home-sec  bg-fixed">
        <h1 className="">Free shipping, 30-day return or refund guarantee.</h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 p-8 w-full">
        <div className="group card w-80 rounded-2xl shadow-xl">
          <div className="relative overflow-hidden">
            <div className="absolute flex flex-col gap-4 top-5 right-[-5em] group-hover:right-5 duration-500">
              <button className="bg-white text-xl p-2">
                <FaRegHeart />
              </button>
              <button className="bg-white text-xl p-2">
                <AiOutlineSwap />
              </button>
              <button className="bg-white text-xl p-2">
                <FaSearch />
              </button>
            </div>
            <img src={img1} alt="" className="rounded-2xl" />
          </div>
          <div className="p-4">
            <h1>
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="inline" />
            </h1>
            <h5>$300</h5>
          </div>
        </div>

        <div className="group card w-80 rounded-2xl shadow-xl">
          <div className="relative overflow-hidden">
            <div className="absolute flex flex-col gap-4 top-5 right-[-5em] group-hover:right-5 duration-500">
              <button className="bg-white text-xl p-2">
                <FaRegHeart />
              </button>
              <button className="bg-white text-xl p-2">
                <AiOutlineSwap />
              </button>
              <button className="bg-white text-xl p-2">
                <FaSearch />
              </button>
            </div>
            <img src={img2} alt="" className="rounded-2xl" />
          </div>
          <div className="p-4">
            <h1>
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="inline" />
            </h1>
            <h5>$300</h5>
          </div>
        </div>

        <div className="group card w-80 rounded-2xl shadow-xl">
          <div className="relative overflow-hidden">
            <div className="absolute flex flex-col gap-4 top-5 right-[-5em] group-hover:right-5 duration-500">
              <button className="bg-white text-xl p-2">
                <FaRegHeart />
              </button>
              <button className="bg-white text-xl p-2">
                <AiOutlineSwap />
              </button>
              <button className="bg-white text-xl p-2">
                <FaSearch />
              </button>
            </div>
            <img src={img3} alt="" className="rounded-2xl" />
          </div>
          <div className="p-4">
            <h1>
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="inline" />
            </h1>
            <h5>$300</h5>
          </div>
        </div>

        <div className="group card w-80 rounded-2xl shadow-xl">
          <div className="relative overflow-hidden">
            <div className="absolute flex flex-col gap-4 top-5 right-[-5em] group-hover:right-5 duration-500">
              <button className="bg-white text-xl p-2">
                <FaRegHeart />
              </button>
              <button className="bg-white text-xl p-2">
                <AiOutlineSwap />
              </button>
              <button className="bg-white text-xl p-2">
                <FaSearch />
              </button>
            </div>
            <img src={img4} alt="" className="rounded-2xl" />
          </div>
          <div className="p-4">
            <h1>
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="text-yellow-400 inline" />
              <FaStar className="inline" />
            </h1>
            <h5>$300</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
