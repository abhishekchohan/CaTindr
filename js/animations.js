const value = window.innerWidth > 992 ? '30rem' : '5px';

window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'right',
    distance: '20rem'
});
sr.reveal('.animate-btn', {
    duration: 2000,
    delay: 1700,
    origin: 'bottom',
    delay: 500,
    distance: '20rem'
});
sr.reveal('.btn', {
    duration: 2000,
    origin: 'top',
    delay: 500,
    distance: '20rem'
});
sr.reveal('.animate-title-left', {
    duration: 2000,
    origin: 'left',
    delay: 500,
    distance: '30rem',
});
sr.reveal('.animate-title-right', {
    duration: 2000,
    origin: 'left',
    delay: 500,
    distance: value
});
sr.reveal('#feature-col-left', {
    duration: 2000,
    origin: 'left',
    delay: 500,
    distance: '30rem',
    viewFactor: 0.2
});
sr.reveal('#feature-col-center', {
    duration: 2000,
    origin: 'bottom',
    distance: '20rem',
    delay: 500,
    viewFactor: 0.2
    // mobile: false
});
sr.reveal('#feature-col-right', {
    duration: 2000,
    origin: 'left',
    distance: '30rem',
    delay: 500,
    viewFactor: 0.2
    // mobile: false
});
sr.reveal('#testimonials', {
    duration: 2500,
    origin: 'bottom',
    distance: '30rem',
    delay: 500,
    viewFactor: 0.1
    // mobile: false
});
sr.reveal('#press', {
    duration: 2000,
    origin: 'left',
    distance: '30rem',
    delay: 500,
    viewFactor: 0.1
    // mobile: false
});

sr.reveal('.card-left', {
    duration: 2000,
    origin: 'left',
    delay: 500,
    distance: '30rem',
    viewFactor: 0.2
});
sr.reveal('.card-center', {
    duration: 2000,
    origin: 'bottom',
    distance: '20rem',
    delay: 500,
    viewFactor: 0.2
    // mobile: false
});
sr.reveal('.card-right', {
    duration: 2000,
    origin: 'left',
    distance: '30rem',
    delay: 500,
    viewFactor: 0.2
    // mobile: false
});
