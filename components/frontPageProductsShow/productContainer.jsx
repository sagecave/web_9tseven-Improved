"use client";

import { useQuery } from "@tanstack/react-query";
import ProductCard from "../products/ProductCard";
import { fetchProducts } from "../../src/app/api/products_data/products";
import Link from "next/link";
import Image from "next/image";

const ProductContainer = ({ header, paragraph, images, variant = "normalContainer", slice1, slice2, slice3, slice4 }) => {
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
  let productsContainer = "";
  let imageGridClass = "";
  let imagesContainer = "";
  let textConatiner = "";
  let sectionStyle = "";

  switch (variant) {
    case "normalContainer":
      imagesContainer = "grid col-start-1 col-end-2 gap-4  ";
      textConatiner = "lg:col-start-1 lg:row-start-3 lg:col-end-2 p-6 lg:p-0 ";
      imageGridClass = "lg:col-start-2 row-start-1 lg:row-end-4 row-span-1 hidden  lg:block";
      productsContainer = "lg:col-start-1 lg:row-start-1 lg:col-end-2 lg:row-end-3 grid p-6 lg:p-0 ";
      sectionStyle = "lg:grid lg:grid-rows-3 lg:grid-cols-[3fr_4fr] lg:h-[100vh]";

      break;
    case "reverseContainer":
      imagesContainer = "grid col-start-1 col-end-2 gap-4";
      textConatiner = "lg:col-start-2 lg:row-start-3 lg:col-end-3 p-6 lg:p-0";
      imageGridClass = "lg:col-start-1 row-start-1 lg:row-end-4 row-span-1 hidden lg:block";
      productsContainer = "lg:col-start-2 lg:row-start-1 lg:col-end-3 lg:row-end-3 grid p-6 lg:p-0";
      sectionStyle = "lg:grid lg:grid-rows-3 lg:grid-cols-[4fr_3fr] lg:h-[100vh]";

      break;
  }
  return (
    <section className={sectionStyle}>
      <div className={productsContainer}>
        <div>
          <Link href="/productPage" className=" text-main_black lg:w-[50%] text-ParagraphSize hover:text-alternativ_black p-6 lg:p-3">
            <div className="flex justify-between md:justify-start md:gap-3">
              <p>PERFROMANCE</p>
              <p>→</p>
            </div>
          </Link>
          <div className={imagesContainer}>
            <div className="flex flex-row gap-4">
              {productData

                .slice(slice1, slice2)
                .concat(productData.slice(slice3, slice4))
                .map((item) => (
                  <ProductCard key={item.id} productImage={item.first_image} title={item.title} category={item.category} price={item.price} slugName={item.slug_name} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className={textConatiner}>
        <h2 className=" text-main_black">{header}</h2>
        <p className="md:w-[20rem] text-alternativ_black">{paragraph}</p>
      </div>
      <div className={imageGridClass}>
        <Image className=" object-contain w-[100%] h-[100%]   " src={`/assets/images/${images}.webp`} alt="hero" width={500} height={500} />
      </div>
    </section>
  );
};

export default ProductContainer;
