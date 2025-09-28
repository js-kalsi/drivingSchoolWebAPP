
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, MapPin, Clock, Users, CheckCircle, Award, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: Car,
      title: "G2 Road Test Preparation",
      description: "Comprehensive preparation for your G2 road test with mock tests and practice routes.",
      features: ["Mock road tests", "Test route familiarity", "Parallel parking", "3-point turns"],
      popular: true,
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      iconBg: "bg-rose-100"
    },
    {
      icon: MapPin,
      title: "G Road Test Preparation", 
      description: "Advanced highway driving skills and preparation for your full G license test.",
      features: ["Highway merging", "Lane changes", "Speed control", "Advanced maneuvers"],
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
      iconBg: "bg-amber-100"
    },
    {
      icon: Users,
      title: "Beginner Driver Education",
      description: "Complete beginner course from basics to advanced driving skills.",
      features: ["Vehicle controls", "Traffic rules", "Safety practices", "Confidence building"],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      iconBg: "bg-emerald-100"
    },
    {
      icon: Clock,
      title: "Refresher Courses",
      description: "Perfect for experienced drivers who need to brush up on their skills.",
      features: ["Skill assessment", "Updated rules", "Confidence boost", "Custom lessons"],
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      iconBg: "bg-violet-100"
    },
    {
      icon: CheckCircle,
      title: "Defensive Driving",
      description: "Learn advanced defensive driving techniques for safer road navigation.",
      features: ["Hazard perception", "Emergency braking", "Weather driving", "Risk assessment"],
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: Award,
      title: "Package Deals",
      description: "Cost-effective lesson packages tailored to your learning needs.",
      features: ["Flexible scheduling", "Progress tracking", "Multiple instructors", "Best value"],
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
      iconBg: "bg-indigo-100"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-rose-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-60 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-lg border border-rose-100 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
            <span className="text-rose-700 font-medium text-sm">Professional Training</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            <span className="text-gray-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600">
              Driving Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional driving instruction tailored to your needs. From complete beginners 
            to road test preparation, we've got you covered with excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg overflow-hidden relative bg-white/80 backdrop-blur-sm hover:scale-105">
                {/* Gradient top border */}
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>
                
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 mt-[50px]">
                      <Star className="w-4 h-4 text-yellow-200" />
                      <span className="text-sm font-bold whitespace-nowrap">Most Popular</span>
                    </div>
                  </div>
                )}
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 ${service.iconBg} rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 font-serif group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center group-hover/item:bg-green-200 transition-colors duration-200">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700 group-hover/item:text-gray-800 transition-colors duration-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Subtle hover effect overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-5xl mx-auto overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-4 left-4 w-32 h-32 border-2 border-rose-300 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-amber-300 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gray-300 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
                Why Choose Our Services?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: Award, 
                    title: "Certified Instructors", 
                    desc: "All our instructors are MTO certified and experienced",
                    color: "from-green-500 to-emerald-600",
                    bgColor: "bg-green-50"
                  },
                  { 
                    icon: Car, 
                    title: "Modern Vehicles", 
                    desc: "Well-maintained, safe vehicles for all lessons",
                    color: "from-rose-500 to-pink-600",
                    bgColor: "bg-rose-50"
                  },
                  { 
                    icon: Clock, 
                    title: "Flexible Scheduling", 
                    desc: "Lessons available 7 days a week to fit your schedule",
                    color: "from-purple-500 to-violet-600",
                    bgColor: "bg-purple-50"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 relative overflow-hidden group-hover:shadow-xl transition-shadow duration-300`}>
                      <item.icon className="w-8 h-8 text-gray-700 relative z-10 group-hover:text-white transition-colors duration-300" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg font-serif">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
