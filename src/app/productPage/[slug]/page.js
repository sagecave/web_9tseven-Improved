"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useBasketStore } from "../../../../globalHooks/basketProduct";
import { useStore } from "../../../../globalHooks/basketHooks";
import { motion } from "motion/react";

export default function SingleProductPage() {
  const params = useParams();
  const slug = params.slug;
  const [productsData, setProductData] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [chooseText, setChooseText] = useState(true);
  const { update } = useBasketStore();
  const productQuantities = useStore((state) => state.productQuantities);
  const quantity = productQuantities[productsData[0]?.id] || 0;
  const increaseProductNumber = useStore((state) => state.increaseProductNumber);
  const increaseAllProductNumber = useStore((state) => state.increaseAllProductNumber);
  const fabricDetails = [productsData[0]?.Fabric, productsData[0]?.Fabric2, productsData[0]?.Fabric3].filter(Boolean);
  const sizes = ["S", "M", "L", "XL"];

  const handleSize = (size) => {
    console.log(size, "Size selected");
    setChooseText(true);
    setSelectedSize(size);
  };

  const HandleUpdateProducts = () => {
    const newProducts = [
      {
        id: productsData[0]?.id,
        item: productsData[0]?.item,
        title: productsData[0]?.title,
        price: productsData[0]?.price,
        category: productsData[0]?.category,
        first_image: productsData[0]?.first_image,
        slug_name: productsData[0]?.slug_name,
        quantity: quantity,
      },
    ];
    if (!selectedSize) {
      console.log("No size selected");
      setChooseText(false);
    } else {
      if (quantity >= 1) {
        increaseProductNumber(productsData[0]?.id);
        increaseAllProductNumber();
      } else {
        console.log("Product already in basket", quantity);
        increaseProductNumber(productsData[0]?.id);
        increaseAllProductNumber();
        update(newProducts);
      }
    }
  };
  useEffect(() => {
    async function getBandBySlug(slug) {
      const url = `https://rqumbnvfrmsowdaxrvkm.supabase.co/rest/v1/9TSEVEN?slug_name=eq.${slug}`;
      const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdW1ibnZmcm1zb3dkYXhydmttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNjIzOTAsImV4cCI6MjA2MjYzODM5MH0.JpvYefKey3yiK285pXmaVs-tAR15E9OhoBp3bA22pKY";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: API_KEY, // 👈 add your key here
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch band data");
      }

      const data = await response.json();

      setProductData(data);
      return data;
    }
    getBandBySlug(slug);
  }, [slug]);

  const images = [productsData[0]?.ModelProductImage, productsData[0]?.ModelProductImage2, productsData[0]?.ModelProductImage3, productsData[0]?.first_image, productsData[0]?.secound_image].filter(Boolean);

  return (
    <section className="  grid col-start-2 col-end-3  mt-35 md:mt-25 ">
      <div className="hidden md:block pb-12 md:col-start-1 md:col-end-3">
        <h1 className=" text-HeaderSizeBig text-main_black">{productsData[0]?.title}</h1>
      </div>

      <div className="relative w-[100vw] max-w-[400px]  md:max-w-[500px] bottom-10">
        <motion.ul className="flex overflow-x-scroll sm:gap-10 snap-x snap-mandatory gap-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-main_black" tabIndex={0}>
          {images.map((image, index) => (
            <li key={index} className={` w-full min-w-full md:w-[500px] snap-x snap-mandatory snap-start`}>
              <img src={image} alt={`Product Image ${index + 1}`} width={500} height={500} className=" h-auto w-100 md:w-[30rem] object-cover max-w-none" />
            </li>
          ))}
        </motion.ul>
      </div>
      <div className=" text-ParagraphSize text-main_black md:ml-6 md:w-[70%] md:relative md:top-[-45px] flex flex-col justify-between gap-2 sm:gap-0">
        <div className="flex flex-col gap-2">
          <h2 className=" text-HeaderSizeSmall text-main_black">{productsData[0]?.title}</h2>
          <p>{productsData[0]?.price} kr</p>
          <p className="md:w-[90%]">{productsData[0]?.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row ">
            {sizes.map((size, index) => (
              <button
                id={index}
                onClick={() => handleSize(size)}
                key={index}
                className={`w-12 h-12 p-2 border border-alternativ_black
            ${selectedSize === size ? "bg-alternativ_black text-main_white" : "text-alternativ_black"}
            hover:bg-alternativ_black hover:text-main_white`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="">
            <button className=" text-main_black   hover:text-gray-500   " onClick={HandleUpdateProducts}>
              + ADD PRODUCT
            </button>
            {!chooseText && <p className="text-red-500">You have to choose a size</p>}
          </div>
        </div>
        <div className="mb-10 sm:mb-0">
          {fabricDetails.length > 0 && <h2 className=" text-HeaderSizeSmall">Fabric</h2>}

          {fabricDetails.map((fabric, index) => (
            <div key={index} className="mt-2">
              <p className="text-alternativ_black">{fabric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
