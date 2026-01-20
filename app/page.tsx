import Navbar from "@/components/Navbar"
import MeteorShower from "@/components/MeteorShower"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"
import MusicControl from "@/components/MusicControl"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MeteorShower />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Contact />
      <MusicControl />
    </main>
  )
}
