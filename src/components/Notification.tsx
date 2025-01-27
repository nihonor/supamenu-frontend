import React, { useEffect, useState } from "react";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import image from "../assets/ig2.png";
import axios from "axios";

const Notification = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const logout=()=>{
    window.open('http://localhost:5000/auth/logout',"_self")
  }
  useEffect(() => {
    // Fetch user info from your API using Axios
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/register/user/me",
          {
            headers: {
              "Content-Type": "application/json",
              // If using token-based auth, send the token
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.status === 200) {
          const data = response.data;
          setUserEmail(data.email); // Set user email from response
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);
  return (
    <div >
      <div className="text-gray-400 flex items-center space-x-5">
        <span className="text-xl">
          <IoIosSearch />
        </span>
        <span className="text-xl">
          <IoIosNotifications />
        </span>
        <span className="flex gap-2 items-center text-gray-400 font-semibold">
          <Link to="/dashboard">{userEmail} </Link>
          <img src={image} className="h-10 w-10 rounded-full border-2" />
        </span>
        <span>
          <button onClick={logout} className="text-white text-sm font-semibold bg-bgButton hover:bg-gray-400 rounded-md px-3 py-1">
            Logout
          </button>
        </span>
      </div>
    </div>
  );
};

export default Notification;
