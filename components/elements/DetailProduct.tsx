/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useStoreProduct } from "@/hooks/useStoreProduct";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CountingQuantity } from "./CountingQuantity";
import { useStoreQuantity } from "@/hooks/useStoreQuantity";
import SizeGuide from "./SizeGuide";
import { UpdateCart, useStoreCart } from "@/hooks/useStoreCart";

interface AddToCart {
  productId: number;
  size: string;
  quantity: number;
}

interface DetailProductProps {
  id: number;
}

const DetailProduct: React.FC<DetailProductProps> = ({ id }) => {
  const router = useRouter();

  const { userCarts, getUserCarts, addToCart, upCartQuantity } = useStoreCart(
    (state) => ({
      userCarts: state.userCarts,
      getUserCarts: state.getUserCarts,
      addToCart: state.addToCart,
      upCartQuantity: state.upCartQuantity,
    })
  );

  const { detailProduct, getProductById } = useStoreProduct((state) => ({
    detailProduct: state.detailProduct,
    getProductById: state.getProductById,
  }));

  useEffect(() => {
    getProductById(id);
    getUserCarts(localStorage.getItem("token"));
  }, []);

  const [zoomImage, setZoomImage] = useState(0);
  const [sizePick, setSizePick] = useState(0);

  const handleZoomImage = (index: number) => {
    setZoomImage(index);
  };

  const handleSizePick = (index: number) => {
    setSizePick(index);
  };

  const { currentQuantity } = useStoreQuantity((state) => ({
    currentQuantity: state.currentQuantity,
  }));

  const productIdAddToCart: AddToCart = {
    productId: id,
    quantity: currentQuantity,
    size: detailProduct.productSizes[sizePick],
  };

  const updateCart: UpdateCart = {
    productId: id,
    size: detailProduct.productSizes[sizePick],
  };

  const existsInUserCarts = userCarts.some(
    (cart) =>
      cart.product.id.toString() === id.toString() &&
      cart.size === detailProduct.productSizes[sizePick]
  );

  const handleAddToCart = () => {
    if (localStorage.getItem("token")) {
      if (existsInUserCarts) {
        upCartQuantity(updateCart, localStorage.getItem("token"));
      } else {
        addToCart(productIdAddToCart, localStorage.getItem("token"));
      }
      alert("Thêm thành công vào giỏ hàng");
    } else {
      alert("Bạn cần Đăng nhập khi sử dụng chức năng này");
      router.push("/login");
    }
  };

  return (
    <>
      <div className="mb-[39px] px-5">
        <ul className="flex justify-center text-[13px] leading-4 text-header-detail-product">
          <li className="hover:text-black duration-300">
            <button onClick={() => router.back()}>
              Quay lại <span className="text-black text-[15px]">/</span>
            </button>
          </li>
          <li className="ml-2 hover:text-black duration-300">
            {detailProduct.productName}
          </li>
        </ul>
      </div>

      <div className="w-full px-5">
        <div className="flex items-start justify-between">
          <div className="flex-1 flex items-start">
            <div className="flex flex-col">
              {detailProduct.productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleZoomImage(index)}
                  className={`my-2 ${
                    zoomImage == index ? "border border-black duration-500" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`image ${index} of product`}
                    width={100}
                    height={100}
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 ml-12">
              <Image
                src={detailProduct.productImages[zoomImage]}
                alt="Product Image"
                width={520}
                height={300}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <h1 className="my-5 text-[20px] text-black font-bold leading-6">
              {detailProduct.productName}
            </h1>

            <h1 className="my-5 text-[24px] text-black font-bold leading-6">
              {detailProduct.productPrice.toLocaleString("vi-VN")} ₫
            </h1>

            <div className="mt-6">
              <p>
                Chọn Size:{" "}
                <span className="text-[18px] font-bold ml-2">
                  {detailProduct.productSizes[sizePick]}
                </span>
              </p>
              <div className="flex mt-4">
                {detailProduct.productSizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => handleSizePick(index)}
                    className="border border-black/30 hover:border-black/60 duration-300 min-w-[44px] px-3 py-3 mx-2"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <p className="">
                Chọn Số lượng:{" "}
                <span className="text-[16px] font-bold ml-2">
                  {currentQuantity}
                </span>
              </p>

              <SizeGuide />
            </div>

            <div className="flex justify-between h-12 mt-4 mr-16">
              <CountingQuantity maxQuantity={detailProduct.productQuantity} />

              <div className="flex-1 flex justify-center items-center">
                <button
                  onClick={() => handleAddToCart()}
                  className="bg-black text-[12px] text-white min-w-[400px] min-h-[50px] font-normal leading-[45px] tracking-[2px] h-[45px] px-10 overflow-hidden rounded-md hover:bg-[#41cde2] duration-500"
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            <p className="text-black/90 text-[14px] text-center max-w-[120px] mt-2">
              Còn lại: {detailProduct.productQuantity}
            </p>

            <p className="mt-12 max-w-[800px]">
              {detailProduct.productDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
