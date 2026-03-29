import { motion } from 'framer-motion';
import { Music, Camera, Mic, Palette, Guitar, Drama } from 'lucide-react';

const artists = [
  {
    name: 'Maya Chen',
    role: 'Jazz Vocalist',
    icon: Mic,
    image: 'https://images.pexels.com/photos/6605133/pexels-photo-6605133.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    gigs: 42,
  },
  {
    name: 'James Rivera',
    role: 'Guitarist',
    icon: Guitar,
    image: 'https://images.unsplash.com/photo-1681855178578-4535aba9b305?w=400&h=400&fit=crop&crop=faces',
    gigs: 78,
  },
  {
    name: 'Priya Sharma',
    role: 'Photographer',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1666078056875-2ae542f936c8?w=400&h=400&fit=crop&crop=faces',
    gigs: 56,
  },
  {
    name: 'Andre Williams',
    role: 'Stand-up Comic',
    icon: Drama,
    image: 'https://images.pexels.com/photos/6154775/pexels-photo-6154775.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    gigs: 34,
  },
  {
    name: 'Sophie Laurent',
    role: 'DJ & Producer',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1769291396641-9e67701db131?w=400&h=400&fit=crop&crop=faces',
    gigs: 91,
  },
  {
    name: 'Kai Nakamura',
    role: 'Visual Artist',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1760574740646-b25398710806?w=400&h=400&fit=crop&crop=faces',
    gigs: 63,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ArtistShowcase() {
  return (
    <section data-testid="artist-showcase-section" className="relative py-24 sm:py-32">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#FFB902]/[0.04] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-[#FFB902] font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Meet the Talent
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tighter text-white mb-4">
            Artists Thriving on Indgig
          </h2>
          <p className="text-[#A3A3A3] text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            From jazz musicians to stand-up comedians, photographers to DJs — thousands of creatives are finding their next gig.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5"
        >
          {artists.map((artist) => (
            <motion.div
              key={artist.name}
              variants={cardVariants}
              data-testid={`artist-card-${artist.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative glass-card rounded-2xl overflow-hidden hover:border-[#FFB902]/40 transition-all duration-300"
            >
              {/* Artist image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

                {/* Gigs badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#FFB902]/20 backdrop-blur-md border border-[#FFB902]/30">
                  <span className="text-[10px] font-bold text-[#FFB902]">{artist.gigs} gigs</span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <artist.icon size={12} className="text-[#FFB902]" />
                    <span className="text-[10px] text-[#FFB902] font-medium">{artist.role}</span>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-white leading-tight">{artist.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
