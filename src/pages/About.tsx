import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Heart, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import livingRoom from "@/assets/gallery/living-room.jpg";
import exteriorGarden from "@/assets/gallery/exterior-garden.jpg";

const values = [
  {
    icon: Heart,
    title: "Guest-Centric",
    description: "Your comfort and satisfaction are our top priorities. We go above and beyond to ensure every guest feels at home.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from our accommodations to our service.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    description: "Premium amenities and meticulous attention to detail define the Crest Woods experience.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building lasting relationships with our guests and contributing positively to our local community.",
  },
];

const features = [
  {
    title: "Modern Luxury",
    description: "Our property features contemporary design, high-end furnishings, and state-of-the-art amenities that create a truly premium experience.",
  },
  {
    title: "Prime Location",
    description: "Situated in the serene Goba area of Kinondoni, Dar es Salaam, you're perfectly positioned to explore local attractions while enjoying a peaceful retreat.",
  },
  {
    title: "Exceptional Service",
    description: "Our dedicated team is available to ensure your stay is seamless and memorable from check-in to check-out.",
  },
  {
    title: "Flexible Stays",
    description: "Whether you need a weekend getaway or an extended stay, we offer flexible booking options to suit your needs.",
  },
];

const About = () => {
  const handleBookNow = () => {
    window.open("https://unrealhomes.co.tz/suites", "_blank");
  };

  return (
    <main className="overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-green-dark to-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-green rounded-full blur-3xl" />
        </div>
        <div className="container-luxury mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-accent font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6"
          >
            About <span className="italic text-gold-accent-light">Crest Woods</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 font-body text-lg max-w-2xl mx-auto"
          >
            Creating extraordinary staycation experiences in the heart of Dar es Salaam
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-cream">
        <div className="container-luxury mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
                Our Journey
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-forest mb-6">
                Redefining Luxury <span className="italic text-primary-green">Staycations</span>
              </h2>
              <div className="space-y-4 text-forest/70 font-body">
                <p>
                  Crest Woods was born from a simple yet powerful vision: to redefine the staycation experience 
                  by offering modern, luxurious accommodations that feel like home while providing the amenities 
                  of a premium hotel.
                </p>
                <p>
                  We believe that every guest deserves more than just a place to stay—they deserve an experience 
                  that creates lasting memories. That's why we've carefully designed our property to blend comfort, 
                  style, and convenience in perfect harmony.
                </p>
                <p>
                  Located in the beautiful Goba neighborhood of Kinondoni, Dar es Salaam, Crest Woods offers 
                  an exclusive retreat featuring one Executive Suite and three Deluxe Suites, each thoughtfully 
                  designed to provide the ultimate in comfort and sophistication.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={livingRoom}
                  alt="Crest Woods Living Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-cream shadow-elegant hidden md:block">
                <img
                  src={exteriorGarden}
                  alt="Crest Woods Exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-soft-green/20">
        <div className="container-luxury mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-accent font-body text-sm tracking-[0.3em] uppercase mb-4"
            >
              What We Stand For
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl text-forest"
            >
              Our <span className="italic text-primary-green">Values</span>
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream p-8 rounded-2xl text-center shadow-soft hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-green to-accent-green flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-display text-xl text-forest mb-3">{value.title}</h3>
                <p className="text-forest/60 font-body text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-cream">
        <div className="container-luxury mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-accent font-body text-sm tracking-[0.3em] uppercase mb-4"
            >
              The Crest Woods Difference
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl text-forest"
            >
              Why Choose <span className="italic text-primary-green">Crest Woods</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-forest/10 rounded-2xl hover:border-gold-accent/50 transition-colors duration-300"
              >
                <h3 className="font-display text-xl text-forest mb-3">{feature.title}</h3>
                <p className="text-forest/60 font-body">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green-dark via-forest to-primary-green-dark">
        <div className="container-luxury mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-cream mb-6"
          >
            Ready to Experience <span className="italic text-gold-accent-light">Luxury Living</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 font-body text-lg max-w-2xl mx-auto mb-10"
          >
            We'd love to welcome you to Crest Woods and help create your perfect getaway.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" onClick={handleBookNow}>
              Book Your Stay
            </Button>
            <Link to="/accommodations">
              <Button variant="heroOutline" size="lg">
                View Accommodations
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
