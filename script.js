// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Optional: Add a dark mode button in HTML if needed
const darkModeButton = document.createElement('button');
darkModeButton.innerText = '🌙 Dark Mode';
darkModeButton.classList.add('dark-mode-toggle');
darkModeButton.onclick = toggleDarkMode;
document.body.appendChild(darkModeButton);


function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  }
  