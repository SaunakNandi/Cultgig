import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const floatingImages = [
  {
    src: 'https://images.pexels.com/photos/6605133/pexels-photo-6605133.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    alt: 'Singer',
    label: 'Vocalist',
    size: 'w-[100px] h-[120px] sm:w-[130px] sm:h-[150px]',
    position: 'left-[2%] sm:left-[10%] lg:left-[14%] top-[6%] sm:top-[5%]',
    delay: 0.3,
    rotate: -6,
    floatDuration: 5,
    floatY: 12,
  },
  {
    src: 'https://images.pexels.com/photos/6154775/pexels-photo-6154775.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    alt: 'Creative',
    label: 'DJ',
    size: 'w-[90px] h-[110px] sm:w-[120px] sm:h-[140px]',
    position: 'right-[2%] sm:right-[10%] lg:right-[14%] top-[4%] sm:top-[3%]',
    delay: 0.5,
    rotate: 7,
    floatDuration: 6,
    floatY: 14,
  },
  {
    src: 'https://images.unsplash.com/photo-1681855178578-4535aba9b305?w=300&h=300&fit=crop&crop=faces',
    alt: 'Guitarist',
    label: 'Guitarist',
    size: 'w-[110px] h-[130px] sm:w-[140px] sm:h-[160px]',
    position: 'left-[0%] sm:left-[6%] lg:left-[10%] bottom-[14%] sm:bottom-[10%]',
    delay: 0.7,
    rotate: 4,
    floatDuration: 5.5,
    floatY: 10,
  },
  {
    src: 'https://images.unsplash.com/photo-1666078056875-2ae542f936c8?w=300&h=300&fit=crop&crop=faces',
    alt: 'Musician',
    label: 'Acoustic',
    size: 'w-[100px] h-[120px] sm:w-[130px] sm:h-[150px]',
    position: 'right-[0%] sm:right-[7%] lg:right-[11%] bottom-[16%] sm:bottom-[12%]',
    delay: 0.4,
    rotate: -5,
    floatDuration: 6.5,
    floatY: 13,
  },
  {
    src: 'https://images.pexels.com/photos/14037568/pexels-photo-14037568.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    alt: 'Performer',
    label: 'Live Act',
    size: 'hidden lg:block w-[100px] h-[115px]',
    position: 'left-[24%] lg:left-[24%] top-[0%]',
    delay: 0.6,
    rotate: 3,
    floatDuration: 7,
    floatY: 9,
  },
  {
    src: 'https://images.unsplash.com/photo-1760574740646-b25398710806?w=200&h=200&fit=crop&crop=faces',
    alt: 'DJ',
    label: 'Producer',
    size: 'hidden lg:block w-[100px] h-[115px]',
    position: 'right-[22%] lg:right-[22%] bottom-[6%]',
    delay: 0.8,
    rotate: -3,
    floatDuration: 5.8,
    floatY: 11,
  },
];

function ArtistCard({ img, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: img.delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${img.position} z-[5]`}
    >
      <motion.div
        animate={{ y: [0, -img.floatY, 0] }}
        transition={{ duration: img.floatDuration, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.08, zIndex: 20 }}
        className="relative group cursor-pointer"
        style={{ transform: `rotate(${img.rotate}deg)` }}
      >
        {/* Glow behind card on hover */}
        <div className="absolute -inset-3 rounded-3xl bg-[#FFB902]/0 group-hover:bg-[#FFB902]/15 blur-xl transition-all duration-500 pointer-events-none" />

        {/* Image container */}
        <div
          className={`${img.size} relative rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#FFB902]/60 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_8px_40px_rgba(255,185,2,0.2)]`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

          {/* Label tag */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5">
            <div className="px-2 py-0.5 rounded-full bg-[#FFB902]/20 backdrop-blur-sm border border-[#FFB902]/30">
              <span className="text-[9px] sm:text-[10px] font-bold text-[#FFB902] whitespace-nowrap">{img.label}</span>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* Online dot */}
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#22c55e] border-2 border-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-full bg-[#22c55e] animate-ping opacity-40" />
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
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 golden-glow opacity-60" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#FFB902]/[0.07] blur-[120px]" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1765224747170-be7b97010052?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZ2UlMjBkYXJrJTIwc3BvdGxpZ2h0fGVufDB8fHx8MTc3NDc2MzcxOHww&ixlib=rb-4.1.0&q=85')",
        }}
      />

      {/* Floating artist images */}
      {floatingImages.map((img, i) => (
        <ArtistCard key={i} img={img} index={i} />
      ))}

      {/* Center content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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

          <p className="text-[#A3A3A3] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Indgig connects artists and freelancers with venues and businesses.
            Discover, book, and manage gigs — all in one platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8">
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

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-8 sm:gap-12 mb-10"
          >
            {[
              { num: '500+', label: 'Artists' },
              { num: '4.7', label: 'Rating' },
              { num: '1K+', label: 'Gigs Booked' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-heading font-extrabold text-lg sm:text-xl text-white">{stat.num}</p>
                <p className="text-[10px] sm:text-xs text-[#A3A3A3] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* App store badges */}
          <div className="flex items-center gap-4 justify-center">
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
      </div>
    </section>
  );
}
