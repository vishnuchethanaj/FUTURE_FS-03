import { Reveal } from "./Reveal";
import { useState } from "react";
import { Circle, CalendarDays, Clock3, Sparkles } from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const schedule: Record<string, Array<{
  time: string;
  period: string;
  duration: string;
  title: string;
  coach: string;
  label: string;
  accent: string;
}>> = {
  Mon: [
    {
      time: "06:00",
      period: "AM",
      duration: "60m",
      title: "Elite CrossFit",
      coach: "Marcus W.",
      label: "CrossFit",
      accent: "bg-violet-100 text-violet-700",
    },
    {
      time: "12:00",
      period: "PM",
      duration: "45m",
      title: "HIIT Burn",
      coach: "Marcus W.",
      label: "HIIT",
      accent: "bg-amber-100 text-amber-700",
    },
    {
      time: "05:30",
      period: "PM",
      duration: "90m",
      title: "Heavy Lifts",
      coach: "Alex R.",
      label: "Strength",
      accent: "bg-sky-100 text-sky-700",
    },
  ],
  Tue: [
    {
      time: "07:00",
      period: "AM",
      duration: "50m",
      title: "Power Circuit",
      coach: "Nina S.",
      label: "Circuit",
      accent: "bg-sky-100 text-sky-700",
    },
    {
      time: "05:00",
      period: "PM",
      duration: "60m",
      title: "Strength + Mobility",
      coach: "Marcus W.",
      label: "Strength",
      accent: "bg-emerald-100 text-emerald-700",
    },
  ],
  Wed: [
    {
      time: "06:30",
      period: "AM",
      duration: "45m",
      title: "Endurance Flow",
      coach: "Lena K.",
      label: "Cardio",
      accent: "bg-cyan-100 text-cyan-700",
    },
    {
      time: "07:30",
      period: "PM",
      duration: "60m",
      title: "CrossFit Peak",
      coach: "Marcus W.",
      label: "CrossFit",
      accent: "bg-violet-100 text-violet-700",
    },
  ],
  Thu: [
    {
      time: "08:00",
      period: "AM",
      duration: "60m",
      title: "Athletic Conditioning",
      coach: "Alex R.",
      label: "Conditioning",
      accent: "bg-orange-100 text-orange-700",
    },
  ],
  Fri: [
    {
      time: "06:00",
      period: "AM",
      duration: "50m",
      title: "HIIT Express",
      coach: "Nina S.",
      label: "HIIT",
      accent: "bg-amber-100 text-amber-700",
    },
    {
      time: "07:30",
      period: "PM",
      duration: "90m",
      title: "Heavy Lifts",
      coach: "Alex R.",
      label: "Strength",
      accent: "bg-sky-100 text-sky-700",
    },
  ],
  Sat: [
    {
      time: "09:00",
      period: "AM",
      duration: "75m",
      title: "Weekend Warrior",
      coach: "Lena K.",
      label: "Performance",
      accent: "bg-fuchsia-100 text-fuchsia-700",
    },
  ],
  Sun: [
    {
      time: "10:00",
      period: "AM",
      duration: "60m",
      title: "Active Recovery",
      coach: "Marcus W.",
      label: "Recovery",
      accent: "bg-slate-100 text-slate-700",
    },
  ],
};

export function Schedule() {
  const [activeDay, setActiveDay] = useState("Mon");
  const items = schedule[activeDay] || [];

  return (
    <section id="schedule" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold tracking-[0.25em] text-accent">
            <Sparkles className="h-4 w-4" /> TIMETABLE
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Live class schedule for every training goal.
          </h2>
        </Reveal>

        <div className="glass overflow-hidden rounded-[2rem] border border-border bg-background/80 shadow-2xl shadow-black/5">
          <div className="border-b border-border bg-secondary/60 px-4 py-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-muted-foreground sm:justify-start">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`rounded-full px-4 py-2 transition ${activeDay === day ? "bg-primary text-primary-foreground shadow-glow" : "bg-secondary/80 text-foreground hover:bg-secondary"}`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-[200px_minmax(0,1fr)] sm:items-center">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CalendarDays className="h-5 w-5 text-accent" />
                <span>Schedule based on active classes across the week</span>
              </div>
              <div className="flex items-center gap-5 text-sm text-muted-foreground sm:justify-end">
                <div className="flex items-center gap-2">
                  <Circle className="h-3 w-3 text-accent" /> Selected day
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 className="h-3 w-3 text-primary" /> Session length shown
                </div>
              </div>
            </div>

            {items.length ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.time + item.title} className="rounded-3xl border border-border bg-background/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-3xl border border-border bg-secondary/70 px-4 py-3 text-center text-sm font-semibold text-foreground">
                          <div>{item.time}</div>
                          <div className="text-xs text-muted-foreground">{item.period} · {item.duration}</div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">with {item.coach}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.accent}`}>{item.label}</span>
                        <a
                          href="#contact"
                          className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-primary"
                        >
                          Book
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-border bg-secondary/60 p-8 text-center text-sm text-muted-foreground">
                No classes are scheduled for {activeDay}. Check a different day to see more sessions.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
