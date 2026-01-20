"use client"

import { motion } from "framer-motion"
import { GraduationCap, Trophy, Brain, Zap } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: GraduationCap,
      label: "GPA",
      value: "4.16",
      suffix: "/5.0",
      color: "text-electric-blue",
    },
    {
      icon: Trophy,
      label: "排名",
      value: "1",
      suffix: "/148",
      color: "text-neon-purple",
    },
    {
      icon: Brain,
      label: "研究重点",
      value: "扩散模型",
      suffix: "& 轻量化 CNN",
      color: "text-pink-500",
    },
    {
      icon: Zap,
      label: "论文发表",
      value: "2",
      suffix: "篇",
      color: "text-cyan-400",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 px-6 md:px-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full"
      >
        <motion.h2
          variants={item}
          className="text-[4vw] md:text-4xl font-bold text-center mb-16 gradient-text"
        >
          关键数据
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bento-item group"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-primary bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-2xl text-gray-400 ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
