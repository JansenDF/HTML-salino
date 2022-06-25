// Armazenar tags '#header nav'
const nav = document.body.querySelector('#header nav');

// Armazenar class 'toggle'
const toggle = document.querySelectorAll('nav .toggle');

// Exibir ou ocultar menu ao clique
for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// Remover class 'show' ao clicar no link

const links = document.querySelectorAll('nav ul li a')
for (const element of links) {
    element.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// Mudar o header da pagina quando der o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll (){
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

// Carousel testimonials swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: {
        invert: true,
    },
    keyboard: {
        enable: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
})

// Scroll Reveal

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonial
    #contact .text, #contact .links
    footer .brand, footer .social
    `, { interval: 100 })

// Botton up to home

const backToTopBotton = document.querySelector('.back-to-top')
function backToTop (){
    if (this.window.scrollY >= 560) {
        backToTopBotton.classList.add('show');
    } else {
        backToTopBotton.classList.remove('show');
    }
}

// Menu activated on page
const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection() {

}
// When Scroll


window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activeMenuAtCurrentSection()
})