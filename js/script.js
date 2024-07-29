

document.addEventListener('DOMContentLoaded', () => {

    ScrollReveal().reveal('.reveal-right', {
        distance: '100px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'right',
        reset: false // Use `reset: false` se quiser que a animação aconteça toda vez que rolar de volta para o elemento.
      });
    ScrollReveal().reveal('.reveal-left', {
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'left',
        reset: false // Use `reset: false` se quiser que a animação aconteça toda vez que rolar de volta para o elemento.
      });


    // window.addEventListener('scroll', () => {
    //     const section = document.getElementById('about');
    //     const sectionPosition = section.offsetTop;
        
    //     var nav = document.getElementById('nav');
        
    //     var scrollTop =  document.documentElement.scrollTop;
    //     if (scrollTop !== 0) {
    //         nav.classList.remove("w-full")
    //         nav.classList.remove("bg-transparent")
    //         nav.classList.add("shadow-lg") 
    //         nav.classList.add("w-[19.3rem]")
    //         nav.classList.add("sm:w-[23.3rem]")
    //         nav.classList.add("bg-neutral-900/70")
    //     } else {
    //         nav.classList.add("w-full")
    //         nav.classList.add("bg-transparent")
    //         nav.classList.remove("shadow-lg")
    //         nav.classList.remove("w-[19.3rem]")
    //         nav.classList.remove("sm:w-[23.3rem]")
    //         nav.classList.remove("bg-neutral-900/70")
    //     }
    // });
    
    document.addEventListener('scroll', () => {
        const stickyDiv = document.getElementById('stickyDiv');
        const growParentDiv = document.getElementById('growParentDiv');
        const growingDiv = document.getElementById('growingDiv');

        const parentRect = growParentDiv.getBoundingClientRect();
        const stickyRect = stickyDiv.getBoundingClientRect();
        const newHeight = stickyRect.top - parentRect.top;
        growingDiv.style.height = `${newHeight + 8}px`;
    });

    window.addEventListener('scroll', () => {
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
