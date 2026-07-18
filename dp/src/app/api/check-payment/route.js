// app/api/check-payment/route.js

import connectdb from "@/db/connectdb";
import Payment from "@/app/models/payments";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectdb();

  const { email } = await req.json();

  const payment = await Payment.findOne({ email });

  return NextResponse.json({
    paid: !!payment,
    payment,
  });
}

