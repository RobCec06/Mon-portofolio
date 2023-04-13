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