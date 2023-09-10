import Link from "next/link";
import ProductCard from "./ProductCard";

const HomeTrending = () => {
  return (
    <div className="my-[82px]">
      <div className="flex flex-row items-center justify-between mb-[50px]">
        <h1 className="flex-1 text-description text-[40px] font-semibold font-Regular-Italic">
          Products <span className="text-black">Trending</span>
        </h1>
        <Link
          href={"/"}
          className="mr-4  underline-offset-4 hover:text-light-blue hover:underline duration-300"
        >
          Toàn bộ sản phẩm
        </Link>
      </div>
      <ProductCard />
    </div>
  );
};

export default HomeTrending;
