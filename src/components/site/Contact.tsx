import { Reveal } from "./Reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Check } from "lucide-react";

const info = [
  { icon: MapPin, label: "Visit", value: "2nd Floor, 24 Skyline Ave, Madhapur" },
  { icon: Phone, label: "Call", value: "+91 9876543210" },
  { icon: Mail, label: "Email", value: "elevatefitclub@gmail.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sun · 5AM – 11PM" },
];

const timeSlots = [
  { value: "", label: "Select time" },
  { value: "morning", label: "Morning (6am - 10am)" },
  { value: "midday", label: "Midday (11am - 2pm)" },
  { value: "evening", label: "Evening (4pm - 8pm)" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", goal: "Build Muscle", date: "", time: "", message: "" });
  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setTimeout(() => setConfirmed(false), 8000);
    setForm({ name: "", email: "", goal: "Build Muscle", date: "", time: "", message: "" });
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-14 text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-accent">/ BOOK A FREE TRIAL</span>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
          Start your <span className="text-gradient">transformation today</span>
        </h2>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {info.map((it) => (
              <div key={it.label} className="glass rounded-2xl p-6" data-cursor="hover">
                <it.icon className="h-6 w-6 text-accent" />
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{it.label}</p>
                <p className="mt-1 font-semibold">{it.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            {[Instagram, Facebook].map((Ic, k) => (
              <span key={k} className="flex h-12 w-12 items-center justify-center rounded-full glass" data-cursor="hover">
                <Ic className="h-5 w-5" />
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-3xl p-7">
            <AnimatePresence mode="wait">
              {confirmed ? (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-3xl border border-border bg-background/80 p-8 text-center"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-10 w-10" />
                  </div>
                  <h3 className="mt-6 text-3xl font-extrabold text-foreground">Booking Confirmed!</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Your elite trial session is locked in. Our team will contact you shortly with preparation details.
                  </p>
                  <button
                    type="button"
                    onClick={() => setConfirmed(false)}
                    className="mt-7 rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary/80"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required placeholder="Full name" value={form.name} onChange={(e) => set("name", e.target.value)}
                      className="rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary" />
                    <input required type="email" placeholder="Email" value={form.email} onChange={(e) => set("email", e.target.value)}
                      className="rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required type="date" value={form.date} onChange={(e) => set("date", e.target.value)}
                      className="rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary" />
                    <select required value={form.time} onChange={(e) => set("time", e.target.value)}
                      className="rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary">
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>{slot.label}</option>
                      ))}
                    </select>
                  </div>
                  <select value={form.goal} onChange={(e) => set("goal", e.target.value)}
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary">
                    {["Build Muscle", "Lose Fat", "Get Stronger", "General Health"].map((g) => <option key={g}>{g}</option>)}
                  </select>
                  <textarea placeholder="Tell us about your goals" rows={4} value={form.message} onChange={(e) => set("message", e.target.value)}
                    className="w-full resize-none rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary" />
                  <button type="submit" data-cursor="hover"
                    className="w-full rounded-full bg-gradient-primary py-4 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
                    Book My Free Trial
                  </button>
                  <AnimatePresence>
                    {sent && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2 rounded-xl bg-accent/15 py-3 text-sm font-medium text-accent">
                        <Check className="h-4 w-4" /> Booking request received.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
