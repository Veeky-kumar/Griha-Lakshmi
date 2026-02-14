import { motion } from "framer-motion";
import eventMehendi from "@/assets/event-mehendi.jpg";
import eventHaldi from "@/assets/event-haldi.jpg";
import eventEngagement from "@/assets/event-engagement.jpg";
import eventShaadi from "@/assets/event-shaadi.jpg";
import eventReception from "@/assets/event-reception.jpg";
import eventSangeet from "@/assets/event-sangeet.jpg";

const events = [
  { hindi: "मेहंदी", english: "Mehendi", image: eventMehendi },
  { hindi: "हल्दी", english: "Haldi", image: eventHaldi },
  { hindi: "सगाई", english: "Engagement", image: eventEngagement },
  { hindi: "संगीत / पार्टी", english: "Sangeet & Parties", image: eventSangeet },
  { hindi: "विवाह", english: "Wedding", image: eventShaadi },
  { hindi: "रिसेप्शन", english: "Reception", image: eventReception },
];

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center group"
  >
    <div className="event-card-frame w-48 h-60 md:w-56 md:h-72 mb-4 relative">
      <img
        src={event.image}
        alt={event.english}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <h3 className="font-display text-xl md:text-2xl text-primary mb-1">{event.english}</h3>
    <p className="font-hindi text-sm text-muted-foreground">{event.hindi}</p>
  </motion.div>
);

const EventsSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-teal-pattern damask-overlay overflow-hidden">
      <div className="absolute inset-0 star-field opacity-50" data-parallax="bg-0.12" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-hindi text-2xl md:text-4xl text-foreground/90 mb-3">
            हम आयोजित करते हैं
          </h2>
          <p className="font-serif text-lg text-primary/80 italic">
            Celebrations We Host
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {events.map((event, i) => (
            <EventCard key={event.english} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
