import { motion } from 'framer-motion';
import { Apple, Play, ChevronRight } from 'lucide-react';

const artistImages = [
  {
    src: 'https://images.pexels.com/photos/6605133/pexels-photo-6605133.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    alt: 'Vocalist',
    delay: 0.4,
  },
  {
    src: 'https://images.unsplash.com/photo-1681855178578-4535aba9b305?w=300&h=400&fit=crop&crop=faces',
    alt: 'Guitarist',
    delay: 0.5,
  },
  {
    src: 'https://images.pexels.com/photos/6154775/pexels-photo-6154775.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    alt: 'DJ',
    delay: 0.6,
  },
  {
    src: 'https://images.unsplash.com/photo-1666078056875-2ae542f936c8?w=300&h=400&fit=crop&crop=faces',
    alt: 'Acoustic',
    delay: 0.7,
  },
  {
    src: 'https://images.pexels.com/photos/14037568/pexels-photo-14037568.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    alt: 'Live Act',
    delay: 0.8,
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FFB902]/[0.06] blur-[140px]" />

      {/* Center content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFB902]/[0.08] border border-[#FFB902]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB902] animate-pulse" />
            <span className="text-[#FFB902] font-heading font-semibold text-xs uppercase tracking-[0.15em]">
              For Artists & Venues
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[0.95] mb-5"
        >
          Your Stage
          <br />
          <span className="text-gradient-gold">is Waiting.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#A3A3A3] text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-10"
        >
          Connect with venues, discover gigs, and get booked — all in one platform.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-14"
        >
          <a
            href="#download"
            data-testid="hero-cta-download"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFB902] text-black font-bold text-sm hover:bg-[#E5A600] transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,185,2,0.45)]"
          >
            Download the App
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#waitlist"
            data-testid="hero-cta-waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-white/15 text-white font-bold text-sm hover:bg-white/[0.06] hover:border-white/25 transition-all duration-300"
          >
            Join the Waitlist
          </a>
        </motion.div>

        {/* Artist image strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center mb-14"
        >
          <div className="flex items-end gap-3 sm:gap-4">
            {artistImages.map((img, i) => {
              const isCenter = i === 2;
              const isInner = i === 1 || i === 3;
              const height = isCenter
                ? 'h-[140px] sm:h-[180px]'
                : isInner
                ? 'h-[120px] sm:h-[155px]'
                : 'h-[100px] sm:h-[130px]';
              const width = isCenter
                ? 'w-[90px] sm:w-[110px]'
                : isInner
                ? 'w-[80px] sm:w-[100px]'
                : 'w-[65px] sm:w-[85px]';
              const rotate = ['-4deg', '-2deg', '0deg', '2deg', '4deg'][i];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: img.delay,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -10, scale: 1.05, zIndex: 10 }}
                  className="relative group cursor-pointer"
                  style={{ transform: `rotate(${rotate})` }}
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-2 rounded-2xl bg-[#FFB902]/0 group-hover:bg-[#FFB902]/15 blur-lg transition-all duration-500 pointer-events-none" />

                  <div
                    className={`${width} ${height} relative rounded-2xl overflow-hidden border-2 border-white/[0.08] group-hover:border-[#FFB902]/50 transition-all duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.5)] group-hover:shadow-[0_12px_32px_rgba(255,185,2,0.15)]`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Shine */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* App store badges - premium redesign */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center gap-4 justify-center"
        >
          <a
            href="#"
            data-testid="hero-appstore-badge"
            className="group relative flex items-center gap-3 pl-4 pr-5 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#FFB902]/40 transition-all duration-400 hover:shadow-[0_0_20px_rgba(255,185,2,0.1)] hover:bg-white/[0.06]"
          >
            <div className="w-9 h-9 rounded-xl bg-white/[0.08] group-hover:bg-[#FFB902]/10 flex items-center justify-center transition-colors duration-300">
              <Apple size={18} className="text-white group-hover:text-[#FFB902] transition-colors duration-300" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-[#666] leading-none mb-0.5">Download on the</p>
              <p className="text-[13px] font-semibold text-white leading-tight tracking-tight">App Store</p>
            </div>
          </a>
          <a
            href="#"
            data-testid="hero-playstore-badge"
            className="group relative flex items-center gap-3 pl-4 pr-5 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#FFB902]/40 transition-all duration-400 hover:shadow-[0_0_20px_rgba(255,185,2,0.1)] hover:bg-white/[0.06]"
          >
            <div className="w-9 h-9 rounded-xl bg-white/[0.08] group-hover:bg-[#FFB902]/10 flex items-center justify-center transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-white group-hover:text-[#FFB902] transition-colors duration-300">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302L15.395 12l2.303-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-[#666] leading-none mb-0.5">Get it on</p>
              <p className="text-[13px] font-semibold text-white leading-tight tracking-tight">Google Play</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
