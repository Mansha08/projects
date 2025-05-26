import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const[accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
        toast.error("password do not match");
        return;
    }
    setIsLoggedIn(true);
    toast.success("Account created successfully");

    const accountData = {
        ...formData
    };
    console.log("printing account data");
    console.log(accountData);

    navigate("/dashboard");
  }


  
  return (
    <div>
      {/* student - instructor- tab */}
      <div className="flex bg-slate-800 p-1 gap-z-1 my-6 rounded-full max-w-max border-b-2 ">
        <button
        className={`${accountType === "student"
        ?
        "bg-slate-900 text-slate-50"
        :"bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`} 
        onClick={() => setAccountType("student")}>
      Student</button>
        <button 
        className={`${accountType === "instructor"
        ?
        "bg-slate-900 text-slate-50"
        :"bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("instructor")}>
        Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* firstName and lastName */}
        <div className="flex gap-x-4 mt-[10px]">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              name="firstName"
              className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] border-b-2"
            />
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
              name="lastName"
              className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] border-b-2"
            />
          </label>
        </div>

        {/* email */}
        <div className="mt-[20px]">
        <label className="w-full relative mt-[10px]">
          <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-500">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] border-b-2"
          />
        </label>
        </div>
        

        {/* createPassword and confirmPassword */}

        <div className="flex gap-x-4 mt-[10px]">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] border-b-2"
            />
            <span 
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Enter Password"
              name="confirmPassword"
              className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] border-b-2"
            />
            <span
            className="absolute right-3 top-[37px] cursor-pointer"
             onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"  />)}
            </span>
          </label>
        </div>

        <button className="w-full bg-yellow-400 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6">Create Account</button>
      </form>
    </div>
  );
};
export default SignupForm;
