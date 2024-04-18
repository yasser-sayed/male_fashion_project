import React from "react";
import { Link } from "react-router-dom";

const DashBoard = ({ users, products }) => {
  return (
    <div className="flex h-full items-center justify-center min-h-screen">
      <div className="flex gap-8 xs:flex-col lg:flex-row p-8">
        <section className="flex items-center flex-col justify-around p-10 rounded-lg font-bold gap-12 bg-black bg-gradient-to-t	from-black to-[#252537]">
          <h1 className="text-info text-3xl ">Users</h1>

          <h2 className="xs:text-md lg:text-2xl text-white">
            Number Of Users :{" "}
            <span className="text-green-500">{users.length}</span>
          </h2>

          <h2 className="xs:text-md lg:text-2xl text-white">
            Last User Registered is :{" "}
            <span className="text-green-500">
              {users[users.length - 1]?.userName}
            </span>
          </h2>

          <Link
            to="/admin/users"
            type="button"
            className="inline-block rounded bg-info px-6 pb-2 pt-2.5  font-bold  leading-normal  shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          >
            show Users
          </Link>
        </section>

        <section className="flex items-center flex-col justify-around p-10 rounded-lg font-bold gap-12 bg-black bg-gradient-to-t	from-black to-[#252537]">
          <h1 className="text-info text-3xl ">Products</h1>

          <h2 className="xs:text-md lg:text-2xl text-white">
            Number Of Products :{" "}
            <span className="text-green-500">{products.length}</span>
          </h2>

          <h2 className="xs:text-md lg:text-2xl text-white">
            Last Product added is :{" "}
            <span className="text-green-500">
              {" "}
              {products[products.length - 1]?.name}
            </span>
          </h2>

          <Link
            to="/admin/products"
            type="button"
            className="inline-block rounded bg-info px-6 pb-2 pt-2.5  font-blod  leading-normal  shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          >
            show Products
          </Link>
        </section>
      </div>
    </div>
  );
};

export default DashBoard;
