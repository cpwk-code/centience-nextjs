"use client";
'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Building2 } from "lucide-react";
import GoHighLevelForm from "@/components/GoHighLevelForm";

const ContactPage = () => {
  const locations = [
    {
      name: "New York City",
      address: "1350 Ave of the Americas, Fl 3",
      state: "NY",
    },
    {
      name: "White Plains",
      address: "333 Mamaroneck Avenue #431",
      state: "NY",
    },
    {
      name: "Miami",
      address: "200 S. Biscayne Blvd.",
      state: "FL",
    },
    {
      name: "Palm Beach Gardens",
      address: "4440 PGA Boulevard, Suite 600",
      state: "FL",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
            <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-5 py-2.5 mb-6"
            >
              <span className="text-gold font-semibold text-sm tracking-wide uppercase">
                Contact Us
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Have One of Our Experts{" "}
              <span className="text-gradient-gold">Contact You</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tell us a little bit about yourself, your business & project and a
              specialist will reach out to discuss.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:info@compuwork.ai"
              className="flex items-center gap-3 text-foreground hover:text-gold transition-colors group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <span className="font-medium">info@compuwork.ai</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+18779457177"
              className="flex items-center gap-3 text-foreground hover:text-gold transition-colors group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <span className="font-medium">877.945.7177</span>
            </motion.a>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <span className="font-medium">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Embedded Contact Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-4">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {/* Embedded Form Container */}
                <GoHighLevelForm 
                  formId="fKdKiUeseRfzVVr4yPYO"
                  formName="Website Contact Us Form"
                  height={795}
                />
              </div>
            </AnimatedSection>

            {/* Locations Sidebar */}
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-gold" />
                    Our Offices
                  </h3>
                  <div className="space-y-4">
                    {locations.map((location, index) => (
                      <motion.div
                        key={location.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-card border border-border rounded-xl p-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-gold" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">
                              {location.name}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {location.address}
                            </p>
                            <p className="text-gold text-sm font-medium">
                              {location.state}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-primary rounded-2xl p-6 text-primary-foreground"
                >
                  <h4 className="text-lg font-bold mb-3">Need Immediate Help?</h4>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Our 24/7 support team is ready to assist you with any urgent IT
                    issues.
                  </p>
                  <a
                    href="tel:+18779457177"
                    className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call 877.945.7177
                  </a>
                </motion.div>

                {/* Why Contact Us */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">
                    Why Partner With Us?
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "99%+ audit success rate",
                      "20+ years of compliance expertise",
                      "24/7 dedicated support",
                      "100+ satisfied clients",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-muted-foreground text-sm"
                      >
                        <div className="w-2 h-2 bg-gold rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
