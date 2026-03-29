import { motion } from 'framer-motion';

/* Step 1: Create Profile - shows a phone-like UI with profile setup */
const CreateProfileSVG = () => (
  <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Phone frame */}
    <rect x="60" y="10" width="200" height="220" rx="24" fill="#111" stroke="rgba(255,185,2,0.15)" strokeWidth="1.5"/>
    <rect x="115" y="14" width="90" height="6" rx="3" fill="#222"/>

    {/* Header bar */}
    <rect x="72" y="32" width="176" height="32" rx="8" fill="rgba(255,185,2,0.06)"/>
    <text x="100" y="52" fill="#FFB902" fontSize="11" fontWeight="700" fontFamily="sans-serif">Create Your Profile</text>
    <circle cx="232" cy="48" r="8" fill="rgba(255,185,2,0.15)"/>
    <line x1="229" y1="48" x2="235" y2="48" stroke="#FFB902" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="232" y1="45" x2="232" y2="51" stroke="#FFB902" strokeWidth="1.5" strokeLinecap="round"/>

    {/* Avatar area */}
    <circle cx="160" cy="94" r="22" fill="rgba(255,185,2,0.08)" stroke="#FFB902" strokeWidth="1.5" strokeDasharray="4 3"/>
    <circle cx="160" cy="88" r="8" fill="#FFB902" opacity="0.5"/>
    <path d="M148 104c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#FFB902" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Camera icon */}
    <circle cx="178" cy="110" r="7" fill="#FFB902" opacity="0.3"/>
    <rect x="174.5" y="107" width="7" height="5" rx="1" stroke="#FFB902" strokeWidth="1" fill="none"/>
    <circle cx="178" cy="109.5" r="1.5" fill="#FFB902" opacity="0.6"/>

    {/* Name field */}
    <rect x="85" y="126" width="150" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
    <text x="95" y="140" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="sans-serif">Your name</text>
    <rect x="85" y="126" width="80" height="22" rx="6" fill="rgba(255,185,2,0.06)"/>
    <text x="95" y="140" fill="#FFB902" fontSize="8" fontWeight="600" fontFamily="sans-serif">Alex Rivera</text>

    {/* Role selector chips */}
    <rect x="85" y="156" width="60" height="18" rx="9" fill="#FFB902" opacity="0.2" stroke="#FFB902" strokeWidth="1"/>
    <text x="100" y="168" fill="#FFB902" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" textAnchor="middle">Musician</text>
    <rect x="152" y="156" width="60" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <text x="167" y="168" fill="rgba(255,255,255,0.35)" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">Venue</text>

    {/* Genre tags */}
    <rect x="85" y="182" width="38" height="14" rx="7" fill="rgba(255,185,2,0.12)"/>
    <text x="104" y="192" fill="#FFB902" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Jazz</text>
    <rect x="128" y="182" width="42" height="14" rx="7" fill="rgba(255,185,2,0.08)"/>
    <text x="149" y="192" fill="rgba(255,185,2,0.7)" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Blues</text>
    <rect x="175" y="182" width="50" height="14" rx="7" fill="rgba(255,185,2,0.06)"/>
    <text x="200" y="192" fill="rgba(255,185,2,0.5)" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Acoustic</text>

    {/* CTA button */}
    <rect x="95" y="204" width="130" height="20" rx="10" fill="#FFB902" opacity="0.9"/>
    <text x="160" y="217" fill="#000" fontSize="8" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">Get Started</text>

    {/* Decorative elements */}
    <circle cx="46" cy="50" r="4" fill="#FFB902" opacity="0.3">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="280" cy="180" r="3" fill="#FFB902" opacity="0.25">
      <animate attributeName="opacity" values="0.25;0.5;0.25" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="38" cy="160" r="2.5" fill="#FFB902" opacity="0.2">
      <animate attributeName="opacity" values="0.2;0.45;0.2" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    {/* Floating music note */}
    <g opacity="0.4">
      <circle cx="285" cy="60" r="4" fill="#FFB902"/>
      <line x1="289" y1="60" x2="289" y2="45" stroke="#FFB902" strokeWidth="1.5"/>
      <path d="M289 45c4-2 8-1 8 2" stroke="#FFB902" strokeWidth="1.5" fill="none"/>
    </g>
  </svg>
);

/* Step 2: Discover & Connect - map/search view with gig pins and artist cards */
const DiscoverConnectSVG = () => (
  <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Map background */}
    <rect x="30" y="10" width="260" height="180" rx="20" fill="#111" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
    {/* Grid lines (map streets) */}
    <line x1="30" y1="60" x2="290" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
    <line x1="30" y1="100" x2="290" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
    <line x1="30" y1="140" x2="290" y2="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
    <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
    <line x1="170" y1="10" x2="170" y2="190" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
    <line x1="240" y1="10" x2="240" y2="190" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>

    {/* Map path/route */}
    <path d="M80 130 C100 80, 150 60, 180 80 S240 100, 260 70" stroke="#FFB902" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" fill="none"/>

    {/* Location pin 1 - active */}
    <g>
      <circle cx="110" cy="75" r="16" fill="rgba(255,185,2,0.15)">
        <animate attributeName="r" values="16;20;16" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <path d="M110 60 C117 60 122 65 122 72 C122 80 110 90 110 90 C110 90 98 80 98 72 C98 65 103 60 110 60Z" fill="#FFB902"/>
      <circle cx="110" cy="71" r="4" fill="#0A0A0A"/>
    </g>

    {/* Location pin 2 */}
    <g opacity="0.7">
      <path d="M200 95 C206 95 210 99 210 104 C210 110 200 118 200 118 C200 118 190 110 190 104 C190 99 194 95 200 95Z" fill="#FFB902"/>
      <circle cx="200" cy="103" r="3" fill="#0A0A0A"/>
    </g>

    {/* Location pin 3 */}
    <g opacity="0.5">
      <path d="M255 55 C260 55 264 58 264 62 C264 67 255 74 255 74 C255 74 246 67 246 62 C246 58 250 55 255 55Z" fill="#FFB902"/>
      <circle cx="255" cy="61" r="2.5" fill="#0A0A0A"/>
    </g>

    {/* Search bar */}
    <rect x="46" y="20" width="228" height="26" rx="13" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <circle cx="62" cy="33" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/>
    <line x1="66" y1="37" x2="70" y2="41" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
    <text x="78" y="37" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="sans-serif">Search gigs near you...</text>

    {/* Popup card over pin 1 */}
    <rect x="55" y="100" width="110" height="55" rx="12" fill="#1A1A1A" stroke="rgba(255,185,2,0.25)" strokeWidth="1"/>
    <circle cx="75" cy="120" r="10" fill="rgba(255,185,2,0.15)"/>
    <circle cx="75" cy="117" r="4" fill="#FFB902" opacity="0.5"/>
    <path d="M69 126c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#FFB902" strokeWidth="1" strokeLinecap="round" fill="none"/>
    <text x="92" y="118" fill="#fff" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">Jazz Trio</text>
    <text x="92" y="128" fill="rgba(255,255,255,0.4)" fontSize="6.5" fontFamily="sans-serif">Blue Lounge</text>
    <rect x="92" y="134" width="55" height="12" rx="6" fill="#FFB902" opacity="0.2"/>
    <text x="105" y="143" fill="#FFB902" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">$150/set</text>

    {/* Match notification card */}
    <rect x="145" y="195" width="145" height="38" rx="12" fill="#1A1A1A" stroke="#FFB902" strokeWidth="1" opacity="0.95"/>
    <circle cx="165" cy="214" r="10" fill="rgba(34,197,94,0.15)"/>
    <path d="M161 214l3 3 6-6" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="182" y="210" fill="#fff" fontSize="7" fontWeight="600" fontFamily="sans-serif">New Match!</text>
    <text x="182" y="222" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="sans-serif">Blue Lounge wants to connect</text>

    {/* Decorative sparkles */}
    <circle cx="48" cy="170" r="3" fill="#FFB902" opacity="0.3">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="280" cy="170" r="2.5" fill="#FFB902" opacity="0.25">
      <animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

/* Step 3: Book & Get Paid - booking confirmation + payment */
const BookGetPaidSVG = () => (
  <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Main confirmation card */}
    <rect x="45" y="10" width="230" height="170" rx="20" fill="#111" stroke="rgba(255,185,2,0.15)" strokeWidth="1.5"/>

    {/* Success checkmark circle */}
    <circle cx="160" cy="50" r="20" fill="rgba(34,197,94,0.12)" stroke="#22c55e" strokeWidth="1.5"/>
    <path d="M150 50l6 6 14-14" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

    {/* Booking confirmed text */}
    <text x="160" y="85" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">Booking Confirmed!</text>
    <text x="160" y="98" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Jazz Night at The Blue Lounge</text>

    {/* Divider */}
    <line x1="70" y1="108" x2="250" y2="108" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 3"/>

    {/* Details grid */}
    <text x="80" y="125" fill="rgba(255,255,255,0.35)" fontSize="6.5" fontFamily="sans-serif">DATE</text>
    <text x="80" y="137" fill="#fff" fontSize="8" fontWeight="600" fontFamily="sans-serif">Dec 28, 2025</text>
    <text x="160" y="125" fill="rgba(255,255,255,0.35)" fontSize="6.5" fontFamily="sans-serif">TIME</text>
    <text x="160" y="137" fill="#fff" fontSize="8" fontWeight="600" fontFamily="sans-serif">8:00 PM</text>
    <text x="225" y="125" fill="rgba(255,255,255,0.35)" fontSize="6.5" fontFamily="sans-serif">PAY</text>
    <text x="225" y="137" fill="#FFB902" fontSize="8" fontWeight="700" fontFamily="sans-serif">$300</text>

    {/* Progress bar */}
    <rect x="70" y="150" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
    <rect x="70" y="150" width="180" height="6" rx="3" fill="#FFB902" opacity="0.4"/>
    <text x="160" y="166" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="sans-serif" textAnchor="middle">Payment secured in escrow</text>

    {/* Payment received notification */}
    <rect x="60" y="190" width="200" height="44" rx="14" fill="#1A1A1A" stroke="#FFB902" strokeWidth="1.2"/>
    {/* Dollar icon circle */}
    <circle cx="84" cy="212" r="12" fill="rgba(255,185,2,0.15)"/>
    <text x="84" y="217" fill="#FFB902" fontSize="12" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">$</text>
    {/* Text */}
    <text x="104" y="207" fill="#fff" fontSize="8" fontWeight="600" fontFamily="sans-serif">Payment Received</text>
    <text x="104" y="219" fill="rgba(255,255,255,0.4)" fontSize="6.5" fontFamily="sans-serif">$300 deposited to your account</text>
    {/* Checkmark */}
    <circle cx="244" cy="212" r="8" fill="rgba(34,197,94,0.2)"/>
    <path d="M240 212l3 3 5-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

    {/* Sparkles */}
    <circle cx="36" cy="40" r="3.5" fill="#FFB902" opacity="0.35">
      <animate attributeName="opacity" values="0.35;0.6;0.35" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="290" cy="80" r="3" fill="#FFB902" opacity="0.25">
      <animate attributeName="opacity" values="0.25;0.5;0.25" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="285" cy="200" r="2" fill="#FFB902" opacity="0.2">
      <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite"/>
    </circle>
    {/* Confetti bits */}
    <rect x="130" y="30" width="4" height="4" rx="1" fill="#FFB902" opacity="0.3" transform="rotate(20 132 32)">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite"/>
    </rect>
    <rect x="190" y="25" width="3" height="3" rx="0.5" fill="#22c55e" opacity="0.3" transform="rotate(-15 191 26)">
      <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2.5s" repeatCount="indefinite"/>
    </rect>
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
  visible: { transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
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
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center group"
            >
              {/* SVG Illustration */}
              <div className="w-full max-w-[300px] mb-8 relative">
                <div className="glass-card rounded-3xl p-5 group-hover:border-[#FFB902]/30 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,185,2,0.08)]">
                  <step.Illustration />
                </div>
                {/* Step number badge */}
                <span className="absolute -top-3 -right-2 w-9 h-9 rounded-full bg-[#FFB902] text-black text-xs font-heading font-extrabold flex items-center justify-center shadow-lg shadow-[#FFB902]/20">
                  {step.num}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-2">{step.title}</h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed max-w-xs">{step.desc}</p>

              {/* Arrow connector on mobile */}
              {i < steps.length - 1 && (
                <div className="md:hidden mt-8 mb-2">
                  <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                    <path d="M12 0v32m0 0l-6-6m6 6l6-6" stroke="#FFB902" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
