import React from "react";
import Text from "./Text";
import { useState, useRef, useEffect } from "react";
import Passwords from "./Passwords";
import { v4 as uuidv4 } from "uuid";
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", userName: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type = "text";
    alert("show the password");
    if (ref.current.src.includes("icons/open.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/open.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    console.log([...passwordArray, form]);
    setForm({ site: "", userName: "", password: "" })
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const deletePassword = (id) => {
    console.log("deleting password with id", id);
    let conf = confirm("Do you really want to delete this password?");
    if (conf) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  };

  const editPassword = (id) => {
    console.log("editing password with id", id);
    setForm(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="container mx-auto min-h-[81vh] h-[80vh] bg-green-50 max-w-4xl ">
        <div className="text">
          <Text />
        </div>
        <div className="flex flex-col p4 gap-3 p-5">
          <input
            type="text"
            className="rounded-full border border-green-700 w-full p-2"
            placeholder="Enter Website URL"
            value={form.site}
            onChange={handleChange}
            name="site"
          />
          <div className="flex gap-3">
            <input
              type="text"
              className="rounded-full border border-green-700 w-4/6 p-2"
              placeholder="Enter Username"
              value={form.userName}
              onChange={handleChange}
              name="userName"
            />
            <div className="relative w-2/6">
              <input
                ref={passwordRef}
                type="password"
                className="rounded-full border border-green-700 w-full p-2 px-3"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                name="password"
              />
              <span className="absolute right-1 top-1">
                <img
                  className="w-7 h-8 cursor-pointer"
                  ref={ref}
                  onClick={showPassword}
                  src="icons/open.png"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        <button
          className="flex justify-center items-center bg-green-700 rounded-full px-3 py-1 w-fit mx-auto"
          onClick={savePassword}
        >
          Add Password
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>
        </button>
        <div className="passwords container w-2/3 mx-auto">
          <h1 className="font-bold">Your Passwords</h1>
          {passwordArray.length === 0 ? (
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
              {passwordArray.length > 0 &&
                passwordArray.map((item, index) => {
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
                            <AiFillEdit
                              className="w-6 h-6 cursor-pointer"
                              onClick={() => {
                                editPassword(item.id);
                              }}
                            />
                            <MdDelete
                              className="w-6 h-6 cursor-pointer"
                              onClick={() => {
                                deletePassword(item.id);
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          )}
        </div>{" "}
      </div>
    </>
  );
};

export default Manager;
