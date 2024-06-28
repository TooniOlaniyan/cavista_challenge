import React from "react";

const Series = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-6 py-8 px-20 text-white w-full bg-gray-800">
        Popular Series
      </h2>
      <div className="flex items-center justify-between mb-6 w-full px-20">
        <div className="relative  mr-4 w-[30rem]">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 w-full"
          />
          <span className="absolute flex justify-center items-center p-3 right-0 top-0 text-gray-400 bg-blue-800 h-full">
            <img src="/assets/search.png" className="w-5 h-5 object-contain" />
          </span>
        </div>
        <select
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="" disabled>
            Sort by
          </option>
          <option value="year-a">Year in descending</option>
          <option value="year-d">Year in ascending</option>
          <option value="title-d">Title in descending</option>
          <option value="title-a">Title in ascending</option>
        </select>
      </div>
    </div>
  );
};

export default Series;
