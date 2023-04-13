function showHiddenText(element) {
    const hiddenText = element.parentElement.querySelector('.hidden-text');
    hiddenText.style.display = 'block';
    hiddenText.style.opacity = '1';
}

function hideHiddenText(element) {
    const hiddenText = element.parentElement.querySelector('.hidden-text');
    hiddenText.style.display = 'none';
    hiddenText.style.opacity = '0';
}

window.addEventListener('scroll', function () {
    const scroll = window.scrollY;
    const parallaxBg = document.querySelector('.parallax-bg');
    const speed = parallaxBg.getAttribute('data-speed');
    parallaxBg.style.transform = 'translateY(' + scroll / speed + 'px)';
});