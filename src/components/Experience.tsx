"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-black/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-heading mb-4">Professional Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        {resumeData.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="mb-12 relative pl-12 before:absolute before:left-5 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-transparent"
          >
            {/* Timeline Icon */}
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary z-10 bg-background">
              <Briefcase className="w-5 h-5" />
            </div>

            <div className="glass p-8 rounded-2xl border border-white/5 shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading">{exp.role}</h3>
                  <p className="text-primary font-semibold text-lg">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end text-sm text-muted mt-2 md:mt-0">
                  <span className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.highlights.map((highlight, j) => (
                  <li key={j} className="flex items-start space-x-3 group">
                    <div className="mt-1.5">
                      <CheckCircle2 className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-muted leading-relaxed group-hover:text-foreground transition-colors">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
