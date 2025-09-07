import { useProducts } from "../context/ProductsContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
