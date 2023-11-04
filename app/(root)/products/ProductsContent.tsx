"use client";

import Image from "next/image";
import topPage from "@/public/top-products.jpg";
import ListProduct from "@/components/elements/ListProduct";
import Link from "next/link";

interface ProductsContentProps {
  currentPage: number;
  category: string | undefined;
  type: string | undefined;
}

const ProductsContent: React.FC<ProductsContentProps> = ({
  currentPage,
  category,
  type,
}) => {
  return (
    <div className="px-5 mb-10">
      <Image src={topPage} alt="Top page" />

      <div className="text-center my-5">
        <h1 className="text-[32px] font-bold">Sản Phẩm</h1>
        <div className="text-right">
          <Link
            href={`/products`}
            className="mr-4 underline-offset-4 hover:text-light-blue hover:underline duration-300"
          >
            Toàn Bộ Sản Phẩm
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-between items-start my-[82px]">
        <div className="w-[200px] border-r-[1px] border-black">
          <div className="border-b-[1px] border-black/60">
            <Link href={`?category=Top Wear`} className="text-[18px] font-bold">
              Top Wear
            </Link>
            <div className="flex flex-col mb-3 items-start">
              <Link
                href={`?type=Jacket`}
                className="hover:opacity-80 duration-300 my-1"
              >
                Jacket
              </Link>

              <Link
                href={`?type=T-shirt`}
                className="hover:opacity-80 duration-300 my-1"
              >
                T-shirt
              </Link>

              <Link
                href={`?type=Sweatshirts`}
                className="hover:opacity-80 duration-300 my-1"
              >
                Sweatshirts
              </Link>
            </div>
          </div>

          <div className="border-b-[1px] border-black/60">
            <Link
              href={`?category=Bottom Wear`}
              className="text-[18px] font-bold"
            >
              Bottom Wear
            </Link>
            <div className="flex flex-col mb-3 items-start">
              <Link
                href={`?type=Jean`}
                className="hover:opacity-80 duration-300 my-1"
              >
                Jean
              </Link>

              <Link
                href={`?type=Trouser`}
                className="hover:opacity-80 duration-300 my-1"
              >
                Trouser
              </Link>

              <Link
                href={`?type=Short`}
                className="hover:opacity-80 duration-300 my-1"
              >
                Short
              </Link>
            </div>
          </div>

          <div className="border-b-[1px] border-black/60">
            <Link
              href={`?category=Foot Wear`}
              className="text-[18px] font-bold"
            >
              Foot Wear
            </Link>
            <div className="flex flex-col mb-3 items-start">
              <Link
                href={`?type=Sneaker`}
                className="hover:opacity-80 duration-300 my-1"
              >
                Sneaker
              </Link>

              <Link
                href={`?type=Boots`}
                className="hover:opacity-80 duration-300 my-1"
              >
                Boots & High heel
              </Link>
            </div>
          </div>

          <div className="border-b-[1px] border-black/60">
            <Link
              href={`?category=Accessories`}
              className="text-[18px] font-bold"
            >
              Accessories
            </Link>
            <div className="flex flex-col mb-3 items-start">
              <Link
                href={`?type=Jewelry`}
                className="hover:opacity-80 duration-300 my-1"
              >
                Jewelry
              </Link>

              <Link
                href={`?type=Pockets`}
                className="hover:opacity-80 duration-300 my-1"
              >
                Pockets
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ListProduct
            currentPage={currentPage}
            category={category}
            type={type}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsContent;
