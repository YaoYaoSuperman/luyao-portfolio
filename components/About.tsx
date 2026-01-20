"use client"

import { Award, Terminal, Cpu, Code, FileText } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-50/80 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide flex items-center gap-3">
              关于我
              <span className="text-lg text-slate-400 font-light ml-2">// About Me</span>
            </h2>
            <div className="h-[1px] w-20 bg-black"></div>
            <p className="text-lg text-slate-600 leading-loose font-light">
              作为<span className="font-medium text-black">华中科技大学人工智能硕士 (Rank 1/148)</span>，我在大模型、NLP 及多模态领域拥有深厚的研究背景。我不仅热衷于 Transformer 架构的理论创新，更注重技术在实际业务中的落地。
            </p>
            <p className="text-lg text-slate-600 leading-loose font-light">
              我曾获得国家奖学金，熟悉 PyTorch、DeepSpeed 等框架，具备从数据构建、模型微调 (LoRA/QLoRA) 到高性能部署 (TensorRT/vLLM) 的全栈能力。
            </p>

            <div className="pt-6">
              <div className="flex items-center gap-4 text-slate-500 mb-2">
                 <Award size={20} className="text-black"/>
                 <span className="text-sm">国家奖学金 / 校级三好学生 / 感恩近现代中国科学家奖学金</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500">
                 <Terminal size={20} className="text-black"/>
                 <span className="text-sm">CET-6 (535) / CET-4 (547)</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-sm border border-slate-100">
             <h3 className="text-xl font-light tracking-widest mb-8 uppercase text-center md:text-left">Tech Stack</h3>
             
             <div className="space-y-6">
                <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium flex items-center gap-2"><Cpu size={16}/> LLM & Algorithms</span>
                        <span className="text-xs text-slate-400">Transformer, RAG, RLHF</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1"><div className="bg-black h-1 w-[95%]"></div></div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium flex items-center gap-2"><Code size={16}/> Frameworks</span>
                        <span className="text-xs text-slate-400">PyTorch, DeepSpeed, HuggingFace</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1"><div className="bg-black h-1 w-[90%]"></div></div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium flex items-center gap-2"><Terminal size={16}/> Deployment & Ops</span>
                        <span className="text-xs text-slate-400">Docker, TensorRT, Linux, Git</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1"><div className="bg-black h-1 w-[85%]"></div></div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium flex items-center gap-2">Languages</span>
                        <span className="text-xs text-slate-400">Python, C++</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1"><div className="bg-black h-1 w-[88%]"></div></div>
                    </div>
                 </div>
          </div>

        </div>
      </div>
    </section>
  )
}
