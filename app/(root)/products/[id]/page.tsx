import DetailProduct from "@/components/elements/DetailProduct";

interface DetailProductPageProps {
  params: {
    id: number;
  };
}

const DetailProductPage: React.FC<DetailProductPageProps> = ({
  params: { id },
}) => {
  return (
    <div className="py-5">
      <DetailProduct id={id} />
    </div>
  );
};

export default DetailProductPage;
