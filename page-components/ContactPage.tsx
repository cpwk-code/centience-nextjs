"use client";
import Layout from "@/components/Layout";
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
    <Layout>
      {/* Hero Section */}
      <section className="section-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
        <div className="container mx-auto relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact Us</p>
              <div className="gold-line" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
              Have One of Our Experts{" "}
              <span className="text-gradient-gold">Contact You</span>
            </h1>
            <p className="text-lg leading-relaxed opacity-70 max-w-2xl mx-auto">
              Tell us a little bit about yourself, your business &amp; project and a specialist will reach out to discuss.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:info@centience.ai"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium">info@centience.ai</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+18779457177"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium">877.945.7177</span>
            </motion.a>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Embedded Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="card-premium p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <GoHighLevelForm
                  formId="fKdKiUeseRfzVVr4yPYO"
                  formName="Website Contact Us Form"
                  height={795}
                />
              </div>
            </motion.div>

            {/* Locations Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="card-premium p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-primary mb-1">
                            {location.name}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {location.address}
                          </p>
                          <p className="text-accent text-sm font-medium">
                            {location.state}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="section-navy rounded-2xl p-6">
                <h4 className="text-lg font-display font-bold mb-3">Need Immediate Help?</h4>
                <p className="opacity-70 text-sm mb-4">
                  Our 24/7 support team is ready to assist you with any urgent IT issues.
                </p>
                <a
                  href="tel:+18779457177"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80 transition-opacity"
                >
                  <Phone className="w-5 h-5" />
                  Call 877.945.7177
                </a>
              </div>

              {/* Why Partner With Us */}
              <div className="card-premium p-6">
                <h4 className="font-display font-bold text-primary mb-4">
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
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
