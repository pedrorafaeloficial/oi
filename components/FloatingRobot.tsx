'use client'

import { SplineScene } from "@/components/ui/spline";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export function FloatingRobot() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-8 right-8 z-50 w-40 h-40 md:w-48 md:h-48 bg-transparent pointer-events-none"
    >
      <div className="relative w-full h-full pointer-events-auto group">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-white text-black rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-20"
        >
          <X size={16} />
        </button>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10 animate-pulse" />
        
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </motion.div>
  )
}
