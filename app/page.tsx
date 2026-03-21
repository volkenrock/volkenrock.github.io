import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { P5Background } from "@/components/portfolio/p5-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <P5Background />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
