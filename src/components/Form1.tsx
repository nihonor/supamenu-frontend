import React from 'react'
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Form1 = () => {
    const[data,setData]=useState({restName:"",restFullName:"",restPhone:"",ownPhone:"",openHour:"",closeHour:"",ownEmail:""})
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
      const{name,value}=event.target
      setData({...data,[name]:value})
  
    }
  
    const handleSubmit=async(event:FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      try{
        const response=await axios.post('')
        console.log(response.data.message)
        toast.error(response.data.message)
      }
      catch(error){
        console.error("error submitting form", error)
        toast.error("Error submitting form")
      }
  
    }
  
  return (
    <>
       <div className="border-2  flex justify-center px-4 rounded-lg">
          <form className="py-4">
            
            <label htmlFor="" className="block" >Restaurant Information</label>
            <input type="text" className="border rounded-lg w-[90%] py-2 px-3 my-3 block" value={data.restName} placeholder="Restaurant Name" />
            <input type="text" className="border rounded-lg w-[90%] py-2 px-3 block" value={data.restFullName} placeholder="Restaurant Name" />
            <label htmlFor="">Contacts number @ Restaurant</label>
            <input type="number" className="border rounded-lg w-[90%] py-2 px-3 my-3 block" value={data.restPhone} placeholder=" | Mobile number" />
            <label htmlFor="" className="block">Restaurant owner details</label>
            <input type="number" className="border rounded-lg w-[90%] py-2 px-3 my-3 " value={data.ownPhone} placeholder=" | Mobile number" />
<div className="flex gap-10">
  <input type="text" placeholder="Owner Name " value={data.ownPhone} className="border px-3 py-2 rounded-lg" />
  <input type="text" placeholder="Restaurant Owner Email" value={data.ownEmail} className="border px-3 py-2 rounded-lg"/>
</div>

          </form>
        </div>
        <ToastContainer/>
    </>
  )
}

export default Form1
