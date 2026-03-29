import { motion } from 'framer-motion';
import { Compass, CalendarCheck, ShieldCheck, LayoutGrid, MessageCircle, Star } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Discover Gigs',
    desc: 'Browse hundreds of opportunities near you, filtered by genre, location, and pay.',
    span: 'lg:col-span-2',
    hasBgImage: true,
    bgImage: 'https://images.pexels.com/photos/33923311/pexels-photo-33923311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    icon: CalendarCheck,
    title: 'Easy Booking',
    desc: 'Book gigs or talent with a single tap. No back-and-forth emails.',
    span: 'lg:col-span-1',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    desc: 'Get paid safely through the app. No chasing invoices or awkward conversations.',
    span: 'lg:col-span-1',
  },
  {
    icon: LayoutGrid,
    title: 'Manage Schedule',
    desc: 'Keep track of all your upcoming gigs, rehearsals, and availability in one calendar.',
    span: 'lg:col-span-1',
    hasBgImage: true,
    bgImage: 'https://images.unsplash.com/photo-1680946496238-5272d3c407fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHxkYXJrJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fHx8MTc3NDc2MzcyNHww&ixlib=rb-4.1.0&q=85',
  },
  {
    icon: MessageCircle,
    title: 'In-App Messaging',
    desc: 'Chat directly with venues or artists. Coordinate details without leaving the app.',
    span: 'lg:col-span-1',
  },
  {
    icon: Star,
    title: 'Reviews & Ratings',
    desc: 'Build trust with verified reviews. Stand out with a stellar profile.',
    span: 'lg:col-span-1',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturesGrid() {
  return (
    <section id="features" data-testid="features-section" className="relative py-24 sm:py-32">
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
            Features
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tighter text-white">
            Everything You Need, One App
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardVariants}
              data-testid={`feature-card-${feat.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`relative overflow-hidden glass-card rounded-3xl p-8 group hover:border-[#FFB902]/40 transition-all duration-300 ${feat.span}`}
            >
              {/* Background image (optional) */}
              {feat.hasBgImage && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500"
                  style={{ backgroundImage: `url('${feat.bgImage}')` }}
                />
              )}

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#FFB902]/10 border border-[#FFB902]/20 flex items-center justify-center mb-5 group-hover:bg-[#FFB902]/20 transition-colors duration-300">
                  <feat.icon size={22} className="text-[#FFB902]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">{feat.title}</h3>
                <p className="text-[#A3A3A3] text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
