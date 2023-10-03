"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useStoreCollection } from "@/hooks/useStoreCollection";

const CollectionContent = () => {
  const { postData } = useStoreCollection((state) => ({
    postData: state.postData,
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
    };

    const name = target.name.value;
    postData(name);
  };

  return (
    <>
      <div className="flex items-center justify-between py-6 px-4">
        <h1 className="text-black text-[30px] font-semibold">Collections</h1>
        <div className="bg-black text-[15px] text-white font-normal leading-[45px] tracking-[2px] h-[45px] px-10 overflow-hidden rounded-md hover:bg-light-blue duration-300">
          <Dialog>
            <DialogTrigger>Add new</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add new Collection</DialogTitle>
                <div className="flex max-w-md mx-auto">
                  <div className="py-2 ">
                    <form onSubmit={handleSubmit} className="h-[120px] my-4">
                      <label className="block text-black text-sm font-normal">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Collection name"
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      />
                      <DialogClose asChild>
                        <button
                          type="submit"
                          className="my-4 space-x-4 rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
                        >
                          Save
                        </button>
                      </DialogClose>
                    </form>
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

export default CollectionContent;
