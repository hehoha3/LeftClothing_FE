/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AddProductForm from "./AddProductForm";

const ProductContent = () => {
  return (
    <>
      <div className="flex items-center justify-between py-6 px-4">
        <h1 className="text-black text-[30px] font-semibold">Products</h1>
        <Sheet>
          <SheetTrigger asChild>
            <button className="bg-black text-[15px] text-white font-normal leading-[45px] tracking-[2px] h-[45px] px-10 overflow-hidden rounded-md hover:bg-light-blue duration-300">
              Add New
            </button>
          </SheetTrigger>
          <SheetContent className="min-w-[600px]">
            <SheetTitle>Add new Product</SheetTitle>
            <SheetDescription>
              Add to your new Product. Click save when you're done.
            </SheetDescription>
            <AddProductForm />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ProductContent;
