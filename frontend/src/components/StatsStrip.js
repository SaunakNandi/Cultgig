import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Artists' },
  { value: 200, suffix: '+', label: 'Venues' },
  { value: 1000, suffix: '+', label: 'Gigs Booked' },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted = count >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1).replace(/\.0$/, '')},000` : count.toLocaleString();

  return (
    <span>
      {count >= 1000 ? formatted : count}
      {count >= target ? suffix : ''}
    </span>
  );
}

export default function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      data-testid="stats-section"
      ref={ref}
      className="relative py-16 sm:py-20 border-y border-white/10 bg-[#111111]/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <p
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-heading font-extrabold text-4xl sm:text-5xl text-[#FFB902] tracking-tight mb-2"
              >
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="text-[#A3A3A3] text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
