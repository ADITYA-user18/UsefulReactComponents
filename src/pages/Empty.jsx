import React from "react";

const Empty = () => {
  return (
    <div className="min-w-[50vw] flex flex-col items-center justify-center py-16 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-700 mb-2 tracking-wide">
        Nothing To Show
      </h1>
      <p className="text-lg text-gray-500">
        Try searching with a different keyword.
      </p>
    </div>
  );
};

export default Empty;
