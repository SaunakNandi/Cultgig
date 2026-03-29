import { motion } from 'framer-motion';
import { UserPlus, Compass, Banknote } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Create Profile',
    desc: 'Sign up as an artist or venue. Showcase your talent or list your space in minutes.',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Discover & Connect',
    desc: 'Browse gigs near you, or find the perfect artist for your event. Match based on style, location & availability.',
  },
  {
    num: '03',
    icon: Banknote,
    title: 'Book & Get Paid',
    desc: 'Confirm bookings, manage your schedule, and get paid securely — all within the app.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-[#FFB902] font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
            How It Works
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tighter text-white">
            Three Steps to Your Next Gig
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
        >
          {/* Connector line (desktop only) */}
          <div className="hidden md:block step-connector" style={{ top: '80px' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Number badge */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:border-[#FFB902]/40 transition-all duration-300">
                  <step.icon size={28} className="text-[#FFB902]" />
                </div>
                <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#FFB902] text-black text-xs font-heading font-extrabold flex items-center justify-center">
                  {step.num}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-white mb-2">{step.title}</h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed max-w-xs">{step.desc}</p>

              {/* Arrow on mobile */}
              {i < steps.length - 1 && (
                <div className="md:hidden mt-6 mb-2">
                  <div className="w-px h-8 bg-gradient-to-b from-[#FFB902]/40 to-transparent mx-auto" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
