import Dashboard from "./components/Dashboard"
import Form from "./components/Form"
import Home from "./components/Home"
import Signup from "./components/Signup"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Addclient from "./components/Addclient"
import Profile from "./components/Profile"
import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const[user,setUser]=useState(null)
  const getUser = async() =>{
    try{
      const url='http://localhost:5000/auth/login/success';
      const{data}=await axios.get(url,{withCredentials:true})
      setUser(data.user.json)
  
    }
    catch(err){
   console.log(err);
  }
}
useEffect(()=>{
  getUser();
},[]);
  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Form/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/addclient" element={<Addclient/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  </Router>
    </>
 
  )
}

export default App
