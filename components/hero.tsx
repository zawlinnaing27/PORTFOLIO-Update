"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Animated text
  const words = ["Backend Developer", "Full Stack Developer ", "Creative Coder"]

  return (
    <section
      id="home"
      ref={targetRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Space background */}
      <div className="absolute inset-0 bg-[#050816]">
        {/* Animated stars */}
        <StarField />

        {/* Nebula effect */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
            y,
          }}
        />

        {/* Orbital rings */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <OrbitalRings />
        </div>
      </div>

      {/* Content */}
      <motion.div className="relative z-10 max-w-5xl mx-auto px-4 text-center" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-400/20 backdrop-blur-sm bg-white/5">
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-600">
            <img src="/image.jpg" alt="Key" className="w-full h-full object-cover" />
            
            </div>

            {/* Animated ring */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="302"
                strokeDashoffset="302"
                className="animate-[dash_2s_ease-in-out_forwards]"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatedText
              text="Hello, I'm Zaw Lin Naing"
              className="inline-block"
              highlightClass="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-600"
              highlightWords={["Hello,", "I'm"]}
            />
          </motion.h1>
        </div>

        <div className="h-16 mb-8">
          <AnimatePresence mode="wait">
            <TypingAnimation words={words} />
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.span className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-cyan-500/50 to-violet-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-400/20 text-white font-medium transition-all hover:bg-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-400/20 text-white"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </motion.a>
      </motion.div>
    </section>
  )
}

// Animated text that reveals character by character
function AnimatedText({ text, className = "", highlightClass = "", highlightWords = [] }) {
  const words = text.split(" ")

  // Animation variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  // Animation variants for each character
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.div className={`inline-block ${className}`} variants={container} initial="hidden" animate="visible">
      {words.map((word, wordIndex) => {
        const shouldHighlight = highlightWords.includes(word)
        return (
          <span key={wordIndex} className="inline-block mr-2">
            <span className={shouldHighlight ? highlightClass : ""}>
              {word.split("").map((char, charIndex) => (
                <motion.span key={`${wordIndex}-${charIndex}`} variants={child} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          </span>
        )
      })}
    </motion.div>
  )
}

// Typing animation that cycles through words
function TypingAnimation({ words }) {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <motion.div
      key={currentWord}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl text-white/80 font-light"
    >
      {words[currentWord]}
    </motion.div>
  )
}

// Star field animation
function StarField() {
  const stars = Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    blinkDuration: Math.random() * 5 + 3,
  }))

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: star.blinkDuration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Shooting stars */}
      <ShootingStars />
    </div>
  )
}

// Shooting stars animation
function ShootingStars() {
  const shootingStars = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 50,
    length: Math.random() * 150 + 50,
    angle: Math.random() * 60 - 30,
    delay: Math.random() * 10 + i * 2,
  }))

  return (
    <>
      {shootingStars.map((star) => {
        const angle = star.angle * (Math.PI / 180)
        const endX = star.startX + Math.cos(angle) * star.length
        const endY = star.startY + Math.sin(angle) * star.length

        return (
          <motion.div
            key={star.id}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-white"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              width: 0,
              rotate: `${star.angle}deg`,
              originX: 0,
              originY: 0,
            }}
            animate={{
              width: [0, star.length, 0],
              opacity: [0, 1, 0],
              x: [0, star.length * 0.8, star.length],
              boxShadow: [
                "0 0 0px rgba(56, 189, 248, 0)",
                "0 0 3px rgba(56, 189, 248, 0.8)",
                "0 0 0px rgba(56, 189, 248, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: star.delay,
              ease: "easeOut",
              delay: star.delay,
              times: [0, 0.8, 1],
            }}
          />
        )
      })}
    </>
  )
}

// Orbital rings animation
function OrbitalRings() {
  return (
    <div className="relative w-[800px] h-[800px]">
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-cyan-500/20"
          style={{
            width: `${ring * 200}px`,
            height: `${ring * 200}px`,
            left: `calc(50% - ${ring * 100}px)`,
            top: `calc(50% - ${ring * 100}px)`,
          }}
          animate={{
            rotate: 360 * (ring % 2 === 0 ? -1 : 1),
          }}
          transition={{
            duration: 20 + ring * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {/* Orbital objects */}
          <motion.div
            className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${
              ring === 1
                ? "from-cyan-400 to-blue-500"
                : ring === 2
                  ? "from-violet-500 to-purple-600"
                  : "from-pink-500 to-rose-600"
            }`}
            style={{
              left: `calc(50% - 8px)`,
              top: `-8px`,
            }}
            animate={{
              boxShadow: [
                `0 0 5px ${ring === 1 ? "#38BDF8" : ring === 2 ? "#8B5CF6" : "#EC4899"}`,
                `0 0 20px ${ring === 1 ? "#38BDF8" : ring === 2 ? "#8B5CF6" : "#EC4899"}`,
                `0 0 5px ${ring === 1 ? "#38BDF8" : ring === 2 ? "#8B5CF6" : "#EC4899"}`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

