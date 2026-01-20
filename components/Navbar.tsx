"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { name: "首页", href: "#home" },
    { name: "关于", href: "#about" },
    { name: "项目", href: "#work" },
    { name: "生活", href: "#gallery" },
    { name: "联系", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-light tracking-widest uppercase z-50 mix-blend-difference"
          >
            LU<span className="font-bold">.YAO</span>
          </a>

          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-widest text-slate-600 hover:text-black transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden z-50 p-4 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-5xl font-light tracking-widest py-4 hover:text-slate-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  )
}
