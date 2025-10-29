"use client";
import { useState } from "react";
const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Books" },
    { id: 4, name: "Furniture" },
    { id: 5, name: "Other" },
  ];
  const prices = [
    { id: 1, name: "0-100" },
    { id: 2, name: "100-200" },
    { id: 3, name: "200-300" },
    { id: 4, name: "300-400" },
    { id: 5, name: "400-500" },
  ];
  return (
    <div className="filter flex-col items-center justify-between">
      <div>CATEGORIES</div>
      <div className="flex flex-col items-center justify-between">
        {categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
      <div>PRICE</div>
      <div>
        {prices.map((price) => (
          <div key={price.id}>{price.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
