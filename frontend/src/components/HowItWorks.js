import { motion } from 'framer-motion';

/* Inline SVG illustrations for each step */
const CreateProfileSVG = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Card background */}
    <rect x="40" y="20" width="200" height="160" rx="20" fill="#1A1A1A" stroke="rgba(255,185,2,0.2)" strokeWidth="1.5"/>
    {/* Avatar circle */}
    <circle cx="140" cy="72" r="28" fill="#FFB902" opacity="0.15"/>
    <circle cx="140" cy="72" r="28" stroke="#FFB902" strokeWidth="1.5" strokeDasharray="4 3"/>
    {/* Person silhouette */}
    <circle cx="140" cy="64" r="10" fill="#FFB902" opacity="0.6"/>
    <path d="M125 86c0-8.284 6.716-15 15-15s15 6.716 15 15" stroke="#FFB902" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Form lines */}
    <rect x="80" y="115" width="120" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
    <rect x="80" y="115" width="70" height="8" rx="4" fill="#FFB902" opacity="0.3"/>
    <rect x="80" y="132" width="120" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
    <rect x="80" y="132" width="95" height="8" rx="4" fill="#FFB902" opacity="0.2"/>
    <rect x="80" y="149" width="120" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
    <rect x="80" y="149" width="50" height="8" rx="4" fill="#FFB902" opacity="0.15"/>
    {/* Plus icon */}
    <circle cx="218" cy="42" r="14" fill="#FFB902" opacity="0.2"/>
    <line x1="218" y1="36" x2="218" y2="48" stroke="#FFB902" strokeWidth="2" strokeLinecap="round"/>
    <line x1="212" y1="42" x2="224" y2="42" stroke="#FFB902" strokeWidth="2" strokeLinecap="round"/>
    {/* Sparkles */}
    <circle cx="62" cy="38" r="3" fill="#FFB902" opacity="0.5"/>
    <circle cx="72" cy="52" r="2" fill="#FFB902" opacity="0.3"/>
    <circle cx="55" cy="55" r="1.5" fill="#FFB902" opacity="0.4"/>
  </svg>
);

const DiscoverConnectSVG = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Left person card */}
    <rect x="20" y="40" width="100" height="120" rx="16" fill="#1A1A1A" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
    <circle cx="70" cy="80" r="18" fill="#FFB902" opacity="0.15"/>
    <circle cx="70" cy="74" r="7" fill="#FFB902" opacity="0.5"/>
    <path d="M59 90c0-6.075 4.925-11 11-11s11 4.925 11 11" stroke="#FFB902" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <rect x="42" y="108" width="56" height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>
    <rect x="50" y="118" width="40" height="4" rx="2" fill="rgba(255,255,255,0.05)"/>
    <rect x="42" y="130" width="56" height="16" rx="8" fill="#FFB902" opacity="0.25"/>
    <text x="70" y="141" textAnchor="middle" fill="#FFB902" fontSize="8" fontWeight="bold" fontFamily="sans-serif">CONNECT</text>
    {/* Right person card */}
    <rect x="160" y="40" width="100" height="120" rx="16" fill="#1A1A1A" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
    <circle cx="210" cy="80" r="18" fill="#FFB902" opacity="0.15"/>
    <circle cx="210" cy="74" r="7" fill="#FFB902" opacity="0.5"/>
    <path d="M199 90c0-6.075 4.925-11 11-11s11 4.925 11 11" stroke="#FFB902" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <rect x="182" y="108" width="56" height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>
    <rect x="190" y="118" width="40" height="4" rx="2" fill="rgba(255,255,255,0.05)"/>
    <rect x="182" y="130" width="56" height="16" rx="8" fill="#FFB902" opacity="0.25"/>
    <text x="210" y="141" textAnchor="middle" fill="#FFB902" fontSize="8" fontWeight="bold" fontFamily="sans-serif">CONNECT</text>
    {/* Connection lines */}
    <path d="M120 85 C135 75, 145 75, 160 85" stroke="#FFB902" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5"/>
    <path d="M120 95 C135 105, 145 105, 160 95" stroke="#FFB902" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5"/>
    {/* Center match icon */}
    <circle cx="140" cy="90" r="12" fill="#FFB902" opacity="0.2"/>
    <path d="M135 90l3 3 7-7" stroke="#FFB902" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Sparkles */}
    <circle cx="140" cy="30" r="3" fill="#FFB902" opacity="0.4"/>
    <circle cx="130" cy="170" r="2" fill="#FFB902" opacity="0.3"/>
    <circle cx="150" cy="168" r="2.5" fill="#FFB902" opacity="0.35"/>
  </svg>
);

const BookGetPaidSVG = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Main card */}
    <rect x="50" y="15" width="180" height="135" rx="18" fill="#1A1A1A" stroke="rgba(255,185,2,0.2)" strokeWidth="1.5"/>
    {/* Calendar header */}
    <rect x="50" y="15" width="180" height="40" rx="18" fill="#FFB902" opacity="0.1"/>
    <rect x="68" y="28" width="60" height="6" rx="3" fill="#FFB902" opacity="0.5"/>
    <rect x="68" y="38" width="35" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
    {/* Check icon */}
    <circle cx="200" cy="35" r="10" fill="#FFB902" opacity="0.25"/>
    <path d="M195 35l3 3 7-7" stroke="#FFB902" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Calendar grid */}
    {[0, 1, 2, 3, 4].map((row) =>
      [0, 1, 2, 3, 4, 5, 6].map((col) => (
        <rect
          key={`${row}-${col}`}
          x={68 + col * 22}
          y={65 + row * 16}
          width={16}
          height={11}
          rx={3}
          fill={
            (row === 1 && col === 3) || (row === 2 && col === 5) || (row === 3 && col === 1)
              ? '#FFB902'
              : 'rgba(255,255,255,0.04)'
          }
          opacity={(row === 1 && col === 3) || (row === 2 && col === 5) || (row === 3 && col === 1) ? 0.4 : 1}
        />
      ))
    )}
    {/* Payment notification */}
    <rect x="90" y="155" width="140" height="35" rx="12" fill="#1A1A1A" stroke="#FFB902" strokeWidth="1" opacity="0.9"/>
    <circle cx="108" cy="172" r="8" fill="#FFB902" opacity="0.3"/>
    <text x="107" y="176" textAnchor="middle" fill="#FFB902" fontSize="10" fontWeight="bold" fontFamily="sans-serif">$</text>
    <rect x="122" y="166" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.12)"/>
    <rect x="122" y="174" width="35" height="4" rx="2" fill="#FFB902" opacity="0.3"/>
    <circle cx="214" cy="172" r="6" fill="#FFB902" opacity="0.25"/>
    <path d="M211 172l2 2 4-4" stroke="#FFB902" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Sparkles */}
    <circle cx="45" cy="100" r="2.5" fill="#FFB902" opacity="0.4"/>
    <circle cx="242" cy="60" r="3" fill="#FFB902" opacity="0.3"/>
    <circle cx="248" cy="120" r="2" fill="#FFB902" opacity="0.35"/>
  </svg>
);

const steps = [
  {
    num: '01',
    title: 'Create Profile',
    desc: 'Sign up as an artist or venue. Showcase your talent or list your space in minutes.',
    Illustration: CreateProfileSVG,
  },
  {
    num: '02',
    title: 'Discover & Connect',
    desc: 'Browse gigs near you, or find the perfect artist for your event. Match based on style, location & availability.',
    Illustration: DiscoverConnectSVG,
  },
  {
    num: '03',
    title: 'Book & Get Paid',
    desc: 'Confirm bookings, manage your schedule, and get paid securely — all within the app.',
    Illustration: BookGetPaidSVG,
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

        {/* Steps with SVG illustrations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center group"
            >
              {/* SVG Illustration */}
              <div className="w-full max-w-[260px] mb-8 relative">
                <div className="glass-card rounded-3xl p-4 group-hover:border-[#FFB902]/30 transition-all duration-500">
                  <step.Illustration />
                </div>
                {/* Step number badge */}
                <span className="absolute -top-3 -right-1 w-8 h-8 rounded-full bg-[#FFB902] text-black text-xs font-heading font-extrabold flex items-center justify-center shadow-lg shadow-[#FFB902]/20">
                  {step.num}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-white mb-2">{step.title}</h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed max-w-xs">{step.desc}</p>

              {/* Arrow connector on mobile */}
              {i < steps.length - 1 && (
                <div className="md:hidden mt-8 mb-2">
                  <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                    <path d="M12 0v24m0 0l-6-6m6 6l6-6" stroke="#FFB902" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop connector arrows between cards */}
        <div className="hidden md:flex justify-center items-center gap-0 -mt-[280px] mb-[200px] relative z-0 pointer-events-none">
          <div className="flex-1" />
          <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="mx-0">
            <path d="M0 12h72m0 0l-8-6m8 6l-8 6" stroke="#FFB902" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
          </svg>
          <div className="flex-1" />
          <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="mx-0">
            <path d="M0 12h72m0 0l-8-6m8 6l-8 6" stroke="#FFB902" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
          </svg>
          <div className="flex-1" />
        </div>
      </div>
    </section>
  );
}
