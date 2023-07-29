// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".wraper"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".wraper" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".wraper", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".wraper").style.transform ? "transform" : "fixed"
// });


gsap.to(".p1a", {
    bottom: "0vh",
    opacity: 1,
    duration: 1,
    delay: 2,
    ease: Expo.easeInout,
    stagger: .3,
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        // markers:true,
        start: "0% 30%",
        end: "0% 30%",
        scrub: 2,
    }
})
tl.to("#main", {
    backgroundColor: "#55334A",
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        // markers:true,
        start: "0% 30%",
        end: "0% 30%",
        scrub: 2,
    }
})
tl.to("#main", {
    backgroundColor: "#242E24",
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page5",
        // markers:true,
        start: "0% 50%",
        end: "0% 50%",
        scrub: 2,
    }
})
tl.to("#main", {
    backgroundColor: "#F1EEEE",
})


const menubar = document.querySelector(".menubar");
const menu = document.querySelector(".menu");
const closesym = document.querySelector(".closesym");


menu.addEventListener('click', () => {
    menubar.classList.toggle('active');
    closesym.style.display = "block";
    menu.style.display = "none";
})

menu.style.display = "block";
closesym.addEventListener('click', () => {
    menubar.classList.toggle('active');
    closesym.style.display = "none";
    menu.style.display = "block";
  
})