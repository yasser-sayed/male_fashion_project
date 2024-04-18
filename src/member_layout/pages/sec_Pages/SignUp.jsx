import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEAlert, TEInput, TESelect } from "tw-elements-react";

const SignUp = ({ users, getUsers }) => {
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
  const [rulesApply, setRulesApply] = useState(true);

  const [firstNameCheck, setFirstNameCheck] = useState("");
  const [lastNameCheck, setLastNameCheck] = useState("");
  const [userNameCheck, setuserNameCheck] = useState("");
  const [emailCheck, setemailCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [cityCheck, setCityCheck] = useState("");
  const [phoneNumCheck, setPhoneNumCheck] = useState("");
  const [rulesCheck, setRulesCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const clearErr = () => {
    setFirstNameCheck("");
    setLastNameCheck("");
    setuserNameCheck("");
    setemailCheck("");
    setPasswordCheck("");
    setCityCheck("");
    setPhoneNumCheck("");
    setRulesCheck(false);
    setLoading(false);
  };

  const navigate = useNavigate();

  const signUpFun = () => {
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneNumValid = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

    setLoading(true);

    setUserData({
      ...userData,
      image: userData.gender == "male" ? selData[0].icon : selData[1].icon,
    });

    userData.firstName.length < 3
      ? (clearErr(),
        setFirstNameCheck("first name should be 3 letters or more"))
      : userData.lastName.length < 3
      ? (clearErr(), setLastNameCheck("last name should be 3 letters or more"))
      : userData.userName.length < 4
      ? (clearErr(), setuserNameCheck("user name should be 4 letters or more"))
      : userData.userName.includes(" ")
      ? (clearErr(), setuserNameCheck("user name cant include spaces"))
      : !userData.email
      ? (clearErr(), setemailCheck("please enter your email first"))
      : !emailValid.test(userData.email)
      ? (clearErr(), setemailCheck("invalid email"))
      : userData.password.length < 6
      ? (clearErr(), setPasswordCheck("password should be 6 letters or more"))
      : userData.password.includes(" ")
      ? (clearErr(), setPasswordCheck("password cant includes spaces"))
      : !userData.city
      ? (clearErr(), setCityCheck("please enter your city first"))
      : !userData.phoneNumber
      ? (clearErr(), setPhoneNumCheck("please enter your phone number first"))
      : !phoneNumValid.test(userData.phoneNumber)
      ? (clearErr(),
        setPhoneNumCheck(
          "invalid egyptian phone number,if you are not egyptian please contact us"
        ))
      : rulesApply
      ? (clearErr(), setRulesCheck(true))
      : users.some((user) => user.userName == userData.userName)
      ? (clearErr(), setuserNameCheck("this user name already used"))
      : users.some((user) => user.email == userData.email)
      ? (clearErr(),
        setemailCheck("this email had already register,try to login"))
      : (clearErr(),
        setLoading(true),
        axios({
          method: "post",
          url: "http://localhost:3000/users",
          data: userData,
        }),
        navigate("/login"));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className=" flex justify-center items-center bg-[#C0C0C0] py-10 gap-3 font-semibold xs:px-5 md:px-20">
      <section className="flex flex-col gap-4 text-black">
        <div className="flex gap-6">
          <div className="grow ">
            <label htmlFor="firstNameInp">First Name</label>

            <TEInput
              id="firstNameInp"
              type="text"
              className="rounded-lg bg-white mt-2"
              label="enter first name"
              value={useState.firstName}
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
              value={useState.lastName}
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
        </div>

        <div className="">
          <label htmlFor="userNameInp">User Name</label>

          <TEInput
            id="userNameInp"
            type="text"
            className="rounded-lg bg-white mt-2"
            label="enter user name"
            value={useState.userName}
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
            label="enter your email"
            value={useState.email}
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
          <label htmlFor="passwordInp">Password</label>

          <TEInput
            id="passwordInp"
            type="password"
            className="rounded-lg bg-white mt-2"
            label=" password"
            value={useState.password}
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

        <div className="flex justify-center items-center gap-6">
          <div className="">
            <label htmlFor="cityInp">City</label>

            <TEInput
              id="cityInp"
              type="text"
              className="rounded-lg bg-white mt-2"
              label="enter your city"
              value={useState.city}
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

          <div className="">
            <label>Gender</label>

            <div className="relative  mt-2 rounded-lg bg-white">
              <TESelect
                data={selData}
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

          <div className="">
            <label htmlFor="phoneNumberInp">Phone number</label>

            <TEInput
              id="phoneNumberInp"
              type="tel"
              className="rounded-lg bg-white mt-2"
              label="enter phone number"
              value={useState.phoneNumber}
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

        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="checkbox"
            id="checkBoxRules"
            className="w-4 h-4 rounded-lg "
            onClick={(inp) => setRulesApply(!inp.target.checked)}
          ></input>

          <label htmlFor="checkBoxRules" className="text-[#321FDB] font-bold">
            Apply Rules And Conditions
          </label>

          <TEAlert
            staticAlert
            open={rulesCheck}
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
            please, read our rules and apply it
          </TEAlert>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={signUpFun}
            className=" inline-block rounded-xl font-bold bg-[#321FDB] p-3 xs:text-xs md-text-md   leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-[#5141e0a6] hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-[#5141e073] active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          >
            {loading ? (
              <div
                className="inline-block h-4 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
