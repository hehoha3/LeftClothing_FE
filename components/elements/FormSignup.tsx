"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormSignup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      username === "" ||
      email === "" ||
      phoneNumber === "" ||
      password === "" ||
      password2 === "" ||
      firstName === "" ||
      lastName === "" ||
      address === ""
    ) {
      setError("Bạn chưa điền đủ các thông tin");
    } else {
      if (password !== password2) {
        setError("Hai Password Chưa Được Khớp Với Nhau");
      } else {
        try {
          const response = await axios.post(
            "http://localhost:5549/user/signup",
            {
              username,
              email,
              phoneNumber,
              password,
              firstName,
              lastName,
              address,
            }
          );
          const jwtToken = response.data.jwtToken;
          localStorage.setItem("token", jwtToken);
          router.push("/");
        } catch (err) {
          setError("username đã bị trùng");
        }
      }
    }
  };

  return (
    <form className="px-[55px] text-center" onSubmit={handleSignup}>
      <h1 className="text-[50px] text-white font-semibold font-Regular-Italic mb-10">
        Sign up
      </h1>

      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex-1">
          {/* username */}
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

          {/* email */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* password */}
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
              className="absolute left-[710px] mt-10 p-2"
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

          {/* password 2 */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Repeat your Password</p>
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Enter your password"
              className="relative text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20
                focus:outline-white pl-3 "
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword2((prev) => !prev)}
              className="absolute left-[710px] mt-10 p-2"
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
        </div>

        <div className="flex-1">
          {/* Firstname */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Firstname</p>
            <input
              type="text"
              placeholder="Enter your Firstname"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Lastname */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Lastname</p>
            <input
              type="text"
              placeholder="Enter your Lastname"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* phone number */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Phone number</p>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Address */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Address</p>
            <input
              type="text"
              placeholder="Enter your Address"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="ml-4 text-right">
        you have account ?
        <Link
          href={"/login"}
          className="text-white/60 hover:text-white hover:underline underline-offset-4 duration-300 ml-2"
        >
          Login now
        </Link>
      </div>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      <input
        type="submit"
        className="bg-transparent min-w-[190px] min-h-[50px] outline mt-6 hover:text-black hover:bg-white/80 duration-300 cursor-pointer"
        value={`Sign Up`}
      />
    </form>
  );
};

export default FormSignup;
