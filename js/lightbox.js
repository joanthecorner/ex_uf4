document.querySelectorAll('.image').forEach(function(image) {
    image.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('open');
    });
});


