// Particle Canvas Animation
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
  const homeSection = document.querySelector('.home');
  canvas.width = homeSection.offsetWidth;
  canvas.height = homeSection.offsetHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle object
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.1;
    this.vy = (Math.random() - 0.5) * 0.1;
    this.radius = Math.random() * 2.5 + 1.5;
    this.color = 'rgba(100, 100, 100, 0.7)';
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off walls
    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.vx *= -1;
      this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x));
    }
    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.vy *= -1;
      this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y));
    }
  }

  repelFromMouse(mouseX, mouseY, repelDistance) {
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < repelDistance) {
      const angle = Math.atan2(dy, dx);
      const force = (repelDistance - distance) / repelDistance;
      this.vx += Math.cos(angle) * force * 0.1;
      this.vy += Math.sin(angle) * force * 0.1;
    }
  }
}

// Create particles
const particleCount = 120;
const particles = [];
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

// Mouse tracking
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;
const repelDistance = 150;

document.addEventListener('mousemove', (e) => {
  const homeSection = document.querySelector('.home');
  const rect = homeSection.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

document.addEventListener('mouseleave', () => {
  mouseX = canvas.width / 2;
  mouseY = canvas.height / 2;
});

// Draw connecting lines between nearby particles
function drawLines() {
  const connectionDistance = 200;

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < connectionDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(150, 150, 150, ${0.35 * (1 - distance / connectionDistance)})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

// Animation loop
function animate() {
  // Clear canvas with slight trail effect
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  particles.forEach((particle) => {
    particle.update();
    particle.repelFromMouse(mouseX, mouseY, repelDistance);
    particle.draw();
  });

  // Draw connecting lines
  drawLines();

  requestAnimationFrame(animate);
}

animate();

