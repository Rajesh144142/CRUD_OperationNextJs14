"use client";
import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Login } from "@/Redux/api/authApi";
const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const initialState = {
    password: "",
    email: "",
  };
  const [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Login(data));
    router.push("/");
  };
  return (
    <div className="flex justify-center items-center h-[100%]">
      <div className=" flex flex-col sm:w-[350px] sm:h-[370px] lg:w-[400px] lg:h-[420px] sm:border-2 sm:border-white justify-center items-center rounded-md">
        <h1>Login</h1>
        <form className=" flex flex-col  justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="w-[90%] rounded-md h-[35px] outline-none"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            className="w-[90%] rounded-md h-[35px] outline-none"
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
        <Link href="/signup" className="text-red-600 hover:text-white">
          Not Have any account?
        </Link>
      </div>
    </div>
  );
};

export default Page;
