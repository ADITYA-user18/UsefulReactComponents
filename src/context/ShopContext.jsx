import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import {  useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 20;
  const [search, setSearch] = useState("");
  const [ShowSearch, setShowSearch] = useState(true);
  const [CartItems, setCartItems] = useState({});
  const navigate = useNavigate()

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(CartItems);

    // If product does not exist in cart, create object
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    // If size does not exist, initialize count
    if (!cartData[itemId][size]) {
      cartData[itemId][size] = 1;
    } else {
      cartData[itemId][size] += 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in CartItems) {
      for (const item in CartItems[items]) {
        try {
          if (CartItems[items][item] > 0) {
            totalCount += CartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const UpdateQuantity = async (itemId, size, quantity) => {
    let CartData = structuredClone(CartItems);
    CartData[itemId][size] = quantity;
    setCartItems(CartData);
  };

  const getCartAmount =  () => {
    let totalAmount = 0;

    for (const items in CartItems) {
      let itemInfo = products.find((product) => product._id === items);

      for (const item in CartItems[items]) {
        try {
          if (CartItems[items][item] > 0) {
            totalAmount += itemInfo.price * CartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalAmount;
  };

  useEffect(() => {
    console.log(CartItems);
  }),
    [CartItems];

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    ShowSearch,
    setShowSearch,
    CartItems,
    setCartItems,
    addToCart,
    getCartCount,
    UpdateQuantity,
    getCartAmount,
    navigate
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
