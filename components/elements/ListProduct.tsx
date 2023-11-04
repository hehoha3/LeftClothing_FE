/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import ProductCard from "../elements/ProductCard";
import { Data, useStoreProduct } from "@/hooks/useStoreProduct";
import PaginationBar from "./PaginationBar";

interface ListProductProps {
  currentPage: number;
  category: string | undefined;
  type: string | undefined;
}

const ListProduct: React.FC<ListProductProps> = ({
  currentPage,
  category,
  type,
}) => {
  const { data, getAllData } = useStoreProduct((state) => ({
    data: state.data,
    getAllData: state.getAllData,
  }));

  useEffect(() => {
    getAllData();
  }, []);
  const products: Data[] = [];

  if (category) {
    data.map((item) => {
      item.productCategory.categoryName === category && products.push(item);
    });
  } else if (type) {
    data.map((item) => {
      item.productType.name === type && products.push(item);
    });
  } else {
    data.map((item) => products.push(item));
  }

  const pageSize = 12;
  const totalItemCount = products.length;

  const totalPages = Math.ceil(totalItemCount / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData =
    category || type ? products : products.slice(startIndex, endIndex);

  return (
    <div className="ml-10">
      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 mb-10">
        {currentData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        {category || type ? (
          ""
        ) : (
          <PaginationBar currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
};

export default ListProduct;
