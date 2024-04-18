import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TEInput, TERipple, TESelect } from "tw-elements-react";

const ProfileView = ({ userDetails }) => {
  const [selData] = useState([
    {
      text: userDetails.gender,
      value: userDetails.gender,
      icon: userDetails.image,
    },
  ]);

  return (
    <div className="gap-6 grid xs:p-7 md:p-20 text-[#394455] text-sm font-thin">
      <h1 className="font-extrabold text-2xl">My Profile</h1>
      <hr />

      <div className="flex justify-center">
        {" "}
        <img src={userDetails.image} alt="" />
      </div>

      <h1 className="text-3xl font-bold text-green-500">
        {userDetails.firstName}
      </h1>

      <div className="">
        <p className="text-gray-400">User Name: {userDetails.userName}</p>
        <p>
          My first Name is {userDetails.firstName}, and My last name is{" "}
          {userDetails.lastName}
        </p>
        <p>
          iam {userDetails.gender} and iam {userDetails.role} in this site .
        </p>
      </div>

      <hr />

      <div className="flex flex-col px-4">
        <label className="mb-5" htmlFor="fullName">
          Full Name
        </label>

        <TEInput
          type="text"
          id="fullName"
          label="FullName"
          value={`${userDetails.firstName} ${userDetails.lastName}`}
          readOnly
        ></TEInput>
        <p className="text-xs mt-1 text-gray-400">
          Note: Enough to just have your first name and last name.
        </p>
      </div>

      <div className="flex flex-col px-4">
        <label className="mb-5" htmlFor="userEmailView">
          Email{" "}
        </label>

        <TEInput
          type="text"
          id="userEmailView"
          label="Email"
          value={userDetails.email}
          readOnly
        ></TEInput>
        <p className="text-xs mt-1 text-gray-400">
          Better to have readable email to give a good impression to others that
          they are dealing with a real personality.
        </p>
      </div>

      <div className="flex flex-col px-4">
        <label className="mb-5">Gender</label>

        <TESelect data={selData} value={userDetails.gender} label="Gender" />

        <p className="text-xs mt-1 text-gray-400">
          Please note that we do not support homosexuality.
        </p>
      </div>

      <div className="flex flex-col px-4">
        <label className="mb-5" htmlFor="userNameView">
          {" "}
          UserName
        </label>

        <TEInput
          type="text"
          id="userNameView"
          label="UserName"
          value={userDetails.userName}
          disabled
        ></TEInput>
        <p className="text-xs mt-1 text-gray-400">
          The username is used for the login process and you can never change
          it.
        </p>
      </div>

      <TERipple>
        <Link
          to={`/profile/${userDetails.id}`}
          type="button"
          className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
          Edit Profile
        </Link>
      </TERipple>
    </div>
  );
};

export default ProfileView;
