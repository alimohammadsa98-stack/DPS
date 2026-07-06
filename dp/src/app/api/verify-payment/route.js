import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connectDB from "@/db/connectdb";
import Payment from "@/app/models/Payment";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const isValid = validatePaymentVerification(
      {
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id,
      },
      body.razorpay_signature,
      process.env.RAZORPAY_KEY_SECRET
    );

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment Verification Failed",
        },
        { status: 400 }
      );
    }

    console.log(Payment);
console.log(typeof Payment.create);

    await Payment.create({
      orderId: body.razorpay_order_id,
      paymentId: body.razorpay_payment_id,
      username:body.username,
      email: body.email,

      amount: 399,
      status: "Success",
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}