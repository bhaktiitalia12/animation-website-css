const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  menuIcon.textContent = mobileMenu.classList.contains("show") ? "✖" : "☰";
});

gsap.to(".navbar", {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
});

document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  // Step 1: Animate Navbar First (top to bottom)
  tl.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  })

    // Step 2: Hero Section Animation (after navbar completes)
    .from(
      ".hero-content",
      {
        x: -300,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "+=0.2"
    ) // Start after 0.2s delay

    .from(
      ".hero-image",
      {
        x: 300,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.8"
    ); // Overlap 0.8s for smooth effect
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".left-content img", {
  opacity: 0,
  scale: 0.9, // Slight zoom effect for smooth entry
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".left-content img",
    start: "top 80%", // Animation starts when image enters viewport
    toggleActions: "play none none none",
  },
});

gsap.from(".service-item", {
  opacity: 0,
  scale: 0.8, // Start smaller for depth effect
  rotateY: -30, // Slight rotation for 3D effect
  y: 50, // Move up effect
  duration: 1.2,
  stagger: 0.3, // Each box animates one after another
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".service-box",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

/////////////////////////////////

gsap.from(".image-container", {
  x: -500,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".image-container",
    start: "top 80%",
    toggleActions: "play none none none",
  },
}); // Start after 0.2s delay

gsap.from(".content", {
  x: 500,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".content",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

gsap.fromTo(
  ".section-title",
  {
    opacity: 0,
    duration: 3,
    transform: "perspective(1000px) translateZ(-100px)",
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }, // Starts from back
  {
    opacity: 1,
    transform: "perspective(1000px) translateZ(0px)",
    duration: 0.2,
    ease: "power2.out",
    repeat: 2,
    yoyo: true,
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 100%",
      toggleActions: "play none none none",
    },
  } // Moves forward & repeats twice
);

gsap.to(".card-container", {
  opacity: 1,
  y: 0,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.3, // Delays each card animation
  scrollTrigger: {
    trigger: ".card-container",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

gsap.to(".blog-container", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".blog-container",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

gsap.to(".news-section", {
  opacity: 1,
  y: 0,
  duration: 0.7,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".news-section",
    start: "top 80%", // Animation starts when the section enters the viewport
    toggleActions: "play none none none",
  },
});

gsap.from(".contact-text", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".contact-text",
    start: "top 80%",
    toggleActions: "play none none none",
  },
}); // Start after 0.2s delay

gsap.from(".contact-form", {
  x: 500,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});



gsap.from("#footer", {
  opacity: 0,
  scale: 0.5 /* Starts smaller */,
  z: -500 /* Moves from behind the screen */,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-form",
    start: "bottom 80%",
    toggleActions: "play none none none",
  },
});
