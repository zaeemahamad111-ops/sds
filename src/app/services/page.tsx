"use client";

import { motion } from "framer-motion";
import { Ship, Truck, ShieldCheck, Microscope, Package, Globe } from "lucide-react";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight Solutions",
    description: "Full Container Load (FCL) and Less than Container Load (LCL) shipping with strategic port partnerships for competitive transit times.",
  },
  {
    icon: Globe,
    title: "Air Freight Logistics",
    description: "Urgent delivery solutions for high-value premium harvests with active cold-chain monitoring for temperature-sensitive products.",
  },
  {
    icon: Microscope,
    title: "Quality Assurance",
    description: "Rigorous testing protocols in our in-house laboratories to ensure compliance with ASTA, ESA, and other international food safety standards.",
  },
  {
    icon: Package,
    title: "Bespoke Packaging",
    description: "Customized export packaging solutions including vacuum sealing, nitrogen flushing, and private labeling for retail-ready distribution.",
  },
  {
    icon: ShieldCheck,
    title: "Documentation & Compliance",
    description: "Expert handling of all export documentation, phytosanitary certifications, and customs clearance protocols for a friction-less experience.",
  },
  {
    icon: Truck,
    title: "Inland Distribution",
    description: "Secure and efficient surface transportation from farm-gate to our processing units and onward to major international ports.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl mb-24">
          <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Core Competencies
          </span>
          <h1 className="text-primary text-5xl font-serif mb-8 leading-tight">
            End-to-End <br />
            <span className="text-secondary italic">Logistical Excellence</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We provide a comprehensive suite of services designed to bridge the gap between Indian agricultural excellence and global market demands. Our integrated approach ensures quality at every touchpoint.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 border border-gray-100 hover:border-secondary hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-ivory rounded-sm flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                <service.icon size={28} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif text-primary mb-4">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                {service.description}
              </p>
              <button className="text-[10px] font-bold tracking-widest text-secondary uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <div className="w-4 h-px bg-secondary" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-24 md:mt-32 bg-primary-dark p-8 md:p-24 text-white rounded-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-8">Need a Custom <br />Logistics Solution?</h2>
            <p className="text-white/60 mb-12 max-w-2xl mx-auto">
              Our specialists can design a bespoke supply chain strategy for your specific volume and destination requirements.
            </p>
            <Button variant="secondary" size="lg">
              Speak to a Logistics Specialist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
