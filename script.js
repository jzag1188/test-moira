document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu');
    const closeIcon = document.querySelector('.close');
    const sidebarMenu = document.querySelector('.sidebar-menu');
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    // Function to open the sidebar menu
    function openMenu() {
        sidebarMenu.style.left = '0';
    }

    // Function to close the sidebar menu
    function closeMenu() {
        sidebarMenu.style.left = '-100%';
    }

    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', function () {
        openMenu();
    });

    // Add click event listener to the close icon
    closeIcon.addEventListener('click', function () {
        closeMenu();
    });

    // Function to handle media query changes
    function handleMediaChange(e) {
        if (e.matches) {
            // If screen width is 768px or more, ensure sidebar is visible
            sidebarMenu.style.left = '0';
        } else {
            // If screen width is less than 768px, hide the sidebar
            sidebarMenu.style.left = '-100%';
        }
    }

    // Initial check
    handleMediaChange(mediaQuery);

    // Listen for changes in the viewport size
    mediaQuery.addListener(handleMediaChange);
});
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);

    // Auto move slides every 5 seconds
    setInterval(() => {
        moveSlide(1);
    }, 5000); });

