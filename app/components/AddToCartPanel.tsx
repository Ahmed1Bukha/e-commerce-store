"use client";

import React from "react";
import { Product } from "@/app/lib/types";
import { useCartStore } from "@/app/store/cartStore";
import Button from "./button";
import { useRouter } from "next/navigation";

interface AddToCartPanelProps {
  product: Product;
}

const AddToCartPanel = ({ product }: AddToCartPanelProps) => {
  const { addToCart } = useCartStore();
  const router = useRouter();
  const [quantity, setQuantity] = React.useState<number>(1);

  const increment = () => setQuantity((q) => Math.min(99, q + 1));
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));

  const handleAdd = () => {
    for (let i = 0; i < quantity; i += 1) {
      addToCart(product);
    }
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center border rounded-md overflow-hidden">
        <button
          aria-label="Decrease quantity"
          onClick={decrement}
          className="px-3 py-2 text-base"
          type="button"
        >
          −
        </button>
        <div className="px-4 py-2 min-w-[40px] text-center select-none">
          {quantity}
        </div>
        <button
          aria-label="Increase quantity"
          onClick={increment}
          className="px-3 py-2 text-base"
          type="button"
        >
          +
        </button>
      </div>

      <Button
        text="Add to cart"
        variant="primary"
        size="lg"
        onClick={handleAdd}
      />

      <Button
        text="Back"
        variant="ghost"
        size="md"
        onClick={() => router.back()}
      />
    </div>
  );
};

export default AddToCartPanel;


