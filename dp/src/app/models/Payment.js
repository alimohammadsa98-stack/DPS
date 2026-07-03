import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },

    paymentId: {
      type: String,
      required: true,
    },

     username: {
      type: String,
      required: true,
    },
    
     email: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Payment =
  mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

export default Payment;