import { Navbar } from "@/components/portfolio/Navbar"
import { Hero } from "@/components/portfolio/Hero"
import { About } from "@/components/portfolio/About"
import { Experience } from "@/components/portfolio/Experience"
import { Skills } from "@/components/portfolio/Skills"
import { Projects } from "@/components/portfolio/Projects"
import { Contact } from "@/components/portfolio/Contact"
import { Footer } from "@/components/portfolio/Footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-dev-purple selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
