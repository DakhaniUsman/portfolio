
// header scroll
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 0){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// automatic typing

var typed = new Typed(".text" , {
    strings :["FrontEnd Developer" , "Web Developer", "Testor"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// mobile nav
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('.click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
