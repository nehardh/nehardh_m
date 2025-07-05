"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText, Heart } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/nehardh",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/nehardh-madapuri-3b7a0b255/",
    color: "hover:text-blue-600"
  },
  {
    icon: Mail,
    label: "Email",
    url: "mailto:nehardh.madapuri@email.com",
    color: "hover:text-green-600"
  },
  {
    icon: FileText,
    label: "Resume",
    url: "https://drive.google.com/file/d/1CrHN2QGZ8A_c38PkGPyBLmbhZ1PL6vzz/view?usp=sharing",
    color: "hover:text-purple-600"
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Logo and tagline */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-2">
              Nehardh Madapuri
            </h3>
            <p className="text-muted-foreground">
              Building the future with code, security, and innovation
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className={`hover:bg-muted transition-all ${social.color}`}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="https://skillsure.vercel.app" className="hover:text-primary transition-colors">
              Personal Portfolio
            </a>
            <span>•</span>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
            <span>•</span>
            <a href="https://drive.google.com/file/d/1CrHN2QGZ8A_c38PkGPyBLmbhZ1PL6vzz/view?usp=sharing" target="_blank" className="hover:text-primary transition-colors">
              Resume
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              © {currentYear} Nehardh Madapuri.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}