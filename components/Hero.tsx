"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent opacity-50" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-pulse-slow" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
        >
          <Sparkles className="w-4 h-4 text-electric-blue" />
          <span className="text-gray-300">欢迎来到我的 AI 研究世界</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Luyao</span>
          <br />
          <span className="text-white/90">卢瑶</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
        >
          有志 AI 研究员
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-8"
        >
          计算机视觉 & 自然语言处理
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 border border-white/10 mb-10"
        >
          <span className="text-electric-blue font-semibold">排名 1/148</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-300">石河子大学前 1%</span>
          <span className="text-gray-400">|</span>
          <span className="text-neon-purple font-semibold">国家奖学金获得者</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#research" className="btn-primary flex items-center gap-2">
            查看研究
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-secondary flex items-center gap-2">
            联系我
          </a>
          <button className="btn-secondary flex items-center gap-2">
            <Download className="w-4 h-4" />
            下载简历
          </button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-electric-blue rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
