"use client";

import Script from "next/script";
import { useSession } from "next-auth/react";


export default function UIpayment() {
  const { data: session } = useSession();

  const pay = async () => {

    const res = await fetch("/api/create-order", {
      method: "POST",
    });

    if (!res.ok) {
      const err = await res.text();
      console.log(err);
      return;
    }

    const order = await res.json();

    const options = {
  key: process.env.NEXT_PUBLIC_KEY_ID,
  amount: order.amount,
  currency: order.currency,
  order_id: order.id,


  name: "Acme Corp",
  description: "Test Transaction",

  handler: async function (response) {

  const verify = await fetch("/api/verify-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,

      username: session?.user?.name,
      email: session?.user?.email,
    }),
  });

  const data = await verify.json();

  if (data.success) {
    alert("Payment Successful");
  } else {
    alert("Payment Verification Failed");
  }
}, // <-- Don't forget this comma

  prefill: {
    name: "Test User",
    email: "test@test.com",
    contact: "9999999999",
  },

  notes: {
    address: "Razorpay Office",
  },

  theme: {
    color: "#3399cc",
  },
};

    const razor = new window.Razorpay(options);

    razor.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      {/* <div className="flex justify-center items-center min-h-screen">
        <button
          onClick={pay}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg"
        >
          Pay ₹399
        </button>
      </div> */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-4">

  <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white">

      <div className="text-6xl mb-3">💎</div>

      <h2 className="text-3xl font-bold">
        Instant download after successful payment
      </h2>

     

    </div>

    {/* Body */}
    <div className="p-8">

      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-500 font-medium">
          Price
        </span>

        <span className="text-4xl font-bold text-green-600">
          ₹399
        </span>
      </div>

      <hr className="mb-6" />

      <ul className="space-y-4 text-gray-700">

        <li className="flex items-center gap-3">
          ✅ High Quality PNG Graphics
        </li>

        <li className="flex items-center gap-3">
          ✅ Unlimited Downloads
        </li>

        <li className="flex items-center gap-3">
          ✅ Commercial Use License
        </li>

        <li className="flex items-center gap-3">
          ✅ Lifetime Access
        </li>

        <li className="flex items-center gap-3">
          ✅ Future Free Updates
        </li>

      </ul>

      <button
        onClick={() => pay()}
        className="mt-8 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        💳 Pay Securely ₹399
      </button>

      <div className="mt-6 text-center text-sm text-gray-500">

        🔒 Secure Payment powered by

        <span className="font-semibold text-blue-600">
          {" "}Razorpay
        </span>

      </div>

    </div>

  </div>

</div>
    </>
  );
}