// function library

function openWindow(popupDiv) {
    popupDiv.classList.add("active")
    document.body.classList.add("no-scroll")
}
function closeWindow(popupDiv) {
    popupDiv.classList.remove("active")
    document.body.classList.remove("no-scroll")
}
// end of function library


// nav bar js
// stop scrolling while menu expanded
// event listen to bootstrap.js
const navMenu = document.getElementById("collapseNav")
navMenu.addEventListener("show.bs.collapse", () => {
    document.body.classList.add("no-scroll")
})
navMenu.addEventListener("hide.bs.collapse", () => {
    document.body.classList.remove("no-scroll")
})
// end of stop menu expanded no-scrolling

// hide collpase by click
const navLinks = navMenu.querySelectorAll("a")
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});

// end of nav bar js

// console.log("myjs loaded"); 

const customizeCarousel = document.getElementById("gameSystemCarousel")

const carousel = bootstrap.Carousel.getOrCreateInstance(customizeCarousel)
const controls = document.querySelectorAll(".carouselBtn");

controls.forEach(
    (x) => {
        x.addEventListener('click', () => {
            const slideIndex = x.getAttribute('data-slide-to');
            carousel.to(slideIndex);
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
    const triggers = card.querySelectorAll(".cardimg, .h3, a")
    const targetId = card.getAttribute("data-target");
    const target = document.getElementById(targetId);




    const openPopup = () => {
        if (!target) return;
        openWindow(target);

        const escClose = (e) => {
            if (e.key === "Esc" || e.key === "Escape") {
                closeWindow(target);

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
                closeWindow(target);

            })
        }
        // end of closing button

        // close by click outsdie
        target.addEventListener("click", (e) => {
            if (e.target === target) {
                closeWindow(target);
            }

        });
        //end of close by click outside
    }

})
// end of windows popup(news)



// read localstorage to news window

const newsArticle = document.querySelector(".window-popup");
const lStorage = JSON.parse(localStorage.getItem('blog-item'));
if (lStorage) {
    newsArticle.querySelector('h4').innerText = lStorage.title
    newsArticle.querySelector('.article-content').innerHTML = lStorage.content;
    newsArticle.querySelector('img').src = lStorage.coverImg
}


// sync the window with news card
const newsDivs = document.querySelectorAll(".window-popup");
newsDivs.forEach(newsDiv => {
    // link the wond and card
    const windowId = newsDiv.getAttribute("id");
    const targetCard = document.querySelector(`div[data-target="${windowId}"]`)

    // content things
    const newsImage = newsDiv.querySelector("img").getAttribute('src');
    const newsTitle = newsDiv.querySelector("h4").textContent;
    const newsContent = newsDiv.querySelector(".article-content").textContent;

    // sync the content
    targetCard.querySelector("img").setAttribute('src', newsImage);
    targetCard.querySelector("div.h3").innerText = newsTitle;
    targetCard.querySelector("p").innerText = newsContent;

});
// end of sync news window & card


