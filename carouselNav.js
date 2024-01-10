//Karuselli
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const pauseButton = document.querySelector('.pause-button');
    const playButton = document.querySelector('.play-button');

    let currentIndex = 0;
    let intervalId;

    function showImage(index) {
        const translateValue = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }

    function nextImage() {
        if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carousel.children.length - 1;
        }
        showImage(currentIndex);
    }

    function startCarousel() {
        intervalId = setInterval(nextImage, 2000);
    }

    function pauseCarousel() {
        clearInterval(intervalId);
    }

    function playCarousel() {
        startCarousel();
    }

    nextButton.addEventListener('click', function () {
        pauseCarousel();
        nextImage();
    });

    prevButton.addEventListener('click', function () {
        pauseCarousel();
        prevImage();
    });

    pauseButton.addEventListener('click', pauseCarousel);
    playButton.addEventListener('click', playCarousel);

    startCarousel();
});


//Hampurilaisvalikko
function toggleMobileNav() {
    var mobileNav = document.getElementById("mobileNav");
    mobileNav.style.display = (mobileNav.style.display === "block") ? "none" : "block";
}
