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
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = 800;
    const brightness = 100 - Math.min(scrollY / maxScroll, 1) * 90;
    const blur = Math.min(scrollY / maxScroll, 1) * 5;
    mainFilter.style.backdropFilter = `brightness(${brightness}%) blur(${blur}px)`;
    // console.log(scrollY);

}

)


// world card hover
const worldCard = document.querySelectorAll(".world div.card");

worldCard.forEach(card => {
    card.addEventListener("mouseover", () => {
        if (card.classList.contains("card-active")) return;

        card.classList.add("card-hover");
    });
    card.addEventListener("mouseout", () => {
        card.classList.remove("card-hover");
    });

    // world card click event
    card.addEventListener("click", (e) => {
        console.log('e.target :>> ', e.target);
        const isActive = card.classList.contains("card-active");
        if (e.target !== card.querySelector(".card-bg-filter")) return;

        if (isActive) {
            if (e.target == document.querySelector(".card p")) return;
            card.classList.remove("card-active");

        }
        if (!isActive) {
            worldCard.forEach(c => c.classList.remove("card-active"));
            card.classList.add("card-active");
        }
    });

});

// popup window(news)
const newsCard = document.querySelectorAll(".news .card");

newsCard.forEach(card => {
    const triggers = card.querySelectorAll("img, .h3, a")
    const targetId = card.getAttribute("data-target");
    const target = document.getElementById(targetId);

    const openPopup = () => {
        if (!target) return;
        target.classList.add("active");

        const escClose = (e) => {
            if (e.key === "Esc" || e.key === "Escape") {
                target.classList.remove("active");
                document.removeEventListener("keydown", escClose)
            }
        };
        document.addEventListener("keydown", escClose)
    }



    triggers.forEach(trigger => {
        trigger.addEventListener("click", openPopup);
    });

    if (target) {
        const close = target.querySelector("#closeBtn")
        // close by click button
        if (close) {
            close.addEventListener("click", () => {
                target.classList.remove("active");
            })
        }
        // end of closing button

        // close by click outsdie
        target.addEventListener("click", (e) => {
            target.classList.remove("active");
        });
        //end of close by click outside
    }

})


