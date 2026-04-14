import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Search, MapPin, Star, ArrowRight, ShieldCheck, Clock, Wrench, ChevronRight } from "lucide-react";
import { GARAGES } from "../data";
import { cn } from "../lib/utils";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full text-xs font-bold text-primary mb-6 border border-outline-variant">
              <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse" />
              PREMIUM AUTOMOTIVE CONCIERGE
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-[1.1] mb-8 tracking-tight">
              Precision Care for Your <span className="text-on-tertiary-container italic">Engine</span>
            </h1>
            <p className="text-lg text-secondary leading-relaxed mb-10 max-w-lg">
              Connecting quality craftsmanship with discerning vehicle owners. Experience the new standard in automotive maintenance.
            </p>

            <div className="bg-surface-container-lowest p-2 rounded-2xl shadow-2xl shadow-primary/5 border border-outline-variant flex flex-col md:flex-row gap-2 max-w-2xl">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-outline-variant">
                <Search className="w-5 h-5 text-secondary" />
                <input
                  type="text"
                  placeholder="Service or Garage"
                  className="bg-transparent border-none outline-none text-sm w-full font-medium"
                />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent border-none outline-none text-sm w-full font-medium"
                />
              </div>
              <Link
                to="/search"
                className="bg-primary text-surface px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-all"
              >
                Search
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-surface"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-xs font-medium text-secondary">
                <span className="text-primary font-bold">12k+</span> Happy vehicle owners in London
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/5] md:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1613214049841-0289827624fd?auto=format&fit=crop&q=80&w=1200"
                alt="Garage Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                <div className="text-surface">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Featured Workshop</p>
                  <h3 className="text-2xl font-headline font-bold">Precision Motors</h3>
                </div>
                <div className="bg-surface/20 backdrop-blur-md p-4 rounded-2xl border border-surface/30">
                  <div className="flex items-center gap-1 text-on-tertiary-container mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">4.9</span>
                  </div>
                  <p className="text-[10px] text-surface font-medium">124 Reviews</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-on-tertiary-container/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Partner Garages", value: "250+" },
            { label: "Expert Mechanics", value: "1.2k" },
            { label: "Services Completed", value: "45k+" },
            { label: "Customer Rating", value: "4.9/5" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl font-headline font-extrabold text-primary mb-2">{stat.value}</h3>
              <p className="text-sm text-secondary font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Garages - Bento Grid */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-6 tracking-tight">
                Curated Excellence in <span className="text-on-tertiary-container italic">Automotive</span> Care
              </h2>
              <p className="text-secondary leading-relaxed">
                We've hand-picked the finest workshops across the city, ensuring every service meets our rigorous standards of quality and transparency.
              </p>
            </div>
            <Link to="/search" className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              View All Garages
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {GARAGES.map((garage, i) => (
              <motion.div
                key={garage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "group relative rounded-[32px] overflow-hidden border border-outline-variant bg-surface-container-lowest hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500",
                  i === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"
                )}
              >
                <div className={cn("relative overflow-hidden", i === 0 ? "h-80 md:h-[500px]" : "h-64")}>
                  <img
                    src={garage.image}
                    alt={garage.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {garage.tags.map((tag) => (
                      <span key={tag} className="bg-surface/20 backdrop-blur-md text-surface text-[10px] font-bold px-3 py-1 rounded-full border border-surface/30 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-headline font-bold text-primary mb-1">{garage.name}</h3>
                      <div className="flex items-center gap-2 text-secondary text-sm">
                        <MapPin className="w-4 h-4" />
                        {garage.location} • {garage.distance}
                      </div>
                    </div>
                    <div className="bg-surface-container-low px-3 py-1.5 rounded-xl border border-outline-variant flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-on-tertiary-container fill-current" />
                      <span className="text-sm font-bold text-primary">{garage.rating}</span>
                    </div>
                  </div>
                  <p className="text-secondary text-sm mb-8 line-clamp-2 leading-relaxed">
                    {garage.description}
                  </p>
                  <Link
                    to={`/garage/${garage.id}`}
                    className="w-full bg-primary text-surface py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-primary-container transition-all"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Asymmetric */}
      <section className="py-24 px-6 bg-primary text-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 tracking-tight">
              Seamless Service <span className="text-on-tertiary-container italic">Experience</span>
            </h2>
            <p className="text-surface/60 leading-relaxed">
              From booking to pickup, we manage every detail of your vehicle's maintenance journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Discover & Select",
                desc: "Browse our curated network of premium workshops and select the one that fits your needs."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Instant Booking",
                desc: "Choose a time slot that works for you and get instant confirmation with transparent pricing."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Concierge Care",
                desc: "Track your service in real-time. Our experts ensure every detail is handled with precision."
              }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="w-20 h-20 bg-primary-container rounded-3xl flex items-center justify-center mb-8 border border-surface/10 group-hover:bg-on-tertiary-container group-hover:text-primary transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">{step.title}</h3>
                <p className="text-surface/60 leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 -right-6 w-12 h-[1px] bg-surface/20" />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Decorative background text */}
        <div className="absolute -bottom-20 -right-20 text-[20vw] font-headline font-black text-surface/5 select-none pointer-events-none uppercase">
          Garage
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-on-tertiary-container rounded-[48px] p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-primary mb-8 tracking-tight">
              Ready to Give Your Vehicle the <span className="italic">Best</span>?
            </h2>
            <p className="text-primary/70 text-lg mb-12 leading-relaxed">
              Join thousands of discerning owners who trust GarageConnect for their automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/search" className="bg-primary text-surface px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-container transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                Book a Service
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="bg-surface/20 backdrop-blur-md border border-primary/10 text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-surface/40 transition-all flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
          {/* Decorative image */}
          <div className="absolute top-0 right-0 bottom-0 w-1/3 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
              alt="Classic Car"
              className="w-full h-full object-cover opacity-20 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
