"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-slate-900" : "text-white";
  const iconColor = variant === "light" ? "#0d9488" : "#5eead4";

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Animated Icon */}
      <motion.div
        className="relative"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle with gradient */}
          <motion.circle
            cx="20"
            cy="20"
            r="18"
            stroke="url(#logo-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {/* Sparkle/Clean icon */}
          <motion.path
            d="M20 8L21.5 14.5L28 16L21.5 17.5L20 24L18.5 17.5L12 16L18.5 14.5L20 8Z"
            fill={iconColor}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.path
            d="M28 8L28.8 10.8L32 12L28.8 13.2L28 16L27.2 13.2L24 12L27.2 10.8L28 8Z"
            fill={iconColor}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.path
            d="M12 24L12.8 26.8L16 28L12.8 29.2L12 32L11.2 29.2L8 28L11.2 26.8L12 24Z"
            fill={iconColor}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#5eead4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-teal-400 opacity-0 blur-xl"
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <motion.span
          className={`text-xl font-bold font-serif ${textColor} leading-none`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Clean the World
        </motion.span>
        <motion.span
          className="text-xs text-teal-600 font-medium tracking-wider uppercase"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Premium Service
        </motion.span>
      </div>
    </Link>
  );
}
