/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useStoreUser } from "@/hooks/useStoreUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserDetailProps {}

const UserDetail: React.FC<UserDetailProps> = () => {
  const router = useRouter();
  const { detailUser, getUserByToken } = useStoreUser((state) => ({
    detailUser: state.detailUser,
    getUserByToken: state.getUserByToken,
  }));
  const token = localStorage.getItem("token");

  useEffect(() => {
    getUserByToken(token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
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
            Thông tin tài khoản
          </li>
        </ul>
      </div>

      <div className="mx-5 min-h-[50vh]">
        <div className="flex items-center">
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4A4A4A"
                d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"
              />
            </svg>
          </span>
          <h1 className="text-[18px] font-bold ml-3">
            {detailUser.firstName} {detailUser.lastName}
          </h1>
        </div>

        <p className="text-black/70 mt-5">
          Email: <span className="text-black">{detailUser.email}</span>
        </p>

        <p className="text-black/70 mt-5">
          Số điện thoại:{" "}
          <span className="text-black">0{detailUser.phoneNumber}</span>
        </p>

        <p className="text-black/70 mt-5">
          Địa chỉ: <span className="text-black">{detailUser.address}</span>
        </p>

        <button
          onClick={handleLogout}
          className="px-4 py-1 bg-red-400 hover:bg-red-600 duration-300 rounded-md mt-5"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default UserDetail;
