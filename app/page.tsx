import HeroSection from "./components/heroSection";

import ProductsExplorer from "./components/productsExplorer";
import { getProducts, ApiError } from "./lib/api";
export default async function Home() {
  let products: Awaited<ReturnType<typeof getProducts>> | null = null;
  let errorMessage: string | null = null;

  try {
    products = await getProducts();
  } catch (error: unknown) {
    errorMessage =
      error instanceof ApiError
        ? error.message
        : "Something went wrong while loading products.";
  }

  if (errorMessage) {
    return (
      <div className="text-center py-16">
        <div className="text-2xl font-semibold">Failed to load products</div>
        <div className="mt-2 text-black/60">{errorMessage}</div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-2xl font-bold">No products found</div>
    );
  }

  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <div>
      <HeroSection />
      <ProductsExplorer products={products} categories={categories} />
    </div>
  );
}
