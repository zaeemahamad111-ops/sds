"use server";

import connectDB from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

export async function submitInquiry(formData: FormData) {
  try {
    await connectDB();
    
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      country: formData.get("country"),
      product: formData.get("product"),
      requirement: formData.get("requirement"),
    };

    const newInquiry = await Inquiry.create(data);
    
    return { success: true, id: newInquiry._id.toString() };
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return { success: false, error: "Failed to submit inquiry" };
  }
}
