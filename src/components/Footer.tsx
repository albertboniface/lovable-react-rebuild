import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  resort: [
    { name: "About Us", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  experience: [
    { name: "Accommodations", href: "#accommodations" },
    { name: "Dining", href: "#" },
    { name: "Spa & Wellness", href: "#" },
    { name: "Activities", href: "#" },
  ],
  services: [
    { name: "Private Events", href: "#" },
    { name: "Weddings", href: "#" },
    { name: "Corporate Retreats", href: "#" },
    { name: "Concierge", href: "#" },
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
    <footer className="bg-charcoal pt-20 pb-10">
      <div className="container-luxury mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl text-cream mb-4">
              Serenity<span className="text-gold">.</span>
            </h2>
            <p className="text-cream/50 font-body text-sm leading-relaxed mb-6 max-w-sm">
              An exclusive sanctuary where luxury meets nature. Experience the
              extraordinary at our world-renowned private island resort.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-cream text-lg mb-5">Resort</h4>
            <ul className="space-y-3">
              {footerLinks.resort.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/50 font-body text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream text-lg mb-5">Experience</h4>
            <ul className="space-y-3">
              {footerLinks.experience.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/50 font-body text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/50 font-body text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/30 font-body text-sm">
              © 2026 Serenity Resort. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-cream/30 font-body text-sm hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-cream/30 font-body text-sm hover:text-gold transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-cream/30 font-body text-sm hover:text-gold transition-colors"
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
