const classesLink = document.getElementById('classes-link');
const submenu = document.getElementById('classes-submenu');
const navLinks = document.querySelectorAll('#navigation ul > li > a');

classesLink.addEventListener('click', function(e) {
    e.preventDefault();
    submenu.classList.toggle('show');
});

// Hide submenu when any other nav link is clicked (except Classes)
navLinks.forEach(link => {
    if (link !== classesLink) {
        link.addEventListener('click', function() {
            submenu.classList.remove('show');
        });
    }
});
document.addEventListener('click', function(e) {
    if (
        !submenu.contains(e.target) &&
        e.target !== classesLink &&
        submenu.classList.contains('show')
    ) {
        submenu.classList.remove('show');
    }
});