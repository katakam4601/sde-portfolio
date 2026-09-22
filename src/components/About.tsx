"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Summary Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-heading mb-6 flex items-center space-x-3">
            <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Award className="w-5 h-5" />
            </span>
            <span>About Me</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-8">
            {resumeData.summary}
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-card-bg border border-border-color">
              <h4 className="text-primary font-bold text-2xl mb-1">3.5+</h4>
              <p className="text-xs uppercase tracking-wider text-muted">Years Exp</p>
            </div>
            <div className="p-4 rounded-xl bg-card-bg border border-border-color">
              <h4 className="text-secondary font-bold text-2xl mb-1">15+</h4>
              <p className="text-xs uppercase tracking-wider text-muted">Models Deployed</p>
            </div>
          </div>
        </motion.div>

        {/* Education Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-heading mb-6 flex items-center space-x-3">
            <span className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <GraduationCap className="w-5 h-5" />
            </span>
            <span>Education</span>
          </h2>
          <div className="space-y-6">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border-color">
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-secondary" />
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <p className="text-secondary font-medium mb-2">{edu.degree}</p>
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-muted mb-3">
                  {edu.location && (
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </span>
                  )}
                  {edu.duration && (
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.duration}</span>
                    </span>
                  )}
                  {edu.gpa && (
                    <span className="flex items-center space-x-1 font-semibold text-foreground">
                      <span>GPA: {edu.gpa}</span>
                    </span>
                  )}
                </div>
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, j) => (
                      <span key={j} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
