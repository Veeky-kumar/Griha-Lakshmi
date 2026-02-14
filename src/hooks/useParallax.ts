import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useParallax = () => {
  useEffect(() => {
    // Global parallax engine for all [data-parallax] elements
    const layers = document.querySelectorAll<HTMLElement>("[data-parallax]");

    layers.forEach((el) => {
      const parts = el.dataset.parallax!.split("-");
      const speed = parseFloat(parts[parts.length - 1]);
      const section = el.closest("section");
      if (!section) return;

      gsap.to(el, {
        y: () => -window.innerHeight * speed * 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Mouse parallax for .float elements
    const handleMouseMove = (e: MouseEvent) => {
      const floats = document.querySelectorAll<HTMLElement>(".parallax-float");
      floats.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || "0.02");
        gsap.to(el, {
          x: (e.clientX - window.innerWidth / 2) * depth,
          y: (e.clientY - window.innerHeight / 2) * depth,
          duration: 1,
          ease: "power2.out",
        });
      });
    };

    // Only enable mouse parallax on desktop
    if (window.innerWidth >= 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};

export default useParallax;
