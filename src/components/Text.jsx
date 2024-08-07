import React from "react";

const Text = () => {
  return (
    <div className="flex flex-col mx-auto w-1/2">
      <div className="mx-auto">
        <span className="text-black font-extrabold text-xl">Password</span>
        <span className="text-green-500 font-extrabold text-xl">OP</span>
      </div>
      <div className="mx-auto">Your own Password Manager</div>
    </div>
  );
};

export default Text;