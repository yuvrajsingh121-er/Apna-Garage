import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, Star, ShieldCheck, Clock, Wrench, ChevronRight, Heart, Share2, Info, MessageSquare, Calendar, ArrowLeft } from "lucide-react";
import { GARAGES, SERVICES } from "../data";
import { cn } from "../lib/utils";

export const GarageProfile = () => {
  const { id } = useParams();
  const garage = GARAGES.find(g => g.id === id) || GARAGES[0];

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={garage.image}
          alt={garage.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        
        <div className="absolute top-24 left-6 right-6 flex justify-between items-center z-10 max-w-7xl mx-auto">
          <Link to="/search" className="p-3 bg-surface/20 backdrop-blur-md rounded-full border border-surface/30 text-surface hover:bg-surface hover:text-primary transition-all">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex gap-3">
            <button className="p-3 bg-surface/20 backdrop-blur-md rounded-full border border-surface/30 text-surface hover:bg-on-tertiary-container hover:text-primary transition-all">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-3 bg-surface/20 backdrop-blur-md rounded-full border border-surface/30 text-surface hover:bg-on-tertiary-container hover:text-primary transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 right-6 z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8"
          >
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {garage.tags.map((tag) => (
                  <span key={tag} className="bg-on-tertiary-container text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/10 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-surface mb-4 tracking-tight">
                {garage.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-surface/80 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-on-tertiary-container" />
                  {garage.location} • {garage.distance}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-on-tertiary-container fill-current" />
                  <span className="text-surface font-bold">{garage.rating}</span>
                  <span className="opacity-60">({garage.reviews} Reviews)</span>
                </div>
              </div>
            </div>
            <Link
              to={`/booking/${garage.id}`}
              className="bg-on-tertiary-container text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-surface transition-all shadow-2xl shadow-primary/20 flex items-center gap-2"
            >
              Book Service
              <Calendar className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-headline font-extrabold text-primary mb-6 tracking-tight flex items-center gap-3">
                <Info className="w-6 h-6 text-on-tertiary-container" />
                Workshop Overview
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                {garage.description} Our facility is equipped with the latest diagnostic tools and staffed by certified master technicians who specialize in premium automotive care. We pride ourselves on transparency, quality, and meticulous attention to detail.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: <ShieldCheck className="w-5 h-5" />, label: "Certified Parts" },
                  { icon: <Clock className="w-5 h-5" />, label: "Same Day Service" },
                  { icon: <Wrench className="w-5 h-5" />, label: "Master Techs" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-surface-container-low rounded-2xl border border-outline-variant">
                    <div className="text-on-tertiary-container">{item.icon}</div>
                    <span className="text-sm font-bold text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Menu */}
            <div>
              <h2 className="text-3xl font-headline font-extrabold text-primary mb-8 tracking-tight flex items-center gap-3">
                <Wrench className="w-6 h-6 text-on-tertiary-container" />
                Service Atelier
              </h2>
              <div className="space-y-4">
                {SERVICES.map((service) => (
                  <div key={service.id} className="group flex items-center justify-between p-6 bg-surface-container-lowest rounded-[24px] border border-outline-variant hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-colors">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-headline font-bold text-primary mb-1">{service.name}</h4>
                        <p className="text-xs text-secondary font-medium uppercase tracking-widest">Duration: {service.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-1">From</p>
                        <p className="text-xl font-headline font-extrabold text-primary">£{service.price}</p>
                      </div>
                      <Link
                        to={`/booking/${garage.id}?service=${service.id}`}
                        className="p-3 bg-surface-container-low rounded-full text-primary hover:bg-primary hover:text-surface transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-on-tertiary-container" />
                  Client Reviews
                </h2>
                <button className="text-sm font-bold text-on-tertiary-container hover:underline">Write a Review</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: "James Wilson", date: "2 days ago", rating: 5, text: "Exceptional service. The concierge team kept me updated throughout the entire process. Highly recommend for any premium vehicle owner." },
                  { name: "Sarah Jenkins", date: "1 week ago", rating: 4, text: "Very professional workshop. The diagnostic scan was thorough and the explanation of the issues was very clear. Pricing is fair for the quality." },
                ].map((review, i) => (
                  <div key={i} className="p-8 bg-surface-container-lowest rounded-[32px] border border-outline-variant shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-3">
                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt={review.name} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                        <div>
                          <h4 className="text-sm font-bold text-primary">{review.name}</h4>
                          <p className="text-[10px] text-secondary font-medium">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-on-tertiary-container">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs font-bold text-primary">{review.rating}.0</span>
                      </div>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed italic">"{review.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              {/* Location Card */}
              <div className="bg-surface-container-lowest p-8 rounded-[32px] border border-outline-variant shadow-sm">
                <h3 className="font-headline font-bold text-primary mb-6 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-on-tertiary-container" />
                  Location & Hours
                </h3>
                <div className="aspect-video rounded-2xl bg-surface-container-low mb-6 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" alt="Map" className="w-full h-full object-cover opacity-50 grayscale" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 animate-bounce">
                      <MapPin className="w-5 h-5 text-surface" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary font-medium">Monday - Friday</span>
                    <span className="text-primary font-bold">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary font-medium">Saturday</span>
                    <span className="text-primary font-bold">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary font-medium">Sunday</span>
                    <span className="text-on-tertiary-container font-bold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Trust Card */}
              <div className="bg-primary rounded-[32px] p-8 text-surface relative overflow-hidden">
                <ShieldCheck className="w-12 h-12 text-on-tertiary-container mb-6" />
                <h3 className="text-2xl font-headline font-bold mb-4">GarageConnect Guarantee</h3>
                <p className="text-sm text-surface/60 leading-relaxed mb-8">
                  Every service booked through our platform is backed by our quality guarantee and dedicated concierge support.
                </p>
                <ul className="space-y-3 text-xs font-medium text-surface/80">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full" />
                    Verified Master Technicians
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full" />
                    Transparent Digital Invoicing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full" />
                    Complimentary Vehicle Health Check
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
