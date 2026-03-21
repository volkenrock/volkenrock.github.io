import { Briefcase, Calendar } from "lucide-react"

const experience = [
  {
    company: "Pixelworks Studios",
    role: "Lead 3D Artist",
    period: "2022 - Presente",
    description: "Dirección del equipo de artistas 3D para producción de assets de videojuegos AAA.",
  },
  {
    company: "Lumina Interactive",
    role: "Game Designer & Developer",
    period: "2020 - 2022",
    description: "Diseño y desarrollo de mecánicas de juego para títulos indie publicados en Steam.",
  },
  {
    company: "Visual Mapping Co.",
    role: "Videomapping Artist",
    period: "2018 - 2020",
    description: "Creación de proyecciones de videomapping para eventos corporativos y festivales.",
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Sobre mí
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Creando experiencias digitales desde 2018
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Soy un diseñador multimedia apasionado por la intersección entre arte y tecnología. 
                Mi trabajo abarca desde el modelado 3D fotorrealista hasta instalaciones interactivas 
                de videomapping y el desarrollo de videojuegos inmersivos.
              </p>
              <p>
                Con más de 6 años de experiencia en la industria, he colaborado con estudios de 
                videojuegos, agencias de publicidad y organizadores de eventos para crear contenido 
                visual que cautiva y sorprende.
              </p>
              <p>
                Mi filosofía de trabajo se centra en combinar la excelencia técnica con una visión 
                artística única, siempre buscando empujar los límites de lo posible.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Experiencia Profesional</h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.company}
                  className="relative pl-8 pb-6 border-l border-border last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary" />
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold">{exp.role}</span>
                    <span className="text-muted-foreground">@</span>
                    <span className="text-primary">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
