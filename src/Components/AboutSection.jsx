import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Award, Clock, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const achievements = [
    { icon: Users, number: "500+", label: "Students Trained" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Shield, number: "95%", label: "First-Time Pass Rate" },
    { icon: Star, number: "4.9/5", label: "Average Rating" }
  ];

  const certifications = [
    "Ministry of Transportation (MTO) Certified",
    "Defensive Driving Specialist",
    "Road Safety Instructor",
    "Vehicle Safety Inspector"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Punjab Driving School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience, we've helped hundreds of students become 
            safe, confident drivers. Our commitment to excellence and safety sets us apart.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069" 
                alt="Driving instructor teaching student"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Professional. Safe. Reliable.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Punjab Driving School has been serving the Greater Toronto Area with 
                professional driving instruction since 2008. We believe that learning 
                to drive should be a positive, stress-free experience that builds 
                confidence and promotes road safety.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Our Certifications</h4>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To provide the highest quality driving education that promotes road safety, 
                builds driver confidence, and helps students pass their road tests successfully 
                on the first attempt.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}