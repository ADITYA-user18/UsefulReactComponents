import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/cartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

/**
 * PlaceOrder Component
 * This component provides a form for users to enter their delivery details,
 * view their cart total, select a payment method, and place their order.
 */
const PlaceOrder = () => {
  const { navigate } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Delivery Details Form */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
              <div className="text-2xl font-semibold text-gray-800 mb-6">
                <Title text1={"Delivery"} text2={"Details"} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
                type="email"
                placeholder="Email Address"
              />
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
                type="text"
                placeholder="Street Address"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  type="text"
                  placeholder="City"
                />
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  type="text"
                  placeholder="State"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  type="number"
                  placeholder="Pin Code"
                />
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  type="text"
                  placeholder="Country"
                />
              </div>
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
                type="number"
                placeholder="Phone"
              />
            </div>
          </div>

          {/* Cart Totals and Payment Method */}
          <div className="w-full lg:w-2/5">
            <div className="space-y-8">
              <CartTotal />

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-xl font-semibold text-gray-800 mb-6">
                  <Title text1={"Payment"} text2={"Method"} />
                </div>
                <div className="space-y-4">
                  {/* Payment Options */}
                  <div
                    onClick={() => setMethod("stripe")}
                    className={`flex items-center gap-4 border p-4 rounded-lg cursor-pointer transition-all ${
                      method === "stripe"
                        ? "border-transparent ring-2 ring-green-500 bg-green-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-colors ${
                        method === "stripe"
                          ? "bg-green-500 border-green-500"
                          : "border-gray-400"
                      }`}
                    ></div>
                    <img className="h-6" src={assets.stripe_logo} alt="Stripe" />
                  </div>
                  <div
                    onClick={() => setMethod("razorpay")}
                    className={`flex items-center gap-4 border p-4 rounded-lg cursor-pointer transition-all ${
                      method === "razorpay"
                        ? "border-transparent ring-2 ring-green-500 bg-green-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-colors ${
                        method === "razorpay"
                          ? "bg-green-500 border-green-500"
                          : "border-gray-400"
                      }`}
                    ></div>
                    <img className="h-6" src={assets.razorpay_logo} alt="Razorpay" />
                  </div>
                  <div
                    onClick={() => setMethod("cod")}
                    className={`flex items-center gap-4 border p-4 rounded-lg cursor-pointer transition-all ${
                      method === "cod"
                        ? "border-transparent ring-2 ring-green-500 bg-green-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-colors ${
                        method === "cod"
                          ? "bg-green-500 border-green-500"
                          : "border-gray-400"
                      }`}
                    ></div>
                    <p className="text-gray-700 font-medium">Cash On Delivery</p>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => navigate("/orders")}
                    className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;