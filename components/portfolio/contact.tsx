import { Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tu idea y 
            explorar cómo puedo ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a 
                href="mailto:federico@example.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                federico@example.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Ubicación</h3>
              <p className="text-muted-foreground">Barcelona, España</p>
              <p className="text-sm text-muted-foreground">Disponible para trabajo remoto</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-background border border-border max-w-xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Mi tiempo de respuesta habitual es de 24-48 horas. Para proyectos 
            urgentes, no dudes en indicarlo en el mensaje.
          </p>
        </div>
      </div>
    </section>
  )
}
