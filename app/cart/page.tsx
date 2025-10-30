"use client";
import React from "react";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";

const CartPage = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    removeOneFromCart,
    getCartTotalPrice,
    getCartQuantity,
    clearCart,
  } = useCartStore();

  const grouped = React.useMemo(() => {
    const map = new Map<
      string,
      { quantity: number; price: number; title: string; image: string }
    >();
    for (const p of cart) {
      const current = map.get(p.id);
      if (current) {
        current.quantity += 1;
      } else {
        map.set(p.id, {
          quantity: 1,
          price: p.price,
          title: p.title,
          image: p.image,
        });
      }
    }
    return Array.from(map.entries()).map(([id, info]) => ({ id, ...info }));
  }, [cart]);

  const totalItems = getCartQuantity();
  const totalPrice = getCartTotalPrice();

  if (grouped.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
        <div className="text-gray-600">Your cart is empty.</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {grouped.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border rounded-md p-4"
            >
              <div className="w-20 h-20 relative flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{item.title}</div>
                <div className="text-sm text-gray-600">
                  ${item.price.toFixed(2)}
                </div>
              </div>

              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  aria-label="Decrease quantity"
                  className="px-3 py-2"
                  onClick={() => removeOneFromCart(item.id)}
                  type="button"
                >
                  −
                </button>
                <div className="px-4 py-2 min-w-[40px] text-center select-none">
                  {item.quantity}
                </div>
                <button
                  aria-label="Increase quantity"
                  className="px-3 py-2"
                  onClick={() => {
                    const product = cart.find((p) => p.id === item.id);
                    if (product) addToCart(product);
                  }}
                  type="button"
                >
                  +
                </button>
              </div>

              <button
                className="ml-3 text-red-600 hover:underline"
                onClick={() => removeFromCart(item.id)}
                type="button"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <aside className="border rounded-md p-4 h-fit">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            className="w-full mt-4 bg-black text-white py-2 rounded-md"
            type="button"
            onClick={() => {}}
          >
            Proceed to Checkout
          </button>

          <button
            className="w-full mt-2 border py-2 rounded-md"
            type="button"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </aside>
      </div>
    </div>
  );
};

export default CartPage;
