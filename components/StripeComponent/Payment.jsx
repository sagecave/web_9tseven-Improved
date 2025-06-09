"use client";

import CheckoutPage from "../stripe/CheckoutPage";
import { convertToSubcurrency } from "../../lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStore } from "../../globalHooks/basketHooks";
import { useBasketStore } from "../../globalHooks/basketProduct";
import BasketProductCard from "../basket/BasketProductCard";
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("Missing Stripe publishable key");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
const payment = () => {
  const { BasketSatete } = useBasketStore();
  const productQuantities = useStore((state) => state.productQuantities);
  const totalPrices = BasketSatete.reduce((acc, product) => {
    const quantity = productQuantities[product.id] || 0;
    return acc + product.price * quantity;
  }, 0);

  const amount = totalPrices;

  return (
    <div>
      <div className="  h-auto grid grid-cols-1 md:grid-cols-2">
        <div className="grid-span-3 ">
          <div className="snap-y snap-mandatory overflow-y-scroll h-full p-6 ">
            <h1 className="text-HeaderSizeSmall text-main_black">Your Items</h1>
            <div className="flex flex-col h-[35vh] md:flex-col w-auto md:h-[80vh] snap-y snap-mandatory overflow-y-scroll overflow-hidden ">
              {BasketSatete.map(
                (product) => (console.log("product", product), (<BasketProductCard key={product.id} id={product.id} title={product.title} productImages={product.first_image} item={product.item} price={product.price} variant="whiteBackground" />))
              )}
            </div>
          </div>
        </div>
        <div className="grid-span-4 p-6 ">
          <h1 className="text-HeaderSizeSmall text-main_black pb-[20]">Checkout</h1>

          <div className="">
            <Elements
              stripe={stripePromise}
              options={{
                mode: "payment",
                amount: convertToSubcurrency(amount),
                currency: "dkk",
              }}
            >
              <CheckoutPage amount={amount} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
