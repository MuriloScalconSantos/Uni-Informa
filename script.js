const navLinks = document.querySelectorAll(".nav-menu.nav-links");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () =>{
    // Menu de visibilidade do toggle 
document.body.classList.toggle("show-mobile-menu")
});

//Barra de pesquisa
function filterContent() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const sections = document.querySelectorAll(".universidades-details ul, .universidades-details h2");

    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(input)) {
            section.style.display = "";
        } else {
            section.style.display = "none";
        }
    });
}

//Fechar menu quando o botão é pressionado
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Fechar menu quando o nav link é pressionado
navLinks.forEach(link =>{
    link.addEventListener("click", () =>menuOpenButton.click());
});


//Inicializar Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Breakpoints responsivos
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});