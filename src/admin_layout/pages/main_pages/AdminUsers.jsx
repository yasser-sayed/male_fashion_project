import React, { useEffect } from "react";
import UserRow from "../../components/UserRow";
import { Link } from "react-router-dom";

const AdminUsers = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-9 text-[#323E4F] flex flex-col gap-6">
      <h1 className="text-center text-3xl font-bold text-[#4F5D73]">Users</h1>

      <Link
        to="/admin/users/adduser"
        className="self-start inline-block rounded-lg bg-success px-6 py-2   font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
      >
        Add New User
      </Link>

      <table className="w-full bg-[#9DA5B1] rounded-lg">
        <thead>
          <tr>
            <th className="border-[1px] text-white xs:text-xs md:text-xl font-bold px-4 py-2">
              User Name
            </th>
            <th className="border-[1px] text-white xs:text-xs md:text-xl font-bold px-4 py-2">
              Role
            </th>
            <th className="border-[1px] text-white xs:text-xs md:text-xl font-bold px-4 py-2">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <UserRow key={key} user={user} getUsers={getUsers} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
