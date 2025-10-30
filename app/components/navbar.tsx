"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCartStore } from "../store/cartStore";
import React from "react";
const Navbar = () => {
  const pathname = usePathname();
  const { getCartQuantity } = useCartStore();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const cartQty = mounted ? getCartQuantity() : 0;
  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/product", label: "Product" },
    { href: "/contact-us", label: "Contact Us" },
  ];
  const icons = [
    { href: "/", label: "Search", iconLink: "/icons/search.svg" },
    { href: "/user", label: "User", iconLink: "/icons/user.svg" },
    { href: "/cart", label: "Cart", iconLink: "/icons/cart.svg" },
  ];
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-2xl font-poppins font-medium">3legant.</div>
      <div className="flex items-center font-inter gap-10">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              pathname === link.href ? "text-black" : "text-gray-500"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {icons.map((icon) => (
          <Link
            key={icon.label}
            href={icon.href}
            className="flex items-center gap-1"
          >
            <Image
              src={icon.iconLink}
              alt={icon.label}
              width={20}
              height={20}
            />
            {icon.label === "Cart" && cartQty > 0 && (
              <span className="bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartQty}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
