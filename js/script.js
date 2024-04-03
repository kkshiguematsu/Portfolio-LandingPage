

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var nav = document.getElementById('nav');
        var navbar = document.getElementById('navbar');
        
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // bg-stone-700/10
        // Check if scroll position is not at the top
        if (scrollTop !== 0) {
            nav.style.width = '280px';
            nav.classList.remove("bg-transparent")
            nav.classList.add("bg-stone-700/10")
            nav.classList.add("shadow-lg")
            navbar.style.justifyContent = 'center';
        } else {
            nav.classList.remove("shadow-lg")
            nav.classList.remove("bg-stone-700/10")
            nav.classList.add("bg-transparent")
            nav.style.width = '100%';
            navbar.style.justifyContent = 'end';
        }
    });
});
