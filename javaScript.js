
let tl =gsap.timeline({defaults:{duration:.5}})
tl
.to(".layer-1",{y:"-100vh"})

.to(".layer-2",{y:"-100vh"})

.to(".layer-3",{y:"-100vh"})

.to(".overLay",{y:"-100vh"})
.fromTo(".text",{
 x:"30rem" ,opacity:0},{
 x:0,opacity:1 ,ease:"back.out(1.7)"})
.fromTo(".watchWrapper",{
    x:"30rem",opacity:0},{
    x:0,opacity:1,ease:"back.out(1.7)"
})
.fromTo(".circle-small",{
    x:"-30rem",opacity:0},{
    x:0,opacity:1,ease:"back.out(1.7)"})
.fromTo(".circle-large",{
    x:"-30rem",opacity:0},{
    x:0,opacity:1,ease:"back.out(1.7)"
})