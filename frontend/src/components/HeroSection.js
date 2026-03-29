import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 golden-glow opacity-60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#FFB902]/[0.06] blur-[120px]" />

      {/* Background texture image */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1765224747170-be7b97010052?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZ2UlMjBkYXJrJTIwc3BvdGxpZ2h0fGVufDB8fHx8MTc3NDc2MzcxOHww&ixlib=rb-4.1.0&q=85')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#FFB902] font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4"
          >
            For Artists & Venues
          </motion.p>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[1.05] mb-6">
            Your Stage{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient-gold">is Waiting.</span>
          </h1>

          <p className="text-[#A3A3A3] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
            Indgig connects artists and freelancers with venues and businesses.
            Discover, book, and manage gigs — all in one platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
            <a
              href="#download"
              data-testid="hero-cta-download"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#FFB902] text-black font-bold text-sm hover:bg-[#E5A600] transition-all duration-300 glow-gold-hover"
            >
              Download the App
            </a>
            <a
              href="#waitlist"
              data-testid="hero-cta-waitlist"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300"
            >
              Join the Waitlist
            </a>
          </div>

          {/* Trusted by artists - avatar row */}
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-8">
            <div className="flex -space-x-3">
              {[
                'https://images.pexels.com/photos/6605133/pexels-photo-6605133.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
                'https://images.pexels.com/photos/6154775/pexels-photo-6154775.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1681855178578-4535aba9b305?w=100&h=100&fit=crop&crop=faces',
                'https://images.pexels.com/photos/14037568/pexels-photo-14037568.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1666078056875-2ae542f936c8?w=100&h=100&fit=crop&crop=faces',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Artist ${i + 1}`}
                  className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white leading-tight">500+ Artists</p>
              <p className="text-xs text-[#A3A3A3]">already on the platform</p>
            </div>
          </div>

          {/* App store badges */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a
              href="#"
              data-testid="hero-appstore-badge"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <Apple size={20} className="text-white" />
              <div className="text-left">
                <p className="text-[10px] text-[#A3A3A3] leading-none">Download on the</p>
                <p className="text-sm font-semibold text-white leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="#"
              data-testid="hero-playstore-badge"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <Play size={20} className="text-white" />
              <div className="text-left">
                <p className="text-[10px] text-[#A3A3A3] leading-none">Get it on</p>
                <p className="text-sm font-semibold text-white leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right - Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-float">
            <PhoneMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
