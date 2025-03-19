"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform built with Next.js and Stripe integration.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Bootstrap", "Tailwind CSS", "Laravel"],
    liveLink: "#",
    githubLink: "#",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "Student Management System",
    description: "A drag-and-drop task management application with user authentication.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue", "Firebase", "Tailwind CSS", "Laravel"],
    liveLink: "#",
    githubLink: "#",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A creative portfolio website for a photographer with image gallery.",
    image: "/portfolio.png?height=600&width=800",
    tags: ["Next.js", "GSAP", "Sanity CMS"],
    liveLink: "#",
    githubLink: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "Skill Assessment System",
    description: "An AI-powered application that generates content based on user prompts.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "OpenAI API", "Node.js"],
    liveLink: "#",
    githubLink: "#",
    color: "from-violet-600 to-fuchsia-500",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#050816]">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#050816] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050816] to-transparent" />
      </div>

      {/* Space background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 70%), radial-gradient(circle at 70% 70%, rgba(124, 58, 237, 0.3) 0%, transparent 70%)",
            y,
          }}
        />

        <SpaceGrid />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={ref} style={{ opacity }} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-600"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Here are some of my recent projects. Each project reflects my skills and expertise in different
              technologies.
            </motion.p>
          </div>

          <div className="relative">
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 pointer-events-none">
              <motion.button
                onClick={prevProject}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-400/20 flex items-center justify-center pointer-events-auto"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </motion.button>
              <motion.button
                onClick={nextProject}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-400/20 flex items-center justify-center pointer-events-auto"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </motion.button>
            </div>

            <div className="relative h-[600px] overflow-hidden rounded-2xl border border-cyan-400/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={projects[activeIndex].image || "/placeholder.svg"}
                        alt={projects[activeIndex].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent lg:via-[#050816]/30 lg:to-transparent" />

                      {/* Animated overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 opacity-0 transition-opacity duration-700"
                        animate={{ opacity: [0, 0.2, 0] }}
                        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>

                    <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12">
                      <div className={`h-1 w-20 mb-6 rounded-full bg-gradient-to-r ${projects[activeIndex].color}`} />
                      <h3 className="text-3xl font-bold mb-4">{projects[activeIndex].title}</h3>
                      <p className="text-white/70 mb-6">{projects[activeIndex].description}</p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {projects[activeIndex].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-cyan-400/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {/* <motion.a
                          href={projects[activeIndex].liveLink}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-400/20 text-sm"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={projects[activeIndex].githubLink}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-400/20 text-sm"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </motion.a> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-gradient-to-r from-cyan-400 to-violet-600 w-8" : "bg-white/30"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Space grid animation
function SpaceGrid() {
  return (
    <div className="absolute inset-0">
      {/* Horizontal lines */}
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={`h-${index}`}
          className="absolute left-0 right-0 h-[1px] bg-cyan-500/10"
          style={{ top: `${(index + 1) * 10}%` }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: index * 0.2,
          }}
        />
      ))}

      {/* Vertical lines */}
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={`v-${index}`}
          className="absolute top-0 bottom-0 w-[1px] bg-violet-500/10"
          style={{ left: `${(index + 1) * 10}%` }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: index * 0.2,
          }}
        />
      ))}

      {/* Grid points */}
      {Array.from({ length: 9 }).map((_, rowIndex) =>
        Array.from({ length: 9 }).map((_, colIndex) => (
          <motion.div
            key={`p-${rowIndex}-${colIndex}`}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            style={{
              left: `${(colIndex + 1) * 10}%`,
              top: `${(rowIndex + 1) * 10}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: (rowIndex + colIndex) * 0.1,
            }}
          />
        )),
      )}
    </div>
  )
}

