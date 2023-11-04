import { Data } from "@/hooks/useStoreProduct";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Data;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="">
      <div className="group relative h-fit max-w-[269px] text-center overflow-hidden rounded-xl">
        <div className="absolute overflow-hidden flex flex-col justify-end w-full h-[403.5px] rounded-xl bg-black/10 opacity-0 group-hover:opacity-100 duration-500 mb-9">
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
        <Image
          src={product.productImages[0]}
          alt="img"
          className="mb-2 rounded-xl"
          width={269}
          height={483}
        />
        <p className="text-[15px] text-black font-semibold  duration-300 mb-1">
          {product.productName}
        </p>
        <p className="text-[15px] text-black group-hover:text-red-600 group-hover:font-bold duration-300">
          {product.productPrice.toLocaleString("vn-VN")} ₫
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
