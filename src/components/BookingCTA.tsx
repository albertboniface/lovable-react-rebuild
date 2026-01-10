import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export const BookingCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-luxury mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-primary-green-dark via-primary-green to-primary-green-dark rounded-sm overflow-hidden"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 p-10 md:p-16 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <p className="text-gold-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
                  Begin Your Journey
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
                  Reserve Your
                  <br />
                  <span className="italic text-gold-accent-light">Unforgettable Stay</span>
                </h2>
                <p className="text-cream/70 font-body mb-8 leading-relaxed">
                  Our dedicated team is ready to craft a bespoke experience
                  tailored to your every desire. Contact us today to begin
                  planning your escape to paradise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg">
                    Book Now
                  </Button>
                  <Button variant="heroOutline" size="lg">
                    Request a Call
                  </Button>
                </div>
              </div>

              {/* Right Content - Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-cream text-lg mb-1">Reservations</h4>
                    <p className="text-cream/60 font-body">+1 (800) 555-0199</p>
                    <p className="text-cream/40 text-sm font-body">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-cream text-lg mb-1">Email</h4>
                    <p className="text-cream/60 font-body">reservations@serenityresort.com</p>
                    <p className="text-cream/40 text-sm font-body">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-cream text-lg mb-1">Location</h4>
                    <p className="text-cream/60 font-body">Tropical Paradise Island</p>
                    <p className="text-cream/40 text-sm font-body">Private Island Resort</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
