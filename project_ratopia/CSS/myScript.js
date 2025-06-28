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


// Wish List CTA button animation

const buyIt = document.getElementById("buyIt");
const ctaLogo = buyIt.querySelector("i");
const ctaText = buyIt.querySelector("p");
buyIt.addEventListener("mouseover", () => {

    Object.assign(ctaText.style, {
        maxWidth: "500px",
        paddingLeft: "1rem",
        paddingRight: "1rem",

    });
    Object.assign(ctaLogo.style, {
        transform: "rotate(360deg)",
    });

});
buyIt.addEventListener("mouseout", () => {

    Object.assign(ctaText.style, {
        maxWidth: "0px",
        paddingLeft: "0rem",
        paddingRight: "0rem",

    });
    Object.assign(ctaLogo.style, {
        transform: "rotate(0deg)",
    });
});


// dim the background

const mainFilter = document.querySelector(".bg-filter");
window.addEventListener("scroll", ()=>{
    const scrollY = window.scrollY;
    const maxScroll = 800; 
    const brightness = 100 - Math.min(scrollY / maxScroll, 1) * 90;
    const blur =  Math.min(scrollY / maxScroll, 1) * 5;
    mainFilter.style.backdropFilter = `brightness(${brightness}%) blur(${blur}px)`;
    console.log(scrollY);

}

)
