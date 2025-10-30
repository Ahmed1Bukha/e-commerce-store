import React from "react";
import { Product } from "../lib/types";
import Image from "next/image";
import Rating from "./Rating";
import Button from "./button";
import { useRouter } from "next/navigation";
import { useCartStore } from "../store/cartStore";
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCartStore();
  const router = useRouter();
  const handleAddToCart = () => {
    addToCart(product);
  };
  const handleShowProduct = () => {
    router.push(`/product/${product.id}`);
  };
  return (
    <div
      className="product-card group relative flex flex-col items-start justify-center p-4 w-[260px]  shrink-0 cursor-pointer"
      onClick={handleShowProduct}
    >
      <div className="relative h-[380px] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={260}
            height={350}
            className="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div
          className="pointer-events-none group-hover:pointer-events-auto absolute inset-x-0 bottom-3 flex justify-center opacity-0 transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation(); // Stop event from bubbling to parent
            handleAddToCart();
          }}
        >
          <Button text="Add to cart" variant="primary" size="md" />
        </div>
      </div>

      <div className="product-card-content mt-3 flex flex-col items-start justify-center gap-y-2">
        <Rating rating={product.rating.rate} />
        <h3 className="text-medium font-inter font-medium line-clamp-2 max-w-[260px]">
          {product.title}
        </h3>
        <p className="text-medium font-inter font-semibold text-black/90">
          {product.price}$
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
