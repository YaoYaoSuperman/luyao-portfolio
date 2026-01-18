"use client"

import { motion } from "framer-motion"
import { Trophy, Medal, Star, Award as AwardIcon } from "lucide-react"
import { config } from "@/config/links"

export default function Awards() {
  const awards = config.awards

  const iconMap = {
    Trophy,
    Medal,
    Award: AwardIcon,
    Star,
  }

  const colorMap = {
    1: "from-yellow-500 to-orange-500",
    2: "from-blue-500 to-indigo-500",
    3: "from-purple-500 to-pink-500",
    4: "from-cyan-500 to-blue-500",
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          荣誉与奖项
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award) => {
            const AwardIcon = iconMap[award.icon as keyof typeof iconMap] || Trophy
            const color = colorMap[award.id as keyof typeof colorMap] || "from-yellow-500 to-orange-500"
            
            return (
              <motion.div
                key={award.id}
                variants={item}
                className="bento-item group relative overflow-hidden"
              >
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} bg-opacity-30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <AwardIcon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-electric-blue transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-mono mb-2">
                        {award.titleEn}
                      </p>
                    </div>
                  </div>

                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-primary" />
                      <span className="text-base font-semibold text-electric-blue">
                        {award.achievement}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                      <span className="text-sm text-gray-400">
                        {award.achievementEn}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {award.year}
                    </span>
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} bg-opacity-20 flex items-center justify-center`}>
                      <AwardIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
