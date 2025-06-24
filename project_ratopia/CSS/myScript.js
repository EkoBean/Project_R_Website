// console.log("myjs loaded"); 

const customizeCarousel = document.getElementById("gameSystemCarousel")

const carousel = bootstrap.Carousel.getOrCreateInstance(customizeCarousel)
const controls = document.querySelectorAll(".carouselBtn");

controls.forEach(
    (x) => {
        
        x.addEventListener('click', () => {
                const slideIndex = x.getAttribute('data-slide-to');
                carousel.to(slideIndex);
                // console.log(li); 
                carousel.cycle();

            })
    }
)

