"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { submitInquiry } from "../actions/inquiry";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const result = await submitInquiry(formData);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Info */}
          <div>
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Global Communications
            </span>
            <h1 className="text-primary text-5xl font-serif mb-8 leading-tight">
              Connect with our <br />Global Network
            </h1>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Tailoring excellence in international trade from the heart of our global hubs. Whether you're seeking strategic sourcing or complex logistics, our specialist teams are ready to facilitate your vision.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-100 flex items-center justify-center shadow-sm">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary mb-1">Global Headquarters</h4>
                  <p className="text-sm text-gray-500">
                    Level 5, Trade Tower, MG Road<br />
                    Cochin, Kerala 682011, India
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-100 flex items-center justify-center shadow-sm">
                  <Mail size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary mb-1">Inquiry Channels</h4>
                  <p className="text-sm text-gray-500">
                    B2B: export@apex-export.com<br />
                    Logistics: supply@apex-export.com
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-100 flex items-center justify-center shadow-sm">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary mb-1">Direct Support</h4>
                  <p className="text-sm text-gray-500">
                    International: +91 484 2345 678<br />
                    Operations: +91 98470 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-12 shadow-2xl shadow-primary/5 border border-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -mr-16 -mt-16 rounded-full" />
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-serif text-primary">Inquiry Received</h3>
                <p className="text-gray-500">Thank you for reaching out. A trade specialist will contact you within 24 business hours.</p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">Send Another Message</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="text-2xl font-serif text-primary mb-8">Partnership Inquiry</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Full Name</label>
                    <input name="name" required className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2" placeholder="Johnathan Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Business Email</label>
                    <input name="email" type="email" required className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2" placeholder="j.doe@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Company Name</label>
                    <input name="company" className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2" placeholder="Global Logistics Ltd" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Country</label>
                    <input name="country" className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2" placeholder="United Arab Emirates" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Product of Interest</label>
                  <select name="product" className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2 bg-transparent">
                    <option>Green Cardamom</option>
                    <option>Black Pepper</option>
                    <option>Alleppey Turmeric</option>
                    <option>Zanzibar Cloves</option>
                    <option>Custom Sourcing Request</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Detailed Requirement</label>
                  <textarea name="requirement" required rows={4} className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2 resize-none" placeholder="Volume, specific grade, or logistical needs..." />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full flex justify-between group">
                  {isSubmitting ? "Processing..." : "Initiate Consultation"}
                  {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
