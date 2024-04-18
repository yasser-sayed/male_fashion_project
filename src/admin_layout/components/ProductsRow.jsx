import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductsRow = ({ product, getProducts }) => {
  const delProd = () => {
    Swal.fire({
      title: `Are you sure,you want to delete ${product.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:3000/products/${product.id}`,
        });

        getProducts();

        Swal.fire({
          title: `${product.name} deleted!`,
          text: "your  delete is done.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tr>
      <td className="border-2 border-[#5E6B7F] font-bold xs:px-2 md:px-4 xs:py-1 md:py-2 xs:text-xs md:text-xl ">
        <div className="flex items-center justify-center">
          <img
            src={product.img}
            className="rounded-full w-9 h-9"
            alt="product image"
          />
        </div>
      </td>

      <td className="border-2 border-[#5E6B7F] font-bold xs:px-2 md:px-4 xs:py-1 md:py-2 xs:text-xs md:text-xl text-center">
        $ {product.price}{" "}
      </td>

      <td className="border-2 border-[#5E6B7F] font-bold xs:px-2 md:px-4 xs:py-1 md:py-2 xs:text-xs md:text-xl text-center  ">
        <div className="flex xs:flex-col md:flex-row items-center justify-evenly gap-4">
          <Link
            to={`/admin/products/${product.id}`}
            className="inline-block rounded-lg bg-sky-500 xs:px-2 md:px-4 xs:py-1 md:py-2  text-sm font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          >
            View
          </Link>
          <Link
            to={`/admin/products/editproduct/${product.id}`}
            className="inline-block rounded-lg bg-yellow-500 xs:px-2 md:px-4 xs:py-1 md:py-2  text-sm font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-yellow-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
          >
            Edit
          </Link>

          <button
            onClick={delProd}
            className="inline-block rounded-lg bg-red-500 xs:px-2 md:px-4 xs:py-1 md:py-2  text-sm font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
          >
            Del
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductsRow;
