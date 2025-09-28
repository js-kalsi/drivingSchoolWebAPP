import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Car, Zap, Crown, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const packages = [
    {
      name: "Single Lesson",
      price: "$60",
      duration: "90 minutes",
      description: "Perfect for refreshers or specific skill practice",
      features: [
        "90-minute lesson",
        "Certified instructor",
        "Pick-up & drop-off",
        "Progress report"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      icon: Car
    },
    {
      name: "Beginner Package",
      price: "$320",
      originalPrice: "$360",
      duration: "6 lessons",
      description: "Complete package for new drivers",
      features: [
        "6 x 90-minute lessons",
        "Theory & practical training",
        "Road test preparation",
        "Pick-up & drop-off",
        "Progress tracking",
        "Certificate of completion"
      ],
      popular: true,
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      iconColor: "text-rose-600",
      icon: Crown,
      savings: "Save $40"
    },
    {
      name: "Road Test Prep",
      price: "$480",
      originalPrice: "$540",
      duration: "10 lessons",
      description: "Intensive preparation for your road test",
      features: [
        "10 x 90-minute lessons",
        "Mock road tests",
        "Test route practice",
        "Parallel parking focus",
        "Highway driving",
        "Pick-up & drop-off",
        "Test day availability"
      ],
      popular: false,
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      iconColor: "text-purple-600",
      icon: Zap,
      savings: "Save $60"
    }
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-100 to-orange-100 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-lg border border-purple-100 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <span className="text-purple-700 font-medium text-sm">Best Value Packages</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            <span className="text-gray-900">Affordable </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-600 to-orange-600">
              Driving Packages
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the package that best fits your needs and budget. All packages include 
            certified instruction and flexible scheduling with guaranteed results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`relative h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm ${
                pkg.popular ? 'ring-2 ring-rose-400 scale-105 hover:scale-110' : 'hover:scale-105'
              }`}>
                {/* Gradient top border */}
                <div className={`h-1.5 bg-gradient-to-r ${pkg.gradient}`}></div>
                
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 mt-[50px]">
                      <Star className="w-4 h-4 text-yellow-200" />
                      <span className="text-sm font-bold whitespace-nowrap">Most Popular</span>
                    </div>
                  </div>
                )}

                {pkg.savings && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Gift className="w-3 h-3" />
                      <span className="text-xs font-bold">{pkg.savings}</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4 relative z-10 pt-8">
                  <div className="mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${pkg.bgGradient} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-white/50`}>
                      <pkg.icon className={`w-10 h-10 ${pkg.iconColor} group-hover:text-white transition-colors duration-300`} />
                      <div className={`absolute inset-0 bg-gradient-to-r ${pkg.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 font-serif mb-4">
                    {pkg.name}
                  </CardTitle>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-baseline justify-center gap-2">
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-400 line-through font-medium">
                          {pkg.originalPrice}
                        </span>
                      )}
                      <span className="text-5xl font-bold text-gray-900 font-serif">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{pkg.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center group-hover/item:bg-green-200 transition-colors duration-200 shadow-sm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-200 font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700' 
                        : `bg-gradient-to-r ${pkg.gradient} hover:shadow-lg`
                    } text-white border-0`}
                    onClick={scrollToContact}
                  >
                    Book This Package
                  </Button>
                </CardContent>
                
                {/* Subtle animation overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Package Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-5xl mx-auto overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-4 left-4 w-32 h-32 border-2 border-purple-300 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-rose-300 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gray-300 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
                Package Benefits & Guarantees
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: Car, 
                    title: "Free Pick-up & Drop-off", 
                    desc: "Convenient service within Ottawa area",
                    color: "from-blue-500 to-cyan-600",
                    bgColor: "bg-blue-50"
                  },
                  { 
                    icon: CheckCircle, 
                    title: "Flexible Scheduling", 
                    desc: "Book lessons that fit your schedule",
                    color: "from-green-500 to-emerald-600",
                    bgColor: "bg-green-50"
                  },
                  { 
                    icon: Star, 
                    title: "Progress Tracking", 
                    desc: "Detailed feedback and skill assessment",
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