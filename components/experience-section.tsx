"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "MetaSketch Pvt Ltd",
    role: "Full Stack Developer",
    duration: "2024 - Present",
    location: "Remote",
    type: "Internship",
    description: "Developing scalable web applications and contributing to SaaS product development. Working with modern tech stack including React, Node.js, and cloud services.",
    achievements: [
      "Built responsive web applications serving 1000+ users",
      "Implemented secure payment integration with Stripe",
      "Optimized database queries reducing load time by 40%"
    ],
    color: "from-blue-500 to-purple-500"
  },
  {
    company: "Supraja Technologies",
    role: "Cybersecurity Intern",
    duration: "2024",
    location: "Hybrid",
    type: "Internship", 
    description: "Focused on web security, penetration testing, and threat detection. Gained hands-on experience in identifying and mitigating security vulnerabilities.",
    achievements: [
      "Conducted security audits for 10+ web applications",
      "Identified and reported critical security vulnerabilities",
      "Developed automated security testing scripts"
    ],
    color: "from-red-500 to-pink-500"
  },
  {
    company: "NIELIT",
    role: "AI/ML Intern",
    duration: "2023",
    location: "On-site",
    type: "Training Program",
    description: "Intensive training program focusing on machine learning algorithms, data analysis, and AI model development. Worked on real-world projects and research.",
    achievements: [
      "Developed ML models with 95% accuracy",
      "Completed 3 research projects on computer vision",
      "Presented findings to industry professionals"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey and hands-on experience in technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10"></div>
                
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Building className="w-4 h-4 text-muted-foreground" />
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                              {exp.company}
                            </h3>
                          </div>
                          <h4 className="text-primary font-medium mb-1">{exp.role}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h5 className="text-sm font-semibold mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}