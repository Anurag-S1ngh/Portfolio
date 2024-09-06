$('.open').click(()=>{
    $('.nav_container').addClass('show');
})

$('.close, .menu_items').click(()=>{
    $('.nav_container').removeClass('show');
})

var up1={
    distance: '80px',
    opacity: 0,
    delay: 200,
    duration:800,
    easing: 'ease-out',
    origin: 'top',
    delay:200
}
var up2={
    distance: '80px',
    opacity: 0,
    delay: 200,
    duration:800,
    easing: 'ease-out',
    origin: 'top',
    delay: 500
}
var up3={
    distance: '60px',
    opacity: 0,
    delay: 200,
    duration:800,
    easing: 'ease-out',
    origin: 'top',
    delay: 800
}
var up4={
    distance: '40px',
    opacity: 0,
    delay: 200,
    duration:800,
    easing: 'ease-out',
    origin: 'top',
    interval: 200,
    delay: 400
}
var up5={
    distance: '40px',
    opacity: 0,
    delay: 200,
    duration:800,
    easing: 'ease-out',
    origin: 'top',
    interval: 200,
    delay: 600
}
var left={
    distance: '40px',
    opacity: 0,
    delay: 200,
    duration:600,
    easing: 'ease-out',
    origin: 'left',
    interval:200,
    delay: 400
}
var left2={
    distance: '40px',
    opacity: 0,
    delay: 200,
    duration:600,
    easing: 'ease-out',
    origin: 'left',
    interval:200,
    delay: 800
}
var left3={
    distance: '40px',
    opacity: 0,
    delay: 200,
    duration:600,
    easing: 'ease-out',
    origin: 'left',
    interval:200,
    delay: 1000
}
var right={
    distance: '60px',
    opacity: 0,
    delay: 200,
    duration:800,
    easing: 'ease-out',
    origin: 'right',
    delay: 400
}
var down={
    distance: '40px',
    opacity: 0,
    delay: 200,
    duration:800,
    easing: 'ease-out',
    origin: 'bottom',
    interval:200,
    delay: 1100
}

ScrollReveal().reveal('.title h1',up2);
ScrollReveal().reveal('.title h2',up3);
ScrollReveal().reveal('.title h3',up1);
ScrollReveal().reveal('.about_text',left);
ScrollReveal().reveal('.about_img',right);
ScrollReveal().reveal('.skill_item',up4);
ScrollReveal().reveal('.project_card',up5);
ScrollReveal().reveal('input',left);
ScrollReveal().reveal('textarea',left2);
ScrollReveal().reveal('.btn',left3);
ScrollReveal().reveal('.social_items',down);

