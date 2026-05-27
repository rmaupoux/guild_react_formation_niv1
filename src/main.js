import Reveal from 'reveal.js';

console.log('main.js chargé');

// Les plugins sont chargés via script tags dans index.html
// et disponibles comme window.RevealHighlight et window.RevealMarkdown
Reveal.initialize({
  controls: true,
  progress: true,
  center: true,
  hash: true,
  plugins: [
    window.RevealHighlight || {},
    window.RevealMarkdown || {},
  ],
});

// Gestion des animations SVG au changement de slide
Reveal.on('slidechanged', (event) => {
  const svgSection = document.querySelector('.svg-animation-section');
  const currentSlide = event.currentSlide;

  // Gestion SVG
  if (currentSlide === svgSection) {
    svgSection.classList.add('active');
  } else {
    svgSection.classList.remove('active');
  }

  // Relancer la coloration syntaxique pour le markdown
  if (window.hljs) {
    currentSlide.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  }
});
