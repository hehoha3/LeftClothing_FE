import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import sizeGuide from "@/public/sizeGuide.png";

const SizeGuide = () => {
  return (
    <div className="flex mr-8">
      <svg
        width="20"
        height="20"
        viewBox="0 0 26 26"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          fill="#000000"
          d="M19 .063a.8.8 0 0 0-.188.03a.8.8 0 0 0-.375.22L.313 18.438a.8.8 0 0 0 0 1.093l6.157 6.157a.8.8 0 0 0 .656.218a.8.8 0 0 0 .438-.218L25.688 7.563a.8.8 0 0 0 0-1.094L19.53.312a.8.8 0 0 0-.06-.062a.8.8 0 0 0-.032-.031a.8.8 0 0 0-.28-.125A.8.8 0 0 0 19 .062zm-.031 1.968l5 4.969L7 23.969L2 19l1.219-1.219l1.531 1.532a.8.8 0 0 0 .781.28a.8.8 0 0 0 .157-.062a.8.8 0 0 0 .062-.031a.8.8 0 0 0 .156-.094a.8.8 0 0 0 .032-.031a.8.8 0 0 0 .125-.125a.8.8 0 0 0-.188-1.063l-1.531-1.53l1-1l1.531 1.53a.8.8 0 0 0 .781.282a.8.8 0 0 0 .157-.063a.8.8 0 0 0 .062-.031a.8.8 0 0 0 .156-.094a.8.8 0 0 0 .031-.031a.8.8 0 0 0 .126-.125A.8.8 0 0 0 8 16.062l-1.531-1.53l1-1l2.906 2.937a.8.8 0 0 0 .188.156a.8.8 0 0 0 .062.031a.8.8 0 0 0 .156.063a.8.8 0 0 0 .063.031a.8.8 0 0 0 .312 0a.8.8 0 0 0 .156-.063a.8.8 0 0 0 .063-.03a.8.8 0 0 0 .156-.095a.8.8 0 0 0 .031-.03a.8.8 0 0 0 .126-.126a.8.8 0 0 0-.188-1.062l-2.906-2.938l.969-.969l1.53 1.5a.807.807 0 0 0 .813.22a.807.807 0 0 0 .406-.282a.807.807 0 0 0-.062-1.063l-1.531-1.53l.969-.97l1.53 1.5a.807.807 0 0 0 .813.22a.807.807 0 0 0 .406-.282a.807.807 0 0 0-.062-1.063l-1.531-1.53l.969-.97l2.937 2.907a.8.8 0 0 0 .406.25a.8.8 0 0 0 .063.031a.8.8 0 0 0 .312 0a.8.8 0 0 0 .157-.063a.8.8 0 0 0 .062-.03a.8.8 0 0 0 .156-.095a.8.8 0 0 0 .032-.03a.8.8 0 0 0 .125-.126a.8.8 0 0 0-.188-1.062l-2.938-2.906l1-1l1.532 1.53a.807.807 0 0 0 .75.22a.807.807 0 0 0 .156-.063a.807.807 0 0 0 .063-.031a.807.807 0 0 0 .125-.094a.807.807 0 0 0 .03-1.188l-1.53-1.5l1.906-1.906z"
        />
      </svg>
      <Dialog>
        <DialogTrigger className="text-black/70 text-[14px] hover:text-black">
          Hướng dẫn chọn size
        </DialogTrigger>
        <DialogContent className="max-w-[600px] max-h-[500px]">
          <DialogHeader>
            <DialogTitle className="text-center">Chọn size</DialogTitle>
            <div className="flex max-w-md mx-auto pt-3">
              <Image
                src={sizeGuide}
                alt="size guide"
                width={700}
                height={700}
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SizeGuide;
