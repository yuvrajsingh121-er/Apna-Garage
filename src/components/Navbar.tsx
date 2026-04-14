import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Search, MapPin, User, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore", path: "/search" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass-nav shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-surface rounded-full border-t-transparent animate-spin-slow" />
          </div>
          <span className="font-headline font-extrabold text-xl tracking-tight text-primary">
            Apna Garage
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-[1px] bg-outline-variant mx-2" />
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
            <Search className="w-5 h-5 text-secondary" />
          </button>
          <button className="flex items-center gap-2 bg-primary text-surface px-5 py-2.5 rounded-full font-medium text-sm hover:bg-primary-container transition-all shadow-lg shadow-primary/10">
            <User className="w-4 h-4" />
            Sign In
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-surface border-b border-outline-variant p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-secondary hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-outline-variant" />
          <button className="flex items-center justify-center gap-2 bg-primary text-surface py-3 rounded-xl font-medium">
            <User className="w-5 h-5" />
            Sign In
          </button>
        </motion.div>
      )}
    </nav>
  );
};
