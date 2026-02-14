import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "@/assets/hero-bg.jpg";
import ornamentalArch from "@/assets/ornamental-arch.png";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top paper curtain — reveals content underneath on scroll
      gsap.to(".hero-top-curtain", {
        y: "-30vh",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Side paper edges — slow foreground drift
      gsap.to(".hero-side-edge-left", {
        y: -40,
        x: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-side-edge-right", {
        y: -40,
        x: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hall — scale reveal
      gsap.fromTo(
        ".hero-hall",
        { scale: 0.85, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      // Diamond — scale reveal later
      gsap.fromTo(
        ".hero-diamond",
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "center bottom",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Clouds — horizontal drift
      gsap.to(".hero-cloud-back", {
        x: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-cloud-front", {
        x: -50,
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Moon — slow rotation + drift
      gsap.to(".hero-moon", {
        rotation: 3,
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Balloon — diagonal float
      gsap.to(".hero-balloon", {
        y: -80,
        x: 30,
        rotation: -4,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Stars — continuous slow rotation
      gsap.utils.toArray<HTMLElement>(".hero-star").forEach((star, i) => {
        gsap.to(star, {
          rotation: 360,
          duration: 80 + i * 20,
          repeat: -1,
          ease: "linear",
        });
        // Twinkling
        gsap.to(star, {
          opacity: 0.3 + Math.random() * 0.5,
          duration: 2 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });
      });

      // Ornamental arch — slow parallax
      gsap.to(".hero-arch", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section relative min-h-[120vh] flex items-center justify-center overflow-hidden"
    >
      {/* ═══ Z-10: BG Paper Texture ═══ */}
      <div className="absolute inset-0 z-[1]" data-parallax="bg-0.03">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* ═══ Z-9: Damask Pattern ═══ */}
      <div
        className="absolute inset-0 z-[2] damask-overlay opacity-60"
        data-parallax="bg-0.05"
      />

      {/* ═══ Z-8: Stars Far ═══ */}
      <div className="absolute inset-0 z-[3]" data-parallax="bg-0.08">
        {[
          { x: "10%", y: "15%", size: 3 },
          { x: "25%", y: "40%", size: 4 },
          { x: "45%", y: "8%", size: 2 },
          { x: "65%", y: "25%", size: 3 },
          { x: "80%", y: "45%", size: 2 },
          { x: "90%", y: "12%", size: 4 },
          { x: "35%", y: "70%", size: 2 },
          { x: "55%", y: "55%", size: 3 },
        ].map((s, i) => (
          <div
            key={`far-${i}`}
            className="hero-star absolute rounded-full"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              background: `radial-gradient(circle, hsl(var(--gold-light)), hsl(var(--gold)))`,
              boxShadow: `0 0 ${s.size * 3}px hsl(var(--gold) / 0.5)`,
            }}
          />
        ))}
      </div>

      {/* ═══ Z-7: Stars Near ═══ */}
      <div className="absolute inset-0 z-[4]" data-parallax="bg-0.12">
        {[
          { x: "15%", y: "30%", size: 5 },
          { x: "50%", y: "20%", size: 6 },
          { x: "75%", y: "60%", size: 4 },
          { x: "30%", y: "55%", size: 5 },
          { x: "88%", y: "35%", size: 4 },
        ].map((s, i) => (
          <div
            key={`near-${i}`}
            className="hero-star absolute"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
            }}
          >
            {/* 4-point star SVG */}
            <svg viewBox="0 0 20 20" className="w-full h-full">
              <polygon
                points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8"
                fill="hsl(43, 80%, 70%)"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* ═══ Z-6: Crescent Moon ═══ */}
      <div
        className="hero-moon absolute top-[6%] right-[12%] w-24 h-24 md:w-36 md:h-36 z-[5] parallax-float"
        data-depth="0.03"
        data-parallax="mid-0.15"
      >
        <div
          className="w-full h-full rounded-full bg-gradient-to-br from-ivory to-yellow-warm opacity-90"
          style={{
            clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%, 20% 50%)",
            boxShadow: "0 0 60px hsl(43 80% 70% / 0.4), 0 0 120px hsl(43 80% 70% / 0.15)",
          }}
        />
      </div>

      {/* ═══ Z-5: Hot Air Balloon ═══ */}
      <div
        className="hero-balloon absolute top-[12%] left-[8%] md:left-[15%] z-[6] parallax-float"
        data-depth="0.04"
        data-parallax="mid-0.18"
      >
        <div className="relative w-16 h-24 md:w-24 md:h-36">
          {/* Balloon body */}
          <div
            className="w-12 h-16 md:w-20 md:h-28 rounded-t-full mx-auto"
            style={{
              background: "linear-gradient(180deg, hsl(0 55% 45%), hsl(43 72% 55%), hsl(170 35% 45%))",
              boxShadow: "0 4px 20px hsl(0 0% 0% / 0.3)",
            }}
          />
          {/* Basket */}
          <div className="w-6 h-4 md:w-10 md:h-6 mx-auto mt-1 rounded-b-sm border-2 border-gold-dark bg-gold-dark/30" />
          {/* Strings */}
          <svg className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-6 md:w-20 md:h-8" viewBox="0 0 40 16">
            <line x1="8" y1="0" x2="14" y2="16" stroke="hsl(43, 60%, 40%)" strokeWidth="0.5" />
            <line x1="32" y1="0" x2="26" y2="16" stroke="hsl(43, 60%, 40%)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* ═══ Z-4: Top Paper Curtain (MOST IMPORTANT) ═══ */}
      <div
        className="hero-top-curtain absolute top-[-5vh] left-[-5%] w-[110%] z-[40]"
        style={{
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))",
        }}
      >
        <svg viewBox="0 0 1440 260" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,0 L1440,0 L1440,180 Q1200,240 720,200 Q240,160 0,220 Z"
            fill="hsl(207, 45%, 11%)"
          />
          {/* Ornamental gold line at the curved edge */}
          <path
            d="M0,220 Q240,160 720,200 Q1200,240 1440,180"
            fill="none"
            stroke="hsl(43, 72%, 55%)"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* ═══ Z-3: Top Floral Engraving ═══ */}
      <div
        className="absolute top-0 left-0 right-0 z-[35] pointer-events-none opacity-30"
        data-parallax="bg-0.06"
      >
        <div className="h-20 bg-gradient-to-b from-background to-transparent" />
      </div>

      {/* ═══ Z-2: Side Paper Edges ═══ */}
      <div
        className="hero-side-edge-left absolute left-0 top-0 bottom-0 w-16 md:w-28 z-[30]"
        style={{
          background: "linear-gradient(90deg, hsl(207 50% 10% / 0.9), transparent)",
          boxShadow: "inset -10px 0 30px hsl(0 0% 0% / 0.2)",
        }}
      >
        {/* Leaf / vine pattern */}
        <div className="absolute inset-0 opacity-20 damask-overlay" />
      </div>
      <div
        className="hero-side-edge-right absolute right-0 top-0 bottom-0 w-16 md:w-28 z-[30]"
        style={{
          background: "linear-gradient(-90deg, hsl(207 50% 10% / 0.9), transparent)",
          boxShadow: "inset 10px 0 30px hsl(0 0% 0% / 0.2)",
        }}
      >
        <div className="absolute inset-0 opacity-20 damask-overlay" />
      </div>

      {/* ═══ Z-1: Clouds Back (behind hall) ═══ */}
      <div className="hero-cloud-back absolute bottom-[25%] left-[5%] z-[8]" data-parallax="mid-0.25">
        <div className="flex gap-2 opacity-40">
          <div className="w-40 h-12 bg-ivory/20 rounded-full blur-md" />
          <div className="w-28 h-10 bg-ivory/15 rounded-full blur-lg mt-2" />
        </div>
      </div>

      {/* ═══ Z-1: Hall Illustration ═══ */}
      <div
        className="hero-hall absolute bottom-[18%] left-1/2 -translate-x-1/2 z-[9]"
        data-parallax="mid-0.22"
      >
        <div className="relative w-64 h-48 md:w-96 md:h-64">
          {/* Hall silhouette */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="relative">
              {/* Central dome */}
              <div
                className="w-32 h-20 md:w-48 md:h-28 mx-auto rounded-t-full border-2 border-gold/40"
                style={{
                  background: "linear-gradient(180deg, hsl(207 45% 20%), hsl(207 55% 14%))",
                  boxShadow: "0 0 40px hsl(43 72% 55% / 0.15)",
                }}
              />
              {/* Side towers */}
              <div className="absolute -left-12 md:-left-16 bottom-0 w-8 h-24 md:w-12 md:h-32 bg-gradient-to-t from-teal-mid to-secondary border border-gold/20 rounded-t-full" />
              <div className="absolute -right-12 md:-right-16 bottom-0 w-8 h-24 md:w-12 md:h-32 bg-gradient-to-t from-teal-mid to-secondary border border-gold/20 rounded-t-full" />
              {/* Windows */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-5 md:w-4 md:h-7 rounded-t-full"
                    style={{
                      background: "linear-gradient(180deg, hsl(43 80% 70% / 0.6), hsl(43 72% 55% / 0.3))",
                      boxShadow: "0 0 8px hsl(43 80% 70% / 0.3)",
                    }}
                  />
                ))}
              </div>
              {/* Flags */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-6 bg-gold/40">
                <div className="absolute top-0 left-1 w-4 h-3 bg-maroon/60 clip-flag" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Z-0: Clouds Front ═══ */}
      <div className="hero-cloud-front absolute bottom-[15%] right-[8%] z-[10]" data-parallax="mid-0.3">
        <div className="flex gap-3 opacity-35">
          <div className="w-36 h-14 bg-ivory/25 rounded-full blur-md" />
          <div className="w-24 h-10 bg-ivory/20 rounded-full blur-lg mt-3" />
        </div>
      </div>

      {/* ═══ Z+1: Diamond ═══ */}
      <div
        className="hero-diamond absolute bottom-[30%] left-1/2 -translate-x-1/2 z-[12]"
        data-parallax="mid-0.42"
      >
        <div className="relative">
          {/* Light beam */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-24 h-40 opacity-30"
            style={{
              background: "linear-gradient(180deg, hsl(43 80% 70% / 0.5), transparent)",
              clipPath: "polygon(40% 0, 60% 0, 80% 100%, 20% 100%)",
            }}
          />
          {/* Diamond shape */}
          <svg viewBox="0 0 60 60" className="w-12 h-12 md:w-16 md:h-16">
            <polygon
              points="30,5 55,25 30,55 5,25"
              fill="none"
              stroke="hsl(43, 80%, 70%)"
              strokeWidth="1.5"
              opacity="0.7"
            />
            <polygon
              points="30,5 55,25 30,55 5,25"
              fill="hsl(43, 80%, 70%)"
              opacity="0.1"
            />
            {/* Facets */}
            <line x1="30" y1="5" x2="30" y2="55" stroke="hsl(43, 80%, 70%)" strokeWidth="0.5" opacity="0.3" />
            <line x1="5" y1="25" x2="55" y2="25" stroke="hsl(43, 80%, 70%)" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>
      </div>

      {/* ═══ Z+4: Ganesha Icons ═══ */}
      <div className="absolute bottom-4 left-6 md:left-12 z-[15] opacity-20" data-parallax="fg-0.65">
        <span className="font-hindi text-primary text-2xl md:text-3xl">🙏</span>
      </div>
      <div className="absolute bottom-4 right-6 md:right-12 z-[15] opacity-20" data-parallax="fg-0.65">
        <span className="font-hindi text-primary text-2xl md:text-3xl">🙏</span>
      </div>

      {/* ═══ FG: Ornamental Arch ═══ */}
      <div
        className="hero-arch absolute inset-0 flex items-center justify-center pointer-events-none z-[20]"
        data-parallax="fg-0.9"
      >
        <img
          src={ornamentalArch}
          alt=""
          className="w-[600px] md:w-[800px] h-auto opacity-10"
        />
      </div>

      {/* ═══ FIXED: Text Group ═══ */}
      <div className="relative z-[25] text-center px-6 max-w-3xl">
        {/* Ganesh blessing */}
        <p className="font-hindi text-primary text-lg md:text-xl mb-6 tracking-wide gold-glow animate-fade-in">
          ॥ श्री गणेशाय नमः ॥
        </p>

        {/* Tagline Hindi */}
        <p className="font-hindi text-sm md:text-base text-foreground/70 mb-4 tracking-wider animate-fade-in" style={{ animationDelay: "0.3s" }}>
          शुभ विवाह • शुभ आयोजन
        </p>

        {/* Main title – Hindi */}
        <h1 className="font-hindi text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gold-gradient gold-glow animate-fade-in" style={{ animationDelay: "0.5s" }}>
          गृह लक्ष्मी मैरिज हॉल
        </h1>

        {/* English subtitle */}
        <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-primary mb-8 tracking-[0.2em] animate-fade-in" style={{ animationDelay: "0.7s" }}>
          Griha Lakshmi Marriage Hall
        </h2>

        {/* Decorative divider */}
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.9s" }} />

        {/* Tagline English */}
        <p className="font-serif text-base md:text-lg text-muted-foreground italic tracking-wider animate-fade-in" style={{ animationDelay: "1.1s" }}>
          Weddings • Receptions • Engagements • Auspicious Ceremonies
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-float animate-fade-in" style={{ animationDelay: "2s" }}>
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
