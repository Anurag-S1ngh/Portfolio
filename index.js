$('.open').click(()=>{
    $('.nav_container').addClass('show');
    $('.glow_circle').addClass('higer_z');
})

$('.close, .menu_items').click(()=>{
    $('.nav_container').removeClass('show');
    $('.glow_circle').removeClass('higher_z');
})

$('.moon').click(()=>{
    $('.moon').addClass('moon_hide');
    $('.sun').addClass('sunrise');
    $('.home_name').addClass('light_mode_h1');
    $('body').addClass('light_mode_body');
    $('.open_i, .close_i, .sun, .moon, .social_logo_i').addClass('light_mode_black');
    $('.home_name_h2').addClass('light_mode_h2');
    $('.about_title, .skills_title, .project_title, .contact_title').addClass('light_mode_title');
    $('.skills_items').addClass('light_mode_skills_items');
    $('.skills_items p, .about_text p').addClass('light_mode_p');
    $('input, textarea').addClass('light_mode_input');
    $('body').addClass('light_mode');
    $('.btn').addClass('light_mode_send');
    $('body').addClass('light_mode_img');
    $('.nav_container').addClass('light_mode_white');
    $('.menu_items').addClass('light_mode_p1');
    $('body').addClass('light_mode_nav');
    $('.glow_circle').addClass('glow_circle_sun');
    $('body').addClass('light_mode_menu');
    $('body').addClass('light_mode_hover');
    $('.skills_items').addClass('light_mode_colour');

})

$('.sun').click(()=>{
    $('.moon').removeClass('moon_hide');
    $('.sun').removeClass('sunrise');
    $('.home_name').removeClass('light_mode_h1');
    $('body').removeClass('light_mode_body');
    $('.open_i, .close_i, .sun, .moon, .social_logo_i').removeClass('light_mode_black');
    $('.home_name_h2').removeClass('light_mode_h2');
    $('.about_title, .skills_title, .project_title, .contact_title').removeClass('light_mode_title');
    $('.skills_items').removeClass('light_mode_skills_items');
    $('.skills_items p, .about_text p').removeClass('light_mode_p');
    $('input, textarea').removeClass('light_mode_input');
    $('body').removeClass('light_mode');
    $('.btn').removeClass('light_mode_send');
    $('body').removeClass('light_mode_img');
    $('.nav_container').removeClass('light_mode_white');
    $('.menu_items').removeClass('light_mode_p1');
    $('body').removeClass('light_mode_nav');
    $('.glow_circle').removeClass('glow_circle_sun');
    $('body').removeClass('light_mode_menu');
    $('.skills_items').removeClass('light_mode_colour');
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
    delay: 200
}
var left2={
    distance: '40px',
    opacity: 0,
    delay: 200,
    duration:600,
    easing: 'ease-out',
    origin: 'left',
    interval:200,
    delay: 500
}
var left3={
    distance: '40px',
    opacity: 0,
    delay: 200,
    duration:600,
    easing: 'ease-out',
    origin: 'left',
    interval:200,
    delay: 700
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
    delay: 750
}

const circle = document.querySelector('.glow_circle');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    circle.style.transform = `translate(${x - 25}px, ${y - 25}px)`; 
});

ScrollReveal().reveal('.title h1',up2);
ScrollReveal().reveal('.title h2',up3);
ScrollReveal().reveal('.title h3',up1);
ScrollReveal().reveal('.about_text',left);
ScrollReveal().reveal('.about_img',right);
ScrollReveal().reveal('.skill_item',up4);
ScrollReveal().reveal('.project_card',up5);
ScrollReveal().reveal('input',left);
ScrollReveal().reveal('textarea',left2);
ScrollReveal().reveal('.button_',left3);
ScrollReveal().reveal('.social_items',down);
