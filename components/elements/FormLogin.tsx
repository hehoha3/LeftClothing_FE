/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const FormLogin = () => {
  return (
    <form className="px-[55px] text-center">
      <h1 className="text-[50px] text-white font-semibold font-Regular-Italic mb-10">
        Login
      </h1>

      <div className="flex flex-col items-start justify-between mb-5">
        <p className="pb-2">Username</p>
        <input
          type="text"
          placeholder="Enter your username"
          className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
        />
      </div>

      <div className="flex flex-col items-start justify-between mb-5">
        <p className="pb-2">Password</p>
        <input
          type="password"
          placeholder="Enter your password"
          className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20
                focus:outline-white pl-3 "
        />
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

      <button className="bg-transparent min-w-[190px] min-h-[50px] outline mt-6 hover:text-black hover:bg-white/80 duration-300">
        LOGIN
      </button>
    </form>
  );
};

export default FormLogin;
