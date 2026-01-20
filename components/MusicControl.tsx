"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed (interaction required):", e))
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={toggleMusic}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 ${
            isPlaying 
              ? "bg-black text-white w-auto px-4" 
              : "bg-white text-slate-800 hover:bg-slate-100 w-12 h-12 justify-center"
          }`}
        >
          {isPlaying ? (
            <Volume2 size={18} className="animate-pulse" />
          ) : (
            <VolumeX size={18} />
          )}
          {isPlaying && (
            <span className="text-xs font-medium tracking-widest whitespace-nowrap">
              SOUND ON
            </span>
          )}
        </button>
        <audio 
          ref={audioRef} 
          loop 
          src="/笨拙的超能力_smooth.mp3" 
        />
      </div>
    </>
  )
}
