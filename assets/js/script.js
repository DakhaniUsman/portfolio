// mobile header


function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function HideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function hide() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// header scroll
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// automatic typing

var typed = new Typed(".text", {
    strings: ["Front End Developer", "Web Developer", "Testor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});