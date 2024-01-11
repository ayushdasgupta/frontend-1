let crsr=document.querySelector("#cursor");
let blur=document.querySelector("#cursor_blur");
document.addEventListener("mousemove",function (dets) {
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    blur.style.left=dets.x-150+"px";
    blur.style.top=dets.y-150+"px";
})

let h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0 px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "120px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 3

    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -80%",
        scrub: 2
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 65%",
        end:"top 55%",
        scrub:2
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:70,
    // duration:1,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})

gsap.from("#studio-image,#studio-about",{
    y:70,
    opacity:0,
    scrollTrigger:{
        trigger:"#studio-section",
        scroller:"body",
        marker:true,
        start:"top 75%",
        end:"top 65%",
        scrub:4
    }
})
gsap.from("#instawall",{
    y:70,
    opacity:0,
    scrollTrigger:{
        trigger:"#instagram",
        scroller:"body",
        marker:true,
        start:"top 75%",
        end:"top 65%",
        scrub:4
    }
})

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    loop: true,
    
    
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
});