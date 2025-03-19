"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { FileText } from "lucide-react"

export default function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  const stats = [
    { value: "2+", label: "Years Experience" },
    // { value: "50+", label: "Projects Completed" },
    // { value: "20+", label: "Happy Clients" },
    // { value: "3", label: "Awards" },
  ]

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#050816]">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#050816] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050816] to-transparent" />
      </div>

      {/* Space elements */}
      <div className="absolute inset-0 pointer-events-none">
        <SpaceElements scrollProgress={scrollYProgress} />
      </div>

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-violet-500/10 blur-3xl"
          style={{ y: y2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div style={{ opacity }} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-600"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mb-8"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
              style={{ scale, rotate }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-cyan-400/20 group perspective">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <motion.div
                  className="relative h-full w-full transform-gpu transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('/image.jpg?height=1000&width=800')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-[#050816]/20 to-transparent" />

                {/* Animated overlay elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
                  >
                    <span className="text-white font-bold">View</span>
                  </motion.div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="w-32 h-32 bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-2xl flex flex-col items-center justify-center group hover:bg-white/10 transition-colors duration-300"
                  >
                    <CountUp
                      end={Number.parseInt(stat.value) || 0}
                      suffix={stat.value.includes("+") ? "+" : ""}
                      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-600"
                    />
                    <span className="text-sm text-white/70 mt-1 group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl font-bold mb-6"
              >
                Crafting digital experiences with passion and precision
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-white/70 mb-6"
              >
               I am a dedicated PHP developer with over 2+ year of experience specializing in
                Laravel. I began my journey at SecureLinkMM as part of the Team Support
                group, where I honed my foundational skills in web development and
                collaboration. Over time, I transitioned to a Mid-Level PHP Developer, taking
                on greater responsibilities in designing, developing, and maintaining scalable
                web applications.
                Currently, I am expanding my expertise by learning Vue.js and React.js, aiming
                to build dynamic and interactive front-end solutions that complement my back
                end proficiency. My experience demonstrates a commitment to continuous
                growth and delivering quality solutions in a collaborative environment.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-white/70 mb-8"
              >
                My approach combines technical expertise with an eye for design, ensuring that the websites I build are
                not only functional but also visually appealing and user-friendly. I'm constantly exploring new
                technologies and techniques to push the boundaries of what's possible on the web.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                <div className="space-y-1 group">
                  <h4 className="text-white/50 text-sm group-hover:text-cyan-400 transition-colors duration-300">
                    Name
                  </h4>
                  <p className="group-hover:text-white transition-colors duration-300">Zaw Lin Naing</p>
                </div>
                <div className="space-y-1 group">
                  <h4 className="text-white/50 text-sm group-hover:text-cyan-400 transition-colors duration-300">
                    Email
                  </h4>
                  <p className="group-hover:text-white transition-colors duration-300">zawlinnaing1234234@gmail.com</p>
                </div>
                <div className="space-y-1 group">
                  <h4 className="text-white/50 text-sm group-hover:text-cyan-400 transition-colors duration-300">
                    Location
                  </h4>
                  <p className="group-hover:text-white transition-colors duration-300">Naypyitaw</p>
                </div>
                <div className="space-y-1 group">
                  <h4 className="text-white/50 text-sm group-hover:text-cyan-400 transition-colors duration-300">
                    Availability
                  </h4>
                  <p className="group-hover:text-white transition-colors duration-300">Freelance / Full-time</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {/* <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium relative overflow-hidden group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Download CV
                  </span>
                  <motion.span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a> */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Space elements animation
function SpaceElements({ scrollProgress }) {
  const y = useTransform(scrollProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollProgress, [0, 0.5, 1], [0, 1, 0])

  // Generate constellation points
  const points = [
    { x: "20%", y: "20%" },
    { x: "80%", y: "15%" },
    { x: "65%", y: "50%" },
    { x: "30%", y: "60%" },
    { x: "50%", y: "85%" },
    { x: "75%", y: "75%" },
  ]

  return (
    <motion.div className="absolute inset-0" style={{ y, opacity }}>
      {/* Constellation points */}
      {points.map((point, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={{
            left: point.x,
            top: point.y,
            boxShadow: "0 0 10px rgba(56, 189, 248, 0.8)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: index * 0.5,
          }}
        />
      ))}

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Connect points with lines */}
        {points.map((point, index) => {
          if (index < points.length - 1) {
            return (
              <motion.line
                key={index}
                x1={point.x}
                y1={point.y}
                x2={points[index + 1].x}
                y2={points[index + 1].y}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                className="animate-pulse"
              />
            )
          }
          return null
        })}
      </svg>

      {/* Floating particles */}
      <FloatingParticles />
    </motion.div>
  )
}

// Floating particles animation
function FloatingParticles() {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }))

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400/30 to-violet-600/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: "0 0 5px rgba(56, 189, 248, 0.5)",
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}

// Animated counter component
function CountUp({ end, duration = 2, suffix = "", className = "" }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true })

  useEffect(() => {
    let startTime
    let animationFrame

    if (isInView) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return (
    <span ref={nodeRef} className={className}>
      {count}
      {suffix}
    </span>
  )
}

