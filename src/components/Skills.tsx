"use client";

import { motion } from "framer-motion";
import { Code, Server, Cloud, Database, Cpu } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Skills() {
  const categories = [
    { title: "Languages", icon: Code, color: "text-blue-500", items: resumeData.skills.languages },
    { title: "Frameworks", icon: Server, color: "text-purple-500", items: resumeData.skills.frameworks },
    { title: "Cloud & DevOps", icon: Cloud, color: "text-sky-500", items: resumeData.skills.cloudDevOps },
    { title: "Databases", icon: Database, color: "text-emerald-500", items: resumeData.skills.databases },
    { title: "Core Concepts", icon: Cpu, color: "text-orange-500", items: resumeData.skills.concepts },
  ];

  return (
    <section id="skills" className="section-container bg-black/20">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold font-heading mb-4">Technical Toolbox</h2>
        <p className="text-muted max-w-2xl mx-auto">
          A comprehensive view of my technical expertise and the technologies I use to build robust software solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-card-bg border border-border-color hover:border-primary/30 transition-all group"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className={`p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform ${cat.color}`}>
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill, j) => (
                <span
                  key={j}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
