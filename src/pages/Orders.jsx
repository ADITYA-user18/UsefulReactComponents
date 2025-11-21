import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

/**
 * Orders Component
 * Displays a list of user's past orders with details like product image, name,
 * price, quantity, date, and shipping status. It allows users to track their orders.
 */
const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    // Main container with top border, vertical padding, and centered content
    <div className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="mb-12">
          <Title text1={"My"} text2={"Orders"} />
        </div>

        {/* Orders list container with a vertical divider */}
        <div className="flex flex-col gap-8">
          {products.slice(1, 4).map((item, index) => (
            // Individual order item card
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              {/* Product Info: Image, Name, Details */}
              <div className="flex items-center gap-5 flex-1">
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={item.image[0]}
                  alt={item.name}
                />
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  <div className="flex items-center divide-x divide-gray-300 text-sm text-gray-500">
                    <p className="pr-3 text-base font-medium text-gray-800">{currency}{item.price}</p>
                    <p className="px-3">Quantity: 1</p>
                    <p className="pl-3">Size: Medium</p>
                  </div>
                  <p className="text-sm mt-1">Date: <span className="text-gray-500">25th July 2026</span></p>
                </div>
              </div>

              {/* Status and Actions */}
              <div className="w-full md:w-auto flex flex-row-reverse md:flex-col items-center md:items-end justify-between md:justify-center gap-3">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm font-medium text-green-600">Ready To Ship</p>
                </div>
                <button className="bg-gray-800 text-white hover:bg-gray-700 rounded-md px-5 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;