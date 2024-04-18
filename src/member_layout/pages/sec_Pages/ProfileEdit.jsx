import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEAlert, TEInput, TESelect } from "tw-elements-react";

const ProfileEdit = ({ userDetails, setUserDetails, users, getUsers }) => {
  const [newUserDet, setNewUserDet] = useState({ ...userDetails });
  const [selData] = useState([
    {
      text: "male",
      value: "male",
      icon: "https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg?w=360",
    },
    {
      text: "female",
      value: "female",
      icon: "https://media.istockphoto.com/id/1081125770/vector/face-expression-of-woman-with-blond-hair.jpg?s=612x612&w=0&k=20&c=mN-oV1RNH964Hu8s8Qjie8tOf6Awyf6e-sYUjR_RnOk=",
    },
  ]);
  const [firstNameCheck, setFirstNameCheck] = useState("");
  const [lastNameCheck, setLastNameCheck] = useState("");
  const [emailCheck, setemailCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const clearErr = () => {
    setFirstNameCheck("");
    setLastNameCheck("");
    setemailCheck("");
    setPasswordCheck("");
  };

  const navigate = useNavigate();

  const editProfile = () => {
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    newUserDet.firstName.length < 3
      ? (clearErr(),
        setFirstNameCheck("first name should be 3 letters or more"))
      : newUserDet.lastName.length < 3
      ? (clearErr(), setLastNameCheck("last name should be 3 letters or more"))
      : !newUserDet.email
      ? (clearErr(), setemailCheck("please enter your email first"))
      : !emailValid.test(newUserDet.email)
      ? (clearErr(), setemailCheck("invalid email"))
      : newUserDet.password.length < 6
      ? (clearErr(), setPasswordCheck("password should be 6 letters or more"))
      : newUserDet.password.includes(" ")
      ? (clearErr(), setPasswordCheck("password cant includes spaces"))
      : users.some((user) => user.email == newUserDet.email) &&
        newUserDet.email !== userDetails.email
      ? (clearErr(), setemailCheck("this email had already register before"))
      : (axios({
          method: "patch",
          url: `http://localhost:3000/users/${userDetails.id}`,
          data: newUserDet,
        }),
        setUserDetails(newUserDet),
        navigate("/profile"));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="text-[#394455] xs:p-7 md:p-20 text-sm flex flex-col gap-5">
      <div className="flex gap-4 items-center text-xl font-extrabold">
        <img width="100em" src={newUserDet.image} alt="" />
        <h1>My Profile Ready To Be changed ...</h1>
      </div>

      <hr />
      <div className="flex flex-col gap-4 px-4">
        <div>
          <label htmlFor="firstNameEdit">First Name</label>

          <TEInput
            id="firstNameEdit"
            type="text"
            className="rounded-lg bg-white mt-4"
            label="enter first name"
            value={newUserDet.firstName}
            onChange={(inp) =>
              setNewUserDet({ ...newUserDet, firstName: inp.target.value })
            }
          ></TEInput>

          <p className="text-xs text-gray-300 mt-1">
            enough to just write your first name only.
          </p>

          <TEAlert
            staticAlert
            open={firstNameCheck}
            className="mt-2"
            color="bg-danger-100 text-danger-700"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {firstNameCheck}
          </TEAlert>
        </div>

        <div>
          <label htmlFor="lastNameEdit">Last Name</label>

          <TEInput
            id="lastNameEdit"
            type="text"
            className="rounded-lg bg-white mt-4"
            label="enter last name"
            value={newUserDet.lastName}
            onChange={(inp) =>
              setNewUserDet({ ...newUserDet, lastName: inp.target.value })
            }
          ></TEInput>

          <p className="text-xs text-gray-300 mt-1">
            enough to just write your last name only.
          </p>

          <TEAlert
            staticAlert
            open={lastNameCheck}
            className="mt-2"
            color="bg-danger-100 text-danger-700"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {lastNameCheck}
          </TEAlert>
        </div>

        <div>
          <label htmlFor="emailEdit"> Email</label>

          <TEInput
            id="emailEdit"
            type="text"
            className="rounded-lg bg-white mt-4"
            label="enter  email"
            value={newUserDet.email}
            onChange={(inp) =>
              setNewUserDet({ ...newUserDet, email: inp.target.value })
            }
          ></TEInput>

          <p className="text-xs text-gray-300 mt-1">
            once you change your mail you have to re-confirm it form your mail
            box
          </p>

          <TEAlert
            staticAlert
            open={emailCheck}
            className="mt-2"
            color="bg-danger-100 text-danger-700"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {emailCheck}
          </TEAlert>
        </div>

        <div>
          <label htmlFor="passwordEdit">Password </label>

          <TEInput
            id="passwordEdit"
            type="password"
            className="rounded-lg bg-white mt-4"
            label="enter password "
            value={newUserDet.password}
            onChange={(inp) =>
              setNewUserDet({ ...newUserDet, password: inp.target.value })
            }
          ></TEInput>

          <p className="text-xs text-gray-300 mt-1">
            your new password shall be more than 6 characters
          </p>

          <TEAlert
            staticAlert
            open={passwordCheck}
            className="mt-2"
            color="bg-danger-100 text-danger-700"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {passwordCheck}
          </TEAlert>
        </div>

        <div>
          <label>Gender</label>

          <TESelect
            data={selData}
            value={newUserDet.gender}
            label="Gender"
            className="mt-4"
            onValueChange={(inp) => {
              setNewUserDet({
                ...newUserDet,
                gender: inp.value,
                image: inp.icon,
              });
            }}
          />

          <p className="text-xs text-gray-300 mt-1">
            Please note that we do not support homosexuality.
          </p>
        </div>

        <div>
          <button
            onClick={editProfile}
            className="inline-block rounded-xl font-bold bg-[#321FDB] p-3 xs:text-xs md-text-md   leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-[#5141e0a6] hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-[#5141e073] active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
