"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Code, Zap, Star, Target } from 'lucide-react';

const achievements = [
  {
    category: "Competitions",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    items: [
      {
        title: "1st Place - Cybersecurity Hackathon",
        description: "Led team to victory in national cybersecurity competition",
        year: "2024"
      },
      {
        title: "CodeChef Rating: 1100+",
        description: "Solved 100+ competitive programming problems",
        year: "2023-2024"
      }
    ]
  },
  {
    category: "Certifications",
    icon: Award,
    color: "from-blue-500 to-purple-500",
    items: [
      {
        title: "Apna College Full Stack Development",
        description: "Comprehensive web development certification",
        year: "2024"
      },
      {
        title: "NIELIT AI/ML Certification",
        description: "Machine learning and artificial intelligence",
        year: "2023"
      },
      {
        title: "AWS Cloud Essentials",
        description: "AWS Cloud Essentials Certification",
        year: "2024"
      }
    ]
  },
  {
    category: "Sports",
    icon: Star,
    color: "from-green-500 to-emerald-500",
    items: [
      {
        title: "State Level Skating Champion",
        description: "Gold medal in state skating championship",
        year: "2016"
      },
      {
        title: "District Badminton Tournament",
        description: "Silver medal in district level competition",
        year: "2018"
      },
      {
        title: "Intercollege Badminton Tournament",
        description: "Gold medal in intercollege badminton tournament, representing my college",
        year: "2023"
      }
    ]
  }
];

const stats = [
  { label: "Projects Completed", value: "15+", icon: Code },
  { label: "Hackathons Won", value: "3", icon: Trophy },
  { label: "Certifications", value: "8", icon: Award },
  { label: "Open Source Contributions", value: "50+", icon: Star }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones in technology, competition, and personal growth
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {achievements.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} shadow-lg mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {category.category}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                          viewport={{ once: true }}
                          className="border-l-2 border-primary/20 pl-4 hover:border-primary/50 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-sm leading-tight">{item.title}</h4>
                            <Badge variant="outline" className="text-xs ml-2 flex-shrink-0">
                              {item.year}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
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