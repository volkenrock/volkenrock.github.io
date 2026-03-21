import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Nebula Runner",
    description: "Videojuego de carreras espaciales con gráficos estilizados y física realista desarrollado en Unreal Engine 5.",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=450&fit=crop",
    tags: ["Unreal Engine", "C++", "Blueprints"],
    category: "Videojuego",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mapping Festival BCN",
    description: "Proyección de videomapping arquitectónico para el festival de artes digitales de Barcelona 2024.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
    tags: ["Resolume", "After Effects", "TouchDesigner"],
    category: "Videomapping",
    liveUrl: "#",
  },
  {
    title: "Cyborg Character",
    description: "Personaje cyberpunk de alta poligonización con texturas PBR y rig completo para animación.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=450&fit=crop",
    tags: ["Blender", "Substance Painter", "ZBrush"],
    category: "Modelado 3D",
    githubUrl: "#",
  },
  {
    title: "Dungeon Escape VR",
    description: "Experiencia de realidad virtual de escape room con mecánicas de puzzle y ambientación medieval.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop",
    tags: ["Unity", "C#", "Oculus SDK"],
    category: "Videojuego",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Museo Interactivo",
    description: "Instalación de videomapping interactivo para museo de ciencias con sensores de movimiento.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    tags: ["TouchDesigner", "Arduino", "Processing"],
    category: "Videomapping",
    liveUrl: "#",
  },
  {
    title: "Sci-Fi Environment",
    description: "Escenario de ciencia ficción modular con assets optimizados para tiempo real en juegos AAA.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop",
    tags: ["Maya", "Substance Designer", "Unreal Engine"],
    category: "Modelado 3D",
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes en modelado 3D, 
            desarrollo de videojuegos y proyecciones de videomapping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
