/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import ProductCard from "../elements/ProductCard";
import { useStoreProduct } from "@/hooks/useStoreProduct";

const ListProductHomePage = () => {
  const { data, getAllData } = useStoreProduct((state) => ({
    data: state.data,
    getAllData: state.getAllData,
  }));

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="my-[82px] ml-11">
      <div className="flex flex-row items-center justify-between mb-[50px]">
        <h1 className="flex-1 text-description text-[40px] font-semibold font-Regular-Italic">
          New <span className="text-black">Product</span>
        </h1>
        <Link
          href={"/products"}
          className="mr-4  underline-offset-4 hover:text-light-blue hover:underline duration-300"
        >
          Toàn bộ sản phẩm
        </Link>
      </div>
      <div className="w-full my-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {data.slice(0, 8).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListProductHomePage;
