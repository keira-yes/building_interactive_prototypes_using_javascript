var prevButton = document.getElementById('prevButton'),
nextButton = document.getElementById('nextButton'),
slideImage = document.getElementById('slideImage');

var imagesSrc = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];

var imageIndex = 0;

function handlerPrevButton() {
  if (imageIndex === 0) {
    imageIndex = imagesSrc.length - 1;
  } else {
    imageIndex--;
  }
  slideImage.setAttribute('src', imagesSrc[imageIndex])
}

function handlerNextButton() {
  if (imageIndex === imagesSrc.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  slideImage.setAttribute('src', imagesSrc[imageIndex])
}

prevButton.addEventListener('click', handlerPrevButton);
nextButton.addEventListener('click', handlerNextButton);
