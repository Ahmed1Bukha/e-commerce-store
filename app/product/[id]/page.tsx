import React from "react";
import Image from "next/image";
import { getProduct, ApiError } from "@/app/lib/api";
import Rating from "../../components/Rating";
import AddToCartPanel from "@/app/components/AddToCartPanel";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  let product: Awaited<ReturnType<typeof getProduct>> | null = null;
  let errorMessage: string | null = null;

  try {
    product = await getProduct(id);
  } catch (error: unknown) {
    errorMessage =
      error instanceof ApiError
        ? error.message
        : "Something went wrong while loading the product.";
  }

  if (errorMessage) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-2xl font-semibold">Failed to load product</div>
        <div className="mt-2 text-black/60">{errorMessage}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-2xl font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-start justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={480}
            height={480}
            className="object-contain max-h-[520px]"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Rating rating={product.rating.rate} />
            <span className="text-sm text-black/60">
              ({product.rating.count})
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            {product.title}
          </h1>
          <p className="text-black/70">{product.description}</p>
          <div className="flex items-center gap-3 pt-2">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="text-xs uppercase tracking-wider text-black/50 bg-black/5 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          <div className="pt-4">
            <AddToCartPanel product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
