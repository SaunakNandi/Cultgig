import { Instagram, Linkedin, Twitter } from 'lucide-react';

const footerLinks = [
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter/X' },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative border-t border-white/10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-heading text-2xl font-extrabold tracking-tight text-white">
              Ind<span className="text-[#FFB902]">gig</span>
            </span>
            <p className="text-[#A3A3A3] text-sm mt-3 leading-relaxed max-w-xs">
              Your Stage is Waiting. Connecting artists and venues, one gig at a time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A3A3A3] hover:text-[#FFB902] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  data-testid={`footer-social-${social.label.toLowerCase().replace(/[/]/g, '')}`}
                  className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-[#FFB902]/10 hover:border-[#FFB902]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="text-[#A3A3A3] group-hover:text-[#FFB902]" />
                </a>
              ))}
            </div>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">Get the App</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm text-[#A3A3A3] hover:text-[#FFB902] transition-colors duration-300"
              >
                App Store
              </a>
              <a
                href="#"
                className="text-sm text-[#A3A3A3] hover:text-[#FFB902] transition-colors duration-300"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-[#A3A3A3]">
            &copy; {new Date().getFullYear()} Indgig. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
