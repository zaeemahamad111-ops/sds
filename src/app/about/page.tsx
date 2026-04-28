"use client";

import { motion } from "framer-motion";
import { Award, Users, Map, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-32">
          <div>
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Our Heritage
            </span>
            <h1 className="text-primary text-5xl font-serif mb-8 leading-tight">
              A Legacy of Quality, <br />
              <span className="text-secondary italic">Rooted in Tradition</span>
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded in 1994 in the heart of Kerala&apos;s spice belt, SD&S Export began with a simple vision: to bring the authentic flavors of India to the world without compromise. 
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Over three decades, we have evolved from a local trading house into a global logistics powerhouse, while maintaining our core values of integrity, transparency, and deep respect for the farmers who are the backbone of our industry.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-4xl font-serif text-primary block mb-2">30+</span>
                <span className="text-xs tracking-widest text-gray-400 uppercase">Years of Excellence</span>
              </div>
              <div>
                <span className="text-4xl font-serif text-primary block mb-2">42</span>
                <span className="text-xs tracking-widest text-gray-400 uppercase">Countries Reached</span>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden group">
            <img 
              src="/images/turmeric.png" 
              alt="Our Story"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 border-[30px] border-white/10 pointer-events-none" />
          </div>
        </div>

        {/* Values Grid */}
        <section className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-primary text-4xl font-serif mb-6">Driven by Excellence</h2>
            <p className="text-gray-500">Our operations are guided by four pillars that ensure consistency and trust across borders.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Award, title: "Uncompromising Quality", text: "Multi-stage lab testing for every batch exported." },
              { icon: Users, title: "Farmer Empowerment", text: "Direct partnerships ensuring fair trade and sustainability." },
              { icon: Map, title: "Global Traceability", text: "Complete transparency from the farm-gate to final delivery." },
              { icon: HeartHandshake, title: "Client Partnership", text: "Bespoke logistical solutions tailored to your scale." }
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-sm border border-gray-100 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary transition-all duration-300">
                  <value.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-serif text-primary mb-3">{value.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure Preview */}
        <section className="bg-primary p-12 md:p-24 rounded-sm text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">World-Class <br />Infrastructure</h2>
              <p className="text-white/70 mb-12 leading-relaxed">
                Our state-of-the-art processing units in Cochin are equipped with advanced cleaning, grading, and vacuum packaging systems to preserve the volatile oils and freshness of our spices.
              </p>
              <ul className="space-y-4">
                {["Climate-controlled storage", "Automated grading systems", "In-house quality labs", "Direct port connectivity"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/warehouse.png" className="rounded-sm aspect-square object-cover" alt="Climate-controlled storage" />
              <img src="/images/logistics_ship.png" className="rounded-sm aspect-square object-cover mt-8" alt="Direct port connectivity" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
