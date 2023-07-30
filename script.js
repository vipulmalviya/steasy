


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




function skeowCircle() {
    var defultX = 1
    var defultY = 1
    var X = 0
    var Y = 0
    var timeout
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout); 

        defultX = gsap.utils.clamp(0.8, 1.2, X - dets.clientX)
        defultY = gsap.utils.clamp(0.8, 1.2, Y - dets.clientY)

        X = dets.clientX
        Y = dets.clientY

        mousefollow(defultX, defultY)
    
        timeout = setTimeout(() => {
        document.querySelector(".circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`
        }, 200);

    })
}

function mousefollow(defultX,defultY) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(".circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${defultX},${defultY})`
    })
}



skeowCircle()



