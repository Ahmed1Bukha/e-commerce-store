"use client";

import React from "react";
import { Product } from "@/app/lib/types";
import { useCartStore } from "@/app/store/cartStore";
import Button from "./button";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addToCart } = useCartStore();

  const handleClick = () => {
    addToCart(product);
  };

  return <Button text="Add to cart" variant="primary" size="lg" onClick={handleClick} />;
};

export default AddToCartButton;


