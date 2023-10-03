/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useStoreType } from "@/hooks/useStoreType";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStoreCategory } from "@/hooks/useStoreCategory";
import { useEffect, useState } from "react";

interface Type {
  name: string;
  typeCategory: number;
}

const TypeContent = () => {
  const { postData } = useStoreType((state) => ({
    postData: state.postData,
  }));

  const { categories, getCategories } = useStoreCategory((state) => ({
    categories: state.data,
    getCategories: state.getAllData,
  }));

  const [type, setType] = useState<Type>({
    name: "",
    typeCategory: 0,
  });

  useEffect(() => {
    getCategories();
  }, []);

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setType({
      ...type,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    postData(type);

    setType({
      name: "",
      typeCategory: 0,
    });
  };

  return (
    <>
      <div className="flex items-center justify-between py-6 px-4">
        <h1 className="text-black text-[30px] font-semibold">Types</h1>
        <div className="bg-black text-[15px] text-white font-normal leading-[45px] tracking-[2px] h-[45px] px-10 overflow-hidden rounded-md hover:bg-light-blue duration-300">
          <Dialog>
            <DialogTrigger>Add new</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add new Type</DialogTitle>
                <div className="flex max-w-md mx-auto">
                  <div className="py-2 ">
                    <div className="min-h-[120px] my-4">
                      <label className="block text-black text-sm font-normal">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Type name"
                        value={type.name}
                        onChange={handleInputName}
                        className="h-10 w-96 border mt-2 px-2 py-2 mb-4"
                      />
                      <label className="block text-black text-sm font-normal mb-4">
                        Of Category
                      </label>
                      <Select
                        onValueChange={(updatedCategory) => {
                          setType({
                            ...type,
                            typeCategory: updatedCategory,
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

                      <DialogClose asChild>
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="my-4 space-x-4 rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
                        >
                          Save
                        </button>
                      </DialogClose>
                    </div>
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default TypeContent;
