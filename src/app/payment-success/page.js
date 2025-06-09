"use client";
import Link from "next/link";

import React from "react";

const paymentSuccessPage = ({ searchParams }) => {
  const { amount } = React.use(searchParams);

  return (
    <section className="grid col-start-2 col-end-3 h-[80vh] mt-20">
      <div className="flex justify-center h-auto mt-10 mb-10">
        <div className=" border-2 border-alternativ_white w-1/2 p-6 flex flex-col justify-center items-center rounded-lg shadow-lg">
          <h1 className="text-HeaderSizeSmall text-main_black pb-[20]">Payment Success</h1>
          <p className="text-HeaderSizeSmall text-main_black pb-[20]">You have successfully paid</p>

          <p className="text-HeaderSizeSmall text-main_black pb-[20]">
            Total <span>{amount},-</span>
          </p>

          <Link className="bg-main_black text-main_white p-2 text-ParagraphSize  hover:bg-alternativ_black" href="/">
            Get back to front page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default paymentSuccessPage;
