// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMobile = document.getElementById('nav-mobile');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  navMobile.classList.toggle('active');
});

// Close mobile menu when clicking a link
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navMobile.classList.remove('active');
  });
});

// Header scroll effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// P5.js Background Animation
let particles = [];
const numParticles = 50;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-container');
  
  // Create particles
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  clear();
  
  // Update and draw particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    
    // Connect nearby particles
    for (let j = i + 1; j < particles.length; j++) {
      let d = dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
      if (d < 150) {
        let alpha = map(d, 0, 150, 80, 0);
        stroke(0, 212, 170, alpha);
        strokeWeight(0.5);
        line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
      }
    }
  }
  
  // Draw mouse follower
  if (mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height) {
    drawMouseFollower();
  }
}

function drawMouseFollower() {
  noFill();
  
  // Rotating triangle
  push();
  translate(mouseX, mouseY);
  rotate(frameCount * 0.02);
  stroke(0, 212, 170, 100);
  strokeWeight(1);
  beginShape();
  for (let i = 0; i < 3; i++) {
    let angle = TWO_PI / 3 * i - PI / 2;
    let x = cos(angle) * 30;
    let y = sin(angle) * 30;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
  
  // Pulsing circles
  let pulseSize = sin(frameCount * 0.05) * 10 + 40;
  stroke(0, 212, 170, 50);
  strokeWeight(1);
  ellipse(mouseX, mouseY, pulseSize);
  
  stroke(0, 212, 170, 30);
  ellipse(mouseX, mouseY, pulseSize + 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Particle class
class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(2, 5);
    this.speedX = random(-0.5, 0.5);
    this.speedY = random(-0.5, 0.5);
    this.opacity = random(50, 150);
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Mouse attraction
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let d = dist(mouseX, mouseY, this.x, this.y);
    
    if (d < 200 && d > 0) {
      let force = map(d, 0, 200, 0.5, 0);
      this.x += (dx / d) * force;
      this.y += (dy / d) * force;
    }
    
    // Wrap around edges
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }
  
  draw() {
    noStroke();
    fill(0, 212, 170, this.opacity);
    ellipse(this.x, this.y, this.size);
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
