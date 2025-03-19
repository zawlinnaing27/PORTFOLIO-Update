"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "Booststrap", level: 75 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Vue", level: 80 },
    ],
  },
  // {
  //   category: "Design",
  //   items: [
  //     { name: "UI/UX Design", level: 85 },
  //     { name: "Figma", level: 80 },
  //     { name: "Tailwind CSS", level: 90 },
  //     { name: "Framer Motion", level: 85 },
  //     { name: "GSAP", level: 70 },
  //   ],
  // },
  {
    category: "Backend",
    items: [
      { name: "PHP", level: 75 },
      { name: "Laravel", level: 70 },
      { name: "Mysql", level: 65 },
      { name: "Firebase", level: 75 },
      { name: "REST APIs", level: 80 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            >
              My Skills
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              I've worked with a variety of technologies in the web development world. Here's an overview of my
              technical skills and proficiency levels.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  {skillGroup.category}
                </h3>

                <div className="space-y-6">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: groupIndex * 0.2 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-white/50">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: groupIndex * 0.2 + index * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            groupIndex === 0
                              ? "from-purple-500 to-pink-500"
                              : groupIndex === 1
                                ? "from-blue-500 to-cyan-500"
                                : "from-amber-500 to-red-500"
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

