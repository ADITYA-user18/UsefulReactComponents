import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";
import { FaShoppingCart, FaCheckCircle, FaTruck, FaUndo } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const fetchProductById = () => {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setSelectedImage(product.image[0]);
        setSelectedSize("");
      }
    };

    fetchProductById();
  }, [productId, products]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [productId]);

  // UPDATED: Toast autoClose = 2000ms
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size!", { autoClose: 2000 });
      return;
    }

    addToCart(productData._id, selectedSize);
    toast.success("Added to cart!", { autoClose: 2000 });
  };

  if (!productData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">

        {/* TOP MAIN SECTION */}
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-12">

          {/* LEFT SIDE IMAGES */}
          <div className="lg:col-span-7 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5 w-full">
                <div className="overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full object-cover"
                    src={selectedImage}
                    alt="Product"
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  {productData.image.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        selectedImage === img ? "border-gray-900" : "border-transparent"
                      }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={img}
                        alt="Thumbnail"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE PRODUCT DETAILS */}
          <div className="lg:col-span-5 lg:row-span-2 lg:row-end-2">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{productData.name}</h1>

            <p className="mt-6 text-4xl font-bold text-gray-900">
              {currency}{productData.price}
            </p>

            <p className="mt-6 text-base text-gray-700">{productData.description}</p>

            {/* SIZE SELECTOR */}
            <div className="mt-8">
              <p className="text-lg font-semibold text-gray-900">Select Size</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {productData.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-6 rounded-lg border text-lg ${
                      size === selectedSize
                        ? "border-gray-900 bg-gray-900 text-white scale-105"
                        : "border-gray-300 bg-white text-gray-900"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-10 flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-4 text-lg font-medium text-white hover:bg-gray-800"
            >
              <FaShoppingCart className="mr-3" />
              ADD TO CART
            </button>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-16 sm:mt-20">
          <RelatedProducts
            Category={productData.category}
            SubCategory={productData.subcategory}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
