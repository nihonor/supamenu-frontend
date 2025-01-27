import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { IoIosNotifications, IoIosSearch, IoIosSort } from "react-icons/io";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import axios from "axios";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Dashboard = () => {
  const [formData, setFormData] = useState([]);
  const [err, setErr] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/client");
        setFormData(response.data);
      } catch (error) {
        setErr(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="bg-gray-100 flex-grow">
          <div className="flex justify-between px-20 pt-4">
            <div className="items-center text-2xl font-semibold md:flex hidden">
              Overview
            </div>
            <Notification />
          </div>

          <div className="">
            <h1 className="pl-80 font-semibold">New client</h1>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Add a new client"
                className="bg-gray-100 border-b-2 w-1/2  text-sm py-3 px-3"
              />
              <button className="text-gray-400 hover:bg-gray-200 h-4 w-4 ">
                <Link to="/addclient">
                  <FaRegPlusSquare />
                </Link>
              </button>
            </div>
          </div>
          <div className="mx-6 ">
            {err ? (
              <p className="text-red-600">{err}</p>
            ) : (
              <table className="table bg-white border-2  w-full my-5">
                <thead>
                  <tr>
                    <td className="pl-10 font-bold">All Clients</td>
                    <td>.</td>
                    <td>.</td>
                    <td className="flex justify-center font-semibold text-gray-400">
                      Sort
                    </td>
                    <td className=" font-semibold text-gray-400">
                      <span></span>Filter
                    </td>
                  </tr>

                  <tr className="text-gray-300">
                    <th>Client details</th>
                    <th>Sales</th>
                    <th>Detail report</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.map((item) => {
                    return (
                      <tr key={item._id} className="text-center border-t-2">
                        <td className="py-4 flex justify-start pl-2">{item.clientName}</td>
                        <td>{item.bankAccount}</td>
                        <td>
                          {" "}
                          <span className="flex justify-center text-bgButton text-xl">
                            <FaRegEye />
                          </span>
                        </td>
                        <td>
                          <span className="bg-slate-400 px-3 py-1 rounded-3xl text-white uppercase text-sm font-semibold">
                            {item.category}
                          </span>
                        </td>
                        <td>...</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
