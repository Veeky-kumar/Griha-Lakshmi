import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MapPin } from "lucide-react";

const RouteMedallionSection = () => {
  const medallionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (medallionRef.current) {
      gsap.to(medallionRef.current, {
        rotate: 6,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-teal-deep to-background">
      {/* BG – Botanical subtle */}
      <div className="absolute inset-0 damask-overlay" data-parallax="bg-0.1" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="font-hindi text-2xl md:text-3xl text-foreground/90 mb-2">
            हमें यहाँ खोजें
          </h2>
          <p className="font-serif text-base text-muted-foreground italic">
            Find Us Here
          </p>
        </motion.div>

        {/* Medallion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div
            ref={medallionRef}
            className="medallion w-44 h-44 md:w-56 md:h-56 mx-auto flex items-center justify-center cursor-pointer hover:shadow-[0_0_60px_hsl(43_72%_55%/0.4)] transition-shadow duration-500"
            onClick={() => window.open("https://maps.google.com", "_blank")}
          >
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" strokeWidth={1.5} />
              <p className="font-hindi text-base text-foreground font-medium">मार्ग देखें</p>
              <p className="font-serif text-sm text-muted-foreground italic">See the Route</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RouteMedallionSection;
