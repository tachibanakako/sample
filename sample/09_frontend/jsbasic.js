function changeColor() {
    const textElement = document.getElementById('text-element');
    textElement.classList.add('color-changed');
}

const button = document.getElementById("color-change-button");

button.addEventListener("click", changeColor);