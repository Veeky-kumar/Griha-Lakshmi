import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const PalaceSection = () => {
  const cloudRef1 = useRef<HTMLDivElement>(null);
  const cloudRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cloudRef1.current) {
      gsap.to(cloudRef1.current, {
        x: 80,
        repeat: -1,
        yoyo: true,
        duration: 12,
        ease: "sine.inOut",
      });
    }
    if (cloudRef2.current) {
      gsap.to(cloudRef2.current, {
        x: -60,
        repeat: -1,
        yoyo: true,
        duration: 15,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section className="relative py-32 md:py-44 overflow-hidden bg-gradient-to-b from-background via-teal-deep to-background">
      {/* BG – Sky */}
      <div className="absolute inset-0 star-field opacity-40" data-parallax="bg-0.1" />

      {/* MID – Back Clouds */}
      <div
        ref={cloudRef2}
        className="absolute top-[10%] left-[-5%] w-[60%] h-32 opacity-20"
        data-parallax="mid-0.3"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent blur-2xl" />
      </div>

      {/* MID – Palace / Hall Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        data-parallax="mid-0.45"
      >
        {/* Stylized Hall representation */}
        <div className="relative mx-auto w-80 h-56 md:w-[500px] md:h-80 mb-12">
          {/* Main structure */}
          <div className="absolute inset-0 ornamental-border rounded-lg bg-gradient-to-b from-primary/10 via-background/80 to-background/60 backdrop-blur-sm flex items-center justify-center">
            {/* Twin towers */}
            <div className="absolute left-4 top-4 bottom-4 w-8 md:w-12 border-2 border-primary/30 rounded-t-full bg-gradient-to-b from-primary/15 to-transparent" />
            <div className="absolute right-4 top-4 bottom-4 w-8 md:w-12 border-2 border-primary/30 rounded-t-full bg-gradient-to-b from-primary/15 to-transparent" />
            {/* Central dome */}
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-primary/40 bg-gradient-to-b from-primary/20 to-transparent flex items-center justify-center">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center">
                <span className="font-hindi text-primary text-lg md:text-2xl gold-glow">ॐ</span>
              </div>
            </div>
            {/* Windows */}
            <div className="absolute bottom-8 left-1/4 flex gap-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-4 h-6 md:w-6 md:h-8 rounded-t-full bg-yellow-warm/40 border border-primary/20" />
              ))}
            </div>
            <div className="absolute bottom-8 right-1/4 flex gap-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-4 h-6 md:w-6 md:h-8 rounded-t-full bg-yellow-warm/40 border border-primary/20" />
              ))}
            </div>
            {/* Flags */}
            <div className="absolute -top-3 left-6 w-3 h-6 bg-maroon rounded-sm" />
            <div className="absolute -top-3 right-6 w-3 h-6 bg-maroon rounded-sm" />
          </div>
          {/* Gold sparkles */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 star-field w-full h-16 opacity-60" />
        </div>

        <h2 className="font-hindi text-2xl md:text-4xl text-foreground/90 mb-4 leading-relaxed">
          हर शुभ अवसर के लिए एक भव्य मंच
        </h2>
        <p className="font-serif text-lg md:text-xl text-muted-foreground italic tracking-wider">
          A Grand Venue for Every Celebration
        </p>
      </motion.div>

      {/* FG – Front Clouds */}
      <div
        ref={cloudRef1}
        className="absolute bottom-[5%] right-[-10%] w-[50%] h-24 opacity-15"
        data-parallax="fg-0.9"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent blur-3xl" />
      </div>
    </section>
  );
};

export default PalaceSection;
