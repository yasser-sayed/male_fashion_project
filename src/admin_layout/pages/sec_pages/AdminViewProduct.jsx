import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const AdminViewProduct = () => {
  const { prodid } = useParams();
  const [prodDet, setProdDet] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/products/${prodid}`,
    }).then((res) => setProdDet(res.data));
  }, []);

  return (
    <div className="gap-6 grid xs:p-7 md:p-20 text-[#394455] relative">
      <Link
        to="/admin/products"
        className="fixed top-[90px] start-6 z-10 text-xl rounded-lg   hover:bg-slate-300 p-2"
      >
        <IoMdArrowRoundBack />
      </Link>

      <h1 className="font-extrabold text-2xl">{prodDet?.name} </h1>
      <hr />

      <div className="flex justify-center">
        {" "}
        <img
          src={prodDet?.img}
          alt="user image"
          className="h-[40vh] rounded-full"
        />
      </div>

      <hr />

      <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">product Name :</h1>
          <h2 className="text-lg font-bold">{prodDet?.name}</h2>
        </div>

        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">price :</h1>
          <h2 className="text-lg font-bold">{prodDet?.price}</h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold"> catagory :</h1>
          <h2 className="text-lg font-bold">{prodDet?.sort}</h2>
        </div>

        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">sale name :</h1>
          <h2 className="text-lg font-bold">
            {prodDet?.label.name ? prodDet.label.name : "no sale"}
          </h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">sale color :</h1>
          <h2 className="text-lg font-bold">
            {prodDet?.label.color ? prodDet.label.color : "no sale"}
          </h2>
        </div>
        <div className="text-center flex  gap-4">
          <h1 className=" text-lg font-extrabold">sale background color :</h1>
          <h2 className="text-lg font-bold">
            {prodDet?.label.background ? prodDet.label.background : "no sale"}
          </h2>
        </div>
      </section>
    </div>
  );
};

export default AdminViewProduct;
