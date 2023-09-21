// Function to smoothly scroll to the target section
function scrollToSection(event) {
    event.preventDefault();
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listeners to each anchor link in the navigation
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});
