import { motion } from 'framer-motion';
import { Apple, ChevronRight, Star } from 'lucide-react';

const artistImages = [
  {
    src: 'https://images.pexels.com/photos/6605133/pexels-photo-6605133.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    alt: 'Jazz vocalist performing',
    tag: '42 Gigs',
    caption: 'Vocalist',
    position: 'hidden sm:block sm:left-[2%] lg:left-[5%] sm:top-[3%] lg:top-[2%]',
    size: 'sm:w-[130px] sm:h-[165px] lg:w-[155px] lg:h-[195px]',
    delay: 0.3,
    floatY: 8,
    floatDur: 5,
  },
  {
    src: 'https://images.unsplash.com/photo-1681855178578-4535aba9b305?w=300&h=400&fit=crop&crop=faces',
    alt: 'Guitar player performing',
    tag: '78 Gigs',
    caption: 'Guitarist',
    position: 'hidden sm:block sm:left-[0%] lg:left-[2%] sm:bottom-[8%] lg:bottom-[5%]',
    size: 'sm:w-[140px] sm:h-[175px] lg:w-[170px] lg:h-[210px]',
    delay: 0.5,
    floatY: 10,
    floatDur: 6,
  },
  {
    src: 'https://images.pexels.com/photos/6154775/pexels-photo-6154775.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    alt: 'DJ with neon lights',
    tag: '$150/set',
    caption: 'DJ & Producer',
    position: 'hidden sm:block sm:right-[2%] lg:right-[5%] sm:top-[2%] lg:top-[1%]',
    size: 'sm:w-[125px] sm:h-[160px] lg:w-[150px] lg:h-[190px]',
    delay: 0.4,
    floatY: 9,
    floatDur: 5.5,
  },
  {
    src: 'https://images.unsplash.com/photo-1666078056875-2ae542f936c8?w=300&h=400&fit=crop&crop=faces',
    alt: 'Acoustic musician performing',
    tag: '4.9 Rating',
    caption: 'Acoustic',
    position: 'hidden sm:block sm:right-[0%] lg:right-[3%] sm:bottom-[10%] lg:bottom-[6%]',
    size: 'sm:w-[135px] sm:h-[170px] lg:w-[165px] lg:h-[205px]',
    delay: 0.6,
    floatY: 7,
    floatDur: 6.5,
  },
  {
    src: 'https://images.pexels.com/photos/14037568/pexels-photo-14037568.jpeg?auto=compress&cs=tinysrgb&w=250&h=350&fit=crop',
    alt: 'Live performer with guitar',
    tag: 'Top Rated',
    caption: 'Live Act',
    position: 'hidden lg:block left-[16%] top-[40%]',
    size: 'w-[120px] h-[150px]',
    delay: 0.7,
    floatY: 6,
    floatDur: 7,
  },
  {
    src: 'https://images.unsplash.com/photo-1760574740646-b25398710806?w=250&h=350&fit=crop&crop=faces',
    alt: 'Music producer in studio',
    tag: '91 Gigs',
    caption: 'Producer',
    position: 'hidden lg:block right-[16%] bottom-[32%]',
    size: 'w-[115px] h-[145px]',
    delay: 0.8,
    floatY: 8,
    floatDur: 5.8,
  },
];

function FloatingArtistCard({ img }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: img.delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${img.position} z-[5]`}
    >
      <motion.div
        animate={{ y: [0, -img.floatY, 0] }}
        transition={{ duration: img.floatDur, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ y: -14, scale: 1.04 }}
        className="relative group cursor-pointer"
      >
        {/* Hover glow */}
        <div className="absolute -inset-3 rounded-3xl bg-[#FFB902]/0 group-hover:bg-[#FFB902]/10 blur-xl transition-all duration-500 pointer-events-none" />

        {/* Image card */}
        <div className={`${img.size} relative rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.55)] group-hover:shadow-[0_16px_48px_rgba(255,185,2,0.12)] transition-shadow duration-500`}>
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
            loading="lazy"
          />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Caption text at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
            <p className="text-[10px] sm:text-[11px] text-white/60 font-medium leading-none mb-1">{img.caption}</p>
          </div>

          {/* Yellow tag badge */}
          <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5">
            <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#FFB902] shadow-[0_2px_8px_rgba(255,185,2,0.3)]">
              <span className="text-[8px] sm:text-[9px] font-bold text-black whitespace-nowrap">{img.tag}</span>
            </div>
          </div>

          {/* Shine on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FFB902]/[0.05] blur-[140px]" />

      {/* Floating artist images — scattered around the hero */}
      {artistImages.map((img, i) => (
        <FloatingArtistCard key={i} img={img} />
      ))}

      {/* Center content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7"
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
            className="text-[#A3A3A3] text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-9"
          >
            Connect with venues, discover gigs, and get booked — all in one platform.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-10"
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

          {/* Mobile artist strip — visible only on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex sm:hidden items-end justify-center gap-2.5 mb-10"
          >
            {artistImages.slice(0, 4).map((img, i) => {
              const heights = ['h-[90px]', 'h-[110px]', 'h-[110px]', 'h-[90px]'];
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="relative group cursor-pointer"
                >
                  <div className={`w-[68px] ${heights[i]} rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.4)]`}>
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-1 right-1">
                      <div className="px-1.5 py-0.5 rounded-full bg-[#FFB902]">
                        <span className="text-[7px] font-bold text-black">{img.tag}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex items-center justify-center gap-8 sm:gap-12 mb-10"
          >
            {[
              { num: '500+', label: 'Artists' },
              { num: '4.7', label: 'Rating', icon: true },
              { num: '1K+', label: 'Gigs Booked' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-heading font-extrabold text-lg sm:text-xl text-white flex items-center justify-center gap-1">
                  {stat.icon && <Star size={14} className="text-[#FFB902] fill-[#FFB902]" />}
                  {stat.num}
                </p>
                <p className="text-[10px] sm:text-xs text-[#A3A3A3] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* App store badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
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
        </motion.div>
      </div>
    </section>
  );
}
