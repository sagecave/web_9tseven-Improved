"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { convertToSubcurrency } from "../../lib/convertToSubcurrency";
const CheckoutPage = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: convertToSubcurrency(amount),
      }),
    })
      .then((response) => response.json())
      .then((data) => setClientSecret(data.clientSecret));
    console.log("clientSecret", clientSecret);
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message);
      setIsLoading(false);
      return;
    }

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://web-9tseven-improved.vercel.app/payment-success?amount=" + amount,
      },
    });
    if (stripeError) {
      setError(stripeError.message);
    } else {
      // Payment succeeded
      //   and redirect them with a url
      console.log("Payment succeeded!");
    }
    setIsLoading(false);
  };
  if (!stripe || elements) {
    return (
      <form onSubmit={handleSubmit}>
        {clientSecret && <PaymentElement />}

        {error && <div>{error}</div>}
        <button className=" disabled:animate-pulse disabled:opacity-50 bg-main_black hover:bg-alternativ_black p-4 w-full mt-2" disabled={!stripe || isLoading}>
          {!isLoading ? `Pay ${amount} kr` : "Processing..."}
        </button>
      </form>
    );
  }
};
export default CheckoutPage;
