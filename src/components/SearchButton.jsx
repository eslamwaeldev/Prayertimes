import React from "react";

export default (props) => {
  return (
    <button
      onClick={() => props.readyToSearch(true)}
      className="bg-amber-400 text-gray-800 my-3 p-2 text-xl w-full font-bold"
    >
      Search
    </button>
  );
};
