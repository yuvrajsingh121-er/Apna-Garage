import * as React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="bg-primary text-surface-container-low pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-primary rounded-full border-t-transparent" />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight text-surface">
              Apna Garage
            </span>
          </div>
          <p className="text-sm text-surface/60 leading-relaxed mb-6">
            Elevating automotive care through precision, transparency, and premium concierge service.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-primary-container rounded-full hover:bg-surface hover:text-primary transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-primary-container rounded-full hover:bg-surface hover:text-primary transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-primary-container rounded-full hover:bg-surface hover:text-primary transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-headline font-bold text-surface mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-surface/60">
            <li><Link to="/about" className="hover:text-surface transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-surface transition-colors">Careers</Link></li>
            <li><Link to="/press" className="hover:text-surface transition-colors">Press</Link></li>
            <li><Link to="/blog" className="hover:text-surface transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-surface mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-surface/60">
            <li><Link to="/help" className="hover:text-surface transition-colors">Help Center</Link></li>
            <li><Link to="/safety" className="hover:text-surface transition-colors">Safety</Link></li>
            <li><Link to="/terms" className="hover:text-surface transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-surface transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-surface mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-surface/60">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              support@garageconnect.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              +44 20 7946 0123
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4" />
              Mayfair, London, UK
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-surface/40">
        <p>© 2026 ApnaConnect Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-surface">Cookie Settings</a>
          <a href="#" className="hover:text-surface">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};
