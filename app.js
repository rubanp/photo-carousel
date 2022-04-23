const container = document.querySelector('#container');
const width = container.offsetWidth;
const height = container.offsetHeight;
const images = document.querySelectorAll('img');
const slider = document.querySelector('#slider');
const buttons = document.querySelectorAll('label');
let current = 1;

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
  const location = (buttonIndex - 1) * -1;
  slider.style.transform = `translateX(${location * width}px)`;
  current = buttonIndex;
}
