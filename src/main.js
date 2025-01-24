// Get the necessary DOM elements
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navClose = document.querySelector('#nav-close');
const navLinks = document.querySelectorAll('.nav-links');

// Function to show the navigation menu
const showMenu = () => {
  navMenu.classList.remove('hidden');
};

// Function to hide the navigation menu
const hideMenu = () => {
  navMenu.classList.add('hidden');
};

// Event listener to show the menu when hamburger is clicked
hamburger.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  event.stopPropagation(); // Prevent event bubbling
  showMenu();
});

// Event listener to hide the menu when close icon is clicked
navClose.addEventListener('click', (event) => {
  event.preventDefault();  
  event.stopPropagation(); 
  hideMenu();
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    hideMenu();
  }
});

// close the menu when u click on a link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // event.preventDefault(); 
    hideMenu();
  });
});


// scroll navbar
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'text-blue-500', 'shadow-md');
        navbar.classList.remove('bg-transparent', 'text-white');
    } else {
        navbar.classList.remove('bg-white', 'text-blue-500', 'shadow-md');
        navbar.classList.add('bg-transparent', 'text-white');
    }
});


// scrollcsection link 
const activeLink = () => {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('.nav-links')

    let current = "home"

    sections.forEach(section => {
        const sectionTop = section.offsetTop

        if (this.scrollY > sectionTop - 60) {
            current = section.getAttribute('id')
        }
    })

    navLinks.forEach(item => {
        item.classList.remove("active")

        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })
}

window.addEventListener("scroll", activeLink)

// scroll

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 300,
    reset: true
});

sr.reveal('.home__data, .footer__content', {delay: 600});

sr.reveal('.about__data' , {delay: 600});
sr.reveal('.about__img, .pricing__card', {scale: 0.6});

sr.reveal('.services__card', {interval: 200});
sr.reveal('.pricing__data, .services__data');