//alternar ícone barra de navegação
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
//scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
           // active navbar links

           navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        } 
        else {
            sec.classList.remove('show-animate');

        }

         
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remova o ícone de alternância e a barra de navegação ao clicar nos links da barra de navegação (rolagem);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}