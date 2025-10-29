"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
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
          <Link key={icon.label} href={icon.href}>
            <Image
              src={icon.iconLink}
              alt={icon.label}
              width={20}
              height={20}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
