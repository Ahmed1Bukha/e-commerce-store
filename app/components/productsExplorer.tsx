"use client";
import Filter from "./filter";
import ProductsList from "./productsList";
import { useMemo, useState } from "react";
import { Product } from "../lib/types";

interface ProductsExplorerProps {
  products: Product[];
  categories: string[];
}

function parsePriceRange(range: string): { min: number; max: number } | null {
  if (!range) return null;
  const [minStr, maxStr] = range.split("-");
  const min = Number(minStr);
  const max = Number(maxStr);
  if (Number.isNaN(min) || Number.isNaN(max)) return null;
  return { min, max };
}

const ProductsExplorer = ({ products, categories }: ProductsExplorerProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  const filteredProducts = useMemo(() => {
    const price = parsePriceRange(selectedPrice);
    return products.filter((p) => {
      const matchesCategory = selectedCategory
        ? p.category === selectedCategory
        : true;
      const matchesPrice = price
        ? p.price >= price.min && p.price <= price.max
        : true;
      return matchesCategory && matchesPrice;
    });
  }, [products, selectedCategory, selectedPrice]);

  return (
    <div className="flex flex-row items-start justify-evenly gap-4 ">
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        selectedPrice={selectedPrice}
        onCategoryChange={setSelectedCategory}
        onPriceChange={setSelectedPrice}
      />
      <ProductsList products={filteredProducts} />
    </div>
  );
};

export default ProductsExplorer;
