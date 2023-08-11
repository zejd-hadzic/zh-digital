// TOGGLE NAVBAR ICON ON SMALLTER DEVICES
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// CHANGE ACTVE LINK WHEN SCROLLED ON A SECTION

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        
        };
    });

    // STICKY NAVBAR
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // REMOVE NAVBAR ICON WHEN A LINK IS CLICKED
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// REVEAL ON SCROLL
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

// TYPED TEXT
const typed = new Typed('.multiple-text', {
    strings: ['development agency', 'design agency'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});