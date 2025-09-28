
import React from "react";
import { Button } from "@/components/ui/button";
import { Car, Shield, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          playbackrate={0.2}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="./driving.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/30 via-transparent to-amber-900/20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-rose-700 to-rose-800 rounded-2xl flex items-center justify-center shadow-2xl border border-rose-600/30 backdrop-blur-sm">
              <Car className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
            <span className="text-white drop-shadow-2xl">Learn to Drive</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-200 to-amber-200 drop-shadow-lg">
              Safely & Confidently
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-rose-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light">
            Professional driving instruction with certified instructors. We'll help you pass your road test 
            and become a confident driver for life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-rose-700 to-rose-800 hover:from-rose-800 hover:to-rose-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-rose-600/30"
            >
              Book Your First Lesson
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/80 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-xl hover:border-white transition-all duration-300"
            >
              View Our Services
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Users, stat: "500+", label: "Students Trained" },
            { icon: Award, stat: "95%", label: "Pass Rate" },
            { icon: Shield, stat: "15+", label: "Years Experience" },
            { icon: Car, stat: "100%", label: "Satisfaction Rate" }
          ].map((item, index) => (
            <div key={index} className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-rose-100/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <item.icon className="w-6 h-6 text-rose-700" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white font-serif">{item.stat}</div>
              <div className="text-sm text-rose-100">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
