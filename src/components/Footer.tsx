import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  property: [
    { name: "About Us", href: "/about" },
    { name: "Accommodations", href: "/accommodations" },
    { name: "Gallery", href: "/gallery" },
  ],
  experience: [
    { name: "Executive Suite", href: "/accommodations" },
    { name: "Deluxe Suites", href: "/accommodations" },
    { name: "Swimming Pool", href: "/accommodations" },
    { name: "Gaming Room", href: "/accommodations" },
  ],
  services: [
    { name: "Private Events", href: "/#contact" },
    { name: "Corporate Retreats", href: "/#contact" },
    { name: "Rooftop BBQ", href: "/accommodations" },
    { name: "Boardroom", href: "/accommodations" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
];

export const Footer = () => {
  return (
    <footer id="footer" className="bg-forest pt-20 pb-10">
      <div className="container-luxury mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <div className="mb-4">
                <h2 className="font-display text-3xl text-cream">
                  Crest Woods<span className="text-gold-accent">.</span>
                </h2>
                <p className="text-cream/50 text-xs tracking-wider">by Whistling Woods</p>
              </div>
            </Link>
            <p className="text-cream/50 font-body text-sm leading-relaxed mb-6 max-w-sm">
              An exclusive vacation home where luxury meets comfort. Experience the
              extraordinary at our premier property in Dar es Salaam.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+255711741044" className="flex items-center gap-2 text-cream/50 hover:text-gold-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-body text-sm">+255 711 741 044</span>
              </a>
              <a href="mailto:info@crestwoods.co.tz" className="flex items-center gap-2 text-cream/50 hover:text-gold-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">info@crestwoods.co.tz</span>
              </a>
              <div className="flex items-center gap-2 text-cream/50">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">Goba, Kinzudi, Dar es Salaam</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:text-gold-accent hover:border-gold-accent transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-cream text-lg mb-5">Property</h4>
            <ul className="space-y-3">
              {footerLinks.property.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/50 font-body text-sm hover:text-gold-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream text-lg mb-5">Experience</h4>
            <ul className="space-y-3">
              {footerLinks.experience.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/50 font-body text-sm hover:text-gold-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/50 font-body text-sm hover:text-gold-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/30 font-body text-sm">
              © 2026 Crest Woods. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-cream/30 font-body text-sm hover:text-gold-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-cream/30 font-body text-sm hover:text-gold-accent transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-cream/30 font-body text-sm hover:text-gold-accent transition-colors"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
