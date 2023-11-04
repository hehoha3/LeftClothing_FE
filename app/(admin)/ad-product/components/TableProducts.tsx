/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import UpdateProduct from "@/app/(admin)/ad-product/components/UpdateProduct";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useStoreProduct } from "@/hooks/useStoreProduct";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TableProducts = () => {
  const { data, getAllData, deleteData } = useStoreProduct((state) => ({
    data: state.data,
    getAllData: state.getAllData,
    deleteData: state.deleteData,
  }));

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="mx-auto my-8">
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium tracking-wide py-3 px-6 max-w-[250px]">
                Name
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6 max-w-[250px]">
                Description
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Images
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Price
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Quantity
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Sizes
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Category
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Type
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Collection
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Gender
              </th>
              <th className="text-right font-medium uppercase tracking-wide py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-black/80 border-b-[1px] max-w-[100px]"
              >
                <td className="text-left py-4 px-6 min-w-[350px]">
                  {item.productName}
                </td>
                <td className="text-left py-4 px-6 min-w-[350px]">
                  <p>{item.productDescription}</p>
                </td>
                <td className="text-center py-4 px-6 whitespace-nowrap">
                  {item.productImages.map((img, i) => (
                    <Link
                      href={img}
                      target="_blank"
                      key={i}
                      className="flex flex-col"
                    >
                      <Image
                        src={img}
                        alt={`img ${i}`}
                        width={100}
                        height={100}
                      />
                      {/* {img} */}
                    </Link>
                  ))}
                </td>
                <td className="text-center py-4 px-6 whitespace-nowrap">
                  {item.productPrice}
                </td>
                <td className="text-center py-4 px-6 whitespace-nowrap">
                  {item.productQuantity}
                </td>
                <td className="text-center py-4 px-6 whitespace-nowrap">
                  {item.productSizes.map((size, i) => (
                    <div key={i} className="flex flex-col">
                      {size}
                    </div>
                  ))}
                </td>
                <td className="text-center py-4 px-6 whitespace-nowrap">
                  {item.productCategory.categoryName}
                </td>
                <td className="text-center py-4 px-6 whitespace-nowrap">
                  {item.productType.name}
                </td>
                <td className="text-center py-4 px-6 whitespace-nowrap">
                  {item.productCollection
                    ? item.productCollection.name
                    : "Không có"}
                </td>
                <td className="text-center py-4 px-6 whitespace-nowrap">
                  {item.productGender.map((gend, i) => (
                    <div key={i} className="flex flex-col">
                      {gend}
                    </div>
                  ))}
                </td>
                <td className="text-right py-4 px-6 whitespace-nowrap">
                  <div className="flex flex-col">
                    <button
                      onClick={() => deleteData(item.id)}
                      className="space-x-4 rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 duration-300 mb-2"
                    >
                      Delete
                    </button>
                    <Sheet>
                      <SheetTrigger asChild>
                        <button className="space-x-4 rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 py-2 px-6 duration-300">
                          Edit
                        </button>
                      </SheetTrigger>
                      <SheetContent className="min-w-[600px]">
                        <SheetTitle>Edit Product</SheetTitle>
                        <SheetDescription>
                          Product Id: {item.id}
                        </SheetDescription>
                        <UpdateProduct productId={item.id} />
                      </SheetContent>
                    </Sheet>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableProducts;
