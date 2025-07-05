"use client";

import { motion } from 'framer-motion';
import { Code, Shield, Brain, Coffee, Zap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const interests = [
  { icon: Code, label: "Full Stack Development", color: "text-blue-500" },
  { icon: Shield, label: "Cybersecurity", color: "text-red-500" },
  { icon: Brain, label: "AI/ML", color: "text-purple-500" },
  { icon: Coffee, label: "Problem Solving", color: "text-amber-500" },
  { icon: Zap, label: "AR/VR", color: "text-green-500" },
  { icon: Target, label: "Continuous Learning", color: "text-orange-500" }
];

const facts = [
  { emoji: "🛼", text: "Skater" },
  { emoji: "🏸", text: "Badminton player" },
  { emoji: "🏆", text: "Hackathon winner" },
  { emoji: "⚡", text: "Quick learner" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Hello! I'm Nehardh</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year B.Tech student with a strong passion for building things that work at scale—whether it's a SaaS product, an AI-powered tool, or a secure web platform. I enjoy turning complex ideas into practical, real-world applications and constantly look for ways to improve both the systems I build and the skills I bring to the table. I'm curious by nature, love working with new technologies, and stay committed to learning and growing as a developer every step of the way.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about building robust, scalable solutions that genuinely make a difference. Whether it's developing full-stack applications, tackling cybersecurity challenges, or implementing AI/ML models, I enjoy turning complex problems into clean, efficient, and elegant code.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <span className="text-2xl">{fact.emoji}</span>
                  <span className="text-sm font-medium">{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-6">What I'm Passionate About</h4>
                <div className="grid grid-cols-1 gap-4">
                  {interests.map((interest, index) => {
                    const IconComponent = interest.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-muted group-hover:scale-110 transition-transform">
                          <IconComponent className={`w-5 h-5 ${interest.color}`} />
                        </div>
                        <span className="font-medium">{interest.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}