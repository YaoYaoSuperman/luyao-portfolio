"use client"

import { motion } from "framer-motion"
import { Rocket, Cpu, Wand2, Shield, ExternalLink, Github } from "lucide-react"
import { config } from "@/config/links"

export default function Projects() {
  const project = config.projects[0]

  const iconMap = {
    Wand2,
    Cpu,
    Rocket,
    Shield,
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
    <section className="py-20 px-4">
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
          重点项目
        </motion.h2>

        <motion.div
          variants={item}
          className="bento-item relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-electric-blue/20 via-neon-purple/20 to-transparent rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
          
          <div className="relative">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary bg-opacity-30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 border border-electric-blue/30 text-xs font-semibold text-electric-blue mb-2">
                    国家级创新项目
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm font-mono mb-6 italic">
              {project.titleEn}
            </p>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-400">角色:</span>
                <span className="text-sm text-white font-medium">
                  {project.role}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Role:</span>
                <span className="text-sm text-gray-300">
                  {project.roleEn}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-primary rounded-full" />
                项目描述
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-primary rounded-full" />
                技术栈
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.technologies.map((tech, index) => {
                  const TechIcon = iconMap[tech.icon as keyof typeof iconMap] || Shield
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group-hover:border-electric-blue/30"
                    >
                      <TechIcon className="w-5 h-5 text-electric-blue" />
                      <span className="text-sm text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm text-gray-400">
                {project.tags?.join(" · ") || "深度学习 · 计算机视觉 · 数字取证"}
              </span>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-electric-blue/30 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                <a
                  href={project.demoUrl || project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-sm text-white font-medium hover:shadow-lg hover:scale-105 transition-all"
                >
                  查看详情
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
