import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Addclient = () => {
const navigate=useNavigate()
const[data,setData]=useState({clientName:"",category:"",representation:"",dateOfCreation:"",address:"",email:"",phone:"",bankAccount:""})

const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=event.target
    setData({...data,[name]:value})
    
}
const handleSubmit=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    try{
        const response=await axios.post('http://localhost:5000/api/client',data)
        navigate('/profile')
        console.log(response.data.message)
    }
    catch(error){
        console.error("error submitting form", error)
    }

}

  return (
    <>
      <div className=" md:flex justify-center">
        <div className=" md:w-1/4 rounded-lg    border-4 border-blue-700 p-3 mt-5">
          <form action="" className="px-2" onSubmit={handleSubmit}>
            <label className="flex justify-start font-semibold">Client</label>
            <input
              type="text"
              className="bg-none w-full border-b-2 text-xs font-semibold focus:outline-none focus:border-b-2 py-2 "
              placeholder="Client Name"
              onChange={handleChange}
              value={data.clientName}
              name="clientName"
            />
            <label className="flex justify-start font-semibold">Category</label>
            <input
              type="text"
              className="bg-none w-full border-b-2 text-xs font-semibold focus:outline-none focus:border-b-2 py-2"
              placeholder="Choose category"
              onChange={handleChange}
              value={data.category}
              name="category"
            />
            <label className="flex justify-start font-semibold">
              Representative
            </label>
            <input
              type="text"
              className="bg-none w-full border-b-2 text-xs font-semibold focus:outline-none focus:border-b-2 py-2"
              placeholder="Names"
              onChange={handleChange}
              value={data.representation}
              name="representation"
            />
            <label className="flex justify-start font-semibold">
              Date of creation
            </label>
            <input
              type="text"
              className="bg-none w-full border-b-2 text-xs font-semibold focus:outline-none focus:border-b-2 py-2"
              placeholder="Month & Year"
              onChange={handleChange}
              value={data.dateOfCreation}
              name="dateOfCreation"
            />
            <label className="flex justify-start font-semibold">Address</label>
            <input
              type="text"
              className="bg-none w-full border-b-2 text-xs font-semibold focus:outline-none focus:border-b-2 py-2"
              placeholder="Province,District,Sector,Cell"
              onChange={handleChange}
              value={data.address}
              name="address"
            />
            <label className="flex justify-start font-semibold">Email</label>
            <input
              type="text"
              className="bg-none w-full border-b-2 text-xs font-semibold focus:outline-none focus:border-b-2 py-2"
              placeholder="Email"
              onChange={handleChange}
              value={data.email}
              name="email"
            />
            <label className="flex justify-start font-semibold">Phone</label>
            <input
              type="text"
              className="bg-none w-full border-b-2 text-xs font-semibold focus:outline-none focus:border-b-2 py-2"
              placeholder="Phone"
              onChange={handleChange}
              value={data.phone}
              name="phone"
            />
            <label className="flex justify-start font-semibold">
              Bank Account(IBAN)
            </label>
            <input
              type="text"
              className="bg-none w-full border-b-2 text-xs font-semibold focus:outline-none focus:border-b-2 py-2"
              placeholder="code"
              onChange={handleChange}
              value={data.bankAccount}
              name="bankAccount"
            />
            <div className="p-4 flex justify-center">
              <button className="bg-bgButton p-2 text-white font-semibold drop-shadow-md  px-6 rounded-lg">
                Add Client
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addclient;
