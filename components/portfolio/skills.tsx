import { Box, Gamepad2, Projector, Film } from "lucide-react"

const skills = [
  {
    icon: Box,
    title: "Modelado 3D",
    tools: ["Blender"],
    description: "Creación de personajes, entornos y assets con técnicas de high y low poly.",
  },
  {
    icon: Gamepad2,
    title: "Desarrollo de Videojuegos",
    tools: ["Unreal Engine", "Valve Hammer Editor"],
    description: "Diseño y desarrollo de mecánicas, niveles y sistemas de juego.",
  },
  {
    icon: Projector,
    title: "Videomapping",
    tools: ["Resolume Arena"],
    description: "Proyecciones arquitectónicas e instalaciones interactivas.",
  },
  {
    icon: Film,
    title: "Post-producción",
    tools: ["After Effects", "Premiere", "DaVinci Resolve"],
    description: "Composición, VFX y edición de contenido audiovisual.",
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Habilidades & Herramientas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dominio de las herramientas líderes de la industria para crear 
            contenido multimedia de alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
