import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TEAlert, TEInput, TESelect } from "tw-elements-react";
import { IoMdArrowRoundBack } from "react-icons/io";

const AdminEditUser = ({ users, getUsers }) => {
  const { userid } = useParams();

  const [genderData] = useState([
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
  const [roleData] = useState([
    {
      text: "member",
      value: "member",
    },
    {
      text: "admin",
      value: "admin",
    },
  ]);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    city: "",
    gender: "male",
    phoneNumber: "",
    role: "member",
    image: "",
  });

  const [editValid, setEditValid] = useState(null);

  const [firstNameCheck, setFirstNameCheck] = useState("");
  const [lastNameCheck, setLastNameCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [userNameCheck, setuserNameCheck] = useState("");
  const [emailCheck, setemailCheck] = useState("");
  const [imageCheck, setImageCheck] = useState("");

  const [cityCheck, setCityCheck] = useState("");
  const [phoneNumCheck, setPhoneNumCheck] = useState("");

  const clearErr = () => {
    setFirstNameCheck("");
    setLastNameCheck("");
    setuserNameCheck("");
    setemailCheck("");
    setImageCheck("");
    setPasswordCheck("");
    setCityCheck("");
    setPhoneNumCheck("");
  };

  const navigate = useNavigate();

  const patchData = () => {
    const data = {
      ...userData,
      image: userData.image
        ? userData.image
        : genderData[userData.gender == "male" ? 0 : 1].icon,
    };

    getUsers();

    clearErr();
    axios({
      method: "patch",
      url: `http://localhost:3000/users/${userid}`,
      data,
    }),
      navigate("/admin/users");
  };

  const editUser = () => {
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneNumValid = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
    const urlVaild =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    userData.firstName.length < 3
      ? (clearErr(),
        setFirstNameCheck("first name should be 3 letters or more"))
      : userData.lastName.length < 3
      ? (clearErr(), setLastNameCheck("last name should be 3 letters or more"))
      : userData.password.length < 6
      ? (clearErr(), setPasswordCheck("password should be 6 letters or more"))
      : userData.password.includes(" ")
      ? (clearErr(), setPasswordCheck("password cant includes spaces"))
      : userData.userName.length < 4
      ? (clearErr(), setuserNameCheck("user name should be 4 letters or more"))
      : userData.userName.includes(" ")
      ? (clearErr(), setuserNameCheck("user name cant include spaces"))
      : !userData.email
      ? (clearErr(), setemailCheck("please enter  email first"))
      : !emailValid.test(userData.email)
      ? (clearErr(), setemailCheck("invalid email"))
      : userData.image.length > 0 && !urlVaild.test(userData.image)
      ? (clearErr(), setImageCheck("invalid url"))
      : !userData.city
      ? (clearErr(), setCityCheck("please enter  city first"))
      : !userData.phoneNumber
      ? (clearErr(), setPhoneNumCheck("please enter  phone number first"))
      : !phoneNumValid.test(userData.phoneNumber)
      ? (clearErr(), setPhoneNumCheck("invalid egyptian phone number"))
      : users.some((user) => user.userName == userData.userName) &&
        editValid?.userName !== userData.userName
      ? (clearErr(), setuserNameCheck("this user name already used"))
      : users.some((user) => user.email == userData.email) &&
        editValid.email !== userData.email
      ? (clearErr(), setemailCheck("this email had already register"))
      : patchData();
  };

  useEffect(() => {
    axios({ method: "get", url: `http://localhost:3000/users/${userid}` }).then(
      (res) => {
        setUserData(res.data);
        setEditValid({ userName: res.data.userName, email: res.data.email });
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center xs:p-2  md:p-20 rounded-lg z-0 relative">
      <Link
        to="/admin/users"
        className="fixed top-[90px] start-6 z-10 text-xl rounded-lg   hover:bg-slate-300 p-2"
      >
        <IoMdArrowRoundBack />
      </Link>
      <section className="flex flex-col gap-5 font-semibold bg-[#4F5D73] p-6 rounded-lg text-white">
        <div className="flex gap-6">
          <div className="grow ">
            <label htmlFor="firstNameInp">First Name</label>

            <TEInput
              id="firstNameInp"
              type="text"
              className="rounded-lg bg-white mt-2 z-0"
              label="enter first name"
              value={userData.firstName}
              onChange={(inp) =>
                setUserData({ ...userData, firstName: inp.target.value })
              }
            ></TEInput>

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

          <div className="grow">
            <label htmlFor="lastNameInp">Last Name</label>

            <TEInput
              id="lastNameInp"
              type="text"
              className="rounded-lg bg-white mt-2"
              label="enter last name"
              value={userData.lastName}
              onChange={(inp) =>
                setUserData({ ...userData, lastName: inp.target.value })
              }
            ></TEInput>

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

          <div className="">
            <label htmlFor="passwordInp">Password</label>

            <TEInput
              id="passwordInp"
              type="password"
              className="rounded-lg bg-white mt-2"
              label=" password"
              value={userData.password}
              onChange={(inp) =>
                setUserData({ ...userData, password: inp.target.value })
              }
            ></TEInput>

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
        </div>

        <div className="">
          <label htmlFor="userNameInp">User Name</label>

          <TEInput
            id="userNameInp"
            type="text"
            className="rounded-lg bg-white mt-2"
            label="enter user name"
            value={userData.userName}
            onChange={(inp) =>
              setUserData({ ...userData, userName: inp.target.value })
            }
          ></TEInput>

          <TEAlert
            staticAlert
            open={userNameCheck}
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
            {userNameCheck}
          </TEAlert>
        </div>

        <div className="">
          <label htmlFor="emailInp">Email</label>

          <TEInput
            id="emailInp"
            type="text"
            className="rounded-lg bg-white mt-2"
            label="enter  email"
            value={userData.email}
            onChange={(inp) =>
              setUserData({ ...userData, email: inp.target.value })
            }
          ></TEInput>

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

        <div className="">
          <label htmlFor="imageInpAdmin">image</label>

          <TEInput
            id="imageInpAdmin"
            type="text"
            className="rounded-lg bg-white mt-2"
            label="image url"
            value={userData.image}
            onChange={(inp) =>
              setUserData({ ...userData, image: inp.target.value })
            }
          ></TEInput>
          <h1 className="text-yellow-400 text-lg">
            Image Shall Be Like : https://image.png
          </h1>

          <TEAlert
            staticAlert
            open={imageCheck}
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
            {imageCheck}
          </TEAlert>
        </div>

        <div className="flex  gap-6">
          <div className="grow">
            <label htmlFor="cityInp">City</label>

            <TEInput
              id="cityInp"
              type="text"
              className="rounded-lg bg-white mt-2"
              label="enter  city"
              value={userData.city}
              onChange={(inp) =>
                setUserData({ ...userData, city: inp.target.value })
              }
            ></TEInput>

            <TEAlert
              staticAlert
              open={cityCheck}
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
              {cityCheck}
            </TEAlert>
          </div>

          <div className="grow">
            <label htmlFor="phoneNumberInp">Phone number</label>

            <TEInput
              id="phoneNumberInp"
              type="tel"
              className="rounded-lg bg-white mt-2"
              label="enter phone number"
              value={userData.phoneNumber}
              onChange={(inp) =>
                setUserData({ ...userData, phoneNumber: inp.target.value })
              }
            ></TEInput>

            <TEAlert
              staticAlert
              open={phoneNumCheck}
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
              {phoneNumCheck}
            </TEAlert>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="text-black grow">
            <label className="text-white">Gender</label>

            <div className="relative  mt-2 rounded-lg bg-white">
              <TESelect
                data={genderData}
                value={userData.gender}
                label="Gender"
                onValueChange={(inp) => {
                  setUserData({
                    ...userData,
                    gender: inp.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="text-black grow">
            <label className="text-white">Gender</label>

            <div className="relative  mt-2 rounded-lg bg-white">
              <TESelect
                data={roleData}
                value={userData.role}
                label="Gender"
                onValueChange={(inp) => {
                  setUserData({
                    ...userData,
                    role: inp.value,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={editUser}
            className="self-start inline-block rounded-lg bg-success px-6 py-2   font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            Edit User
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdminEditUser;
