import Link from "next/link";

const FormSignup = () => {
  return (
    <form className="px-[55px] text-center">
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
            />
          </div>

          {/* email */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
            />
          </div>

          {/* password */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20
                focus:outline-white pl-3 "
            />
          </div>

          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Repeat your Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20
                focus:outline-white pl-3 "
            />
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
            />
          </div>

          {/* Lastname */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Lastname</p>
            <input
              type="text"
              placeholder="Enter your Lastname"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
            />
          </div>

          {/* phone number */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Phone number</p>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
            />
          </div>

          {/* Address */}
          <div className="flex flex-col items-start justify-between mb-5">
            <p className="pb-2">Address</p>
            <input
              type="text"
              placeholder="Enter your Address"
              className="text-[16px] text-white w-full bg-transparent h-[55px] outline outline-1 outline-white/20 focus:outline-white pl-3 "
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

      <button className="bg-transparent min-w-[190px] min-h-[50px] outline mt-6 hover:text-black hover:bg-white/80 duration-300">
        Sign Up
      </button>
    </form>
  );
};

export default FormSignup;
