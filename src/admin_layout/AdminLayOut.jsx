import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/main_pages/DashBoard";
import AdminNav from "./components/AdminNav";
import AdminUsers from "./pages/main_pages/AdminUsers";
import AdminProducts from "./pages/main_pages/AdminProducts";
import NewProduct from "./pages/sec_pages/NewProduct";
import AdminSideBar from "./components/AdminSideBar";
import PageError from "../member_layout/pages/PageError";
import AddUser from "./pages/sec_pages/AddUser";
import AdminEditUser from "./pages/sec_pages/AdminEditUser";

const AdminLayOut = ({ products, getProducts, users, getUsers }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleSide = () => {
    setIsSideOpen(!isSideOpen);
  };

  useEffect(() => {
    getProducts();
    getUsers();
  }, []);

  return (
    <div>
      <AdminNav toggleSide={toggleSide} />
      <div
        onClick={toggleSide}
        className={` duration-500 w-full h-screen fixed left-0 z-40   ${
          isSideOpen ? "bg-black opacity-40 backdrop-blur-md" : "hidden"
        }`}
      ></div>

      <aside
        className={` fixed duration-300   min-h-screen z-50   w-44 ${
          isSideOpen ? "start-0" : "start-[-44rem]"
        }  `}
      >
        <AdminSideBar />
      </aside>

      <Routes>
        <Route
          path="/"
          element={<DashBoard users={users} products={products} />}
        />
        <Route
          path="/users"
          element={<AdminUsers users={users} getUsers={getUsers} />}
        />
        <Route path="/users/adduser" element={<AddUser users={users} />} />
        <Route
          path="/users/edituser/:userid"
          element={<AdminEditUser users={users} getUsers={getUsers} />}
        />
        <Route path="/products" element={<AdminProducts />} />
        <Route path="/products/newproduct" element={<NewProduct />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </div>
  );
};

export default AdminLayOut;
