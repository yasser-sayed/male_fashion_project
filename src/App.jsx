import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MemberLayOut from "./member_layout/MemberLayOut";
import AdminLayOut from "./admin_layout/AdminLayOut";
import axios from "axios";
import PageError from "./member_layout/pages/PageError";

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  const getProducts = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/products",
    }).then((res) => setProducts(res.data));
  };

  const getUsers = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/users",
    }).then((res) => setUsers(res.data));
  };

  const getUserDetails = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/users/${localStorage.ta2do4qko}`,
    }).then((res) => setUserDetails(res.data));
  };

  useEffect(() => {
    localStorage.ta2do4qko && getUserDetails();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <MemberLayOut
              products={products}
              getProducts={getProducts}
              users={users}
              getUsers={getUsers}
              userDetails={userDetails}
              setUserDetails={setUserDetails}
            />
          }
        />
        <Route
          path="/admin/*"
          element={
            userDetails?.role == "admin" ? (
              <AdminLayOut
                products={products}
                getProducts={getProducts}
                users={users}
                getUsers={getUsers}
              />
            ) : (
              <PageError />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
