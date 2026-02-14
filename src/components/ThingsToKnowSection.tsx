import { motion } from "framer-motion";
import { Car, Users, CloudSun, Heart } from "lucide-react";
import purpleFloralBg from "@/assets/purple-floral-bg.jpg";

const infoCards = [
  {
    icon: Car,
    title: "Parking",
    hindi: "पार्किंग सुविधा",
    description: "Spacious parking available for all guests with valet service",
  },
  {
    icon: Users,
    title: "Staff Support",
    hindi: "स्टाफ सहायता",
    description: "Dedicated staff to ensure every detail of your celebration is perfect",
  },
  {
    icon: CloudSun,
    title: "Weather Comfort",
    hindi: "मौसम अनुकूल व्यवस्था",
    description: "Climate-controlled halls with AC and fan arrangements for all seasons",
  },
  {
    icon: Heart,
    title: "Family Friendly",
    hindi: "पारिवारिक वातावरण",
    description: "A warm, welcoming environment for families of all sizes",
  },
];

const ThingsToKnowSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0" data-parallax="bg-0.1">
        <img src={purpleFloralBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-purple-deep/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Things to Know
          </h2>
          <p className="font-hindi text-lg text-primary/80 mb-4">जानने योग्य बातें</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-base md:text-lg text-foreground/70 italic max-w-2xl mx-auto mb-16"
        >
          Everything you need for a seamless celebration at our venue.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
              data-parallax={`mid-${0.4 + i * 0.05}`}
            >
              <card.icon className="w-10 h-10 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-heading text-lg text-foreground mb-1">{card.title}</h3>
              <p className="font-hindi text-xs text-primary/60 mb-2">{card.hindi}</p>
              <p className="font-serif text-xs text-foreground/60 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToKnowSection;
