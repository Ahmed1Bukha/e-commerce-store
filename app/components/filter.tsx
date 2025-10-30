"use client";
interface FilterProps {
  categories: string[];
  selectedCategory: string;
  selectedPrice: string;
  onCategoryChange: (category: string) => void;
  onPriceChange: (priceRange: string) => void;
}
const Filter = ({
  categories,
  selectedCategory,
  selectedPrice,
  onCategoryChange,
  onPriceChange,
}: FilterProps) => {
  const prices = [
    { id: 1, name: "0-100" },
    { id: 2, name: "100-200" },
    { id: 3, name: "200-300" },
    { id: 4, name: "300-400" },
    { id: 5, name: "400-500" },
  ];
  return (
    <div className="filter flex-col items-start justify-between mt-10">
      <div className="text-medium font-inter font-medium">CATEGORIES</div>
      <div className="flex flex-col items-start justify-between">
        {categories.map((category: string) => (
          <div
            key={category}
            onClick={() =>
              onCategoryChange(selectedCategory === category ? "" : category)
            }
            className={`${
              selectedCategory === category ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="text-medium font-inter font-medium mt-6">PRICE</div>
      <div>
        {prices.map((price) => (
          <div
            key={price.id}
            onClick={() =>
              onPriceChange(selectedPrice === price.name ? "" : price.name)
            }
            className={`${
              selectedPrice === price.name ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            {price.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
