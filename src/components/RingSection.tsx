import { motion } from "framer-motion";
import ringScene from "@/assets/ring-scene.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const RingSection = () => {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lightRef.current) {
      gsap.to(lightRef.current, {
        opacity: 0.6,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG – Image */}
      <div className="absolute inset-0" data-parallax="bg-0.1">
        <img src={ringScene} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* MID – Light beam */}
      <div
        ref={lightRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/40 via-primary/10 to-transparent opacity-30"
        data-parallax="mid-0.6"
      />

      {/* FG – Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
        data-parallax="fg-0.65"
      >
        <div className="ornamental-border bg-background/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <p className="font-hindi text-base md:text-lg text-foreground/80 mb-6 leading-relaxed">
            प्रेम, प्रतिबद्धता और विश्वास के
            <br />
            पवित्र बंधन को सजाने के लिए
            <br />
            गृह लक्ष्मी मैरिज हॉल —
            <br />
            आपकी पहली पसंद।
          </p>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6" />
          <p className="font-serif text-sm md:text-base text-muted-foreground italic leading-relaxed">
            For the sacred bond of love, commitment and trust —
            <br />
            Griha Lakshmi Marriage Hall
            <br />
            is your first choice.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default RingSection;
