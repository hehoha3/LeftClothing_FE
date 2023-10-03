/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SheetClose } from "@/components/ui/sheet";
import { useStoreCategory } from "@/hooks/useStoreCategory";
import { useStoreCollection } from "@/hooks/useStoreCollection";
import { useStoreProduct } from "@/hooks/useStoreProduct";
import { useStoreType } from "@/hooks/useStoreType";
import React, { useEffect, useState } from "react";

interface Product {
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

const AddProductForm = () => {
  const { postData } = useStoreProduct((state) => ({
    postData: state.postData,
  }));

  const { categories, getCategories } = useStoreCategory((state) => ({
    categories: state.data,
    getCategories: state.getAllData,
  }));

  const { types, getTypes } = useStoreType((state) => ({
    types: state.data,
    getTypes: state.getAllData,
  }));

  const { collections, getCollections } = useStoreCollection((state) => ({
    collections: state.data,
    getCollections: state.getAllData,
  }));

  useEffect(() => {
    getCategories(), getTypes(), getCollections();
  }, []);

  const [product, setProduct] = useState<Product>({
    productName: "",
    productDescription: "",
    productImages: [""],
    productPrice: 0,
    productQuantity: 0,
    productSizes: [],
    productCategory: 0,
    productType: 0,
    productCollection: 0,
    productGender: [],
  });

  // ! PRODUCT ERROR
  const [errors, setErrors] = useState<Partial<Product>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: value ? "" : `${name} must not be empty`,
    });
  };

  // ! PRODUCT IMAGES
  const handleAddImage = () => {
    setProduct({
      ...product,
      productImages: [...product.productImages, ""],
    });
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...product.productImages];
    updatedImages.splice(index, 1);
    setProduct({
      ...product,
      productImages: updatedImages,
    });
  };

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...product.productImages];
    updatedImages[index] = value;
    setProduct({
      ...product,
      productImages: updatedImages,
    });
  };

  // ! PRODUCT SIZES
  const sizeOptions = ["S", "M", "L", "XL", "XXL"];

  const handleSizeChange = (selectedSize: string) => {
    const updatedSizes = product.productSizes.includes(selectedSize)
      ? product.productSizes.filter((size) => size !== selectedSize)
      : [...product.productSizes, selectedSize];

    setProduct({
      ...product,
      productSizes: updatedSizes,
    });
  };

  // ! PRODUCT GENDER
  const genderOptions = ["Male", "Female", "Child"];

  const handleGenderChange = (selectedGender: string) => {
    const updatedGender = product.productGender.includes(selectedGender)
      ? product.productGender.filter((gender) => gender !== selectedGender)
      : [...product.productGender, selectedGender];

    setProduct({
      ...product,
      productGender: updatedGender,
    });
  };

  // ! SAVE BUTTON
  const handleSave = async () => {
    postData(product);

    setProduct({
      productName: "",
      productDescription: "",
      productImages: [""],
      productPrice: 0,
      productQuantity: 0,
      productSizes: [],
      productCategory: 0,
      productType: 0,
      productCollection: 0,
      productGender: [],
    });
  };

  return (
    <ScrollArea className="h-full py-7">
      <div className="flex max-w-md mx-auto">
        <div className="py-2 ">
          <div className="h-[120px] my-4">
            <label className="block text-black text-sm font-normal mt-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Product Name"
              name="productName"
              value={product.productName}
              onChange={handleInputChange}
              className="h-10 w-96 border mt-2 px-2 py-2"
            />
            <div className="text-red-600">{errors.productName}</div>
            <label className="block text-black text-sm font-normal mt-2">
              Description
            </label>
            <input
              type="text"
              placeholder="Enter Product Description"
              name="productDescription"
              value={product.productDescription}
              onChange={handleInputChange}
              className="h-10 w-96 border mt-2 px-2 py-2"
            />
            <div className="text-red-600">{errors.productDescription}</div>
            <label className="block text-black text-sm font-normal mt-2">
              Images
            </label>
            {product.productImages.map((img, i) => (
              <div key={i} className="flex flex-row items-center">
                <input
                  type="text"
                  placeholder={`Enter Product Image ${i + 1}`}
                  value={img}
                  onChange={(e) => handleImageChange(i, e.target.value)}
                  className="h-10 w-96 border mt-2 px-2 py-2"
                />
                <button
                  onClick={handleAddImage}
                  className="bg-green-400 ml-2 max-h-[25px] px-2 rounded-full"
                >
                  +
                </button>
                {i > 0 && (
                  <button
                    onClick={() => handleRemoveImage(i)}
                    className="bg-red-400 ml-2 max-h-[25px] px-2 rounded-full"
                  >
                    -
                  </button>
                )}
              </div>
            ))}
            <div className="text-red-600">{errors.productImages}</div>
            <label className="block text-black text-sm font-normal mt-2">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter Product Price"
              name="productPrice"
              value={product.productPrice}
              onChange={handleInputChange}
              className="h-10 w-96 border mt-2 px-2 py-2"
            />
            <div className="text-red-600">{errors.productPrice}</div>
            <label className="block text-black text-sm font-normal mt-2">
              Quantity
            </label>
            <input
              type="number"
              placeholder="Enter Product Quantity"
              name="productQuantity"
              value={product.productQuantity}
              onChange={handleInputChange}
              className="h-10 w-96 border mt-2 px-2 py-2"
            />
            <div className="text-red-600">{errors.productQuantity}</div>
            <label className="block text-black text-sm font-normal my-2">
              Sizes
            </label>
            <div>
              {sizeOptions.map((size, i) => (
                <label key={i} className="flex text-[16px] font-semibold">
                  <input
                    type="checkbox"
                    checked={product.productSizes.includes(size)}
                    onChange={() => handleSizeChange(size)}
                    className="w-5 h-5 mr-3"
                  />
                  {size}
                </label>
              ))}
            </div>
            <div className="text-red-600">{errors.productSizes}</div>
            <label className="block text-black text-sm font-normal my-2">
              Category
            </label>
            <Select
              onValueChange={(updatedCategory) => {
                setProduct({
                  ...product,
                  productCategory: updatedCategory,
                });
              }}
            >
              <SelectTrigger className="w-96">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories.map((category, index) => (
                    <SelectItem key={index} value={category.id}>
                      {category.categoryName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="text-red-600">{errors.productCategory}</div>
            <label className="block text-black text-sm font-normal my-2">
              Type
            </label>
            <Select
              disabled={product.productCategory === 0}
              onValueChange={(updatedType) => {
                setProduct({
                  ...product,
                  productType: updatedType,
                });
              }}
            >
              <SelectTrigger className="w-96">
                <SelectValue
                  placeholder={
                    product.productCategory === 0
                      ? "Select a Category First"
                      : "Select a Type"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {types.map((type, index) => {
                    if (type.typeCategory.id === product.productCategory)
                      return (
                        <SelectItem key={index} value={type.id}>
                          {type.name}
                        </SelectItem>
                      );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="text-red-600">{errors.productType}</div>
            <label className="block text-black text-sm font-normal mt-2">
              Collection
            </label>
            <Select
              onValueChange={(updatedCollection) => {
                setProduct({
                  ...product,
                  productCollection: updatedCollection,
                });
              }}
            >
              <SelectTrigger className="w-96">
                <SelectValue placeholder="Select a Collection" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {collections.map((collection, index) => (
                    <SelectItem key={index} value={collection.id}>
                      {collection.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="text-red-600">{errors.productCollection}</div>
            <label className="block text-black text-sm font-normal my-2">
              Gender
            </label>
            <div>
              {genderOptions.map((gender, i) => (
                <label key={i} className="flex text-[16px] font-semibold">
                  <input
                    type="checkbox"
                    checked={product.productGender.includes(gender)}
                    onChange={() => handleGenderChange(gender)}
                    className="w-5 h-5 mr-3"
                  />
                  {gender}
                </label>
              ))}
            </div>
            <div className="text-red-600">{errors.productGender}</div>
            <SheetClose>
              <button
                onClick={handleSave}
                disabled={
                  !Object.values(product).every((value) => value !== "")
                }
                className="my-4 space-x-4 rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
              >
                Save
              </button>
            </SheetClose>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default AddProductForm;
