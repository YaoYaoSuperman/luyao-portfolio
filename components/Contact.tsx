"use client"

import { Mail, Linkedin, Github, MapPin, Phone, ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
             <p className="text-slate-500 tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">Get In Touch</p>
             <h2 className="text-2xl md:text-4xl lg:text-6xl font-light tracking-tight">开启对话</h2>
             <div className="h-[1px] w-20 bg-black"></div>
             <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-loose font-light">
                无论是技术交流、项目合作还是工作机会，随时欢迎联系。
             </p>

             <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-slate-500">
                   <Mail size={24} className="text-black"/>
                   <span className="text-2xl md:text-3xl font-medium">hust_luyao@hust.edu.cn</span>
                </div>
                <div className="flex items-center gap-4 text-slate-500">
                   <MapPin size={24} className="text-black"/>
                   <span className="text-sm">华中科技大学 · 中国武汉</span>
                </div>
                <div className="flex items-center gap-4 text-slate-500">
                   <Phone size={24} className="text-black"/>
                   <span className="text-sm">Available for opportunities</span>
                </div>
             </div>
          </div>

          <div className="space-y-6">
            <form className="space-y-6">
               <div>
                 <input
                   type="text"
                   placeholder="姓名"
                   className="w-full border-b border-slate-300 py-4 bg-transparent focus:border-black focus:outline-none transition-colors placeholder:text-slate-400 text-sm"
                 />
               </div>
               <div>
                 <input
                   type="email"
                   placeholder="邮箱"
                   className="w-full border-b border-slate-300 py-4 bg-transparent focus:border-black focus:outline-none transition-colors placeholder:text-slate-400 text-sm"
                 />
               </div>
               <div>
                 <textarea
                   placeholder="留言"
                   rows={4}
                   className="w-full border-b border-slate-300 py-4 bg-transparent focus:border-black focus:outline-none transition-colors placeholder:text-slate-400 resize-none text-sm"
                 ></textarea>
               </div>
               <button type="submit" className="group flex items-center gap-3 text-black font-medium hover:gap-6 transition-all text-sm">
                 <span>发送消息</span>
                 <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform"/>
                 <span className="w-16 h-[1px] bg-black group-hover:w-24 transition-all"></span>
               </button>
            </form>
          </div>
        </div>

        <div className="flex gap-6 mt-20">
           <a href="#" className="w-14 h-14 border border-slate-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all">
             <Github size={24} className="md:hidden lg:block"/>
             <Github size={24} className="hidden md:block"/>
           </a>
           <a href="#" className="w-14 h-14 border border-slate-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all">
             <Linkedin size={24} className="md:hidden lg:block"/>
             <Linkedin size={24} className="hidden md:block"/>
           </a>
           <a href="#" className="w-14 h-14 border border-slate-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all">
             <Mail size={24} className="md:hidden lg:block"/>
             <Mail size={24} className="hidden md:block"/>
           </a>
        </div>
        </div>
      </div>
    </section>
  )
}
