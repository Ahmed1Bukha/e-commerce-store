import React from "react";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  return <div>ProductPage {id}</div>;
};

export default ProductPage;
