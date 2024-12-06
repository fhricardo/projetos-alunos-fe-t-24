// Function to initialize the carousel
function initializeCarousel() {
    const carouselContainer = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    // Show the first slide initially
    showSlide(0);

    // Function to move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Function to move to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Add navigation buttons
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.style.position = 'absolute';
    nextButton.style.top = '50%';
    nextButton.style.transform = 'translateY(-50%)';
    nextButton.style.right = '20px';
    nextButton.style.backgroundColor = '#007bff';
    nextButton.style.color = 'white';
    nextButton.style.padding = '10px 20px';
    nextButton.style.borderRadius = '5px';

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Prev';
    prevButton.style.position = 'absolute';
    prevButton.style.top = '50%';
    prevButton.style.transform = 'translateY(-50%)';
    prevButton.style.left = '20px';
    prevButton.style.backgroundColor = '#007bff';
    prevButton.style.color = 'white';
    prevButton.style.padding = '10px 20px';
    prevButton.style.borderRadius = '5px';

    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(nextButton);

    // Add event listeners
    setInterval(nextSlide, 3000); // Auto-scroll every 3 seconds

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Handle mouseover/out events
    carouselContainer.addEventListener('mouseenter', () => clearInterval(intervalId));
    carouselContainer.addEventListener('mouseleave', () => intervalId = setInterval(nextSlide, 3000));

    // Initialize variables
    let intervalId;
}

// Call the function to initialize the carousel
initializeCarousel();
document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carouselExampleControls')
    carousel.addEventListener('mouseenter', function () {
        carousel.pauseAutoPlay()
    })
    carousel.addEventListener('mouseleave', function () {
        carousel.resumeAutoPlay()
    })
})
