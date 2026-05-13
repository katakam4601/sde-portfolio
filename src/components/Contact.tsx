"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

import { resumeData } from "@/data/resume";

export function Contact() {
  const contactItems = [
    { icon: Mail, label: "Email", value: resumeData.contact.email, href: `mailto:${resumeData.contact.email}` },
    { icon: Phone, label: "Phone", value: resumeData.contact.phone, href: `tel:${resumeData.contact.phone}` },
    { icon: GithubIcon, label: "GitHub", value: "github.com/katakam4601", href: resumeData.contact.github },
    { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/sai-kumar-katakam-821552209", href: resumeData.contact.linkedin },
  ];

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Let&apos;s Build Something <span className="gradient-text">Great</span></h2>
        <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
          Currently looking for Software Development opportunities. Feel free to reach out if you&apos;re interested in working together or just want to say hi!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-6 rounded-3xl bg-card-bg border border-border-color hover:border-primary/30 hover:scale-[1.02] transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-color py-12">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8 py-0">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold font-heading gradient-text mb-2">{resumeData.name}</p>
          <p className="text-sm text-muted">© 2026 • SDE Portfolio</p>
        </div>
        
        <div className="flex space-x-6">
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href={`mailto:${resumeData.contact.email}`} className="text-muted hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
