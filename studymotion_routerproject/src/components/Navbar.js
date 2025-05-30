import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
let isLoggedIn = props.isLoggedIn;
let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className="flex justify-between items-center w-11/12 
    max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className=" text-slate-200 flex gap-x-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* login/ signup/logout/dashboard */}

      <div className="flex items-center gap-x-4">
        {!isLoggedIn &&
          <Link to="/login">
            <button className="bg-slate-800 text-slate-200 py-[8px] 
            px-[12px] rounded-[8px] border-slate-700">Login</button>
          </Link>
        }
          

        {!isLoggedIn &&
          <Link to="/signup">
            <button className="bg-slate-800 text-slate-200 py-[8px] 
            px-[12px] rounded-[8px] border-slate-700">
            Signup
            </button>
          </Link>
        }
          

        {isLoggedIn &&
          <Link to="/">
            <button
            className="bg-slate-800 text-slate-200 py-[8px] px-[12px]
             rounded-[8px] border-slate-700" 
            onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
            }}>Log Out</button>
          </Link>
        }
          

        {isLoggedIn &&
          <Link to="/dashboard">
            <button className="bg-slate-800 text-slate-200 py-[8px] 
            px-[12px] rounded-[8px] border-slate-700">Dashboard</button>
          </Link>
        }
          
      </div>
    </div>
  );
};
export default Navbar;
