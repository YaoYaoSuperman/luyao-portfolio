"use client"

import { useState, useEffect } from "react"

export default function MeteorShower() {
  const [meteors, setMeteors] = useState<Array<{ id: number; left: string; animationDuration: string; animationDelay: string }>>([])

  useEffect(() => {
    const createMeteor = () => ({
      id: Math.random(),
      left: Math.floor(Math.random() * 200 - 50) + "vw",
      animationDuration: Math.random() * 2 + 2 + "s",
      animationDelay: Math.random() * 5 + "s",
    })

    const initialMeteors = Array.from({ length: 12 }).map(createMeteor)
    setMeteors(initialMeteors)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute top-0 w-[2px] h-[80px] bg-gradient-to-b from-slate-400 to-transparent opacity-0 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{
            left: meteor.left,
            animation: `meteor ${meteor.animationDuration} linear infinite`,
            animationDelay: meteor.animationDelay,
          }}
        />
      ))}
      <style>{`
        @keyframes meteor {
          0% {
            transform: translate(0, -100px) rotate(225deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate(-500px, 100vh) rotate(225deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
