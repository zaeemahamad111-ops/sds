import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">APEX EXPORT</span>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed">
            Mastering the art of global trade through heritage, innovation, and logistical excellence. Connecting Indian farms to global destinations since 1994.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link href="/products" className="hover:text-secondary transition-colors">Premium Spices</Link></li>
            <li><Link href="/logistics" className="hover:text-secondary transition-colors">Export Logistics</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-colors">Our Heritage</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Global Offices */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-6">Global Presence</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3"><MapPin size={16} className="text-secondary" /> Cochin, India (HQ)</li>
            <li className="flex gap-3"><MapPin size={16} className="text-secondary" /> Amsterdam, Netherlands</li>
            <li className="flex gap-3"><MapPin size={16} className="text-secondary" /> Singapore</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center gap-3"><Mail size={16} className="text-secondary" /> info@apex-export.com</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-secondary" /> +91 484 2345 678</li>
            <li className="flex gap-2 pt-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <ExternalLink size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Globe size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40 text-center md:text-left">
        <p>© 2025 APEX EXPORT. ALL RIGHTS RESERVED.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Export</Link>
          <Link href="/compliance" className="hover:text-white">Compliance</Link>
        </div>
      </div>
    </footer>
  );
}
