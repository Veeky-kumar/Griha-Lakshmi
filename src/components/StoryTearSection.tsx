import { motion } from "framer-motion";

const StoryTearSection = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-background">
      {/* BG – Sky continuation */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-teal-deep" data-parallax="bg-0.1" />

      {/* MID – Ornamental pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 damask-overlay"
        data-parallax="mid-0.3"
      />

      {/* FG – Torn Paper Edge (top) */}
      <div className="absolute top-0 left-0 right-0 h-24 z-10" data-parallax="fg-0.8">
        <svg viewBox="0 0 1440 100" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,0 L1440,0 L1440,60 Q1380,80 1320,55 Q1260,30 1200,65 Q1140,90 1080,50 Q1020,20 960,70 Q900,95 840,45 Q780,15 720,60 Q660,85 600,40 Q540,10 480,55 Q420,80 360,35 Q300,5 240,50 Q180,75 120,30 Q60,5 0,40 Z"
            fill="hsl(207, 55%, 10%)"
          />
        </svg>
      </div>

      {/* Center content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="font-hindi text-xl md:text-2xl text-primary/80 mb-2 gold-glow">
            ✦ आपका स्वागत है ✦
          </p>
          <p className="font-serif text-base md:text-lg text-muted-foreground italic tracking-wider">
            Your story of celebration begins here
          </p>
        </motion.div>
      </div>

      {/* FG – Torn Paper Edge (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10" data-parallax="fg-0.9">
        <svg viewBox="0 0 1440 100" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,100 L1440,100 L1440,40 Q1380,20 1320,45 Q1260,70 1200,35 Q1140,10 1080,50 Q1020,80 960,30 Q900,5 840,55 Q780,85 720,40 Q660,15 600,60 Q540,90 480,45 Q420,20 360,65 Q300,95 240,50 Q180,25 120,70 Q60,95 0,60 Z"
            fill="hsl(207, 45%, 14%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default StoryTearSection;
