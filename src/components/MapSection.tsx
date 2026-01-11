import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

export const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-soft-green/20">
      <div className="container-luxury mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-accent-green font-body text-sm tracking-[0.3em] uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-forest mb-6">
            Our Location
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-gold-accent" />
            <p className="font-body">Goba, Kinondoni, Dar es Salaam, Tanzania</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-sm overflow-hidden shadow-elevated border border-soft-green"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5660449682383!2d39.2731!3d-6.7631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c4c4c4c4c4c%3A0x0!2sGoba%2C%20Kinondoni%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1704931200000!5m2!1sen!2stz"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Crest Woods Location"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};
