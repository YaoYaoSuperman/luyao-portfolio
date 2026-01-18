"use client"

import { motion } from "framer-motion"
import { Mail, Github, Heart, Sparkles } from "lucide-react"
import { config } from "@/config/links"

export default function Footer() {
  const { email, github } = config

  return (
    <footer id="contact" className="py-16 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-sm text-gray-300">联系方式</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            联系我
          </h2>

          <p className="text-gray-400 mb-10 text-lg">
            欢迎与我交流 AI 研究、学术合作或职业机会
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl glass glass-hover w-full sm:w-auto justify-center sm:justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary bg-opacity-30 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400">Email</div>
                <div className="text-white font-medium">{email}</div>
              </div>
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl glass glass-hover w-full sm:w-auto justify-center sm:justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-30 flex items-center justify-center">
                <Github className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400">GitHub</div>
                <div className="text-white font-medium">@{github.split('/').pop()}</div>
              </div>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <span>© 2026 {config.name}. Built for Future of AI.</span>
              <Heart className="w-4 h-4 text-neon-purple" />
            </p>
            <p className="text-gray-600 text-xs mt-2">
              专注于人工智能的未来探索
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
