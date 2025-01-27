import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Form2 = () => {
  const [data, setData] = useState({
    restName: "",
    restFullName: "",
    restPhone: "",
    ownPhone: "",
    openHour: "",
    closeHour: "",
    ownEmail: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("");
      console.log(response.data.message);
      toast.error(response.data.message);
    } catch (error) {
      console.error("error submitting form", error);
      toast.error("Error submitting form");
    }
  };

  return (
    <>
      <div className="border-2  flex justify-center px-4 rounded-lg">
        <form className="py-4">
          <label htmlFor="" className="block">
            Restaurant Type(restaurant,pub,hotel,coffeeshop,other)
          </label>
          <div className="relative w-[90%]">
            <select
              name="restType"
              value={data.restType}
              onChange={handleChange}
              className="appearance-none border rounded-lg w-full py-2 px-3 my-3 block bg-white text-gray-700 focus:outline-none"
            >
              <option value="">Select a restaurant type</option>
              <option value="restaurant">Restaurant</option>
              <option value="pub">Pub</option>
              <option value="hotel">Hotel</option>
              <option value="coffeeshop">Coffee Shop</option>
              <option value="fastfood">Fast Food</option>
              <option value="bar">Bar</option>
              <option value="other">Other</option>
            </select>

 
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-bgButton" 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <input
            type="text"
            className="border rounded-lg w-[90%] py-2 px-3 block focus:outline-none "
            value={data.restFullName}
            placeholder="Restaurant Name"
          />

          <input
            type="number"
            className="border rounded-lg w-[90%] py-2 px-3 my-3 focus:outline-none"
            value={data.ownPhone}
            placeholder=" | Mobile number"
          />
          <label htmlFor="" className="block">
            Opening Hours
          </label>
          <div className="flex gap-10">
            <input
              type="text"
              placeholder="From|8:00"
              value={data.ownPhone}
              className="border px-3 py-2 rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="To|8:00"
              value={data.ownEmail}
              className="border px-3 py-2 rounded-lg focus:outline-none"
            />
          </div>
          <label htmlFor="">Upload images(picture or logo)</label>
          <div className="my-3">
            <label className="cursor-pointer  border hover:bg-slate-100 py-2 px-4 rounded-lg flex justify-center w-full">
              Choose File
              <input
                type="file"
                className="hidden "
                name="restPhone"
                onChange={handleChange}
              />
            </label>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Form2;
