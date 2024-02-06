"use client";
import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signUp } from "@/Redux/api/authApi";
import { clearError } from "@/Redux/features/authSlice";
const Page = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.User);
  // const [clearError, setClearError] = useState(false);
  const router = useRouter();
  const initialState = {
    username: "",
    password: "",
    email: "",
  };
  const [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(data));
    setData(initialState);
  };
  const handleError = () => {
    dispatch(clearError());
  };
  return (
    <div className="flex justify-center items-center h-[100%] flex-col ">
      {error? (
        <h1 className="text-red-600 flex gap-2 justify-center text-sm items-center h-[50px]">
          {error}
          <div className="text-sm font-bold border-2 rounded-[50%] border-red-600 flex justify-center items-center w-[25px] h-[25px]" onClick={handleError}>
            X
          </div>
        </h1>):(
        <h1 className="text-red-600 flex gap-2 justify-center text-sm items-center h-[50px]">
          
        </h1>)
      }

      <div className=" flex flex-col sm:w-[350px] sm:h-[370px] lg:w-[400px] lg:h-[420px] sm:border-2 sm:border-white justify-center items-center rounded-md">
        <h1>Sign Up</h1>
        <form className=" flex flex-col  justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            value={data.username}
            className="w-[95%] rounded-md h-[35px] outline-none"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            id="password"
            value={data.password}
            className="w-[95%] rounded-md h-[35px] outline-none"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            value={data.email}
            className="w-[95%] rounded-md h-[35px] outline-none"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />

          <button
            className="border-[1px] border-gray-100 w-[50%] rounded-md h-[35px] shadow-gray-100 shadow-sm hover:bg-blue-950"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <h1 className="text-sm">or</h1>
        <Link href="/Login" className="text-red-600 hover:text-white">
          Already Have an account?
        </Link>
      </div>
    </div>
  );
};

export default Page;
