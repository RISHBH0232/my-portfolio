gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from(".nav-wrapper header", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        delay: 0.3
})

tl.from(".logo-text-wrapper",{
        y:-50,
        opacity: 0,
        duration: 0.5,
})

tl.from(".btn", {
    y: -50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
});

tl.from(".home-bg-set", {
        opacity: 0,
        transform: "scale(0)",
        duration: 0.7,
        
})

tl.from(".home-img-wrapper", {
        x: -100,
        opacity: 0,
        duration: 0.6,
        
})

tl.from(".home-text-heading .hi1", {
        y: 30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.3,
})

gsap.from(".home-text-heading .hi2", {
        y:30,
        opacity: 0,
        // duration: ,
        stagger: 0.3,
        scrollTrigger: {
                trigger:".home-text-heading .hi2",
                scroller:"body",
                // markers:true,        
                start:"top 90%",
                end:"top 30%",
                scrub:2 //1,5 or true
        }
})

tl.from(".home-para", {
        x: -20,
        opacity: 0,
        // transform: "scale(0)",
        color: "#af2323",
        duration: 0.5,
})

tl.from(".home-social a", {
        opacity: 0,
        transform: "scale(0)",
        duration: 0.5,
        stagger: 0.3
})

tl.from(".home-hire-btn-wrapper", {
        x: -30,
        y: 30,
        opacity: 0,
        duration: 0.5,
})

/*******************
  Cursor Animation
*******************/
let wholeBodyWrapper = document.querySelector(".whole-body");
let cursor = document.querySelector(".cursor");
wholeBodyWrapper.addEventListener("mousemove", function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:1.5,
        ease:"back.out"
    })
})