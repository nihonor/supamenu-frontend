import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaPlus } from "react-icons/fa6";

const Form3 = () => {
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
            <div className="flex gap-2">
            <button className="bg-bgButton p-3 px-5 rounded-lg text-white border-2 hover:bg-bgHover">Drink</button>
            <button className=" p-3 px-5 rounded-lg text-bgButton border-2 hover:bg-slate-50">Appetizer</button>
            <button className=" p-3 px-5 rounded-lg text-bgButton border-2 hover:bg-slate-50">Dessert</button>
            <button className=" p-3 px-5 rounded-lg text-bgButton border-2 hover:bg-slate-50">Main</button>
            <button className=" p-3 px-5 rounded-lg text-bgButton border-2 hover:bg-slate-50">Drink</button>
            </div>
           
          <label htmlFor="" className="block">
            Name
          </label>

          <input
            type="text"
            className="border-b w-[90%] py-2 block focus:outline-none "
            value={data.restFullName}
            placeholder="Name"
          />
          <label htmlFor="" className="block pt-3">
            Price
          </label>

          <input
            type="number"
            className="border-b w-[90%] py-2 focus:outline-none"
            value={data.ownPhone}
            placeholder="RWF"
          />
          <label htmlFor="" className="block pt-3">
            Menu description
          </label>

          <input
            type="number"
            className="border-b w-[90%] py-2 focus:outline-none"
            value={data.ownPhone}
            placeholder="Ingredients"
          />

          <label htmlFor="" className="pt-3">
            Upload images(picture of product) 
          </label>
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
          <div className="flex justify-center items-center gap-4"><button className="border-2 rounded-lg border-bgButton p-2 hover:bg-slate-100">Add more</button><span className="text-2xl text-bgButton"><FaPlus/></span></div>
          
        </form>
       
      </div>
      <ToastContainer />
    </>
  );
};

export default Form3;
