import { motion } from "framer-motion";
import ornamentalArch from "@/assets/ornamental-arch.png";

const InvitationSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-teal-pattern damask-overlay">
      {/* BG – Pattern */}
      <div className="absolute inset-0 star-field opacity-30" data-parallax="bg-0.12" />

      {/* Ornamental frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        data-parallax="fg-0.65"
      >
        <img src={ornamentalArch} alt="" className="w-[600px] h-auto opacity-20" />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        {/* Ganesh symbol */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-primary text-4xl mb-8 font-hindi"
        >
          ॐ
        </motion.div>

        {/* Hindi invitation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="ornamental-border bg-background/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8"
        >
          <p className="font-hindi text-base md:text-lg text-foreground/80 mb-6 leading-relaxed">
            ईश्वर की असीम कृपा से
            <br />
            शुभ वैवाहिक एवं मांगलिक आयोजनों के
            <br />
            भव्य आयोजन हेतु
            <br />
            आप सादर आमंत्रित हैं।
          </p>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6" />
          <p className="font-serif text-sm md:text-base text-muted-foreground italic leading-relaxed">
            With divine blessings,
            <br />
            you are warmly invited to celebrate
            <br />
            life's most sacred moments
            <br />
            in a grand and elegant venue.
          </p>
        </motion.div>

        {/* Hall name prominent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="font-hindi text-3xl md:text-5xl text-gold-gradient gold-glow mb-2">
            गृह लक्ष्मी मैरिज हॉल
          </h2>
          <p className="font-display text-lg md:text-2xl text-primary/70 tracking-[0.2em]">
            Griha Lakshmi Marriage Hall
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationSection;
