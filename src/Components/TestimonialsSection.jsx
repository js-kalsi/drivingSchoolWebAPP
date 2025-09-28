import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import consts from "../consts";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: "19",
      test: "G2 Road Test",
      rating: 5,
      text: `${consts.INSTRUCTOR.NAME} was an amazing instructor! He was so patient with me and helped me feel confident behind the wheel. Passed my G2 on the first try!`,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150"
    },
    {
      name: "Michael Chen",
      age: "25",
      test: "G Road Test",
      rating: 5,
      text: "Punjab Driving School helped me get my full license after moving to Canada. The highway driving lessons were exactly what I needed. Highly recommend!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150"
    },
    {
      name: "Priya Patel",
      age: "22",
      test: "G2 Road Test",
      rating: 5,
      text: "Jaswinder is the best! She made me feel so comfortable during lessons. Her parallel parking tips were a lifesaver for my road test.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150"
    },
    {
      name: "David Brown",
      age: "35",
      test: "Refresher Course",
      rating: 5,
      text: "Hadn't driven in 10 years and needed a refresher. Harpreet was professional and helped me regain my confidence quickly. Great service!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150"
    },
    {
      name: "Amanda Wilson",
      age: "18",
      test: "Beginner Package",
      rating: 5,
      text: "Started with zero driving experience and Punjab Driving School got me ready for my G2. The instructors are knowledgeable and supportive.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150"
    },
    {
      name: "Robert Singh",
      age: "28",
      test: "G Road Test",
      rating: 5,
      text: "Excellent driving school! They prepared me well for highway driving and merging. Passed my G test with flying colors. Thank you!",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=150"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students 
            have to say about their experience with Punjab Driving School.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100" />
                    <p className="text-gray-700 leading-relaxed pl-6">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Age {testimonial.age} • {testimonial.test}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Trusted by 500+ Students
            </h3>
            <p className="text-gray-600">
              Join hundreds of satisfied students who have successfully passed 
              their road tests with Punjab Driving School.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}