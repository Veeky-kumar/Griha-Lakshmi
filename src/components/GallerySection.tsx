import { motion } from "framer-motion";
import { useAdmin } from "@/context/AdminContext";

const GallerySection = () => {
  const { settings, loading } = useAdmin();

  if (loading) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background text-white">
      <div className="absolute inset-0 stars-overlay opacity-40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-hindi text-4xl md:text-6xl text-primary gold-glow mb-4">
            महल की एक झलक
          </h2>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground italic">
            A Glimpse of the Palace
          </p>
        </motion.div>

        {/* YouTube Video Section */}
        {settings.youtubeUrl && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video max-w-5xl mx-auto mb-20 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_rgba(212,175,55,0.2)] group"
          >
            <iframe 
              className="w-full h-full"
              src={settings.youtubeUrl}
              title="Palace Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-primary/10 rounded-2xl"></div>
          </motion.div>
        )}

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {settings.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group border border-white/10"
            >
              <img 
                src={image.src || "/placeholder.svg"} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="font-serif text-lg text-primary gold-glow">{image.title}</p>
              </div>
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
