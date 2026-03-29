import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

export default function AppDownloadCTA() {
  return (
    <section id="download" data-testid="download-section" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Golden glow background */}
      <div className="absolute inset-0 golden-glow-strong" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FFB902]/[0.08] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-white mb-5 leading-tight">
            Ready to Find{' '}
            <span className="text-gradient-gold">Your Next Gig?</span>
          </h2>
          <p className="text-[#A3A3A3] text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
            Download Indgig today and join thousands of artists and venues already connecting, booking, and thriving.
          </p>

          {/* App store buttons */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a
              href="#"
              data-testid="download-appstore-btn"
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:border-[#FFB902]/30 transition-all duration-300 glow-gold-hover"
            >
              <Apple size={24} className="text-white" />
              <div className="text-left">
                <p className="text-[10px] text-[#A3A3A3] leading-none">Download on the</p>
                <p className="text-base font-semibold text-white leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="#"
              data-testid="download-playstore-btn"
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:border-[#FFB902]/30 transition-all duration-300 glow-gold-hover"
            >
              <Play size={24} className="text-white" />
              <div className="text-left">
                <p className="text-[10px] text-[#A3A3A3] leading-none">Get it on</p>
                <p className="text-base font-semibold text-white leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right - Phone */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-float-slow">
            <PhoneMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
