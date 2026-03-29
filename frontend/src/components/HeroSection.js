import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const floatingImages = [
  {
    src: 'https://images.pexels.com/photos/6605133/pexels-photo-6605133.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    alt: 'Singer',
    className: 'w-24 h-28 sm:w-32 sm:h-36 rounded-2xl',
    position: 'absolute -left-4 sm:left-[4%] lg:left-[8%] top-[12%] sm:top-[8%]',
    delay: 0.3,
    rotate: -8,
    border: 'border-2 border-[#FFB902]/40',
  },
  {
    src: 'https://images.pexels.com/photos/6154775/pexels-photo-6154775.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    alt: 'Creative',
    className: 'w-20 h-24 sm:w-28 sm:h-32 rounded-2xl',
    position: 'absolute -right-2 sm:right-[5%] lg:right-[9%] top-[6%] sm:top-[4%]',
    delay: 0.5,
    rotate: 6,
    border: 'border-2 border-white/20',
  },
  {
    src: 'https://images.unsplash.com/photo-1681855178578-4535aba9b305?w=300&h=300&fit=crop&crop=faces',
    alt: 'Guitarist',
    className: 'w-28 h-32 sm:w-36 sm:h-40 rounded-2xl',
    position: 'absolute left-2 sm:left-[2%] lg:left-[5%] bottom-[18%] sm:bottom-[12%]',
    delay: 0.7,
    rotate: 5,
    border: 'border-2 border-[#FFB902]/30',
  },
  {
    src: 'https://images.unsplash.com/photo-1666078056875-2ae542f936c8?w=300&h=300&fit=crop&crop=faces',
    alt: 'Musician',
    className: 'w-24 h-28 sm:w-32 sm:h-36 rounded-2xl',
    position: 'absolute -right-4 sm:right-[3%] lg:right-[6%] bottom-[20%] sm:bottom-[14%]',
    delay: 0.4,
    rotate: -5,
    border: 'border-2 border-white/15',
  },
  {
    src: 'https://images.pexels.com/photos/14037568/pexels-photo-14037568.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    alt: 'Performer',
    className: 'hidden sm:block w-20 h-24 rounded-xl',
    position: 'absolute left-[18%] lg:left-[20%] top-[2%]',
    delay: 0.6,
    rotate: 3,
    border: 'border-2 border-[#FFB902]/20',
  },
  {
    src: 'https://images.unsplash.com/photo-1760574740646-b25398710806?w=200&h=200&fit=crop&crop=faces',
    alt: 'DJ',
    className: 'hidden sm:block w-20 h-24 rounded-xl',
    position: 'absolute right-[16%] lg:right-[18%] bottom-[8%]',
    delay: 0.8,
    rotate: -4,
    border: 'border-2 border-white/10',
  },
];

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
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: img.delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`${img.position} z-[5]`}
        >
          <div
            className={`${img.className} ${img.border} overflow-hidden shadow-2xl shadow-black/40`}
            style={{ transform: `rotate(${img.rotate}deg)` }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
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
