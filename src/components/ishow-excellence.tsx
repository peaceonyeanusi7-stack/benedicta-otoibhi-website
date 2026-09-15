import { useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  Compass,
  GraduationCap,
  Lightbulb,
  Menu,
  MessageCircleMore,
  Mic2,
  NotebookPen,
  Sparkles,
  Target,
  TrendingUp,
  UserRoundCheck,
  Users,
  X,
} from "lucide-react";
import portraitAsset from "@/assets/benedicta-otoibhi.png.asset.json";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Results", "#results"],
  ["Resources", "#resources"],
  ["Speaking", "#speaking"],
] as const;

const challenges = [
  {
    label: "My grades are struggling",
    recommendation:
      "You may benefit from Academic Excellence Coaching to identify the gaps and build a focused improvement plan.",
  },
  {
    label: "I don't study effectively",
    recommendation:
      "Academic Excellence Coaching can help you create a practical study system that fits your courses and schedule.",
  },
  {
    label: "I struggle with consistency",
    recommendation:
      "Student Success Coaching may help you develop sustainable habits, structure and accountability.",
  },
  {
    label: "I need exam preparation help",
    recommendation:
      "A focused coaching session can help you approach exam preparation with more clarity and strategy.",
  },
  {
    label: "I want to achieve a 5.0 GPA",
    recommendation:
      "Explore Academic Excellence Coaching for strategic guidance toward your academic goals.",
  },
  {
    label: "I need mentorship",
    recommendation:
      "Mentorship may give you the guidance, accountability and support to move forward with confidence.",
  },
] as const;

function SectionTag({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "coral" }) {
  return (
    <p className={`section-tag ${tone === "coral" ? "text-coral" : "text-gold"}`}>
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

function ArrowLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "outline" | "light" }) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-bright",
    outline: "border border-border-strong bg-surface-glass text-foreground hover:border-primary hover:bg-surface-glass-strong",
    light: "bg-paper text-navy hover:bg-gold-soft",
  };
  return (
    <a href={href} className={`cta ${styles[variant]}`}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-20 sm:px-8 lg:flex lg:justify-between">
        <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label="i-ShowExcellence home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary font-display text-xl text-primary-foreground">i</span>
          <span className="truncate font-display text-xl text-foreground sm:text-2xl">i-Show<span className="text-gold">Excellence</span></span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-bright sm:inline-flex">Work With Benedicta</a>
          <button type="button" onClick={() => setOpen((value) => !value)} className="icon-button lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-surface-glass hover:text-foreground">{label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">Work With Benedicta</a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero-backdrop relative overflow-hidden border-b border-border">
      <div className="floating-panel floating-panel-one" aria-hidden="true" />
      <div className="floating-panel floating-panel-two" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-16">
        <div className="reveal-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface-glass px-3 py-1.5 text-[10px] font-semibold uppercase text-muted-foreground sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            Academic excellence • Student success
          </div>
          <h1 className="mt-6 max-w-[12ch] font-display text-5xl leading-[.96] text-foreground sm:text-7xl lg:text-[5.6rem]">
            From Academic <span className="text-gold">Struggle</span> to Consistent Excellence.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Helping Nigerian university students build the strategies, confidence and systems they need to excel academically.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ArrowLink href="#programs">Explore Programs</ArrowLink>
            <ArrowLink href="#contact" variant="outline">Work With Benedicta</ArrowLink>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-border pt-5 text-sm text-muted-foreground">
            <GraduationCap className="h-5 w-5 shrink-0 text-gold" />
            <span>First Class graduate, Lagos State University</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[34rem] reveal-up reveal-delay">
          <div className="portrait-frame">
            <img src={portraitAsset.url} alt="Benedicta Otoibhi, founder of i-ShowExcellence" className="h-full w-full object-cover" fetchPriority="high" />
          </div>
          <div className="cred-card -left-2 top-[16%] sm:-left-8">
            <span className="font-display text-3xl text-gold">6×</span>
            <span className="text-xs font-semibold text-foreground">5.0 GPA Achiever</span>
          </div>
          <div className="cred-card -right-2 bottom-[8%] items-end text-right sm:-right-6">
            <span className="font-display text-3xl text-coral">1,000+</span>
            <span className="text-xs font-semibold text-foreground">Students Transformed</span>
          </div>
        </div>
        <a href="#stats" aria-label="Continue to achievements" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition hover:text-gold lg:block">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    ["6×", "Consecutive 5.0 GPAs"],
    ["1,000+", "Students Transformed"],
    ["5.0", "Academic Excellence Standard"],
    ["First Class", "Lagos State University Graduate"],
  ];
  return (
    <section id="stats" aria-label="Benedicta's academic achievements" className="border-b border-border bg-surface-deep">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map(([value, label], index) => (
          <div key={label} className={`py-8 sm:px-6 sm:py-10 ${index % 2 === 0 ? "border-r border-border" : ""} ${index > 1 ? "border-t border-border lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-r-0" : ""}`}>
            <p className="font-display text-3xl text-gold sm:text-4xl">{value}</p>
            <p className="mt-1 max-w-[15ch] text-xs leading-5 text-muted-foreground sm:text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProblemSection() {
  const problems = [
    "I study but my grades don't improve.",
    "I struggle to stay consistent.",
    "I don't know how to prepare effectively for exams.",
    "I want to improve my GPA but don't know where to start.",
    "I need accountability and mentorship.",
  ];
  return (
    <section className="section-shell bg-paper text-navy">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionTag tone="coral">The challenge</SectionTag>
            <h2 className="section-title mt-5 max-w-[12ch]">Your Current GPA Does Not Have to Define Your Potential.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-navy-muted">Many students work hard but still struggle because they have never been shown a strategic approach to studying, managing academic pressure and building consistency.</p>
          </div>
          <div className="grid gap-3 self-end">
            {problems.map((problem, index) => (
              <div key={problem} className="problem-row group">
                <span className="font-display text-xl text-coral">0{index + 1}</span>
                <p className="font-medium">“{problem}”</p>
                <ArrowRight className="ml-auto h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-navy-border pt-7 sm:flex-row sm:items-center">
          <p className="font-display text-2xl sm:text-3xl">You don't need to figure it all out alone.</p>
          <ArrowLink href="#finder">Find Your Path</ArrowLink>
        </div>
      </div>
    </section>
  );
}

export function Programs() {
  const items = [
    { icon: Target, title: "Academic Excellence Coaching", copy: "Personalized guidance designed to help students identify academic challenges and develop practical strategies for improvement." },
    { icon: TrendingUp, title: "Student Success Coaching", copy: "Develop better academic habits, improve consistency and create a sustainable approach to university life." },
    { icon: UserRoundCheck, title: "Mentorship", copy: "Get guidance, accountability and support from someone who understands the journey to academic excellence." },
    { icon: Compass, title: "Educational Consulting", copy: "Strategic support for organizations, institutions and communities focused on improving student outcomes." },
  ];
  return (
    <section id="programs" className="section-shell border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>Programs & services</SectionTag>
          <h2 className="section-title mt-5">Build the System. <span className="text-gold">Change the Result.</span></h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, copy }, index) => (
            <article key={title} className="program-card group">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-primary-soft text-primary"><Icon className="h-5 w-5" /></span>
                <span className="text-xs text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold">Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChallengeFinder() {
  const [selected, setSelected] = useState(0);
  return (
    <section id="finder" className="section-shell bg-surface-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionTag tone="coral">Academic challenge finder</SectionTag>
          <h2 className="section-title mt-5">What Is Holding You Back?</h2>
          <p className="mt-5 text-muted-foreground">Choose the challenge that sounds most like you.</p>
          <div className="recommendation-panel mt-8" aria-live="polite">
            <Lightbulb className="h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="text-xs font-semibold uppercase text-gold">Recommended next step</p>
              <p className="mt-2 text-sm leading-6 text-foreground">{challenges[selected].recommendation}</p>
            </div>
          </div>
          <div className="mt-6"><ArrowLink href="#programs">Explore Your Options</ArrowLink></div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2" role="listbox" aria-label="Choose your academic challenge">
          {challenges.map((challenge, index) => (
            <button key={challenge.label} type="button" role="option" aria-selected={selected === index} onClick={() => setSelected(index)} className={`challenge-card ${selected === index ? "challenge-card-active" : ""}`}>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-current text-xs">{selected === index ? <Check className="h-3.5 w-3.5" /> : index + 1}</span>
              <span>{challenge.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section id="about" className="section-shell bg-paper text-navy">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md">
          <div className="founder-image-frame">
            <img src={portraitAsset.url} alt="Benedicta Otoibhi smiling in a professional portrait" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-5 -right-2 max-w-[14rem] rounded-md bg-navy p-4 text-paper shadow-premium sm:-right-8">
            <Sparkles className="mb-2 h-5 w-5 text-gold" />
            <p className="font-display text-xl leading-tight">Six consecutive 5.0 GPAs</p>
          </div>
        </div>
        <div>
          <SectionTag tone="coral">Founder & educator</SectionTag>
          <h2 className="section-title mt-5">Meet Benedicta Otoibhi</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-navy-muted">Benedicta Otoibhi is a First Class graduate of Lagos State University and a six-time 5.0 GPA achiever. Through i-ShowExcellence, she helps university students move from academic struggle to consistent excellence through coaching, mentorship and practical strategies.</p>
          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-2xl italic text-navy sm:text-3xl">“Excellence is not just a result. It is a system.”</blockquote>
          <div className="mt-8"><ArrowLink href="#founder-story">Read Benedicta's Story</ArrowLink></div>
          <span id="founder-story" className="sr-only">Benedicta's story</span>
        </div>
      </div>
    </section>
  );
}

export function TransformationSection() {
  const steps = ["Academic Stress", "Clarity", "Strategy", "Consistency", "Excellence"];
  return (
    <section id="results" className="section-shell border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div>
            <SectionTag>Transformation journey</SectionTag>
            <h2 className="section-title mt-5">Built Around Student Transformation</h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">i-ShowExcellence focuses on helping students understand what is keeping them stuck, develop practical academic strategies and build the consistency required for long-term improvement.</p>
          </div>
          <ol className="relative grid gap-3">
            {steps.map((step, index) => (
              <li key={step} className={`journey-step ${index === steps.length - 1 ? "journey-step-final" : ""}`}>
                <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                <span className="font-display text-2xl sm:text-3xl">{step}</span>
                {index < steps.length - 1 && <ArrowDown className="ml-auto h-4 w-4 text-gold" />}
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-14 rounded-md border border-dashed border-border-strong bg-surface-glass p-8 text-center sm:p-12">
          <MessageCircleMore className="mx-auto h-8 w-8 text-coral" />
          <h3 className="mt-4 font-display text-2xl">Student stories and testimonials can be featured here.</h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-muted-foreground">Reserved for verified student stories. No testimonials have been added to this concept.</p>
        </div>
      </div>
    </section>
  );
}

export function Resources() {
  const articles = [
    ["Study Strategies", "How to Build a Study System That Actually Works", "A practical framework for planning focused, repeatable study sessions."],
    ["GPA Improvement", "5 Mistakes That Can Keep Your GPA Stuck", "Sample guidance for recognizing habits that may limit academic progress."],
    ["Exam Preparation", "How to Prepare Strategically for Exams", "A sample roadmap for turning your syllabus into an exam preparation plan."],
    ["Academic Productivity", "Building Consistency When Motivation Fades", "Sample ideas for continuing the work even when motivation changes."],
    ["Student Success", "Creating an Academic Reset Plan", "A sample starting point for students ready to approach a new semester differently."],
    ["Personal Development", "Confidence Is an Academic Skill Too", "A sample reflection on self-belief, preparation and active participation."],
  ];
  return (
    <section id="resources" className="section-shell bg-paper text-navy">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionTag tone="coral">Resource hub preview</SectionTag>
            <h2 className="section-title mt-5">Free Resources for Students</h2>
          </div>
          <p className="rounded-full border border-navy-border px-4 py-2 text-xs font-semibold uppercase text-navy-muted">Sample content</p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-navy-border bg-navy-border md:grid-cols-2 lg:grid-cols-3">
          {articles.map(([category, title, description]) => (
            <article key={title} className="resource-card group">
              <BookOpen className="h-5 w-5 text-coral" />
              <p className="mt-6 text-xs font-semibold uppercase text-navy-muted">{category}</p>
              <h3 className="mt-2 font-display text-2xl leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-navy-muted">{description}</p>
              <a href="#resources" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">Read Resource <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            </article>
          ))}
        </div>
        <div className="mt-8"><ArrowLink href="#resources">Explore Resources</ArrowLink></div>
      </div>
    </section>
  );
}

export function SpeakingSection() {
  return (
    <section id="speaking" className="speaking-backdrop relative overflow-hidden border-y border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
        <div>
          <SectionTag>Public speaking & live events</SectionTag>
          <h2 className="mt-6 max-w-[12ch] font-display text-5xl leading-none text-foreground sm:text-7xl">Speaking. Teaching. <span className="text-coral">Transforming.</span></h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">Benedicta speaks on academic excellence, student success, leadership, personal development and educational growth.</p>
          <div className="mt-8"><ArrowLink href="#contact">Invite Benedicta to Speak</ArrowLink></div>
        </div>
        <div className="speaker-motif" aria-hidden="true">
          <Mic2 className="h-16 w-16 text-gold" strokeWidth={1.25} />
          <div>
            <p className="font-display text-3xl text-foreground">Ideas for student growth.</p>
            <p className="mt-2 text-sm text-muted-foreground">Delivered with clarity, warmth and conviction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudentCTA() {
  return (
    <section className="bg-gold-soft py-16 text-navy sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase text-coral-strong">For students</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">Ready to Take Your Academic Journey Seriously?</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-navy-muted">Whether you're trying to recover your GPA, build better study habits or pursue your first 5.0, the next step starts with having the right strategy.</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <ArrowLink href="#contact">Get Started</ArrowLink>
          <ArrowLink href="#programs" variant="outline">Explore Programs</ArrowLink>
        </div>
      </div>
    </section>
  );
}

export function StudentDashboardPreview() {
  const items = [
    { icon: Target, title: "My Goals", note: "Define academic priorities" },
    { icon: NotebookPen, title: "Study Plan", note: "Organize weekly focus" },
    { icon: TrendingUp, title: "Progress", note: "Reflect on consistency" },
    { icon: CalendarDays, title: "Upcoming Sessions", note: "Plan coaching touchpoints" },
    { icon: BookOpen, title: "Resources", note: "Keep helpful materials close" },
    { icon: Users, title: "Mentorship", note: "Stay connected to guidance" },
  ];
  return (
    <section className="section-shell bg-surface-deep">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-coral/40 bg-coral-soft px-4 py-2 text-xs font-semibold uppercase text-coral">Future i-ShowExcellence Student Experience</p>
          <h2 className="section-title mt-6">A Digital Home for the Journey</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">A dedicated student experience could eventually bring coaching, study plans, resources, accountability and progress tracking into one place.</p>
        </div>
        <div className="dashboard-shell mt-10">
          <div className="flex flex-col gap-3 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-display text-primary-foreground">i</span>
              <span className="font-display text-lg">Student Portal</span>
            </div>
            <span className="text-xs font-semibold uppercase text-coral">Concept preview — not yet live</span>
          </div>
          <div className="grid lg:grid-cols-[14rem_1fr]">
            <aside className="hidden border-r border-border p-5 lg:block">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Your workspace</p>
              <div className="mt-5 grid gap-2">
                {items.slice(0, 4).map(({ icon: Icon, title }, index) => <div key={title} className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm ${index === 0 ? "bg-primary-soft text-primary" : "text-muted-foreground"}`}><Icon className="h-4 w-4" />{title}</div>)}
              </div>
            </aside>
            <div className="p-5 sm:p-8">
              <div className="mb-6">
                <p className="text-xs uppercase text-muted-foreground">Student workspace</p>
                <h3 className="mt-1 font-display text-3xl">Your path, clearly organized.</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {items.map(({ icon: Icon, title, note }) => (
                  <div key={title} className="dashboard-tile">
                    <Icon className="h-5 w-5 text-gold" />
                    <p className="mt-5 font-semibold">{title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="final-cta-backdrop relative overflow-hidden">
      <div className="floating-panel floating-panel-three" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <SectionTag>Begin your journey</SectionTag>
        <h2 className="mx-auto mt-6 max-w-[14ch] font-display text-5xl leading-none text-foreground sm:text-7xl">Your First 5.0 Could Start With the Right Strategy.</h2>
        <p className="mt-6 text-base text-muted-foreground sm:text-lg">Build better systems. Develop consistency. Pursue excellence.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ArrowLink href="#programs">Start Your Journey</ArrowLink>
          <ArrowLink href="#about" variant="outline">Work With Benedicta</ArrowLink>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto]">
        <div>
          <a href="#home" className="font-display text-2xl text-foreground">i-Show<span className="text-gold">Excellence</span></a>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">Helping students move from academic struggle to consistent excellence.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3">
          {[...navItems.slice(1, 3), ["Resources", "#resources"], ["Speaking", "#speaking"], ["Contact", "#contact"]].map(([label, href]) => <a key={`${label}-${href}`} href={href} className="text-muted-foreground hover:text-gold">{label}</a>)}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8">
          <div className="flex gap-5"><a href="#footer">LinkedIn</a><a href="#footer">Instagram</a><a href="#footer">YouTube</a></div>
          <p>Website concept designed &amp; developed by <a href="https://peaceonyeanusi.vercel.app/" target="_blank" rel="noreferrer" className="text-foreground hover:text-gold">Peace Onyeanusi</a></p>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ProblemSection />
        <Programs />
        <ChallengeFinder />
        <FounderSection />
        <TransformationSection />
        <Resources />
        <SpeakingSection />
        <StudentCTA />
        <StudentDashboardPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}