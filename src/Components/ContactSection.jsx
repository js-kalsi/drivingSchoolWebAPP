import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import consts from "../consts";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
    const { name, email, phone, service, message } = formData;

    const response = await fetch("./send_email.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, service, message }),
    });

    const result = await response.json();
    if (result.success) {
      console.log("Email sent!");
    } else {
      console.log("Failed to send email.");
    }
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: consts.PHONE,
      description: "Available 7 days a week",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: consts.EMAIL,
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Ottawa & Surrounding Areas",
      description: "Free pick-up & drop-off",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: "Mon-Sun: 8 AM - 8 PM",
      description: "Flexible scheduling available",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-rose-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your driving journey? Contact us today to book your
            first lesson or ask any questions you may have.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-rose-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-rose-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h4>
                          <p className="font-medium text-gray-900 mb-1">
                            {info.content}
                          </p>
                          <p className="text-sm text-gray-600">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-rose-100 to-rose-50 rounded-xl h-64 flex items-center justify-center border border-rose-200">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-rose-600 mx-auto mb-2" />
                  <p className="text-rose-800 font-medium">Service Area</p>
                  <p className="text-sm text-rose-600">
                    Ottawa & Surrounding GTA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 font-serif">
                  Book Your First Lesson
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for your interest. We'll contact you within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="(647) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="g2-prep">
                            G2 Road Test Preparation
                          </SelectItem>
                          <SelectItem value="g-prep">
                            G Road Test Preparation
                          </SelectItem>
                          <SelectItem value="beginner">
                            Beginner Driver Education
                          </SelectItem>
                          <SelectItem value="refresher">
                            Refresher Course
                          </SelectItem>
                          <SelectItem value="defensive">
                            Defensive Driving
                          </SelectItem>
                          <SelectItem value="package">Package Deal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your driving experience and goals..."
                        className="h-32"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-rose-700 hover:bg-rose-800 text-white py-3 font-semibold"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
