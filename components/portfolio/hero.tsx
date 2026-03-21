import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Disponible para proyectos
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Diseñador{" "}
            <span className="text-primary">Multimedia</span>
            <br />& Artista Digital
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Especializado en modelado 3D, videomapping y desarrollo de videojuegos. 
            Transformo ideas en experiencias visuales inmersivas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild>
              <Link href="#proyectos">Ver proyectos</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contacto">Contactar</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={22} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={22} />
            </Link>
            <Link
              href="mailto:federico@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={22} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  )
}
