import React, { useEffect } from "react";
import ProdCard from "../../components/ProdCard";

const Products = ({ products, addItem, delItem }) => {
  return (
    <div className="flex justify-center items-center gap-10 px-10 flex-wrap my-8 ">
      {products.map((productObj, key) => (
        <ProdCard
          productObj={productObj}
          addItem={addItem}
          delItem={delItem}
          key={key}
        />
      ))}
    </div>
  );
};

export default Products;
