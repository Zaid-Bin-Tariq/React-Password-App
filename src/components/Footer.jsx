import React from "react";

const Footer = () => {
  return (
    <div className="footer w-full bg-slate-800 text-white h-[10vh] flex flex-col justify-center fixed bottom-0">
      <div className="mx-auto w-fit text-sm">
        <span className="text-white font-extrabold">Password</span>
        <span className="text-green-500 font-extrabold">OP</span>
      </div>
      <div>
        <h1 className="mx-auto w-fit text-sm">Created by Zaid</h1>
      </div>
    </div>
  );
};

export default Footer;
