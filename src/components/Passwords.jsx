import React from "react";
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Passwords = ({ entries, passwordArray, setPasswordArray }) => {
  const copyText = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const deletePassword = (id) => {
    console.log("deleting password with id", id);
    setPasswordArray([passwordArray.filter(item => item.id !== id)]);
    //localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
    //console.log([...passwordArray, form]);
  };

  const editPassword = (id) => {
    console.log("editing password with id", id);
    //setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
    //localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
    //console.log([...passwordArray, form]);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="container w-2/3 mx-auto">
        <h1 className="font-bold">Your Passwords</h1>
        {entries.length === 0 ? (
          <div>No passwords to show</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-green-800 text-white text-sm text-center">
                <th className="w-3/6">Site</th>
                <th className="w-1/6">Username</th>
                <th className="w-1/6">Passworh</th>
                <th className="w-1/6">Action</th>
              </tr>
            </thead>
            {entries.length > 0 &&
              entries.map((item, index) => {
                return (
                  <tbody>
                    <tr
                      className="text-center text-sm bg-slate-100"
                      key={index}
                    >
                      <td className="w-3/6  ">
                        {item ? (
                          <div className="flex items-center justify-center gap-3">
                            <a href={item.site} target="_blank">
                              {item.site}
                            </a>
                            <FaCopy
                              className="cursor-pointer"
                              onClick={() => {
                                copyText(item.site);
                              }}
                            />
                          </div>
                        ) : null}
                      </td>
                      <td className="w-1/6 ">
                        {item ? (
                          <div className="flex items-center justify-center gap-3">
                            <a href={item.userName} target="_blank">
                              {item.userName}
                            </a>
                            <FaCopy
                              className="cursor-pointer"
                              onClick={() => {
                                copyText(item.userName);
                              }}
                            />
                          </div>
                        ) : null}
                      </td>
                      <td className="w-1/6 ">
                        {item ? (
                          <div className="flex items-center justify-center gap-3">
                            <a href={item.password} target="_blank">
                              {item.password}
                            </a>
                            <FaCopy
                              className="cursor-pointer"
                              onClick={() => {
                                copyText(item.password);
                              }}
                            />
                          </div>
                        ) : null}
                      </td>
                      <td className="w-1/6 ">
                        <div className="flex items-center justify-center">
                          <AiFillEdit className="w-6 h-6 cursor-pointer" onClick={()=> {editPassword(item.id)}} />
                          <MdDelete className="w-6 h-6 cursor-pointer" onClick={()=> {deletePassword(item.id)}} />
                          </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        )}
      </div>
    </>
  );
};

export default Passwords;
