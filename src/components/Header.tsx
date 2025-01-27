
import { IoIosNotifications, IoIosSearch} from "react-icons/io";
import image from "../assets/ig2.png";
import { Link } from "react-router-dom";
import Notification from "./Notification";


const Header = () => {
  return (
    <>
    <div className="flex  justify-between px-20 pt-4 ">
          <div className="items-center text-7xl font-bold text-bgButton md:flex hidden">
            <span className="text-white">Supa</span>Menu
          </div>
         <Notification/>
        </div>
    </>
    
  )
}

export default Header
