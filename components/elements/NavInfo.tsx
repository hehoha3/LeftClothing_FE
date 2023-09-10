"use client";

import Link from "next/link";
import { SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavInfo = () => {
  const [searchBar, setSearchBar] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-around gap-3">
        <AnimatePresence>
          {searchBar && (
            <motion.div
              className="flex flex-row items-center max-w-xs w-fit h-fit bg-[#5c6370] rounded-xl overflow-hidden mr-10 "
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ delay: 0.15 }}
            >
              <button
                className={`hover:fill-white ${
                  searchInput ? "fill-white" : "fill-[#abb2bf]"
                } `}
              >
                <svg
                  className="h-4 px-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
                </svg>
              </button>
              <input
                type="text"
                value={searchInput}
                onChange={handleChange}
                placeholder="Search For Products"
                className="bg-transparent text-white outline-none w-full border-none text-base py-2 pr-10"
              />
              {searchInput && (
                <button
                  onClick={() => setSearchInput("")}
                  className="absolute right-[220px]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fff"
                      d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8zm3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12l2.293 2.293z"
                    />
                  </svg>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="hover:fill-light-blue duration-300"
          onClick={() => setSearchBar((prev) => !prev)}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z" />
          </svg>
        </button>

        <Link
          href={"/login"}
          className="stroke-black hover:stroke-light-blue duration-300 ml-3"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0" />
            </g>
          </svg>
        </Link>

        <button className="hover:fill-light-blue duration-300 mx-3">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14v12m-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3Z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default NavInfo;
