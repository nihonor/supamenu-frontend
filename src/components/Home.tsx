import { IoIosRestaurant } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import Div from "./Div";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-black">
        <Header />
        <div className="text-white md:flex md:text-4xl text-3xl font-semibold justify-center pt-10 md:px-0 px-2">
          Register your restaurant on SupaMenu
        </div>
        <div className="text-white md:flex justify-center md:pr-[360px] text-xl md:px-0 px-2">
          for free and get more revenue!
        </div>
        <div className="flex justify-center md:space-x-36  py-16 md:px-0 px-3">
          <Link to="/signup" className="px-3">
            <button className="bg-bgButton text-white text-xs p-3 font-bold rounded px-8 hover:bg-bgHover">
              {" "}
              Register your Restaurant
            </button>
          </Link>

          <Link to="/Login">
            <button className="border border-2 text-white text-xs p-[10px] font-bold rounded px-8 hover:bg-gray-800">
              Restaurant already registered?Signin
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-50">
        <h1 className="text-4xl font-bold flex justify-center py-3">
          How it works
        </h1>
        <div className="md:flex justify-center gap-40 items-center py-20">
          {" "}
          <Div
            image={<FaUserEdit />}
            step="Step 1"
            desc="Register your restaurant"
          />
          <Div
            image={<IoIosRestaurant />}
            step="Step 2"
            desc="Create your restaurant profile and create menu items"
          />
          <Div
            image={<FaUserEdit />}
            step="Step 3"
            desc="Start receiving orders"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
