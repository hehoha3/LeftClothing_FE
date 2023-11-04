"use client";

/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormLogin = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5549/user/signIn", {
        username,
        password,
      });
      const jwtToken = response.data.jwtToken;
      localStorage.setItem("token", jwtToken);
      router.back();
    } catch (err) {
      setError("username hoặc password hiện đang chưa đúng");
    }
  };

  return (
    <form className="px-[55px] text-center" onSubmit={handleLogin}>
      <h1 className="text-[50px] text-white font-semibold font-Regular-Italic mb-10">
        Login
      </h1>

      <div className="flex flex-col items-start justify-between mb-5">
        <p className="pb-2">Username</p>
        <input
          type="text"
          placeholder="Enter your username"
          className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-start justify-between mb-5">
        <p className="pb-2">Password</p>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="relative text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20
                focus:outline-white pl-3 "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-[530px] mt-10 p-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
            />
          </svg>
        </button>
      </div>

      <div className="ml-4 text-right">
        don't have account ?
        <Link
          href={"/signup"}
          className="text-white/60 hover:text-white hover:underline underline-offset-4 duration-300 ml-2"
        >
          Sign up
        </Link>
      </div>

      {error && <p className="text-red-600 mt-2">{error}</p>}
      <input
        type="submit"
        className="bg-transparent min-w-[190px] min-h-[50px] outline mt-6 hover:text-black hover:bg-white/80 duration-300 cursor-pointer"
        value={`LOGIN`}
      />
    </form>
  );
};

export default FormLogin;
