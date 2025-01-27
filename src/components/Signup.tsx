import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const navigate=useNavigate()
  
const [data,setData]=useState({firstName:"",lastName:"",phone:"",email:"",password:""})
const handleChange=(event:ChangeEvent<HTMLInputElement>) => {
  const{name,value}=event.target
  setData({...data,[name]:value})

}
const handleSubmit=async(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault()
  try{
    const response=await axios.post("http://localhost:5000/api/register/user",data)
    console.log(response.data.message)
    toast.error(response.data.message)
    navigate("/")
  }
  catch(error){
    console.error("error submitting form", error)
    toast.error("Error submitting form")
  }

}

  return (
    <>
      <div className="bg-bPrimary md:flex  justify-evenly items-center md:h-screen">
        <div className="items-center text-7xl font-bold text-white ">
          <span className="text-black">Supa</span>Menu
        </div>
        <div className="md:p-0 p-4">
          <form className="inline-grid px-5 py-4  bg-white rounded-md md:w-[400px] w-full " onSubmit={handleSubmit}>
            <h1 className="font-bold flex justify-center text-xl">Sign Up</h1>
            <label
              htmlFor="firstName"
              className="text-xs font-bold text-gray-400 pt-4 pb-2"
            >
              FIRST NAME
            </label>

            <input
              type="text"
              placeholder="First Name"
              className=" rounded-md bg-slate-50 py-[8px] px-2 text-sm border border-gray-200"
              onChange={handleChange}
              value={data.firstName}
              name="firstName"
            />
            <label
              htmlFor="lastName"
              className="text-xs font-bold text-gray-400 pt-4 pb-2"
            >
              LAST NAME
            </label>

            <input
              type="text"
              placeholder="Last Name"
              className="  rounded-md bg-slate-50 py-[8px] px-2 text-sm border border-gray-200"
              onChange={handleChange}
              value={data.lastName}
              name="lastName"
            />
            <label
              htmlFor="phone"
              className="text-xs font-bold text-gray-400 pt-4 pb-2"
            >
              {" "}
              PHONE
            </label>

            <input
              type="text"
              className=" rounded-md bg-slate-50 py-[8px] px-2 text-sm border border-gray-200"
              onChange={handleChange}
              value={data.phone}
              name="phone"
            />
            <label
              htmlFor="email"
              className="text-xs font-bold text-gray-400 pt-4 pb-2"

            >
              EMAIL
            </label>

            <input
              type="email"
              placeholder="Email"
              className=" rounded-md bg-slate-50 py-[8px] px-2 text-sm border border-gray-200"
              onChange={handleChange}
              value={data.email}
              name="email"
            />
            <label
              htmlFor="password"
              className="text-xs font-bold text-gray-400 pt-4 pb-2"
            >
              PASSWORD
            </label>

            <input
              type="Password"
              placeholder="Password"
              className=" rounded-md bg-slate-50 py-[8px] px-2 text-sm border border-gray-200"
              onChange={handleChange}
              name="password"
            />
            <div className="py-5 ">
              <button className="py-[8px] px-2 bg-bgButton w-full rounded-md text-white shadow-lg shadow-blue-100 hover:bg-bgHover">
                Sign Up
              </button>
            </div>

            <div className="text-sm text-gray-400 font-semibold flex justify-center">
              Already have account?{" "}
              <Link to="/login"><span className="text-blue-600 cursor-pointer ml-2">Login</span></Link>
            </div>
          </form>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Signup;
