import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TEAlert, TEInput, TESelect } from "tw-elements-react";

const AdminEditProduct = () => {
  const { prodid } = useParams();

  const [colData] = useState([
    {
      text: "none",
      value: "",
    },
    {
      text: "black",
      value: "black",
    },
    {
      text: "white",
      value: "white",
    },
    {
      text: "blue",
      value: "blue",
    },
    {
      text: "gray",
      value: "gray",
    },
    {
      text: "green",
      value: "green",
    },
    {
      text: "purple",
      value: "purple",
    },
    {
      text: "red",
      value: "red",
    },
    {
      text: "teal",
      value: "teal",
    },
    {
      text: "yellow",
      value: "yellow",
    },
  ]);

  const [prod, setProd] = useState({
    name: "",
    price: 0,
    sort: "",
    img: "",
    label: {
      name: "",
      color: "",
      background: "",
    },
  });

  const [nameCheck, setNameCheck] = useState("");
  const [priceCheck, setPriceCheck] = useState("");
  const [sortCheck, setSortCheck] = useState("");
  const [imgCheck, setImgCheck] = useState("");

  const clearErr = () => {
    setNameCheck("");
    setPriceCheck("");
    setSortCheck("");
    setImgCheck("");
  };

  const navigate = useNavigate();

  const patchprod = () => {
    clearErr();
    axios({
      method: "patch",
      url: `http://localhost:3000/products/${prodid}`,
      data: prod,
    }),
      navigate("/admin/products");
  };

  const editProd = () => {
    const urlVaild =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    prod.name.length < 3
      ? (clearErr(), setNameCheck("name should be 3 letters or more"))
      : !prod.price
      ? (clearErr(), setPriceCheck("please set price to your product!"))
      : prod.sort.length < 2
      ? (clearErr(), setSortCheck("catagory should be 2 letters or more"))
      : !urlVaild.test(prod.img)
      ? (clearErr(), setImgCheck("invalid image url"))
      : patchprod();
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/products/${prodid}`,
    }).then((res) => {
      setProd(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center xs:p-2  md:p-20 rounded-lg z-0 relative">
      <Link
        to="/admin/Products"
        className="fixed top-[90px] start-6 z-10 text-xl rounded-lg   hover:bg-slate-300 p-2"
      >
        <IoMdArrowRoundBack />
      </Link>
      <section className="flex flex-col gap-5 font-semibold bg-[#4F5D73] p-6 rounded-lg text-white">
        <div className="flex gap-6">
          <div className="grow ">
            <label htmlFor="prodName">Product Name </label>

            <TEInput
              id="prodName"
              type="text"
              className="rounded-lg bg-white mt-2 z-0 "
              label=" Product Name "
              value={prod.name}
              onChange={(inp) => setProd({ ...prod, name: inp.target.value })}
            ></TEInput>

            <TEAlert
              staticAlert
              open={nameCheck}
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
              {nameCheck}
            </TEAlert>
          </div>

          <div className="grow">
            <label htmlFor="prodPrice">Product Price </label>

            <TEInput
              id="prodPrice"
              type="number"
              className="rounded-lg bg-white mt-2"
              label="Product Price"
              value={prod.price}
              onChange={(inp) => setProd({ ...prod, price: inp.target.value })}
            ></TEInput>

            <TEAlert
              staticAlert
              open={priceCheck}
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
              {priceCheck}
            </TEAlert>
          </div>

          <div className="">
            <label htmlFor="prodCatagory">Product Catagory</label>

            <TEInput
              id="prodCatagory"
              type="text"
              className="rounded-lg bg-white mt-2"
              label="Product Catagory"
              value={prod.sort}
              onChange={(inp) => setProd({ ...prod, sort: inp.target.value })}
            ></TEInput>

            <TEAlert
              staticAlert
              open={sortCheck}
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
              {sortCheck}
            </TEAlert>
          </div>
        </div>

        <div className="">
          <label htmlFor="imgUrl">Product Image</label>

          <TEInput
            id="imgUrl"
            type="text"
            className="rounded-lg bg-white mt-2"
            label="image url"
            value={prod.img}
            onChange={(inp) => setProd({ ...prod, img: inp.target.value })}
          ></TEInput>
          <h1 className="text-yellow-400 text-lg">
            Image Shall Be Like : https://image.png
          </h1>

          <TEAlert
            staticAlert
            open={imgCheck}
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
            {imgCheck}
          </TEAlert>
        </div>

        <div className="">
          <label htmlFor="saleLabel">Sale Name </label>

          <TEInput
            id="saleLabel"
            type="text"
            className="rounded-lg bg-white mt-2"
            label="Sale Name"
            value={prod.label.name}
            onChange={(inp) =>
              setProd({
                ...prod,
                label: { ...prod.label, name: inp.target.value },
              })
            }
          ></TEInput>
        </div>

        <div className="">
          <label>Sale Color </label>

          <div className="relative  mt-2 rounded-lg bg-white text-[#4F5D73]">
            <TESelect
              data={colData}
              value={prod.label.color}
              label="sale color"
              onValueChange={(inp) => {
                setProd({
                  ...prod,
                  label: { ...prod.label, color: inp.value },
                });
              }}
            />
          </div>
        </div>
        <div className="">
          <label>Sale BackGround Color </label>

          <div className="relative  mt-2 rounded-lg bg-white text-[#4F5D73]">
            <TESelect
              data={colData}
              value={prod.label.background}
              label="bg color"
              onValueChange={(inp) => {
                setProd({
                  ...prod,
                  label: { ...prod.label, background: inp.value },
                });
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={editProd}
            className="self-start inline-block rounded-lg bg-success px-6 py-2   font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            edit Product
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdminEditProduct;
