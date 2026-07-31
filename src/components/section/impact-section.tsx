// src/components/section/impact-section.tsx
// Place this file alongside your other section components
// (e.g. next to work-section.tsx, projects-section.tsx)

import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const impactStats = [
  { value: "9", label: "National banks with live regulatory reporting systems" },
  { value: "100,000+", label: "Records processed and validated daily" },
  { value: "2.5+ yrs", label: "Managing pipelines end-to-end, setup to production" },
  { value: "Daily–Yearly", label: "Reporting cycles supported across all clients" },
];

export default function ImpactSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {impactStats.map((stat, id) => (
        <BlurFade key={stat.label} delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
          <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl px-5 py-4 flex flex-col gap-2 h-full">
            <div className="min-h-[2rem] flex items-center">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight">
                {stat.value}
              </span>
            </div>
            <span className="text-xs text-muted-foreground leading-snug">
              {stat.label}
            </span>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}