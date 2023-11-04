"use client";

import { useStoreQuantity } from "@/hooks/useStoreQuantity";

interface CountingQuantityProps {
  maxQuantity: number;
}

export const CountingQuantity: React.FC<CountingQuantityProps> = ({
  maxQuantity,
}) => {
  const { currentQuantity, upQuantity, downQuantity } = useStoreQuantity(
    (state) => ({
      currentQuantity: state.currentQuantity,
      upQuantity: state.upQuantity,
      downQuantity: state.downQuantity,
    })
  );

  const up = () => {
    if (currentQuantity < maxQuantity) upQuantity();
  };

  const down = () => {
    if (currentQuantity > 1) {
      downQuantity();
    }
  };

  return (
    <div className="flex items-center min-w-[120px] border border-black/50">
      <button
        onClick={() => down()}
        className="h-full min-w-[40px]  text-[20px] font-bold"
      >
        -
      </button>
      <p className="flex-1 min-w-[50px] text-center text-[20px] font-bold">
        {currentQuantity}
      </p>
      <button
        onClick={() => up()}
        className=" h-full min-w-[40px]  text-[20px] font-bold"
      >
        +
      </button>
    </div>
  );
};
