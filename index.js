
const circle = document.querySelector('.glow_circle');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    gsap.to(".glow_circle", {
        duration: 1,
        x: x - 20,
        y: y - 20,
        ease: "elastic.out(1.2,1)",
    });
});

var tl = gsap.timeline();

tl.from(".gsaptitle", {
    delay: 1,
    y: -60,
    opacity: 0,
    duration: 3,
    stagger: 0.4,
    markers: true,
    ease: "power4.out",
});

gsap.from('.about_title ',{
    x: -50,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    scrollTrigger : {
        trigger: '.about_title',
        scroller: "body",
        start: "top 65%" ,
        markers: true,
        end: "top 5%",
        scrub: 2 ,
        }
})

gsap.from('.about_img ',{
    x: 50,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    scrollTrigger : {
        trigger: '.about_img',
        scroller: "body",
        start: "top 50%" ,
        markers: true,
        end: "top 5%",
        scrub: 2 ,
        }
})

gsap.from('.about_text ',{
    x: -50,
    opacity: 0,
    duration: 3,
    ease: "power4.out",
    scrollTrigger : {
        trigger: '.about_img',
        scroller: "body",
        start: "top 50%" ,
        markers: true,
        end: "top 5%",
        scrub: 2 ,
        }
})

gsap.from('.skills_title ',{
    x: -50,
    opacity: 0,
    duration: 3,
    ease: "power4.out",
    scrollTrigger : {
        trigger: '.skills_title',
        scroller: "body",
        start: "top 55%" ,
        markers: true,
        end: "top 5%",
        scrub: 2 ,
        }
})

gsap.from('.skill_item ',{
    y: -50,
    opacity: 0,
    duration: 4,
    stagger: 0.4,
    ease: "power4.out",
    scrollTrigger : {
        trigger: '.skill_item',
        scroller: "body",
        start: "top 50%" ,
        end: "top 5%",
        markers: true,
        scrub: 2 ,
        }
})

gsap.from('.project_title',{
    x: -50,
    opacity: 0,
    duration: 3,
    ease: "power4.out",
    scrollTrigger : {
        trigger: '.project_title',
        scroller: "body",
        start: "top 60%" ,
        markers: true,
        end: "top 5%",
        scrub: 2 ,
        }
})

gsap.from('.project_card',{
    y: 50,
    opacity: 0,
    duration: 4,
    ease: "power4.out",
    stagger: 0.6,
    scrollTrigger : {
        trigger: '.project_card',
        scroller: "body",
        markers: true,
        start: "top 50%" ,
        end: "top 5%",
        scrub: 2 ,
        }
})

gsap.from('.contact_title',{
    x: -50,
    opacity: 0,
    duration: 3,
    ease: "power4.out",
    scrollTrigger : {
        trigger: '.contact_title',
        scroller: "body",
        markers: true,
        start: "top 70%" ,
        end: "top 20%",
        scrub: 2 ,
        }
})

gsap.from('form input',{
    x: -50,
    opacity: 0,
    duration: 3,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger : {
        trigger: 'form input',
        scroller: "body",
        markers: true,
        start: "top 70%" ,
        end: "top 40%",
        scrub: 2 ,
        }
})

gsap.from('form textarea',{
    x: -50,
    opacity: 0,
    duration: 3,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger : {
        trigger: 'form textarea',
        scroller: "body",
        markers: true,
        start: "top 75%" ,
        end: "top 60%",
        scrub: 2 ,
        }
})

gsap.from('.button_',{
    x: -50,
    opacity: 0,
    duration: 3,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger : {
        trigger: '.button_',
        scroller: "body",
        markers: true,
        start: "top 87%" ,
        end: "top 95%",
        scrub: 2 ,
        }
})




$('.open').click(() => {
    $('.nav_container').addClass('show');
    $('.glow_circle').addClass('higher_z');  // Ensure class names are correct
});

$('.close, .menu_items').click(() => {
    $('.nav_container').removeClass('show');
    $('.glow_circle').removeClass('higher_z');  // Consistent class
});

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
