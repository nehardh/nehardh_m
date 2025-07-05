"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Django", "REST APIs", "Inngest (Background Jobs)", "WebSockets"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Databases & Cloud",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Vercel", "Drizzle ORM"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "AI/ML & NLP",
    skills: ["Gemini 2.0 API", "Scikit-learn", "Prompt Engineering", "Machine Learning", "Data Analysis", "OpenAI API"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Cybersecurity",
    skills: ["Penetration Testing", "Web Threat Detection", "Network Security", "Security Auditing"],
    color: "from-red-500 to-rose-500"
  },
  {
    title: "Developer Tools & Platforms",
    skills: ["Git", "GitHub", "JIRA", "Agile Methodology", "Notion", "Clerk Auth"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Business & System Integration",
    skills: ["Stripe API", "System Architecture", "Database Design", "Payment Integration"],
    color: "from-yellow-500 to-amber-500"
  },
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C", "SQL"],
    color: "from-sky-500 to-indigo-500"
  },
  {
    title: "Soft Skills & Achievements",
    skills: ["Team Collaboration", "Quick Learner", "Hackathon Winner", "State-level Skater", "District-level Badminton Player"],
    color: "from-lime-500 to-emerald-500"
  }
];



export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, secure, and scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-3`}></div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}