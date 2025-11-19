import React, { useContext, useEffect,useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({ Category, SubCategory }) => {
  const { products } = useContext(ShopContext);
  const [Related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice(0,100);
      productsCopy = productsCopy.filter((item) => Category === item.category);
      productsCopy = productsCopy.filter(
        (item) => SubCategory === item.subcategory
      );

     setRelated(productsCopy)
    }
  }, [products,Category,SubCategory]);

  return <div className="my-24">
    <div className="text-center text-3xl py-2">
      <Title text1={'RELATED'} text2={'PRODUCTS'}/>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {
          Related.map((item,index)=>(
            <ProductItem key={index} image={item.image} price={item.price} name={item.name} id={item._id}/>
          ))
        }

      </div>

    </div>

  </div>;
};

export default RelatedProducts;
