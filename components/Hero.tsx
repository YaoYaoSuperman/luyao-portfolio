"use client"

import { ArrowRight, FileText, BookOpen, ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 w-full z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

        <div className="lg:col-span-7 z-10 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <p className="text-slate-500 tracking-[0.2em] mb-6 text-sm md:text-base uppercase flex items-center gap-2">
            <span className="w-8 h-[1px] bg-slate-400"></span>
            AI Algorithm Engineer
          </p>
          <h1 className="text-5xl md:text-8xl font-light leading-none tracking-tight mb-8 text-slate-900">
            探索智能边界，<br/>
            <span className="font-semibold text-slate-800">构建未来模型。</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-xl font-light leading-relaxed mb-10">
            我是卢瑶，华中科技大学人工智能硕士。专注于 LLM 预训练、多模态理解及 MLOps 落地。致力于让算法在复杂场景中发挥极致效能。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://yaoyaosuperman.github.io/Job_resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-none hover:bg-slate-800 transition-all group"
            >
              <FileText size={18} />
              <span className="tracking-widest text-sm font-medium">简历 PDF</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform ml-2" />
            </a>
            <a
              href="https://yaoyaosuperman.github.io/A%20Lightweight%20Residual%20Network%20For%20Pneumonia%20Classification.pdf"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white text-slate-900 px-8 py-4 rounded-none hover:border-black hover:bg-slate-50 transition-all"
            >
              <BookOpen size={18} />
              <span className="tracking-widest text-sm font-medium">研究论文 PDF</span>
            </a>
          </div>

          <div className="text-xs text-slate-400 font-light tracking-wide">
            * 点击上方按钮即可下载详细文档
          </div>
        </div>

        <div className="lg:col-span-5 relative max-h-[85vh] hidden md:block opacity-0 animate-[fadeIn_1.2s_ease-out_0.3s_forwards]">
           <div className="absolute top-10 right-10 w-full h-full border border-slate-200 rounded-none -z-10 bg-white/50 backdrop-blur-sm"></div>

           <div className="w-full overflow-hidden relative shadow-2xl aspect-[4/5]">
              <img
                src="/profile.jpg"
                alt="Lu Yao Profile"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 shadow-lg border-l-2 border-black max-w-[200px]">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Status</p>
                  <p className="text-sm font-medium">Master's student</p>
              </div>
           </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hidden md:block">
          <ChevronDown size={24} className="text-slate-400" />
        </div>
      </div>
    </section>
  )
}
