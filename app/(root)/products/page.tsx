import ProductsContent from "./ProductsContent";

interface ProductPageProps {
  searchParams: {
    page: string;
    category: string | undefined;
    type: string | undefined;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({
  searchParams: { page = "1", category, type },
}) => {
  const currentPage = parseInt(page);

  return (
    <ProductsContent
      currentPage={currentPage}
      category={category}
      type={type}
    />
  );
};

export default ProductPage;
