import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const Form = () => {
  const navigate = useNavigate();
  const [visible, setVisibility] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const googleAuth = () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail); // Set the email in state
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      setLoading(true);

      try {
        const url = "http://localhost:5000/api/login/user";
        const response = await axios.post(url, data);

        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userEmail", data.email);
          navigate("/dashboard");
        } else {
          console.log("invalid email or address");
          navigate("/login");
          toast.error("Invalid email or address");
        }
      } catch (err) {
        console.log("login failed", err);
        toast.error("Login failed.Please try again later");
      } finally {
        setLoading(false);
      }
    }
  };

  const validateForm = () => {
    const { email, password } = data;
    if (!email || !password) {
      toast.error("Emial and password are required");
      return false;
    }
    return true;
  };

  return (
    <div className="bg-bPrimary md:flex  justify-evenly items-center md:h-screen">
      <div className="items-center text-7xl font-bold text-white ">
        <span className="text-black">Supa</span>Menu
      </div>
      <div className="md:p-0 p-4">
        <form
          className="inline-grid px-5 py-4  bg-white rounded-md md:w-[400px] w-full "
          onSubmit={handleSubmit}
        >
          <h1 className="text-lg py-6 text-gray-400 font-semibold flex justify-center">
            Welcome
          </h1>
          <h1 className="font-bold flex justify-center text-xl">
            Login to SupaMenu
          </h1>
          <div className="text-sm text-gray-400 font-semibold flex justify-center py-5">
            Enter your email and password below
          </div>

          <label
            htmlFor="email"
            className="text-xs font-bold text-gray-400 pt-4 pb-2"
          >
            EMAIL
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className=" rounded-md bg-slate-50 py-[8px] px-2 text-sm border border-gray-200 focus:outline-1 outline-bgButton"
            onChange={handleChange}
            value={data.email}
          />
          <label
            htmlFor="password"
            className="text-xs font-bold text-gray-400 pt-4 pb-2"
          >
            PASSWORD
          </label>

          <input
            type={visible ? "text" : "password"}
            placeholder="Password"
            name="password"
            id="password"
            className=" rounded-md bg-slate-50 py-[8px] px-2 text-sm border border-gray-200 relative focus:outline-1 outline-bgButton"
            onChange={handleChange}
            value={data.password}
          />
          <div
            className="absolute mt-[293px] md:mx-[330px] mx-[290px] text-gray-400"
            onClick={() => setVisibility(!visible)}
          >
            {visible ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
          <div className="py-5 ">
            <button
              className="py-[8px] px-2 bg-bgButton w-full rounded-md text-white shadow-lg shadow-blue-100 hover:bg-bgHover"
              type="submit"
            >
              Login
            </button>
            <button
              onClick={googleAuth}
              className="flex items-center justify-center gap-2 w-full py-[8px] px-2 mt-2 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50"
            >
              <FcGoogle />
              Login with Google
            </button>
          </div>

          <div className="text-sm text-gray-400 font-semibold flex justify-center">
            Don't have account?{" "}
            <Link to="/signup">
              <span className="text-blue-600 cursor-pointer ml-2">Signup</span>
            </Link>
          </div>
          <div className="text-sm text-gray-400 font-semibold flex justify-center py-5">
            Forgot your password/login?{" "}
            <span className="text-blue-600 cursor-pointer ml-2 ">RESET</span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
