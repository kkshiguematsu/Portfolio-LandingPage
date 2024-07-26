

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    window.addEventListener('scroll', function() {
        const section = document.getElementById('about');
        const sectionPosition = section.offsetTop;
        
        var nav = document.getElementById('nav');
        var navbar = document.getElementById('navbar');
        
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop !== 0) {
            nav.classList.remove("w-full")
            nav.classList.remove("bg-transparent")
            nav.classList.add("w-[19.3rem]")
            nav.classList.add("sm:w-[23.3rem]")
            nav.classList.add("bg-neutral-900/70")
            nav.classList.add("shadow-lg") 
        } else {
            nav.classList.remove("w-[19.3rem]")
            nav.classList.remove("sm:w-[23.3rem]")
            nav.classList.remove("shadow-lg")
            nav.classList.remove("bg-neutral-900/70")
            nav.classList.add("w-full")
            nav.classList.add("bg-transparent")
        }
    });
    
    document.addEventListener('scroll', () => {
        const stickyDiv = document.getElementById('stickyDiv');
        const growParentDiv = document.getElementById('growParentDiv');
        const growingDiv = document.getElementById('growingDiv');

        const parentRect = growParentDiv.getBoundingClientRect();
        const stickyRect = stickyDiv.getBoundingClientRect();
        const newHeight = stickyRect.top - parentRect.top;
        growingDiv.style.height = `${newHeight + 8}px`;
        console.log(growingDiv.style.height)
    });

    // document.querySelectorAll('.nav-link').forEach(link => {
    //     link.addEventListener('click', function(event) {
    //         if(window.innerWidth > 700){
    //             event.preventDefault();
    //             const targetId = this.getAttribute('href').substring(1);
    //             const targetElement = document.getElementById(targetId);
    //             const targetPosition = targetElement.getBoundingClientRect().top;
    //             const offsetPosition = targetPosition - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
    //             window.scrollTo({
    //                 top: offsetPosition,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });
    
    // window.addEventListener('scroll', function() {
    //     var socialMediaLinks = document.getElementById("social-media-links");
    //     const originalPosition = socialMediaLinks.offsetTop
    //     console.log(window.pageYOffset)
    //     console.log(originalPosition)
    //     if (window.pageYOffset > originalPosition) {
    //         socialMediaLinks.classList.remove("text-5xl")
    //         socialMediaLinks.classList.remove("absolute")
    //         socialMediaLinks.classList.remove("sm:bottom-0")
    //         socialMediaLinks.classList.remove("bottom-5")
    //         socialMediaLinks.classList.add("text-3xl")
    //         socialMediaLinks.classList.add("fixed")
    //     }  
    //     if (window.pageYOffset < originalPosition) {
    //         socialMediaLinks.classList.add("text-5xl")
    //         socialMediaLinks.classList.add("absolute")
    //         socialMediaLinks.classList.add("sm:bottom-0")
    //         socialMediaLinks.classList.add("bottom-5")
    //         socialMediaLinks.classList.remove("text-3xl")
    //         socialMediaLinks.classList.remove("fixed")
    //     }
    // });

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
