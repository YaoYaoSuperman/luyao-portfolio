"use client"

import { motion } from "framer-motion"
import { FileText, Award, ExternalLink, BookOpen } from "lucide-react"
import { config } from "@/config/links"

export default function Papers() {
  const papers = config.papers

  const iconMap = {
    1: FileText,
    2: BookOpen,
  }

  const colorMap = {
    1: "from-blue-500 to-cyan-500",
    2: "from-purple-500 to-pink-500",
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="research" className="py-20 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
        >
          精选论文
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {papers.map((paper) => {
            const PaperIcon = iconMap[paper.id as keyof typeof iconMap] || FileText
            const color = colorMap[paper.id as keyof typeof colorMap] || "from-blue-500 to-cyan-500"
            
            return (
              <a
                key={paper.id}
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  variants={item}
                  className="bento-item group relative overflow-hidden h-full"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} bg-opacity-20 flex items-center justify-center`}>
                        <PaperIcon className="w-6 h-6 text-white" />
                      </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Award className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs text-gray-300">已发表</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3 font-mono">
                  {paper.titleEn}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  <span className="text-sm font-semibold text-electric-blue">
                    {paper.journal}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-400">作者角色:</span>
                    <span className="text-sm text-white font-medium">
                      {paper.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Author Role:</span>
                    <span className="text-sm text-gray-300">
                      {paper.roleEn}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {paper.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Click to view paper →
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-electric-blue transition-colors" />
                </div>
                  </div>
                </motion.div>
              </a>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
