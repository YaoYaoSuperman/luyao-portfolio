"use client"

import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "MonkeyOCR / 多模态文档解析",
    category: "大模型架构设计",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    description: "基于SRR范式的多模态大模型。在OmniDocBench评测中超越GPT-4o，GitHub获6.4k Star，解决复杂排版语义割裂问题。"
  },
  {
    id: 2,
    title: "Lyric Flow / 垂直领域歌词大模型",
    category: "LLM微调 & 强化学习",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    description: "基于Qwen3系列的微调与优化。通过CPT和SFT全流程，解决韵脚与格式痛点，打造具备专业级创作能力的垂直模型。"
  },
  {
    id: 3,
    title: "Signature Diffusion / 生成式鉴别",
    category: "AIGC & 计算机视觉",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop",
    description: "基于Diffusion Model的离线手写签名生成系统。构建400k高难度负样本数据集，有效提升鉴别模型鲁棒性。"
  }
]

export default function Projects() {
  return (
    <section id="work" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">精选项目</h2>
              <p className="mt-4 text-slate-500 font-light">学术研究与工程落地的结合。</p>
            </div>
            <span className="hidden md:block text-slate-400 text-sm tracking-widest">( 2024 — 2026 )</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer flex flex-col h-full bg-white border border-slate-100 p-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden relative mb-6 w-full aspect-[4/3]">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white shadow-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <ExternalLink size={16} className="text-black"/>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-medium mb-3 group-hover:underline underline-offset-4 decoration-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-auto border-t border-slate-100 pt-4">
                    <span className="text-xs font-bold tracking-wider uppercase border border-slate-200 px-3 py-1 rounded-full inline-block group-hover:bg-black group-hover:text-white transition-colors">
                      View Case Study
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
