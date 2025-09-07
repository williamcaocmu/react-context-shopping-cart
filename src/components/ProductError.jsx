import { useProducts } from "../context/ProductsContext";

const ProductError = () => {
  const { error } = useProducts();

  if (!error) return null;
  return <p className="text-red-500">❌ {error}</p>;
};
export default ProductError;
