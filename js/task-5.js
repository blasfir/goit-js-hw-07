function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChangeColor = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanColor = document.querySelector(".color");
buttonChangeColor.addEventListener("focus", event => {
  const randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  spanColor.textContent = randomHexColor;
        })