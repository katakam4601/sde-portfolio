"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

import { resumeData } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <p className="text-muted max-w-xl">
            A selection of my technical work, focusing on distributed systems, cloud computing, and full-stack applications.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col bg-card-bg border border-border-color rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
          >
            {/* Project Header/Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative p-8 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Layers className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{project.year}</span>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((t, j) => (
                    <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="space-y-4 mb-6 flex-1">
                {project.highlights.map((h, j) => (
                  <p key={j} className="text-sm text-muted leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {h}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-border-color mt-auto flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-[10px] text-muted flex items-center space-x-1">
                    <Code2 className="w-3 h-3" />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
