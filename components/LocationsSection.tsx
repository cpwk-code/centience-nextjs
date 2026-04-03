"use client";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import floridaTeamImage from "@/assets/locations/florida-it-team.jpg";

const locationsWeServe = [
  { name: "Florida", link: "/locations/managed-it-services-florida" },
  { name: "New York", link: "/locations/managed-it-services-new-york" },
  { name: "Miami", link: "/locations/managed-it-services-miami" },
  { name: "Boca Raton", link: "/locations/managed-it-services-boca-raton" },
  { name: "West Palm Beach", link: "/locations/managed-it-services-west-palm-beach" },
];

const LocationsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Image */}
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img src={typeof floridaTeamImage === "string" ? floridaTeamImage : (floridaTeamImage as any).src}
                alt="Professional IT team serving businesses across the United States"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mt-4 flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-sm">Nationwide coverage across the United States</span>
            </div>
          </AnimatedSection>

          {/* Locations Grid */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-foreground mb-6">
              Locations We <span className="text-gradient-gold">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From Florida to New York, we provide on-site and remote IT support to businesses across the United States.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locationsWeServe.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {location.link !== "#" ? (
                    <Link href={location.link}
                      className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-gold/30 hover:shadow-md transition-all group"
                    >
                      <MapPin className="w-5 h-5 text-gold" />
                      <span className="font-medium text-foreground group-hover:text-gold transition-colors">{location.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-gold ml-auto transition-colors" />
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                      <MapPin className="w-5 h-5 text-gold" />
                      <span className="font-medium text-foreground">{location.name}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
