import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, name, price, image }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-800 cursor-pointer " to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img src={image[0]} alt="" className="hover:scale-105 ease-in-out" />
      </div>
      <p className="pt-4 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
