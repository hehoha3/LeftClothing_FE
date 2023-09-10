import Image from "next/image";
import img from "../../../public/bg-login.jpg";
import Link from "next/link";
import FormSignup from "@/components/elements/FormSignup";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-between h-[100vh] min-h-[700px] overflow-hidden">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image src={img} alt="" className="w-full" height={1000} />
        </div>
        <div className="z-30 max-w-screen-md min-h-[400px] m-auto py-10 my-10 text-start rounded-2xl bg-black/70 text-white shadow-md">
          <Link
            href={"/"}
            className="ml-4 text-white/60 hover:text-white hover:underline underline-offset-4 duration-300"
          >
            Back to Home
          </Link>
          <FormSignup />
        </div>
      </div>
    </div>
  );
};

export default page;
