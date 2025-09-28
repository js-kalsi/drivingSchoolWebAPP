import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Clock, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function InstructorsSection() {
  const instructor = {
    name: "Rajinder Singh",
    title: "Senior Instructor & Founder",
    experience: "15+ Years",
    specialties: ["G2 & G Road Tests", "Highway Driving", "Defensive Driving", "Nervous Drivers"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
    description: "As the founder and head instructor of Punjab Driving School, Rajinder brings over 15 years of MTO-certified experience. His mission is to create safe, confident, and responsible drivers. Known for his patience and clear teaching style, he specializes in helping nervous students build confidence and has a near-perfect track record for first-time road test passes."
  };

  const qualifications = [
    { icon: Award, text: "MTO Certified Instructor" },
    { icon: ShieldCheck, text: "Defensive Driving Specialist" },
    { icon: Clock, text: "Over 15 Years Experience" },
    { icon: Users, text: "500+ Successful Students" }
  ];

  return (
    <section id="instructors" className="py-20 bg-gradient-to-br from-rose-50 to-white relative overflow-hidden">
       {/* Decorative background elements */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-lg border border-rose-100 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full"></div>
            <span className="text-rose-700 font-medium text-sm">Meet Your Expert Guide</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Our Head Instructor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from the best. Our certified, experienced instructor is dedicated to helping 
            you become a safe, confident driver for life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Instructor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative p-2 bg-gradient-to-br from-rose-200 via-white to-amber-100 rounded-3xl shadow-2xl">
              <img 
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-rose-700 to-rose-800 text-white p-6 rounded-2xl shadow-xl border-2 border-white/50">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  <span className="text-2xl font-bold">{instructor.rating}</span>
                </div>
                <div className="text-sm text-rose-100">Student Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Instructor Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                {instructor.name}
              </h3>
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600 font-semibold">{instructor.title}</p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {instructor.description}
            </p>

            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-lg font-serif">Key Qualifications:</h4>
              <div className="grid grid-cols-2 gap-4">
                {qualifications.map((qual, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-md border border-rose-50"
                  >
                    <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                      <qual.icon className="w-5 h-5 text-rose-700" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm">{qual.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 text-lg font-serif">Specialties:</h4>
              <div className="flex flex-wrap gap-3">
                {instructor.specialties.map((specialty, specialtyIndex) => (
                  <motion.div
                    key={specialtyIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + specialtyIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary"
                      className="text-sm font-medium bg-gradient-to-r from-rose-100 to-amber-100 text-rose-800 border border-rose-200/50 px-4 py-2 hover:shadow-lg transition-shadow"
                    >
                      {specialty}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}