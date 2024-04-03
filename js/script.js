

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const section = document.getElementById('about');
        const scrollPosition = window.scrollY || window.pageYOffset;
        const sectionPosition = section.offsetTop;
        
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

    window.addEventListener('scroll', function() {
        const aboutSection = document.getElementById('about');
        const navbar = document.getElementById('navbar');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8 
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navbar.classList.remove("text-neutral-500");
                    navbar.classList.add("text-white");
                } else {
                    navbar.classList.add("text-neutral-500");
                    navbar.classList.remove("text-white");
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(aboutSection);
    });
});
