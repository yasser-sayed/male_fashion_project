import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserRow = ({ user, getUsers }) => {
  const [userRole, setUserRole] = useState(user.role);

  const delUser = () => {
    Swal.fire({
      title: `Are you sure,you want to delete ${user.userName}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete him!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:3000/users/${user.id}`,
        });

        getUsers();

        Swal.fire({
          title: `${user.userName} deleted!`,
          text: "your  delete is done.",
          icon: "success",
        });
      }
    });
  };

  const toggleRole = (role) => {
    axios({
      method: "patch",
      url: `http://localhost:3000/users/${user.id}`,
      data: { role },
    });
    setUserRole(role);
  };

  return (
    <tr>
      <td className="border-[1px] font-bold xs:px-2 md:px-4 xs:py-1 md:py-2 xs:text-xs md:text-xl text-center">
        {user.userName}{" "}
      </td>

      <td className="border-[1px] font-bold xs:px-2 md:px-4 xs:py-1 md:py-2 xs:text-xs md:text-xl text-center">
        {userRole && userRole}{" "}
      </td>

      <td className="border-[1px] font-bold xs:px-2 md:px-4 xs:py-1 md:py-2 xs:text-xs md:text-xl text-center flex xs:flex-col md:flex-row items-center justify-evenly gap-4 ">
        <button className="inline-block rounded-lg bg-sky-500 xs:px-2 md:px-4 xs:py-1 md:py-2  text-sm font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
          View
        </button>
        <Link
          to={`/admin/users/edituser/${user.id}`}
          className="inline-block rounded-lg bg-yellow-500 xs:px-2 md:px-4 xs:py-1 md:py-2  text-sm font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-yellow-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
        >
          Edit
        </Link>

        <button
          onClick={delUser}
          className="inline-block rounded-lg bg-red-500 xs:px-2 md:px-4 xs:py-1 md:py-2  text-sm font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
        >
          Del
        </button>

        <button
          onClick={() => toggleRole("admin")}
          className={`${
            userRole == "member" ? "inline-block" : "hidden"
          }  rounded-lg bg-success xs:px-2 md:px-4 xs:py-1 md:py-2  xs:text-xs md:text-sm font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]`}
        >
          make Admin
        </button>

        <button
          onClick={() => toggleRole("member")}
          className={`${
            userRole == "admin" ? "inline-block" : "hidden"
          } rounded-lg bg-gray-600 xs:px-2 md:px-4 xs:py-1 md:py-2  xs:text-xs md:text-sm font-bold  leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-500  focus:outline-none focus:ring-0 active:bg-gray-400`}
        >
          remove Admin
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
