"use client";
import { Linkedin } from "lucide-react";
import authorPhoto from "@/assets/author-orville-matias.png";

const BlogAuthorCard = () => {
  return (
    <div className="my-12 p-6 sm:p-8 bg-card border border-border rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start">
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
        <img
          src={typeof authorPhoto === "string" ? authorPhoto : (authorPhoto as any).src}
          alt="Orville Matias, Founder and CEO of Centience"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="text-center sm:text-left">
        <p className="text-sm text-muted-foreground mb-1">Article written by</p>
        <h3 className="text-xl font-bold text-foreground mb-2">Orville Matias</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Orville Matias is Founder &amp; CEO of Centience, an AI and Technology Governance firm for regulated industries. He has 20+ years of experience building and operating compliance programs for organizations under SEC, FINRA, and HIPAA oversight.
        </p>
        <div className="flex gap-3 justify-center sm:justify-start">
          <a href="https://www.linkedin.com/in/orvillematias/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthorCard;
