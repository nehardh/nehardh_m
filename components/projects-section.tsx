"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Sparkles, Database, Shield } from 'lucide-react';

const projects = [
  {
    title: "AI Study Generator",
    description: "Intelligent study material generator using Gemini 2.0 API. Creates personalized study plans, flashcards, and practice questions based on learning objectives.",
    icon: Sparkles,
    tech: ["React", "Next.js", "Gemini API", "TypeScript", "Tailwind"],
    features: ["AI-powered content generation", "Personalized study plans", "Progress tracking"],
    githubUrl: "https://github.com/nehardh/skillsure.git",
    liveUrl: "https://skillsure.vercel.app/",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "MERN Notes App",
    description: "Full-stack notes application with real-time collaboration, rich text editing, and secure user authentication. Built for productivity and team collaboration.",
    icon: Database,
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    features: ["Real-time collaboration", "Rich text editor", "Secure authentication"],
    githubUrl: "https://github.com/nehardh/my-notes.git",
    liveUrl: "#",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Django CRM System",
    description: "Comprehensive Customer Relationship Management system with advanced analytics, automated workflows, and integrated communication tools.",
    icon: Shield,
    tech: ["Django", "Python", "PostgreSQL", "Redis", "Celery"],
    features: ["Advanced analytics", "Automated workflows", "Team collaboration"],
    githubUrl: "https://github.com/nehardh/Django_CRUD.git",
    liveUrl: "#",
    color: "from-blue-500 to-cyan-500"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}