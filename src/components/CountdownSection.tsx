import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { useAdmin } from "@/context/AdminContext";

const CountdownSection = () => {
  const { settings, loading } = useAdmin();

  if (loading) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-yellow-pattern">
      <div className="absolute inset-0 damask-overlay" data-parallax="bg-0.1" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Hindi CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-hindi text-3xl md:text-5xl text-primary-foreground mb-4 leading-relaxed">
            {settings.bookingPrice}
          </h2>
          <p className="font-serif text-lg md:text-xl text-primary-foreground/80 italic mb-12">
            {settings.description}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://wa.me/919401286947"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-heading text-sm tracking-widest hover:shadow-[0_0_30px_hsl(350_55%_35%/0.4)] transition-shadow duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp करें
          </a>
          <a
            href="tel:+919401286947"
            className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-heading text-sm tracking-widest hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="mailto:glaxmimarriagehall@gmail.com"
            className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-heading text-sm tracking-widest hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
        </motion.div>

        {/* Hindi closing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-hindi text-base text-primary-foreground/60 mb-2"
        >
          आज ही संपर्क करें
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif text-sm text-primary-foreground/40 italic"
        >
          Contact Us Today
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-serif text-xs text-primary-foreground/30 mt-16 flex flex-col items-center gap-2"
        >
          <span>© गृह लक्ष्मी मैरिज हॉल | Griha Lakshmi Marriage Hall 2026</span>
          <a href="/admin" className="hover:text-primary transition-colors">Admin Portal</a>
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownSection;
