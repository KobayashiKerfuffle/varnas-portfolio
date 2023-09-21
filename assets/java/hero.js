document.addEventListener('DOMContentLoaded', function() {
    console.log("mousemove event detected!");
    const heroSection = document.getElementById('hero');
    const developerImage = document.querySelector('.developer img'); // targeting developer image
    console.log("Developer Image:", developerImage);

    heroSection.addEventListener('mousemove', function(e) {
        const width = heroSection.offsetWidth;
        const mouseX = e.clientX;
        const opacity = mouseX / width;
        console.log("Width:", width, "Mouse X:", mouseX, "Opacity:", opacity);
        developerImage.style.opacity = opacity;
    });
});


