import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Papers from "@/components/Papers"
import Projects from "@/components/Projects"
import Awards from "@/components/Awards"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Papers />
      <Projects />
      <Awards />
      <Footer />
    </main>
  )
}
