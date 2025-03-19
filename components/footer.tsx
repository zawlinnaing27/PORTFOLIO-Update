"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, Instagram, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/zawlinnaing27", label: "GitHub" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Linkedin className="h-5 w-5" />, href: "www.linkedin.com/in/zaw-lin-naing-396602300", label: "LinkedIn" },
    // { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-white/10 pb-8 mb-8">
            <div>
              <motion.a
                href="#"
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                PORTFOLIO
              </motion.a>
              <p className="text-white/50 mt-4 max-w-md">
                Creating beautiful digital experiences with modern web technologies and thoughtful design.
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      y: -5,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white/50 text-sm"
            >
              © {new Date().getFullYear()} Zaw Lin Naing. All rights reserved.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/50 text-sm flex items-center mt-4 md:mt-0"
            >
              Made with <Heart className="h-4 w-4 text-pink-500 mx-1" /> using Next.js & Framer Motion
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

