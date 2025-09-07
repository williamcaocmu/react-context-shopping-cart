import { useProducts } from "../context/ProductsContext";

const ProductLoading = () => {
  const { loading } = useProducts();

  if (!loading) return null;

  return <p>Loading...</p>;
};
export default ProductLoading;
