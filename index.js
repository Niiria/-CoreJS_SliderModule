//import "./scss/styles.scss";
import { images } from "./js/imagesList.js";

const SLIDES = document.querySelector("#slides");
const SLIDES_CONTAINER = document.querySelector("#slides-container");
const SLIDES_BUTTON_CONTAINER = document.querySelector(
  "#slides-button-container"
);
const SLIDES_DESCRIPTION = document.querySelector("#slides-description");

let image = 0;
const time = 700;

console.log(images[image].url)

SLIDES_CONTAINER.style.backgroundImage = "url('" + images[image].url + "')";

SLIDES_BUTTON_CONTAINER.addEventListener("click", event => {
  if (event.target.id === "slides-button-right") {
    if (image === images.length - 1) {
      image = -1;
    }

    image++;

    SLIDES.classList.add("slides-background");
    SLIDES.style.backgroundImage = "url('" + images[image].url + "')";
    SLIDES_CONTAINER.classList.add("slides-container-anim-right");
    SLIDES_DESCRIPTION.classList.add("slides-description-hide");
    SLIDES_BUTTON_CONTAINER.children[0].classList.add("button-hide");
    SLIDES_BUTTON_CONTAINER.children[1].classList.add("button-hide");

    setTimeout(() => {
      SLIDES_CONTAINER.style.backgroundImage =
        "url('" + images[image].url + "')";
      SLIDES_DESCRIPTION.children[0].textContent = images[image].title;
      SLIDES_DESCRIPTION.children[1].textContent = images[image].text;
      SLIDES_CONTAINER.classList.remove("slides-container-anim-right");
      SLIDES_DESCRIPTION.classList.remove("slides-description-hide");
      SLIDES_BUTTON_CONTAINER.children[0].classList.remove("button-hide");
      SLIDES_BUTTON_CONTAINER.children[1].classList.remove("button-hide");
    }, time);
  }

  if (event.target.id === "slides-button-left") {
    
    if (image === 0) {
      image = images.length;
    }

    image--;

    SLIDES.classList.add("slides-background");
    SLIDES.style.backgroundImage = "url('" + images[image].url + "')";
    SLIDES_CONTAINER.classList.add("slides-container-anim-left");
    SLIDES_DESCRIPTION.classList.add("slides-description-hide");
    SLIDES_BUTTON_CONTAINER.children[0].classList.add("button-hide");
    SLIDES_BUTTON_CONTAINER.children[1].classList.add("button-hide");

    setTimeout(() => {
      SLIDES_CONTAINER.style.backgroundImage =
        "url('" + images[image].url + "')";
      SLIDES_DESCRIPTION.children[0].textContent = images[image].title;
      SLIDES_DESCRIPTION.children[1].textContent = images[image].text;
      SLIDES_CONTAINER.classList.remove("slides-container-anim-left");
      SLIDES_DESCRIPTION.classList.remove("slides-description-hide");
      SLIDES_BUTTON_CONTAINER.children[0].classList.remove("button-hide");
      SLIDES_BUTTON_CONTAINER.children[1].classList.remove("button-hide");
    }, time);
  }
});
