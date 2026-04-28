import mongoose, { Schema, model, models } from "mongoose";

const InquirySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    country: { type: String },
    product: { type: String },
    requirement: { type: String, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Inquiry = models.Inquiry || model("Inquiry", InquirySchema);

export default Inquiry;
