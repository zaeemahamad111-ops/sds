"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Green Cardamom",
    tagline: "The Queen of Spices",
    image: "/images/cardamom.png",
    size: "large",
  },
  {
    name: "Black Pepper",
    tagline: "The King of Spices",
    image: "/images/black_pepper.png",
    size: "small",
  },
  {
    name: "Cloves",
    tagline: "Aromatic Excellence",
    image: "/images/cloves.png",
    size: "small",
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Curated Earthly Treasures <br />
              Verified for <span className="text-secondary italic">Grade-A Quality</span>
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed">
              Each harvest is hand-selected from the most fertile regions of India, ensuring the soul of the soil reaches your destination with its full aromatic profile intact.
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-secondary transition-colors group">
            View Full Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group cursor-pointer ${
                product.size === "large" ? "md:col-span-2 h-[500px]" : "h-[500px]"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full flex justify-between items-end">
                <div>
                  <span className="text-secondary font-medium uppercase tracking-[0.2em] text-[10px] block mb-2">
                    Premium Selection
                  </span>
                  <h3 className="text-white text-3xl font-serif">{product.name}</h3>
                  <p className="text-white/70 mt-2 font-sans">{product.tagline}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-secondary group-hover:border-secondary transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
