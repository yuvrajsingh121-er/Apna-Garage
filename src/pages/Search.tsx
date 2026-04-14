import * as React from "react";
import { motion } from "motion/react";
import { Search as SearchIcon, MapPin, Star, Filter, SlidersHorizontal, ChevronDown, Heart, Map as MapIcon, List } from "lucide-react";
import { GARAGES } from "../data";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export const Search = () => {
  const [viewMode, setViewMode] = React.useState<"list" | "map">("list");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);

  const filteredGarages = GARAGES.filter(g => 
    g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-24 pb-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-headline font-extrabold text-primary mb-2 tracking-tight">
              Garages in <span className="text-on-tertiary-container italic">Greater London</span>
            </h1>
            <p className="text-secondary text-sm font-medium">Showing {filteredGarages.length} premium workshops near you</p>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant">
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
                viewMode === "list" ? "bg-primary text-surface shadow-lg shadow-primary/10" : "text-secondary hover:bg-surface"
              )}
            >
              <List className="w-4 h-4" />
              List
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
                viewMode === "map" ? "bg-primary text-surface shadow-lg shadow-primary/10" : "text-secondary hover:bg-surface"
              )}
            >
              <MapIcon className="w-4 h-4" />
              Map
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-surface-container-lowest p-8 rounded-[32px] border border-outline-variant shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-headline font-bold text-primary flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </h3>
                <button className="text-xs font-bold text-on-tertiary-container hover:underline">Clear All</button>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">Service Type</label>
                  <div className="space-y-3">
                    {["Maintenance", "Diagnostics", "Bodywork", "Tuning", "Detailing"].map((filter) => (
                      <label key={filter} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 border-2 border-outline-variant rounded-md flex items-center justify-center group-hover:border-primary transition-colors">
                          <div className="w-2.5 h-2.5 bg-primary rounded-sm opacity-0 group-hover:opacity-20 transition-opacity" />
                        </div>
                        <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">{filter}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="h-[1px] bg-outline-variant" />

                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">Price Range</label>
                  <div className="flex gap-2">
                    {["£", "££", "£££", "££££"].map((price) => (
                      <button key={price} className="flex-1 py-2 rounded-xl border border-outline-variant text-sm font-bold text-secondary hover:bg-primary hover:text-surface hover:border-primary transition-all">
                        {price}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-[1px] bg-outline-variant" />

                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">Rating</label>
                  <div className="space-y-3">
                    {[4.5, 4.0, 3.5].map((rating) => (
                      <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 border-2 border-outline-variant rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
                          <div className="w-2.5 h-2.5 bg-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                          {rating}+ <Star className="w-3 h-3 fill-current text-on-tertiary-container" />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-[32px] p-8 text-surface relative overflow-hidden">
              <h4 className="text-xl font-headline font-bold mb-4 relative z-10">Need Expert Advice?</h4>
              <p className="text-sm text-surface/60 mb-6 relative z-10 leading-relaxed">Our concierge team is ready to help you find the perfect workshop.</p>
              <button className="w-full bg-on-tertiary-container text-primary py-3 rounded-xl font-bold text-sm hover:bg-surface transition-all relative z-10">
                Chat with Concierge
              </button>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-surface/10 rounded-full blur-2xl" />
            </div>
          </aside>

          {/* Results Area */}
          <main className="lg:col-span-9">
            <div className="bg-surface-container-lowest p-4 rounded-[32px] border border-outline-variant mb-8 flex items-center gap-4 shadow-sm">
              <div className="flex-1 flex items-center gap-3 px-4 py-2">
                <SearchIcon className="w-5 h-5 text-secondary" />
                <input
                  type="text"
                  placeholder="Search by name, service or brand..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm w-full font-medium"
                />
              </div>
              <button className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl text-sm font-bold text-primary border border-outline-variant hover:bg-surface transition-all">
                <SlidersHorizontal className="w-4 h-4" />
                Sort: Recommended
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredGarages.map((garage, i) => (
                <motion.div
                  key={garage.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-surface-container-lowest rounded-[32px] overflow-hidden border border-outline-variant hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={garage.image}
                      alt={garage.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <button className="absolute top-6 right-6 p-3 bg-surface/20 backdrop-blur-md rounded-full border border-surface/30 text-surface hover:bg-on-tertiary-container hover:text-primary transition-all">
                      <Heart className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-6 left-6 flex gap-2">
                      {garage.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-primary/80 backdrop-blur-md text-surface text-[10px] font-bold px-3 py-1 rounded-full border border-surface/10 uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-headline font-bold text-primary mb-1 group-hover:text-on-tertiary-container transition-colors">
                          {garage.name}
                        </h3>
                        <div className="flex items-center gap-2 text-secondary text-xs font-medium">
                          <MapPin className="w-3 h-3" />
                          {garage.location} • {garage.distance}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1 text-on-tertiary-container mb-1">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-bold text-primary">{garage.rating}</span>
                        </div>
                        <span className="text-[10px] text-secondary font-bold">{garage.reviews} Reviews</span>
                      </div>
                    </div>
                    <p className="text-secondary text-sm mb-8 line-clamp-2 leading-relaxed">
                      {garage.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-outline-variant">
                      <span className="text-lg font-headline font-extrabold text-primary">{garage.priceRange}</span>
                      <Link
                        to={`/garage/${garage.id}`}
                        className="bg-primary text-surface px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary-container transition-all flex items-center gap-2"
                      >
                        Book Now
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
