/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useStoreCategory } from "@/hooks/useStoreCategory";
import { useEffect } from "react";

const TabelCategory = () => {
  const { data, getAllData, deleteData } = useStoreCategory((state) => ({
    data: state.data,
    getAllData: state.getAllData,
    deleteData: state.deleteData,
  }));

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Id
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Category Name
              </th>
              <th className="text-right font-medium uppercase tracking-wide py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="text-left py-4 px-6 whitespace-nowrap">
                  {item.id}
                </td>
                <td className="text-left py-4 px-6 whitespace-nowrap">
                  {item.categoryName}
                </td>
                <td className="text-right py-4 px-6 whitespace-nowrap">
                  <button
                    onClick={() => deleteData(item.id)}
                    className="space-x-4 rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelCategory;
