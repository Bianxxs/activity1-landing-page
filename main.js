const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".links_navigation", {
    duration: 1000,
});

// header container
ScrollReveal().reveal(".container_head img", {
    duration: 1000,
});
  
ScrollReveal().reveal(".container_head h1", {
    ...scrollRevealOption,
    delay: 500,
});
  
ScrollReveal().reveal(".container_head p", {
    ...scrollRevealOption,
    delay: 1000,
});
  
ScrollReveal().reveal(".head__btns", {
    ...scrollRevealOption,
    delay: 1500,
});
  
  // about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});
  
ScrollReveal().reveal(".about__content h3", {
    ...scrollRevealOption,
    delay: 500,
});
  
ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});
  
ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 1500,
});
  
ScrollReveal().reveal(".about__content .about__grid", {
    ...scrollRevealOption,
    delay: 2000,
});
  
  // contact container
ScrollReveal().reveal(".contact__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".importance__section", {
    ...scrollRevealOption,
    origin: "left",
    delay: 900,
});

ScrollReveal().reveal(".additional__item", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".section__header", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".section__paragraph", {
    ...scrollRevealOption,
    delay: 1500,
});
  
document.getElementById('myButton').addEventListener('click', function() {
    // Use smooth scroll behavior to navigate to the section
    document.getElementById('myBut').scrollIntoView({ behavior: 'smooth' });
});

