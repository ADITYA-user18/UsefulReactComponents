import React, { useState } from "react";

const Login = () => {
  const [CurrentState, setCurrentState] = useState("Signup");

  return (
    <form className="flex  flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-black ">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-xl">{CurrentState}</p>

        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input
        className="w-full px-3 py-2 border border-gray-800  outline-none "
        type="text"
        name=""
        id=""
        placeholder="Name"
        required
      />
      <input
        className="w-full px-3 py-2 border border-gray-800 outline-none "
        type="email"
        name=""
        id=""
        placeholder="Email"
        required
      />
      <input
        className="w-full px-3 py-2 border border-gray-800 outline-none "
        type="password"
        name=""
        id=""
        placeholder="password"
        required
      />
    </form>
  );
};

export default Login;
