document.addEventListener("DOMContentLoaded", function() {

  // Cursor + hover effects
  Shery.mouseFollower();
  Shery.makeMagnet(".dolo");
  Shery.hoverWithMediaCircle(".hvs", { videos: ["./0.mp4","./2.mp4","./3.mp4"] });

  // Left text sections
  let sections = document.querySelectorAll(".fleftelem");
  
  // Image effect
  Shery.imageEffect(".images", {
    style: 5,
    slideStyle: (setScroll) => {
      sections.forEach(function(section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: function(prog) {
            setScroll(prog.progress + index);
          }
        });
      });
    },
  });

  // Pin left text column
  gsap.to(".fleftelem", {
    y: "-300%",  // adjust depending on number of sections
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: () => "+=" + document.querySelector("#fleft").offsetHeight * sections.length,
      scrub: 1,
    }
  });

});
