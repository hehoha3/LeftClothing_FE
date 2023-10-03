"use client";

interface LoadingDataProp {}

const LoadingData: React.FC<LoadingDataProp> = () => {
  return (
    <div className="text-black text-[30px] font-semibold">Loading Data ...</div>
  );
};

export default LoadingData;
