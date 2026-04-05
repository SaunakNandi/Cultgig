import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Sparkles } from "lucide-react";

export default function WaitlistSection() {
  const [role, setRole] = useState("talent");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section
      id="waitlist"
      data-testid="waitlist-section"
      className="relative py-24 sm:py-32"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#FFB902]/[0.05] blur-[100px]" />

      <div className="relative z-10 max-w-xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#FFB902] font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Early Access
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tighter text-white mb-4">
            Be the First to Go Live
          </h2>
          <p className="text-[#A3A3A3] text-base sm:text-base leading-relaxed mb-10">
            Join the waitlist and get early access to Indgig before anyone else.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-5"
        >
          {/* Role toggle */}
          <Tabs
            value={role}
            onValueChange={setRole}
            data-testid="waitlist-role-toggle"
          >
            <TabsList className="bg-white/[0.05] border border-white/10 rounded-full p-1 h-auto w-full max-w-xs mx-auto">
              <TabsTrigger
                value="talent"
                data-testid="waitlist-role-talent"
                className="rounded-full px-5 py-2 text-sm font-medium data-[state=active]:bg-[#FFB902] data-[state=active]:text-black data-[state=inactive]:text-[#A3A3A3] transition-all"
              >
                I'm a Talent
              </TabsTrigger>
              <TabsTrigger
                value="business"
                data-testid="waitlist-role-business"
                className="rounded-full px-5 py-2 text-sm font-medium data-[state=active]:bg-[#FFB902] data-[state=active]:text-black data-[state=inactive]:text-[#A3A3A3] transition-all"
              >
                I'm a Business
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Email input */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="waitlist-email-input"
              className="flex-1 bg-white/[0.05] border-white/10 text-white placeholder:text-white/30 rounded-full px-5 h-12 focus:border-[#FFB902] focus:ring-1 focus:ring-[#FFB902]/30"
              required
            />
            <button
              type="submit"
              data-testid="waitlist-submit-btn"
              className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-[#FFB902] text-black font-bold text-sm hover:bg-[#E5A600] transition-all duration-300 glow-gold-hover whitespace-nowrap"
            >
              <Sparkles size={16} />
              Join Waitlist
            </button>
          </div>

          {/* Success message */}
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#FFB902] text-sm font-medium"
              data-testid="waitlist-success-message"
            >
              You're on the list! We'll be in touch soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
