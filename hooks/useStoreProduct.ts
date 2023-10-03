import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Data {
  id: number;
  productName: string;
  productDescription: string;
  productImages: string[];
  productPrice: number;
  productQuantity: number;
  productSizes: string[];
  productCategory: { id: number; categoryName: string };
  productType: { id: number; name: string };
  productCollection: { id: number; name: string };
  productGender: string[];
}

interface AddProductType {
  productName: string;
  productDescription: string;
  productImages: string[];
  productPrice: number;
  productQuantity: number;
  productSizes: string[];
  productCategory: number;
  productType: number;
  productCollection: number;
  productGender: string[];
}

interface StoreProduct {
  data: Data[];
  detailProduct: Data;
  getAllData: () => Promise<void>;
  getProductById: (id: number) => Promise<void>;
  postData: (product: AddProductType) => Promise<void>;
  updateProduct: (product: AddProductType, id: number) => Promise<void>;
  deleteData: (id: number) => Promise<void>;
}

export const useStoreProduct = create<StoreProduct>()(
  devtools((set, get) => ({
    data: [],
    detailProduct: {
      id: 0,
      productName: "",
      productDescription: "",
      productImages: [],
      productPrice: 0,
      productQuantity: 0,
      productSizes: [],
      productCategory: { id: 0, categoryName: "" },
      productType: { id: 0, name: "" },
      productCollection: { id: 0, name: "" },
      productGender: [],
    },

    getAllData: async () => {
      await axios
        .get("http://localhost:5549/product")
        .then((response) => set({ data: response.data }))
        .catch((error) => console.error("Error fetching data:", error));
    },

    getProductById: async (id: number) => {
      await axios
        .get(`http://localhost:5549/product/${id}`)
        .then((response) => set({ detailProduct: response.data }))
        .catch((error) => console.error("Error fetching data:", error));
    },

    postData: async (product: AddProductType) => {
      await axios
        .post("http://localhost:5549/product", product)
        .then(() => get().getAllData())
        .catch((error) => console.error("Error post data:", error));
    },

    updateProduct: async (product: AddProductType, id: number) => {
      await axios
        .put(`http://localhost:5549/product/${id}`, product)
        .then(() => get().getAllData())
        .catch((error) => console.error("Error put data:", error));
    },

    deleteData: async (id: number) => {
      await axios
        .delete(`http://localhost:5549/product/${id}`)
        .then(() => get().getAllData())
        .catch((error) => console.error("Error deleting data:", error));
    },
  }))
);
