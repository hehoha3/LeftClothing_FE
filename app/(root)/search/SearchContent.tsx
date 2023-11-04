/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import ProductCard from "@/components/elements/ProductCard";
import { useStoreProduct } from "@/hooks/useStoreProduct";
import { useEffect } from "react";

interface SearchContentProps {
  query: string;
}

const SearchContent: React.FC<SearchContentProps> = ({ query }) => {
  const { data, getAllData } = useStoreProduct((state) => ({
    data: state.data,
    getAllData: state.getAllData,
  }));

  useEffect(() => {
    getAllData();
  }, []);

  const filteredProducts = data.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-[53vh] flex flex-col items-center">
        <h1>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M12 4a3.5 3.5 0 0 0-3.5 3.5h2A1.5 1.5 0 0 1 12 6a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 9c-.55 0-1 .45-1 1v1.75L2.4 18.2A1 1 0 0 0 3 20h18a1 1 0 0 0 .6-1.8L13 11.75v-.9a3.5 3.5 0 0 0 2.5-3.35A3.5 3.5 0 0 0 12 4m0 9.5l6 4.5H6Z"
            />
          </svg>
        </h1>
        <h1 className="text-[18px]">KHÔNG CÓ KẾT QUẢ TÌM KIẾM</h1>
        <p className="">
          Không tìm thấy kết quả cho tìm kiếm "
          <span className="font-bold">{query}</span>"
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-[18px] mb-2">
          Kết quả tìm kiếm cho từ Khóa "
          <span className="font-bold">{query}</span>"
        </h1>

        <p>Có {filteredProducts.length} Sản Phẩm</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 mb-10">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchContent;
