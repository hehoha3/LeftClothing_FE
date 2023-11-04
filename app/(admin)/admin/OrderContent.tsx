/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useStoreOrder } from "@/hooks/useStoreOrder";
import { useEffect } from "react";

const OrderContent = () => {
  const {
    orders,
    getAllOrder,
    changeToNew,
    changeToProcess,
    changeToDone,
    deleteOrder,
  } = useStoreOrder((state) => ({
    orders: state.orders,
    getAllOrder: state.getAllOrder,
    changeToNew: state.changeToNew,
    changeToProcess: state.changeToProcess,
    changeToDone: state.changeToDone,
    deleteOrder: state.deleteOrder,
  }));

  useEffect(() => {
    getAllOrder();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-[20px] font-bold text-yellow-500 mb-2">NEW</h1>
      <div className="flex shadow border-b mb-10">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                User
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Product Name
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Product Size
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Quantity
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {orders.map(
              (item, index) =>
                item.status === "NEW" && (
                  <tr key={index}>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.user.username}
                    </td>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.product.productName}
                    </td>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.size}
                    </td>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="text-right py-4 px-6 whitespace-nowrap">
                      <button
                        onClick={() => changeToProcess(item.id)}
                        className="space-x-4 rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 py-2 px-6 duration-300 mr-2"
                      >
                        PROCESS
                      </button>
                      <button
                        onClick={() => changeToDone(item.id)}
                        className="space-x-4 rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 duration-300"
                      >
                        DONE
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>

      <h1 className="text-[20px] font-bold text-blue-500 mb-2">PROCESS</h1>
      <div className="flex shadow border-b mb-10">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                User
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Product Name
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Product Size
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Quantity
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {orders.map(
              (item, index) =>
                item.status === "PROCESSING" && (
                  <tr key={index}>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.user.username}
                    </td>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.product.productName}
                    </td>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.size}
                    </td>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="text-right py-4 px-6 whitespace-nowrap">
                      <button
                        onClick={() => changeToNew(item.id)}
                        className="space-x-4 rounded text-white font-semibold bg-yellow-400 hover:bg-yellow-700 py-2 px-6 duration-300 mr-2"
                      >
                        NEW
                      </button>
                      <button
                        onClick={() => changeToDone(item.id)}
                        className="space-x-4 rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 duration-300"
                      >
                        DONE
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>

      <h1 className="text-[20px] font-bold text-green-500 mb-2">DONE</h1>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                User
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Product Name
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Product Size
              </th>
              <th className="text-left font-medium uppercase tracking-wide py-3 px-6">
                Quantity
              </th>
              <th className="text-center font-medium uppercase tracking-wide py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {orders.map(
              (item, index) =>
                item.status === "DONE" && (
                  <tr key={index}>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.user.username}
                    </td>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.product.productName}
                    </td>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.size}
                    </td>
                    <td className="text-left py-4 px-6 whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="text-right py-4 px-6 whitespace-nowrap">
                      <button
                        onClick={() => changeToProcess(item.id)}
                        className="space-x-4 rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 py-2 px-6 duration-300 mr-2"
                      >
                        PROCESS
                      </button>
                      <button
                        onClick={() => deleteOrder(item.id)}
                        className="space-x-4 rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 duration-300"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderContent;
