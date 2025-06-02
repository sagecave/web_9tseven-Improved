"use client";
import { motion, AnimatePresence } from "motion/react";
import BasketProductCard from "./BasketProductCard";
import { useBasketStore } from "../../globalHooks/basketProduct";
import { useStore } from "../../globalHooks/basketHooks";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const BasketModal = ({ isBasketOpen, setBasketOpen }) => {
  const { BasketSatete } = useBasketStore();
  const router = useRouter();
  const productQuantities = useStore((state) => state.productQuantities);
  const getValueOfProducts = useStore((state) => state.getValueOfProducts);
  const [totalAmount, setTotalAmount] = useState(0);

  const totalPrices = BasketSatete.reduce((acc, product) => {
    const quantity = productQuantities[product.id] || 0;

    return acc + product.price * quantity;
  }, 0);
  const handleRouterPayment = () => {
    router.push("/paymentPage");
  };
  const handleAmountSendtToStripe = () => {
    console.log("totalPrices", totalPrices);
    if (totalPrices === 0) {
      console.log("No products has no price");
    } else {
      console.log("Products has a price");
      setTotalAmount(totalPrices);
      getValueOfProducts(totalAmount);
      setBasketOpen(!isBasketOpen);
      handleRouterPayment();
    }
  };

  useEffect(() => {
    if (totalAmount > 0) {
      handleRouterPayment();
    }
  }, [totalAmount]);

  return (
    <div>
      <AnimatePresence>
        {isBasketOpen && (
          <motion.div
            className="w-full md:w-1/2 h-1/2 bg-main_black z-12 fixed mt-20 md:left-1/2 flex flex-col gap-4 p-4 "
            key="modal"
            initial={{ x: 300, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <h2 className={totalPrices === 0 ? " text-center text-alternativ_white flex justify-center text " : "text-main_white"}>{totalPrices ? "Your items" : "Add a item to the chart"}</h2>
            <div className="snap-y snap-mandatory overflow-y-scroll h-full ">
              <div>{BasketSatete.map((product) => (console.log("product", product), (<BasketProductCard key={product.id} id={product.id} title={product.title} productImages={product.first_image} item={product.item} price={product.price} />)))}</div>
            </div>
            <div className={totalPrices === 0 ? "hidden" : "block"}>
              <div className="flex flex-row justify-between items-center">
                <p className="text-main_white">Total</p>
                <p className="text-main_white">{totalPrices} kr</p>
              </div>
              <button onClick={() => handleAmountSendtToStripe()} className="  p-4 w-full bg-main_white hover:bg-alternativ_black hover:text-main_white text-main_black">
                checkout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasketModal;
