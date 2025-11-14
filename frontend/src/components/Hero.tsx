"use client";

import Image from "next/image";
import { ShoppingBag, Truck, Tag, Clock, Sparkles } from 'lucide-react';
import { motion } from "motion/react";

const Hero = () => {
  // Variants للـ animations (بدون transition)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="flex min-h-[600px] items-center justify-center flex-col lg:flex-row gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.2,
            delayChildren: 0.1
          }}
        >
          
          {/* قسم الصورة */}
          <motion.div 
            className="w-full lg:w-1/2 flex-1"
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative w-full max-w-[500px] mx-auto aspect-876/965 rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/1.webp" 
                alt="Online Shopping Festival" 
                width={876}
                height={965}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              
              {/* شارة الخصم المتحركة */}
              <motion.div 
                className="absolute top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                40% OFF
              </motion.div>
              
              {/* تأثير اللمعان */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.div>
          </motion.div>

          {/* قسم المحتوى */}
          <motion.div 
            className="w-full lg:w-1/2 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
            variants={contentVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* العنوان الرئيسي */}
            <div className="space-y-3">
              <motion.span 
                className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0px 0px 0px rgba(147, 51, 234, 0)", "0px 0px 20px rgba(147, 51, 234, 0.3)", "0px 0px 0px rgba(147, 51, 234, 0)"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <Sparkles className="w-4 h-4 inline-block mr-2 animate-spin" />
                Big Shopping Festival
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Online Shopping
                <motion.span 
                  className="block text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-600 to-blue-600"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Festival
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Discover amazing deals and incredible discounts!
              </motion.p>
            </div>

            {/* المزايا */}
            <motion.div 
              className="w-full space-y-4"
              variants={containerVariants}
              transition={{
                staggerChildren: 0.1
              }}
            >
              <motion.div 
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="bg-red-100 p-3 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Tag className="w-6 h-6 text-red-500" />
                </motion.div>
                <div className="text-left flex-1">
                  <p className="text-lg">
                    Discount up to <motion.span 
                      className="text-2xl font-bold text-red-500 inline-block"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      40%
                    </motion.span>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Truck className="w-6 h-6 text-green-500" />
                  </motion.div>
                </div>
                <div className="text-left flex-1">
                  <p className="text-lg">
                    Free Shipping on Orders Over <span className="font-bold underline decoration-wavy decoration-green-500">200 DT</span>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-orange-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-orange-500 animate-spin" />
                </div>
                <div className="text-left flex-1">
                  <motion.p 
                    className="text-lg font-semibold text-orange-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ⏰ Limited Time Offer!
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* أزرار الإجراء */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button 
                className="bg-linear-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ShoppingBag className="w-5 h-5" />
                </motion.div>
                Shop Now
              </motion.button>
              
              <motion.button 
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-600 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Deals
              </motion.button>
            </motion.div>

            {/* معلومات إضافية */}
            <motion.div 
              className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.span 
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05, color: "#9333ea" }}
              >
                ✓ Free Returns within 30 Days
              </motion.span>
              <motion.span 
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05, color: "#9333ea" }}
              >
                ✓ 100% Secure Payment
              </motion.span>
              <motion.span 
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05, color: "#9333ea" }}
              >
                ✓ 24/7 Support
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;