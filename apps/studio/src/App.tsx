import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity, ArrowUpRight, AudioLines, BookOpen, Check, ChevronDown,
  Clapperboard, Compass, FileText, FolderKanban, Image, Layers3,
  Menu, Mic2, Plus, Search, Settings2, Sparkles, WandSparkles, X,
} from "lucide-react";
import { BrandMark, Button, Surface, StatusDot } from "@reachmark/design-system";

type Section = "Overview" | "Research" | "Scripts" | "Image studio" | "Voice studio" | "Video editor" | "Projects";
const nav: { label: Section; icon: typeof Activity; group: string }[] = [
  { label: "Overview", icon: Layers3, group: "WORKSPACE" },
  { label: "Projects", icon: FolderKanban, group: "WORKSPACE" },
  { label: "Research", icon: Compass, group: "CREATE" },
  { label: "Scripts", icon: FileText, group: "CREATE" },
  { label: "Image studio", icon: Image, group: "CREATE" },
  { label: "Voice studio", icon: Mic2, group: "CREATE" },
  { label: "Video editor", icon: Clapperboard, group: "CREATE" },
];

const descriptions: Record<Section, string> = {
  Overview: "Your creative work, in one place.",
  Research: "Turn audience signals into a clear creative direction.",
  Scripts: "Shape a strong idea into a script worth watching.",
  "Image studio": "Create visual directions and campaign assets.",
  "Voice studio": "Prepare narration, voiceovers, and localized audio.",
  "Video editor": "Bring scenes, sound, and captions together.",
  Projects: "Keep every brief and campaign organised.",
};

function App() {
  const [active, setActive] = useState<Section>("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBrief, setShowBrief] = useState(false);
  const [brief, setBrief] = useState("");
  const [goal, setGoal] = useState("Grow brand awareness");
  const [notice, setNotice] = useState("");

  const submitBrief = (event: React.FormEvent) => {
    event.preventDefault();
    if (!brief.trim()) return;
    setNotice("Your brief is ready to connect to the campaign pipeline. Backend services are the next integration step.");
    setShowBrief(false);
  };

  const changeSection = (section: Section) => {
    setActive(section);
    setMobileOpen(false);
    setNotice("");
  };

  return (
    <div className="studio-shell">
      {mobileOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
      <aside className={`sidebar ${mobileOpen ? "sidebar--open" : ""}`}>
        <div className="brand-row">
          <BrandMark className="brand-mark" />
          <span>reachmark<span className="brand-light"> studio</span></span>
          <button className="icon-button sidebar-close" aria-label="Close menu" onClick={() => setMobileOpen(false)}><X size={18} /></button>
        </div>
        <button className="workspace-switch">
          <span className="workspace-avatar">R</span>
          <span className="workspace-copy"><strong>Reachmark workspace</strong><small>Personal workspace</small></span>
          <ChevronDown size={15} />
        </button>
        <nav className="nav-groups" aria-label="Main navigation">
          {["WORKSPACE", "CREATE"].map((group) => (
            <div className="nav-group" key={group}>
              <p className="nav-label">{group}</p>
              {nav.filter((item) => item.group === group).map(({ label, icon: Icon }) => (
                <button key={label} className={`nav-item ${active === label ? "nav-item--active" : ""}`} onClick={() => changeSection(label)}>
                  <Icon size={17} strokeWidth={1.8} /><span>{label}</span>
                  {label === "Research" && <span className="nav-new">NEW</span>}
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="usage-card">
            <div className="usage-heading"><span>Creative capacity</span><span className="usage-count">Setup</span></div>
            <div className="usage-track"><span /></div>
            <p>Connect your generation services to unlock production.</p>
            <button onClick={() => setNotice("Integrations will be configured in the next backend phase.")}>View integrations <ArrowUpRight size={13} /></button>
          </div>
          <button className="nav-item settings-item" onClick={() => setNotice("Workspace settings will be added with authentication and account management.")}><Settings2 size={17} /><span>Settings</span></button>
          <div className="profile-row"><div className="profile-avatar">RH</div><div><strong>Workspace owner</strong><small>Studio account</small></div><MoreIcon /></div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="icon-button mobile-menu" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu size={20} /></button>
          <div className="breadcrumbs"><span>Workspace</span><span className="crumb-slash">/</span><strong>{active}</strong></div>
          <div className="topbar-actions"><div className="search-box"><Search size={15} /><span>Search your studio</span><kbd>⌘ K</kbd></div><span className="topbar-divider" /><StatusDot status="warning" label="Setup in progress" /><div className="top-avatar">RH</div></div>
        </header>

        <div className="page-content">
          <motion.div key={active} initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .28 }}>
            <section className="page-heading">
              <div><div className="eyebrow"><span className="eyebrow-dot" /> CREATIVE WORKSPACE</div><h1>{active === "Overview" ? "Make something that matters." : active}</h1><p>{descriptions[active]}</p></div>
              <Button onClick={() => setShowBrief(true)} leadingIcon={<Plus size={16} />}>New brief</Button>
            </section>

            {notice && <div className="notice" role="status"><Check size={16} />{notice}<button onClick={() => setNotice("")} aria-label="Dismiss"><X size={15} /></button></div>}

            {active === "Overview" ? (
              <>
                <section className="welcome-grid">
                  <Surface tone="glass" className="hero-card">
                    <div className="hero-copy"><div className="hero-kicker"><Sparkles size={14} /> YOUR CREATIVE ENGINE</div><h2>From first thought<br />to <em>finished story.</em></h2><p>Research the moment. Find your angle. Build the assets. Bring the story to life.</p><Button size="lg" onClick={() => setShowBrief(true)} trailingIcon={<ArrowUpRight size={16} />}>Start with a brief</Button></div>
                    <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="art-core"><WandSparkles size={36} /></div><div className="art-chip chip-research"><Compass size={14} /> Research</div><div className="art-chip chip-create"><AudioLines size={14} /> Create</div><div className="art-chip chip-publish"><Clapperboard size={14} /> Produce</div></div>
                    <div className="hero-index">01 <span>/ 05</span></div>
                  </Surface>
                  <Surface className="pipeline-card">
                    <div className="card-topline"><span className="section-kicker">THE PIPELINE</span><span className="tiny-live"><span /> MODULAR</span></div>
                    <h3>One connected workflow.</h3>
                    <div className="pipeline-list">
                      {[
                        ["01", "Research", "Find the signal", Compass],
                        ["02", "Write", "Shape the story", FileText],
                        ["03", "Visualise", "Build the look", Image],
                        ["04", "Voice", "Give it a voice", Mic2],
                        ["05", "Produce", "Cut the final", Clapperboard],
                      ].map(([number, title, sub, Icon]) => {
                        const StepIcon = Icon as typeof Compass;
                        return <button className="pipeline-step" key={number as string} onClick={() => changeSection(({ Research: "Research", Write: "Scripts", Visualise: "Image studio", Voice: "Voice studio", Produce: "Video editor" } as Record<string, Section>)[title as string])}><span className="step-number">{number as string}</span><span className="step-icon"><StepIcon size={16} /></span><span className="step-copy"><strong>{title as string}</strong><small>{sub as string}</small></span><ArrowUpRight size={14} className="step-arrow" /></button>;
                      })}
                    </div>
                  </Surface>
                </section>

                <section className="section-heading"><div><span className="section-kicker">YOUR WORKSPACE</span><h2>A clear space to create.</h2></div><button className="text-link" onClick={() => changeSection("Projects")}>All projects <ArrowUpRight size={14} /></button></section>
                <section className="feature-grid">
                  <FeatureCard icon={<Compass size={18} />} number="01" title="Research the moment" text="Audience, competitors, trends, and the ideas worth pursuing." action="Open research" onClick={() => changeSection("Research")} />
                  <FeatureCard icon={<FileText size={18} />} number="02" title="Develop the story" text="Hooks, scripts, captions, and platform-ready variations." action="Open scripts" onClick={() => changeSection("Scripts")} />
                  <FeatureCard icon={<Layers3 size={18} />} number="03" title="Build the production" text="Visual assets, narration, scenes, and final edits." action="Explore studios" onClick={() => changeSection("Image studio")} />
                </section>
              </>
            ) : (
              <section className="module-empty">
                <div className="empty-symbol">{active === "Research" ? <Compass /> : active === "Scripts" ? <FileText /> : active === "Image studio" ? <Image /> : active === "Voice studio" ? <Mic2 /> : active === "Video editor" ? <Clapperboard /> : <FolderKanban />}</div>
                <span className="section-kicker">MODULE FOUNDATION</span>
                <h2>{active === "Projects" ? "Your projects will live here." : `The ${active.toLowerCase()} starts here.`}</h2>
                <p>This module is mapped into the Studio workflow. Its production engine, saved data, and provider connections will be implemented in the next build phase.</p>
                <Button onClick={() => setShowBrief(true)} leadingIcon={<Plus size={16} />}>Create a brief</Button>
              </section>
            )}
            <footer className="page-footer"><span>REACHMARK STUDIO <span className="footer-dot">•</span> CREATIVE SYSTEMS</span><span>Built for ideas that travel.</span></footer>
          </motion.div>
        </div>
      </main>

      {showBrief && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setShowBrief(false); }}><motion.div className="brief-modal" role="dialog" aria-modal="true" aria-labelledby="brief-title" initial={{ opacity: 0, y: 14, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }}><div className="modal-head"><div><span className="section-kicker">NEW PROJECT</span><h2 id="brief-title">Start with the brief.</h2></div><button className="icon-button" onClick={() => setShowBrief(false)} aria-label="Close"><X size={18} /></button></div><form onSubmit={submitBrief}><label htmlFor="brief">What are we creating?</label><textarea id="brief" rows={4} value={brief} onChange={(e) => setBrief(e.target.value)} placeholder="Describe the brand, product, audience, or story..." required /><label htmlFor="goal">Primary objective</label><select id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}><option>Grow brand awareness</option><option>Generate leads or sales</option><option>Educate an audience</option><option>Build a community</option><option>Launch a product</option></select><div className="modal-note"><Sparkles size={15} /> This creates a brief draft. Saving and AI generation will be enabled when the backend is connected.</div><div className="modal-actions"><Button variant="ghost" onClick={() => setShowBrief(false)}>Cancel</Button><Button type="submit" disabled={!brief.trim()}>Prepare brief <ArrowUpRight size={15} /></Button></div></form></motion.div></div>}
    </div>
  );
}

function FeatureCard({ icon, number, title, text, action, onClick }: { icon: React.ReactNode; number: string; title: string; text: string; action: string; onClick: () => void }) {
  return <Surface className="feature-card"><div className="feature-top"><span className="feature-icon">{icon}</span><span className="feature-number">{number}</span></div><h3>{title}</h3><p>{text}</p><button onClick={onClick}>{action}<ArrowUpRight size={14} /></button></Surface>;
}

function MoreIcon() { return <span className="more-dots">•••</span>; }

export default App;
