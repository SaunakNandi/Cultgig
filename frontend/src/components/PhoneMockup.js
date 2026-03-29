import { Search, Home, Calendar, MessageSquare, User, Music, MapPin, Star } from 'lucide-react';

export default function PhoneMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-mockup-inner">
        {/* Status bar */}
        <div className="flex items-center justify-between text-[10px] text-white/60 px-1">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3.5 h-2 rounded-sm border border-white/40 relative">
              <div className="absolute inset-[1px] bg-white/60 rounded-[1px]" style={{ width: '70%' }} />
            </div>
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between mt-2">
          <span className="font-heading font-extrabold text-sm text-white">
            Ind<span className="text-[#FFB902]">gig</span>
          </span>
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
            <User size={12} className="text-white/70" />
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-2 bg-white/[0.06] rounded-xl px-3 py-2 mt-2">
          <Search size={12} className="text-white/40" />
          <span className="text-[10px] text-white/30">Search gigs near you...</span>
        </div>

        {/* Featured gig card */}
        <div className="mt-3 rounded-2xl bg-gradient-to-br from-[#FFB902]/20 to-transparent border border-[#FFB902]/20 p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#FFB902]/20 flex items-center justify-center">
              <Music size={14} className="text-[#FFB902]" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-white leading-tight">Live Jazz Night</p>
              <p className="text-[9px] text-white/50">The Blue Lounge</p>
            </div>
            <div className="ml-auto flex items-center gap-0.5">
              <Star size={9} className="text-[#FFB902] fill-[#FFB902]" />
              <span className="text-[9px] text-white/60">4.8</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[9px] text-white/40">
            <MapPin size={9} />
            <span>Downtown, 2.3 km</span>
            <span className="ml-auto text-[#FFB902] font-semibold">$150/set</span>
          </div>
        </div>

        {/* Upcoming gigs */}
        <p className="text-[10px] font-semibold text-white/60 mt-3 mb-1.5">Upcoming</p>
        {[
          { name: 'Cafe Acoustic Set', venue: 'Bean & Brew', price: '$80' },
          { name: 'Wedding Reception', venue: 'Grand Hall', price: '$300' },
        ].map((gig, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 py-2 border-b border-white/5 last:border-0"
          >
            <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center">
              <Calendar size={10} className="text-[#FFB902]" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-medium text-white leading-tight">{gig.name}</p>
              <p className="text-[8px] text-white/40">{gig.venue}</p>
            </div>
            <span className="text-[9px] text-[#FFB902] font-semibold">{gig.price}</span>
          </div>
        ))}

        {/* Bottom nav */}
        <div className="mt-auto flex items-center justify-around pt-2 border-t border-white/10">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Search, label: 'Explore', active: false },
            { icon: Calendar, label: 'Gigs', active: false },
            { icon: MessageSquare, label: 'Chat', active: false },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <item.icon
                size={14}
                className={item.active ? 'text-[#FFB902]' : 'text-white/30'}
              />
              <span
                className={`text-[7px] ${
                  item.active ? 'text-[#FFB902]' : 'text-white/30'
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
