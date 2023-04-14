function showHiddenText(element) {
    const hiddenText = element.querySelector('.hidden-text');
    hiddenText.style.visibility = 'visible';
    hiddenText.style.opacity = '1';
}

function hideHiddenText(element) {
    const hiddenText = element.querySelector('.hidden-text');
    hiddenText.style.visibility = 'hidden';
    hiddenText.style.opacity = '0';
}

window.addEventListener('scroll', function () {
    const scroll = window.scrollY;
    const parallaxBg = document.querySelector('.parallax-bg');
    const speed = parallaxBg.getAttribute('data-speed');
    parallaxBg.style.transform = 'translateY(' + scroll / speed + 'px)';
});

function showButton(element) {
    const buttonContainer = element.querySelector('.button-container');
    buttonContainer.classList.add('show-button');
  }
  
  function hideButton(element) {
    const buttonContainer = element.querySelector('.button-container');
    buttonContainer.classList.remove('show-button');
  }