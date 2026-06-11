// Particle System
const particlesContainer = document.getElementById("particles");
const particleCount = 30;

function createParticle() {
  if (!particlesContainer) return;
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = Math.random() * 3 + 1; // 1px to 4px
  const left = Math.random() * 100; // 0% to 100%
  const duration = Math.random() * 10 + 10; // 10s to 20s
  const delay = Math.random() * 5;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${left}%`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${delay}s`;

  particlesContainer.appendChild(particle);

  // Remove and recreate particle when animation ends
  particle.addEventListener("animationend", () => {
    particle.remove();
    createParticle();
  });
}

// Initialize particles
for (let i = 0; i < particleCount; i++) {
  setTimeout(createParticle, Math.random() * 3000);
}

// Countdown Logic
let timeLeft = 15;
const countdownElement = document.getElementById("countdown");
const progressBar = document.querySelector(".progress-fill");

let countdownInterval = setInterval(() => {
  timeLeft--;
  if (countdownElement) {
    countdownElement.textContent = timeLeft;
  }
  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    // Trigger redirect logic
    window.location.href = "https://denzilrdz.qzz.io/?ref=oldportfolio";
  }
}, 1000);

// Cancel Redirect Logic
const cancelBtn = document.getElementById("cancel-redirect");
if (cancelBtn) {
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearInterval(countdownInterval);
    if (countdownElement && countdownElement.parentElement) {
      countdownElement.parentElement.innerHTML = "Auto-redirect cancelled.";
    }
    if (progressBar) {
      progressBar.style.animationPlayState = "paused";
    }
    e.target.style.display = "none";
  });
}
