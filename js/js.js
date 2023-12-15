document.addEventListener('DOMContentLoaded', function () {
    var paragraph = document.getElementById('parare');
    var cursor = document.getElementById('cursor');
    var text = paragraph.innerText;
    paragraph.innerText = '';

    function typeWriter(text, i) {
        if (i < text.length) {
            paragraph.innerHTML += text.charAt(i);
            i++;
            setTimeout(function () {
                typeWriter(text, i);
            }, 31);
        } else {
            cursor.style.display = (cursor.style.display === 'none' ? '' : 'none');
            setTimeout(function () {
                typeWriter(text, i);
            }, 5); 
        }
    }

    typeWriter(text, 0);
});