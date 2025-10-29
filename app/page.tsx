"use client";
import HeroSection from "./components/heroSection";
import ProductCard from "./components/productCard";
import Filter from "./components/filter";
export default function Home() {
  const product = {
    id: "1",
    title: "Fjallraven",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 109.95,
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    category: "men's clothing",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  return (
    <div>
      <HeroSection />
      <div className="flex flex-row items-space-between justify-space-between">
        <Filter />
        <ProductCard product={product} />
      </div>
    </div>
  );
}
