// components/ProductsContainer.jsx
"use client";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../src/app/api/products_data";

export default function ProductsContainer() {
  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productKey"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error.message}</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
      {productData.map((item) => (
        <ProductCard key={item.id} productImage={item.first_image} title={item.title} category={item.category} price={item.price} slugName={item.slug_name} />
      ))}
    </div>
  );
}
