import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/cartTotal";

/**
 * Cart Component
 * Displays the items in the user's shopping cart. It allows users to view
 * products, update quantities, or remove items from the cart. It also shows
 * the cart total and provides a button to proceed to checkout.
 */
const Cart = () => {
  const { products, currency, CartItems, UpdateQuantity, navigate } =
    useContext(ShopContext);
  const [CartArrayData, setCartArrayData] = useState([]);

  useEffect(() => {
    const tempData = [];
    // This logic correctly transforms the cart items map into a flat array for rendering.
    for (const items in CartItems) {
      for (const item in CartItems[items]) {
        if (CartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: CartItems[items][item],
          });
        }
      }
    }
    setCartArrayData(tempData);
  }, [CartItems]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Title text1={"YOUR"} text2={"SHOPPING CART"} />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items List */}
          <div className="flex-1">
            {CartArrayData.length > 0 ? (
              <div className="space-y-4">
                {CartArrayData.map((item) => {
                  const ProductData = products.find((p) => p._id === item._id);
                  if (!ProductData) return null;

                  return (
                    <div
                      key={`${item._id}-${item.size}`}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col sm:flex-row items-center gap-6"
                    >
                      {/* Product Image */}
                      <img
                        className="w-28 h-28 object-cover rounded-lg flex-shrink-0"
                        src={ProductData.image[0]}
                        alt={ProductData.name}
                      />

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {ProductData.name}
                        </h3>
                        <div className="flex items-center gap-4 mt-2">
                          <p className="text-lg font-bold text-gray-900">
                            {currency}
                            {ProductData.price}
                          </p>
                          <p className="text-sm text-gray-600 border rounded-full px-3 py-1">
                            Size: {item.size}
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls and Remove Button */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => UpdateQuantity(item._id, item.size, item.quantity - 1)}
                            className="px-3 py-1.5 text-xl text-gray-600 hover:bg-gray-100 rounded-l-lg transition"
                          >
                            -
                          </button>
                          <input
                            onChange={(e) => {
                              const value = e.target.value;
                              // Prevents non-numeric and values less than 1
                              if (/^\d+$/.test(value) && parseInt(value) > 0) {
                                UpdateQuantity(item._id, item.size, Number(value));
                              }
                            }}
                            className="w-12 text-center border-l border-r py-1.5 text-base font-medium focus:outline-none"
                            type="text" // Using text to better control the onChange logic
                            value={item.quantity}
                          />
                          <button
                            onClick={() => UpdateQuantity(item._id, item.size, item.quantity + 1)}
                            className="px-3 py-1.5 text-xl text-gray-600 hover:bg-gray-100 rounded-r-lg transition"
                          >
                            +
                          </button>
                        </div>
                        {/* 
                          Correction for the invisible bin icon: 
                          Replaced the `<img>` tag with an inline SVG. This ensures the icon is always visible 
                          and properly rendered, regardless of external asset path issues. The 'group' utility
                          is used to change the icon color on button hover for better user feedback.
                        */}
                        <button
                          onClick={() => UpdateQuantity(item._id, item.size, 0)}
                          className="p-2.5 rounded-full hover:bg-red-100 group transition"
                          aria-label="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 group-hover:text-red-700 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // Empty Cart Message
              <div className="text-center py-24 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-semibold text-gray-800">
                  Your Cart is Empty
                </h2>
                <p className="text-gray-500 mt-3 max-w-md mx-auto">
                  Looks like you haven't added anything yet. Start exploring our
                  products to find something you like!
                </p>
              </div>
            )}
          </div>

          {/* Cart Totals and Checkout */}
          {CartArrayData.length > 0 && (
            <div className="w-full lg:w-[380px] lg:sticky top-28 self-start">
              <div className="space-y-6">
                <CartTotal />
                <button
                  onClick={() => navigate("/place-order")}
                  className="w-full bg-black text-white py-3.5 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;