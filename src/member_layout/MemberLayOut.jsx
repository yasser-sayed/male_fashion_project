import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/main_pages/Home";
import Products from "./pages/main_pages/Products";
import Cart from "./pages/main_pages/Cart";
import LogIn from "./pages/main_pages/LogIn";
import SignUp from "./pages/sec_Pages/SignUp";
import ProfileView from "./pages/sec_Pages/ProfileView";
import ProfileEdit from "./pages/sec_Pages/ProfileEdit";
import PageError from "./pages/PageError";

const MemberLayOut = ({
  products,
  getProducts,
  users,
  getUsers,
  userDetails,
  setUserDetails,
}) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (newitem) => {
    const checkItem = cartItems.some((item) => item.id == newitem.id);
    let newItems = [];
    checkItem
      ? incItem(newitem)
      : ((newItems = [...cartItems, { ...newitem, items: 1 }]),
        setCartItems(newItems));
  };

  const incItem = (item) => {
    let newItems = cartItems.map((cartitem) =>
      cartitem.id == item.id
        ? { items: cartitem.items++, ...cartitem }
        : cartitem
    );

    setCartItems(newItems);
  };

  const decItem = (item) => {
    let newItems = cartItems.map((cartitem) =>
      cartitem.id == item.id
        ? { items: cartitem.items--, ...cartitem }
        : cartitem
    );

    setCartItems(newItems);
  };

  const delItem = (item) => {
    let newItems = cartItems.filter((cartitem) => cartitem.id !== item.id);
    setCartItems(newItems);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar
        cartItems={cartItems}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products products={products} addItem={addItem} delItem={delItem} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              incItem={incItem}
              decItem={decItem}
              delItem={delItem}
            />
          }
        />
        <Route
          path="/login"
          element={
            !userDetails ? (
              <LogIn
                users={users}
                getUsers={getUsers}
                setUserDetails={setUserDetails}
              />
            ) : (
              <PageError />
            )
          }
        />
        <Route
          path="/signup"
          element={<SignUp users={users} getUsers={getUsers} />}
        />
        <Route
          path="/profile"
          element={
            userDetails ? (
              <ProfileView userDetails={userDetails} />
            ) : (
              <PageError />
            )
          }
        />
        <Route
          path="/profile/:userid"
          element={
            userDetails ? (
              <ProfileEdit
                userDetails={userDetails}
                setUserDetails={setUserDetails}
                users={users}
                getUsers={getUsers}
              />
            ) : (
              <PageError />
            )
          }
        />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MemberLayOut;
