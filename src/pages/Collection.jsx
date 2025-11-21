import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { useEffect } from "react";
import Empty from "./Empty";

const Collection = () => {
  const { products ,ShowSearch,search,setSearch} = useContext(ShopContext);
  const [ShowFilter, setShowFilter] = useState(false);
  const [FilterProducts, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [PriceFilter, setPriceFilter] = useState("relevant");

  const ToggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const ToggleSubCategory = (e) => {
    if (SubCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const filterByCategory = () => {
    let ProductAnotherCopy = products.slice();
    let newFiltered = ProductAnotherCopy;

    if(search && ShowSearch){
      newFiltered = newFiltered.filter((item)=>(item.name.toLowerCase().includes(search.toLowerCase())))
    }else{
      setSearch('')
    }

    if (Category.length > 0) {
      newFiltered = newFiltered.filter((item) =>
        Category.includes(item.category)
      );
    }

    if (SubCategory.length > 0) {
      newFiltered = newFiltered.filter((item) =>
        SubCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(newFiltered);
  };

  const FilterByPrices = () => {
    let ProductsCopy = products.slice();
    let polishedFilterPrice = ProductsCopy;

    switch (PriceFilter) {
      case "low-high":
        setFilterProducts(
          polishedFilterPrice.sort((a, b) => a.price - b.price)
        );
        break;
      case "high-low":
        setFilterProducts(
          polishedFilterPrice.sort((a, b) => b.price - a.price)
        );
        break;
      case "relevant":
        filterByCategory();
        break;
    }
  };
 


  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    filterByCategory();
  }, [Category, SubCategory,search,ShowSearch]);

  useEffect(()=>{
    FilterByPrices();
  },[PriceFilter])

  return (
    <div className="border-t">
      <div className="pt-10 mt-10">
        {/* TOP HEADER ROW */}
        <div className="relative mb-7 flex items-center my-8">
          {/* Left Side - FILTERS */}
          <p
            onClick={() => setShowFilter(!ShowFilter)}
            className="text-xl flex items-center cursor-pointer gap-1 z-10"
          >
            FILTERS
            <img
              className={`h-3 sm:hidden ${ShowFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>

          {/* Center - TITLE (absolute centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 text-base sm:text-2xl">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
          </div>
        </div>

        {/* MAIN CONTENT ROW */}
        <div className="flex flex-col sm:flex-row gap-10">
          {/* LEFT FILTER SECTION */}
          <div className="min-w-60 sm:w-1/4">
            {/* Categories */}
            <div
              className={`border border-gray-400 pl-5 py-3 mt-3 ${
                ShowFilter ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-sm font-medium">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-500">
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value={"Men"}
                    className="w-3"
                    onChange={ToggleCategory}
                  />{" "}
                  Men
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value={"Women"}
                    className="w-3"
                    onChange={ToggleCategory}
                  />{" "}
                  Women
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value={"Kids"}
                    className="w-3"
                    onChange={ToggleCategory}
                  />{" "}
                  Kids
                </label>
              </div>
            </div>

            {/* Type */}
            <div
              className={`border border-gray-400 pl-5 py-3 mt-3 ${
                ShowFilter ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-sm font-medium">TYPE</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-500">
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value={"Topwear"}
                    className="w-3"
                    onChange={ToggleSubCategory}
                  />{" "}
                  TopWear
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value={`Bottomwear`}
                    className="w-3"
                    onChange={ToggleSubCategory}
                  />{" "}
                  BottomWear
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value={`Winterwear`}
                    className="w-3"
                    onChange={ToggleSubCategory}
                  />{" "}
                  WinterWear
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT COLLECTION SECTION */}
          <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4 mt-3">
              <select onChange={(e)=>setPriceFilter(e.target.value)} className="border-2 border-gray-300 text-sm px-2 outline-none">
                <option value="relevant">Sort by: Relavant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort bt: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              {

                FilterProducts.length === 0 ? <Empty/> :FilterProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  image={item.image}
                  price={item.price}
                  name={item.name}
                  id={item._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
