"use client"

import { useEffect, useRef } from "react"
import p5 from "p5"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  connections: number[]
}

export function P5Background() {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5InstanceRef = useRef<p5 | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const sketch = (p: p5) => {
      const particles: Particle[] = []
      const particleCount = 80
      const connectionDistance = 150
      const mouseInfluenceRadius = 200

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.style("position", "fixed")
        canvas.style("top", "0")
        canvas.style("left", "0")
        canvas.style("z-index", "0")
        canvas.style("pointer-events", "none")

        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-0.5, 0.5),
            vy: p.random(-0.5, 0.5),
            size: p.random(2, 4),
            alpha: p.random(50, 150),
            connections: [],
          })
        }
      }

      p.draw = () => {
        p.clear()

        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i]

          // Mouse influence
          const dx = p.mouseX - particle.x
          const dy = p.mouseY - particle.y
          const distToMouse = Math.sqrt(dx * dx + dy * dy)

          if (distToMouse < mouseInfluenceRadius && distToMouse > 0) {
            const force = (mouseInfluenceRadius - distToMouse) / mouseInfluenceRadius
            particle.vx += (dx / distToMouse) * force * 0.02
            particle.vy += (dy / distToMouse) * force * 0.02
          }

          // Apply velocity with damping
          particle.vx *= 0.99
          particle.vy *= 0.99

          // Update position
          particle.x += particle.vx
          particle.y += particle.vy

          // Wrap around edges
          if (particle.x < 0) particle.x = p.width
          if (particle.x > p.width) particle.x = 0
          if (particle.y < 0) particle.y = p.height
          if (particle.y > p.height) particle.y = 0

          // Draw connections
          for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j]
            const d = p.dist(particle.x, particle.y, other.x, other.y)
            if (d < connectionDistance) {
              const alpha = p.map(d, 0, connectionDistance, 80, 0)
              p.stroke(56, 189, 248, alpha)
              p.strokeWeight(0.5)
              p.line(particle.x, particle.y, other.x, other.y)
            }
          }

          // Draw particle
          p.noStroke()
          p.fill(56, 189, 248, particle.alpha)
          p.ellipse(particle.x, particle.y, particle.size)

          // Glow effect
          p.fill(56, 189, 248, particle.alpha * 0.3)
          p.ellipse(particle.x, particle.y, particle.size * 3)
        }

        // Draw geometric shapes that follow mouse
        drawGeometricAccents(p)
      }

      const drawGeometricAccents = (p: p5) => {
        const time = p.millis() * 0.001

        // Rotating triangle near mouse
        p.push()
        p.translate(p.mouseX + 80, p.mouseY - 80)
        p.rotate(time)
        p.noFill()
        p.stroke(56, 189, 248, 40)
        p.strokeWeight(1)
        const triSize = 30 + Math.sin(time * 2) * 10
        p.triangle(
          0, -triSize,
          triSize * 0.866, triSize * 0.5,
          -triSize * 0.866, triSize * 0.5
        )
        p.pop()

        // Pulsing circle
        p.push()
        p.translate(p.mouseX - 100, p.mouseY + 60)
        p.noFill()
        p.stroke(56, 189, 248, 30)
        p.strokeWeight(1)
        const circleSize = 20 + Math.sin(time * 3) * 8
        p.ellipse(0, 0, circleSize * 2)
        p.ellipse(0, 0, circleSize * 3)
        p.pop()

        // Floating squares in corners
        const corners = [
          { x: 100, y: 100 },
          { x: p.width - 100, y: 150 },
          { x: 150, y: p.height - 100 },
          { x: p.width - 150, y: p.height - 150 },
        ]

        corners.forEach((corner, index) => {
          p.push()
          p.translate(corner.x, corner.y)
          p.rotate(time * 0.5 + index)
          p.noFill()
          p.stroke(56, 189, 248, 25)
          p.strokeWeight(1)
          const size = 40 + Math.sin(time + index) * 10
          p.rectMode(p.CENTER)
          p.rect(0, 0, size, size)
          p.pop()
        })
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
      }
    }

    p5InstanceRef.current = new p5(sketch, containerRef.current)

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove()
      }
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />
}
