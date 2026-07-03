"use client";

import Script from "next/script";

export default function UIpayment() {

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
    const res = await fetch("/api/verify-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    });

    const data = await res.json();

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

      <div className="flex justify-center items-center min-h-screen">
        <button
          onClick={pay}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg"
        >
          Pay ₹399
        </button>
      </div>
    </>
  );
}