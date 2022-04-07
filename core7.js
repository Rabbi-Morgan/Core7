const toggleBtn = document.getElementById('menu_open');
const menu = document.querySelector('.menu');
const loader = document.querySelector('.loader--loading');
const video = document.querySelector('.hero_video');
const body = document.querySelector('body');
const arrow = document.querySelector('.arrow');
const about_cont = document.querySelector('.section1');
const about_cot = document.querySelector('.about');
const about = document.querySelectorAll('.about_img');
const topPos = about_cot.getBoundingClientRect().top + window.scrollY;
const bottomPos = about_cont.getBoundingClientRect().bottom + window.scrollY;
const scrollReview = document.querySelector('.review_cont');
const leftReview = document.getElementById('prev');
const rightReview = document.getElementById('next');
const navItems = document.querySelectorAll('.nav_list li a');
const contactUs = document.querySelectorAll('.contact--us');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggleBtn.classList.toggle('show');
    body.classList.toggle('no--scroll');
})
navItems.forEach(nav => {
    nav.addEventListener('click', ()=>{
        menu.classList.remove('open');
    toggleBtn.classList.remove('show');
    body.classList.remove('no--scroll');
    })
});
// to start the animation when the video is loaded
video.addEventListener('loadeddata', ()=> {
    loader.style.animation = `loading ${video.duration}s linear infinite`;
});

// make the arrow visible after 560 viewport height
window.addEventListener('scroll', ()=> {
    if(this.scrollY >= 560) arrow.classList.add('show--arrow'); else arrow.classList.remove('show--arrow');
    // about transition on scroll
    about.forEach(imgs => {
        if(screen.width <= 500){
            if(this.scrollY >= bottomPos){
                imgs.classList.add('scale');}
        }else {
            if(this.scrollY >= bottomPos){
            imgs.classList.add('scale');}
        }
    })   
});
// contact us section
contactUs.forEach(contact => {
    contact.addEventListener('click', ()=> {
        document.querySelector('.contact_us_div').classList.add('show_us');
        document.querySelector('body').classList.add('body--blur');
    })
});
const times = document.getElementById('times-cont');
times.addEventListener('click', ()=> {
    document.querySelector('.contact_us_div').classList.remove('show_us');
    document.querySelector('body').classList.remove('body--blur');
})
// for the carousel 

rightReview.addEventListener('click', ()=> {
    scrollReview.scrollLeft += 290;

    check();    
});
leftReview.addEventListener('click', ()=> {
    scrollReview.scrollLeft -= 287;    
    check();
});
const maxScrollLeft = scrollReview.scrollWidth - scrollReview.clientWidth;
const prevH = document.querySelector('.prev');
const nextH = document.querySelector('.next');
function check() {
    if (scrollReview.scrollLeft > (maxScrollLeft - 1)) {
        nextH.classList.remove('move');
        prevH.classList.add('move');
    }else {
       nextH.classList.add('move');
        prevH.classList.remove('move');
    }
}
// document.getElementById('contact_button').addEventListener('click', (e)=> {

//     e.preventDefault()
// })
