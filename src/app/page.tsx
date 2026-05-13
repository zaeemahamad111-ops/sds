import HeroSequence from "@/components/sections/HeroSequence";
import ProductHighlights from "@/components/sections/ProductHighlights";
import { CheckCircle2, Globe2, Ship, Truck, ShieldCheck, Microscope } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSequence />
      
      {/* Trust Bar */}
      <section className="py-12 bg-primary-dark text-white overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-nowrap md:flex-wrap justify-start md:justify-between items-center gap-8 md:gap-8 opacity-60 overflow-x-auto no-scrollbar snap-x">
          <div className="flex items-center gap-3 font-serif text-lg tracking-widest italic">
            ISO 22000 CERTIFIED
          </div>
          <div className="flex items-center gap-3 font-serif text-lg tracking-widest italic">
            HACCP VERIFIED
          </div>
          <div className="flex items-center gap-3 font-serif text-lg tracking-widest italic">
            SPICES BOARD REGISTERED
          </div>
          <div className="flex items-center gap-3 font-serif text-lg tracking-widest italic">
            FAIR TRADE ALLIANCE
          </div>
        </div>
      </section>

      <ProductHighlights />

      {/* Logistics Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-6 block">
              Global Logistics Mastery
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Unrivaled Reach. <br />
              <span className="text-secondary-light">Seamless Execution.</span>
            </h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              From precision temperature-controlled air freight to large-scale maritime operations, our logistics network is built for the demands of modern trade.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Ship, title: "Strategic Sea Cargo", desc: "Optimized bulk transport with real-time tracking and climate control." },
                { icon: Truck, title: "Priority Surface Logistics", desc: "Reliable inland transportation from farm-gate to ports." },
                { icon: ShieldCheck, title: "Secure Documentation", desc: "Full transparency in phytosanitary certificates and customs clearing." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center shrink-0">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-primary-dark/40 overflow-hidden rounded-sm group">
            <img 
              src="/images/logistics_ship.png" 
              alt="Global Shipping"
              className="w-full h-full object-cover mix-blend-overlay opacity-80 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[20px] border-primary-dark/30 pointer-events-none" />
            <div className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-md p-8 border border-white/10">
               <span className="text-4xl font-serif text-white block mb-2">99.8%</span>
               <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase">On-time Delivery Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-brand-ivory/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-primary text-3xl md:text-5xl font-serif mb-6">Mastering the Supply Chain</h2>
            <p className="text-gray-600">A rigorous multi-stage verification process ensuring every shipment exceeds international standards.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {[
              { icon: Microscope, title: "Rigorous Testing", text: "Laboratory verification for moisture, purity, and aromatic density." },
              { icon: Globe2, title: "Direct Sourcing", text: "Partnerships with elite farmers across Indian spice belts." },
              { icon: CheckCircle2, title: "Premium Packing", text: "Export-grade packaging designed for maximum shelf life." },
              { icon: Truck, title: "Global Delivery", text: "End-to-end logistics with real-time transit visibility." }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/5 group-hover:bg-primary transition-all duration-300">
                  <step.icon size={32} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-serif text-primary mb-4">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0 opacity-20">
           <img src="/images/warehouse.png" alt="Warehouse" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-serif mb-6 md:mb-8 leading-tight">Ready to Expand <br />Your Reach?</h2>
          <p className="text-base md:text-lg text-white/70 mb-10 md:mb-12 max-w-2xl mx-auto">
            Join a global network of B2B partners who rely on Apex Export for consistent quality and logistical precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
             <button className="w-full sm:w-auto bg-secondary text-white px-8 md:px-10 py-4 md:py-5 font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-secondary-light transition-colors">
                Initiate Consultation
             </button>
             <button className="w-full sm:w-auto border border-white/30 text-white px-8 md:px-10 py-4 md:py-5 font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-primary transition-colors">
                Contact Specialist
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
