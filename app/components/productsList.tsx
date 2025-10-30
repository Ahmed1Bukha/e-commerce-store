"use client";
import ProductCard from "./productCard";
import { Product } from "../lib/types";
interface ProductsListProps {
  products: Product[];
}
const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {!products || products.length === 0 ? (
        <div className="col-span-3 flex items-center justify-center p-8 text-gray-500">
          No products found
        </div>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductsList;
