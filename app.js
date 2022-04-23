const container = document.querySelector('#container');
const width = container.offsetWidth;
const height = container.offsetHeight;
const images = document.querySelectorAll('img');
const slider = document.querySelector('#slider');
let currentImage = 1;
const buttons = document.querySelectorAll('label');

setImgDimensions();

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((button) => {
      button.firstChild.classList.remove('selected');
    });
    button.firstChild.classList.add('selected');
    let selectedButtonID = button.getAttribute('id');
    let selectedButtonIndex;
    switch (selectedButtonID) {
      case 'first-button':
        selectedButtonIndex = 1;
        break;
      case 'second-button':
        selectedButtonIndex = 2;
        break;
      case 'third-button':
        selectedButtonIndex = 3;
        break;
      case 'fourth-button':
        selectedButtonIndex = 4;
        break;
    }
    moveSlider(selectedButtonIndex);
  });
});

function setImgDimensions() {
  images.forEach((image) => {
    image.width = width;
    image.height = height;
  });
}

function moveSlider(buttonIndex) {
  slider.style.transform = `translateX(-${
    (buttonIndex - currentImage) * width
  }px)`;
  currentImage = buttonIndex;
}
