import Image from "next/image";
import img from "../../public/testCardProduct.webp";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Link href={"/"}>
      <div className="group relative h-fit max-w-[269px] text-center overflow-hidden rounded-xl">
        <div className="absolute overflow-hidden flex flex-col justify-end w-full h-full rounded-xl bg-black/10 bottom-[55px] opacity-0 group-hover:opacity-100 duration-500">
          <p className="relative bg-light-blue text-white px-5 py-2">
            More{" "}
            <span className="absolute mt-0.5 ml-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                />
              </svg>
            </span>
          </p>
        </div>
        <Image src={img} alt="img" className="mb-2 rounded-xl" />
        <p className="text-[15px] text-black font-semibold group-hover:text-light-blue duration-300 mb-1">
          Long sleeve T-shirt
        </p>
        <p className="text-[15px] text-black group-hover:text-red-600 duration-300">
          430,769₫
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
