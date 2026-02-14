import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CelebrationWheelSection = () => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!wheelRef.current || !sectionRef.current) return;

    // Continuous rotation
    tweenRef.current = gsap.to(wheelRef.current, {
      rotate: 360,
      duration: 40,
      repeat: -1,
      ease: "linear",
    });

    // Speed up rotation on scroll progress
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        if (tweenRef.current) {
          tweenRef.current.timeScale(1 + self.progress * 2);
        }
      },
    });

    // Hover pause
    const wheel = wheelRef.current;
    const pause = () => tweenRef.current?.pause();
    const resume = () => tweenRef.current?.resume();
    wheel.addEventListener("mouseenter", pause);
    wheel.addEventListener("mouseleave", resume);

    return () => {
      tweenRef.current?.kill();
      wheel.removeEventListener("mouseenter", pause);
      wheel.removeEventListener("mouseleave", resume);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-teal-pattern damask-overlay">
      <div className="absolute inset-0 star-field opacity-30" data-parallax="bg-0.1" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-hindi text-2xl md:text-4xl text-foreground/90 mb-2 gold-glow">
            हम आयोजित करते हैं
          </h2>
          <p className="font-serif text-lg text-muted-foreground italic tracking-wide">
            Celebrations We Host
          </p>
        </motion.div>

        {/* Spinning Wheel */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
          {/* Outer ornamental ring */}
          <div
            ref={wheelRef}
            className="absolute inset-0 rounded-full border-4 border-primary/50 cursor-pointer"
            style={{
              boxShadow:
                "0 0 0 8px hsl(43 40% 30% / 0.3), 0 0 0 16px hsl(43 40% 30% / 0.1), 0 0 60px hsl(43 72% 55% / 0.15)",
            }}
          >
            {/* Decorative notches around the wheel */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-primary/60 rounded-full"
                style={{
                  top: `${50 - 46 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                  left: `${50 + 46 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
            {/* Inner floral motifs (4 quadrants) */}
            {[0, 90, 180, 270].map((deg) => (
              <div
                key={deg}
                className="absolute top-1/2 left-1/2 font-hindi text-primary/40 text-lg"
                style={{
                  transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-35%)`,
                }}
              >
                ❀
              </div>
            ))}
          </div>

          {/* Static center portrait area */}
          <div className="absolute inset-8 md:inset-10 rounded-full bg-gradient-to-br from-teal-mid to-accent/30 border-2 border-primary/40 flex items-center justify-center overflow-hidden">
            <div className="text-center p-4">
              <p className="font-hindi text-2xl md:text-3xl text-primary gold-glow mb-1">गृह</p>
              <p className="font-hindi text-2xl md:text-3xl text-primary gold-glow">लक्ष्मी</p>
              <div className="w-12 h-px bg-primary/30 mx-auto my-2" />
              <p className="font-serif text-xs text-muted-foreground italic">Since 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrationWheelSection;
