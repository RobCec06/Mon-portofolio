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
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêcher le rechargement de la page
  
    // Ajouter votre logique pour l'effet de confirmation ici
    const loader = document.querySelector(".loader");
    loader.style.display = "block";
  
    setTimeout(function () {
      loader.style.display = "none";
      document.querySelector("form").reset();
    }, 2000);
  });

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.button'),
        loader = document.querySelector('.loader'),
        check = document.querySelector('.check');
    
    btn.addEventListener('click', function () {
      loader.classList.add('active');    
    });
   
    loader.addEventListener('animationend', function() {
      check.classList.add('active'); 
    });
  });
  