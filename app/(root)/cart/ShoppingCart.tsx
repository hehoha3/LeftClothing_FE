/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { UpdateCart, useStoreCart } from "@/hooks/useStoreCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ShoppingCart = () => {
  const {
    userCarts,
    getUserCarts,
    downCartQuantity,
    upCartQuantity,
    deleteCart,
    checkOut,
  } = useStoreCart((state) => ({
    userCarts: state.userCarts,
    getUserCarts: state.getUserCarts,
    downCartQuantity: state.downCartQuantity,
    upCartQuantity: state.upCartQuantity,
    deleteCart: state.deleteCart,
    checkOut: state.checkOut,
  }));

  useEffect(() => {
    getUserCarts(localStorage.getItem("token"));
  }, []);

  let totalQuantity = 0;
  let totalPriceCartProduct = 0;

  userCarts.map((cart) => {
    totalQuantity += cart.quantity;
    totalPriceCartProduct += cart.quantity * cart.product.productPrice;
  });

  let totalPrice = totalPriceCartProduct + 50000;
  return (
    <section className="px-6 py-12 w-full">
      <div className="mx-[-12px]">
        <div className="px-3">
          <div className="flex ">
            <div className="flex flex-col bg-white w-[66.66666667%] rounded-l-3xl">
              <div className="p-12">
                <div className="flex justify-between items-center mb-12">
                  <h1 className="text-[38px] font-bold text-black">Giỏ hàng</h1>
                  <h2 className="text-[16px] text-[#757575] font-bold mr-12">
                    {totalQuantity} Items
                  </h2>
                </div>

                {userCarts.map((cart, index) => {
                  const updateCart: UpdateCart = {
                    productId: cart.product.id,
                    size: cart.size,
                  };
                  return (
                    <div
                      key={index}
                      className="mb-6 mx-[-12px] flex items-center border-t border-black/30 py-5"
                    >
                      <div className="w-[16.66666667%] px-3">
                        <Image
                          src={cart.product.productImages[0]}
                          alt={`image product ${index}`}
                          width={200}
                          height={200}
                        />
                      </div>

                      <div className="w-[25%] px-3">
                        <Link
                          href={`http://localhost:3000/products/${cart.product.id}`}
                          className="mb-2 text-[18px] font-bold"
                        >
                          {cart.product.productName}
                        </Link>
                        <h1 className="text-[#757575]">Size: {cart.size}</h1>
                      </div>

                      <div className="flex items-center px-3 w-[25%]">
                        <button
                          onClick={() =>
                            downCartQuantity(
                              updateCart,
                              localStorage.getItem("token")
                            )
                          }
                          className="p-2 text-[#3b71ca] text-[30px]"
                        >
                          -
                        </button>
                        <p className="border border-black/40 text-center min-w-[70px]">
                          {cart.quantity}
                        </p>
                        <button
                          onClick={() =>
                            upCartQuantity(
                              updateCart,
                              localStorage.getItem("token")
                            )
                          }
                          className="p-2 text-[#3b71ca] text-[30px]"
                        >
                          +
                        </button>
                      </div>

                      <div className="w-[16.66666667%] ml-[8.33333333%] px-3">
                        {(
                          cart.product.productPrice * cart.quantity
                        ).toLocaleString("vn-VN")}{" "}
                        ₫
                      </div>

                      <div className="w-[8.33333333%] px-3">
                        <button
                          onClick={() =>
                            deleteCart(
                              updateCart,
                              localStorage.getItem("token")
                            )
                          }
                        >
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              stroke="#757575"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}

                <div className="mt-14">
                  <button className="flex items-center ">
                    <span className="">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#000000"
                          d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
                        />
                      </svg>
                    </span>
                    <h2 className="ml-2 font-bold">Quay lại</h2>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[#EAE8E8] w-[33.33333333%] rounded-r-3xl">
              <div className="p-12">
                <h1 className="text-[28px] text-[#4f4f4f] font-bold mb-12 mt-2 pt-1">
                  Summary
                </h1>

                <div className="mb-6 mx-[-12px] border-t border-b border-black/30 py-5">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-[20px] font-bold text-[#4f4f4f]">
                      {totalQuantity} Items
                    </h1>
                    <h1 className="text-[20px] font-bold text-[#4f4f4f]">
                      {totalPriceCartProduct.toLocaleString("vn-VN")} ₫
                    </h1>
                  </div>

                  <div className="flex items-center justify-between">
                    <h1 className="text-[20px] font-bold text-[#4f4f4f]">
                      Shipping
                    </h1>
                    <h1 className="text-[20px] font-bold text-[#4f4f4f]">
                      50.000 đ
                    </h1>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-12">
                  <h1 className="text-[22px] font-bold text-[#4f4f4f]">
                    Total price
                  </h1>
                  <h1 className="text-[22px] font-bold text-[#4f4f4f]">
                    {totalPrice.toLocaleString("vn-VN")} ₫
                  </h1>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={() => checkOut(localStorage.getItem("token"))}
                    className="px-7 py-3 text-center bg-[#332d2d] text-white hover:bg-slate-600 duration-300 rounded-lg"
                  >
                    Check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
