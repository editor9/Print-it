const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const carouselInner = document.querySelector(".carousel-inner");
const dotsContainer = document.querySelector(".dots");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
let currentIndex = 0;

function updateCarousel() {
    carouselInner.innerHTML = "";
    dotsContainer.innerHTML = "";

    slides.forEach((slide, index) => {
        const slideElement = document.createElement("div");
        slideElement.classList.add("carousel-slide");
        slideElement.innerHTML = `
            <img class="banner-img" src="./assets/images/slideshow/${slide.image}" alt="Banner Print-it">
            <p>${slide.tagLine}</p>
        `;
        carouselInner.appendChild(slideElement);

        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => showSlide(index));
        dotsContainer.appendChild(dot);
    });

    showSlide(0);
}

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
            dots[i].classList.add("dot_selected");
        } else {
            slide.style.display = "none";
            dots[i].classList.remove("dot_selected");
        }
    });
    currentIndex = index;
}

function showPreviousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

leftArrow.addEventListener("click", showPreviousSlide);
rightArrow.addEventListener("click", showNextSlide);

updateCarousel();
