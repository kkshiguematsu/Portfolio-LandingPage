

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const section = document.getElementById('about');
        const scrollPosition = window.scrollY || window.pageYOffset;
        const sectionPosition = section.offsetTop;
        
        var nav = document.getElementById('nav');
        var navbar = document.getElementById('navbar');
        
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop !== 0) {
            nav.classList.remove("w-full")
            nav.classList.remove("bg-transparent")
            nav.classList.add("w-[18.2rem]")
            nav.classList.add("sm:w-[21.5rem]")
            nav.classList.add("bg-neutral-900/70")
            nav.classList.add("shadow-lg") 
        } else {
            nav.classList.remove("w-[291px]")
            nav.classList.remove("sm:w-[344px]")
            nav.classList.remove("shadow-lg")
            nav.classList.remove("bg-neutral-900/70")
            nav.classList.add("w-full")
            nav.classList.add("bg-transparent")
        }
    });

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) 
                {
                    const sectionId = entry.target.id;
                    navLinks.forEach(link => {
                        if (link.getAttribute('href').slice(1) === sectionId) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        sections.forEach(section => {
            observer.observe(section);
        });
    });
});
