import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsRow from "../../components/ProductsRow";

const AdminProducts = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-9 text-white flex flex-col gap-6">
      <h1 className="text-center text-3xl font-bold text-[#4F5D73]">
        Products
      </h1>

      <Link
        to="/admin/products/addproduct"
        className="self-start inline-block rounded-lg bg-success px-6 py-2   font-bold  leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
      >
        Add New Product
      </Link>

      <table className="w-full bg-[#4F5D73] rounded-lg">
        <thead>
          <tr>
            <th className=" border-2 border-[#5E6B7F]  xs:text-xs md:text-xl font-bold px-4 py-2">
              Product
            </th>
            <th className=" border-2 border-[#5E6B7F] xs:text-xs md:text-xl font-bold px-4 py-2">
              Price
            </th>
            <th className=" border-2 border-[#5E6B7F]  xs:text-xs md:text-xl font-bold px-4 py-2">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, key) => (
            <ProductsRow
              key={key}
              product={product}
              getProducts={getProducts}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
