import { IoIosSettings } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaUsersViewfinder,FaPeopleRoof} from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
const Sidebar = () => {
  return (
    <>
      <div className="bg-black border-l ">
        <div className=" bg-black">
          <div className="items-center text-4xl font-bold text-bgButton md:flex hidden px-3 pr-10 py-12">
            <span className="text-white">Supa</span>Menu
          </div>
          <ul className="px-5">
            <li className="text-gray-400  py-5 hover:text-white hover:translate-x-2 hover:transition-transform cursor-pointer flex">
              <span className="px-4 text-xl"><GrOverview /></span>Overview
            </li>
            <li className="text-gray-400  py-5  hover:text-white hover:translate-x-2 hover:transition-transform cursor-pointer flex">
              <span className="px-4 text-xl"><FaPeopleRoof /></span>Clients
            </li>
            <li className="text-gray-400  py-5  hover:text-white hover:translate-x-2 hover:transition-transform cursor-pointer flex">
              <span className="px-4 text-xl"><FaUsersViewfinder /></span>Users
            </li>
            <li className="text-gray-500 mt-72 flex  hover:text-white hover:translate-x-2 hover:transition-transform cursor-pointer">
              <span className="px-4   text-2xl ">
                <IoIosSettings />
              </span>
              Settings
            </li>
            <li className="text-gray-500 flex pt-5 pb-3   hover:text-white hover:translate-x-2 hover:transition-transform cursor-pointer">
              <span className="px-4   text-2xl "><MdOutlineManageAccounts />
              </span>My Account
            </li>
          </ul>
        </div>
        <div className="h-32 w-50 bg-bgButton  ml-4"></div>
      </div>
    </>
  );
};

export default Sidebar;
