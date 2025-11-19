import React from "react";

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert("Subscribed Successfully!");

    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-900">
        Subscribe Now! To Get Extra Discounts...😍
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
        voluptate.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded-xl px-4 pb-4 pt-0">
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email"
          className="flex-1 outline-none border border-gray-300 rounded-xl px-6 py-4 mt-6 text-sm w-64 sm:w-96 placeholder:text-base "
          required
        />
        <button
          type="submit"
          className="bg-black text-white  px-10 py-4 rounded-xl ml-2 hover:bg-gray-800 transition text-base  font-semibold mt-6"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
