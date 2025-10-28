import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Activity, Users, Star, ArrowRight } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";

const LandingPage = () => {
  const [, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Heart,
      title: "AI-Powered Assessment",
      description:
        "Advanced machine learning algorithms analyze multiple health parameters to provide accurate risk assessments.",
      color: "bg-red-500",
    },
    {
      icon: Shield,
      title: "Real-time Monitoring",
      description:
        "Continuous monitoring and instant alerts help ensure the safety of both mother and baby.",
      color: "bg-blue-500",
    },
    {
      icon: Activity,
      title: "Health Analytics",
      description:
        "Comprehensive health data analysis provides insights for better prenatal care decisions.",
      color: "bg-green-500",
    },
    {
      icon: Users,
      title: "Healthcare Integration",
      description:
        "Seamlessly integrates with existing healthcare systems for streamlined patient care.",
      color: "bg-purple-500",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Obstetrician",
      content:
        "This system has revolutionized how we monitor high-risk pregnancies. The early detection capabilities are remarkable.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Expectant Mother",
      content:
        "Having this monitoring system gave me peace of mind throughout my pregnancy. The alerts helped catch potential issues early.",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Maternal-Fetal Medicine",
      content:
        "The accuracy and reliability of this AI system have significantly improved our patient outcomes.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "10,000+", label: "Pregnancies Monitored" },
    { number: "98%", label: "Accuracy Rate" },
    { number: "500+", label: "Healthcare Partners" },
    { number: "24/7", label: "Monitoring Support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="gradient-bg pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Advanced{" "}
                <span className="text-primary-600">Pregnancy Risk</span>{" "}
                Assessment
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Empowering healthcare providers with AI-driven insights for
                safer pregnancies. Monitor, analyze, and respond to potential
                risks in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="group">
                  Start Assessment
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Pregnancy care"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary-600 text-white p-4 rounded-xl shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-6 h-6" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary-600 text-white p-4 rounded-xl shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Shield className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Care Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our advanced system combines cutting-edge technology with medical
              expertise to provide the most reliable pregnancy monitoring
              solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setActiveFeature(index)}
              >
                <Card className="text-center h-full hover:scale-105 cursor-pointer">
                  <div
                    className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what medical experts and patients say about our system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Pregnancy Care?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare providers who trust our AI-powered
              system for safer pregnancies and better outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
