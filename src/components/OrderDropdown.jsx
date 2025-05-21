import React from "react";

function OrderDropdown({ setOrder }) {
  const handleClick = () => {
    setOrder("desc");
  };
  return (
    <div className="w-32 h-10.5 border border-gray-300 rounded-xl flex flex-col justify-center text-gray-500 bg-white">
      <div className="flex mx-5 my-3 justify-center">
        <button onClick={handleClick}>최신순</button>
      </div>
    </div>
  );
}

export default OrderDropdown;
