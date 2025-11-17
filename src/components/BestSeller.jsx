import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import Title from "./Title";
import { useEffect } from "react";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [BestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((product) => product.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [BestSeller]);

  return (
    <div className="my-10">
      <div className="text-center text-xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          sint praesentium velit ipsam fuga aliquam doloremque neque voluptatum
          expedita sed nisi incidunt delectus rerum earum magni, est sit
          quibusdam vero?
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {BestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
