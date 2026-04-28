"use client";

import { motion } from "framer-motion";
import { Search, Download, Info } from "lucide-react";
import Button from "@/components/ui/Button";

const products = [
  {
    name: "Green Cardamom",
    origin: "Idukki, Kerala",
    grades: ["8mm Bold", "7-8mm Medium", "6-7mm Small"],
    oilContent: "8.5% Min",
    moisture: "< 12%",
    image: "/images/cardamom.png",
  },
  {
    name: "Tellicherry Black Pepper",
    origin: "Malabar Coast",
    grades: ["TGSEB (Bold)", "TGEB", "FAQ"],
    piperine: "4.5% - 5.5%",
    density: "580 g/l Min",
    image: "/images/black_pepper.png",
  },
  {
    name: "Alleppey Turmeric",
    origin: "Alleppey, India",
    grades: ["Finger", "Polished Bulbs"],
    curcumin: "5.5% - 6.5%",
    moisture: "< 10%",
    image: "/images/turmeric.png",
  },
  {
    name: "Zanzibar Cloves",
    origin: "Kerala / Tamil Nadu",
    grades: ["Handpicked", "Grade 1"],
    eugenol: "18% Min",
    moisture: "< 11%",
    image: "/images/cloves.png",
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Premium Selection
          </span>
          <h1 className="text-primary text-5xl font-serif mb-8">Export Grade Spices</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between bg-white p-6 md:p-8 border border-gray-100 shadow-sm">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search cultivars..." 
                className="w-full pl-10 pr-4 py-2 border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary transition-colors"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 md:py-2 border border-primary text-primary text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all">
                All Regions
              </button>
              <button className="w-full sm:w-auto px-6 py-3 md:py-2 text-gray-400 text-sm font-bold uppercase tracking-wider hover:text-primary transition-all">
                Organic Certified
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 bg-white border border-gray-100 overflow-hidden ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 text-[10px] font-bold tracking-widest text-primary uppercase">
                  {product.origin}
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-serif text-primary mb-4">{product.name}</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    Harvested at peak maturity to ensure maximum essential oil retention. Our {product.name} is processed in climate-controlled facilities.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-10">
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-widest block mb-1">Available Grades</span>
                      <p className="text-sm font-medium text-primary">{product.grades.join(" / ")}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-widest block mb-1">
                        {product.oilContent ? "Essential Oil" : product.piperine ? "Piperine" : product.curcumin ? "Curcumin" : "Eugenol"}
                      </span>
                      <p className="text-sm font-medium text-primary">
                        {product.oilContent || product.piperine || product.curcumin || product.eugenol}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-widest block mb-1">Moisture</span>
                      <p className="text-sm font-medium text-primary">{product.moisture || product.density}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-widest block mb-1">Export Standard</span>
                      <p className="text-sm font-medium text-primary flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-green-600" /> ASTA / EU Compliant
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button variant="primary" className="flex-1 flex justify-between items-center py-4 px-6 group">
                    Inquire for Bulk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <button className="w-full sm:w-16 h-14 sm:h-auto border border-gray-200 flex items-center justify-center text-primary hover:bg-gray-50 transition-colors">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArrowRight({ size, className }: { size: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckCircle2({ size, className }: { size: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
