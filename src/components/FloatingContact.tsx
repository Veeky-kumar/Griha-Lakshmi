import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Mail, X, ChevronUp } from "lucide-react";
import { useState } from "react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      href: "https://wa.me/919401286947",
      color: "bg-[#25D366]",
      delay: 0.1,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Call Us",
      href: "tel:+919401286947",
      color: "bg-primary",
      delay: 0.2,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:glaxmimarriagehall@gmail.com",
      color: "bg-accent",
      delay: 0.3,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end gap-4">
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={scrollToTop}
        className="p-3 rounded-full bg-background/20 backdrop-blur-md border border-white/10 text-white hover:bg-background/40 transition-colors duration-300 shadow-xl"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>

      {/* Expanded Contact Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-4 mb-2">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.label === "WhatsApp" ? "_blank" : undefined}
                rel={contact.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ delay: contact.delay }}
                className={`flex items-center gap-3 p-4 rounded-full shadow-2xl text-white ${contact.color} hover:scale-110 transition-transform duration-300 group relative`}
              >
                <span className="absolute right-full mr-4 px-3 py-1 rounded bg-black/80 text-xs font-heading tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {contact.label}
                </span>
                {contact.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button with Catchy Tooltip */}
      <div className="relative group flex items-center">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, y: "15%" }}
              animate={{ 
                opacity: 1, 
                x: [0, -15, 0],
                y: "15%",
              }}
              exit={{ opacity: 0, x: 20, y: "15%" }}
              transition={{ 
                opacity: { duration: 0.3 },
                x: { repeat: Infinity, duration: 2, ease: "easeInOut" }
              }}
              className="absolute right-full mr-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-[12px] font-heading tracking-[0.05em] font-bold whitespace-nowrap shadow-[0_10px_30px_rgba(212,175,55,0.3)] border border-white/20 z-20 flex items-center gap-2"
            >
              Plan Your Royal Event! ✨
              {/* Tooltip Arrow pointing right */}
              <div className="absolute left-full top-[50%] -translate-y-1/2 border-8 border-transparent border-l-accent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse effect background */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping z-0" />
        )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`p-5 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.3)] text-white transition-all duration-500 relative z-10 ${
            isOpen ? "bg-red-500 rotate-90" : "bg-gradient-to-br from-primary to-accent"
          }`}
        >
          {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingContact;
