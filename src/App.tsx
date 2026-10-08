import { useState, type ReactNode } from "react";

type Page =
  | "Dashboard"
  | "Projects"
  | "Agent Team"
  | "Orchestrator"
  | "Requirements"
  | "Architecture"
  | "UI/UX"
  | "Reviews"
  | "Blueprint"
  | "Activity"
  | "Settings";

type IconName =
  | "grid"
  | "folder"
  | "agents"
  | "file"
  | "architecture"
  | "layout"
  | "review"
  | "activity"
  | "settings"
  | "plus"
  | "play"
  | "export"
  | "arrow"
  | "check"
  | "clock"
  | "spark"
  | "command"
  | "menu"
  | "close"
  | "copy"
  | "download"
  | "shield"
  | "database"
  | "code";

const paths: Record<IconName, ReactNode> = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></>,
  folder: <><path d="M3 7.5h18v10.2a2.3 2.3 0 0 1-2.3 2.3H5.3A2.3 2.3 0 0 1 3 17.7Z" /><path d="M3 8V6.3A2.3 2.3 0 0 1 5.3 4h4l2 2H19a2 2 0 0 1 2 2" /></>,
  agents: <><circle cx="12" cy="7" r="3" /><circle cx="5" cy="16" r="2.5" /><circle cx="19" cy="16" r="2.5" /><path d="M12 10v3M9 8.5 6.5 13M15 8.5l2.5 4.5" /></>,
  file: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
  architecture: <><rect x="8" y="3" width="8" height="5" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /><rect x="14" y="16" width="7" height="5" rx="1.5" /><path d="M12 8v4M6.5 16v-4h11v4" /></>,
  layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 9v12" /></>,
  review: <><path d="m12 3 8 4v5c0 4.8-3.2 7.7-8 9-4.8-1.3-8-4.2-8-9V7Z" /><path d="m8.5 12 2.3 2.3 4.8-5" /></>,
  activity: <path d="M3 12h4l2.2-6 4.1 12 2.2-6H21" />,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19 13.5v-3l2-1.5-2-3.4-2.4 1a8 8 0 0 0-2.6-1.5L13.6 3H10l-.5 2.2A8 8 0 0 0 7 6.6l-2.2-1L3 9l2 1.5v3L3 15l1.8 3.4 2.2-1a8 8 0 0 0 2.5 1.4l.5 2.2h3.6l.5-2.2a8 8 0 0 0 2.5-1.4l2.4 1 2-3.4Z" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  play: <path d="m8 5 11 7-11 7Z" />,
  export: <><path d="M12 3v12M7 8l5-5 5 5" /><path d="M5 14v7h14v-7" /></>,
  arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v6l4 2" /></>,
  spark: <><path d="m12 2 1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8Z" /></>,
  command: <><path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3Z" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V4H4v12h4" /></>,
  download: <><path d="M12 3v13M7 11l5 5 5-5" /><path d="M5 20h14" /></>,
  shield: <><path d="m12 3 8 4v5c0 4.8-3.2 7.7-8 9-4.8-1.3-8-4.2-8-9V7Z" /><path d="M9 12h6" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
  code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Button({ children, kind = "secondary", icon, onClick }: { children: ReactNode; kind?: "primary" | "secondary" | "ghost"; icon?: IconName; onClick?: () => void }) {
  return <button className={`button button-${kind}`} onClick={onClick}>{icon && <Icon name={icon} size={16} />}<span>{children}</span></button>;
}

function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "active" | "success" | "waiting" | "neutral" | "warning" }) {
  return <span className={`badge badge-${tone}`}><span className="badge-dot" />{children}</span>;
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>;
}

const nav: { label: Page; icon: IconName }[] = [
  { label: "Dashboard", icon: "grid" },
  { label: "Projects", icon: "folder" },
  { label: "Agent Team", icon: "agents" },
  { label: "Requirements", icon: "file" },
  { label: "Architecture", icon: "architecture" },
  { label: "UI/UX", icon: "layout" },
  { label: "Reviews", icon: "review" },
  { label: "Activity", icon: "activity" },
  { label: "Settings", icon: "settings" },
];

const activities = [
  ["10:46", "UI/UX Agent", "Designing student dashboard", "active"],
  ["10:45", "Architecture Agent", "Architecture approved", "success"],
  ["10:43", "Architecture Agent", "Firebase architecture selected", "success"],
  ["10:42", "Requirement Agent", "Requirements analysis completed", "success"],
] as const;

function Logo() {
  return <div className="logo"><span className="logo-mark"><span /><span /><span /></span><span>trioura</span></div>;
}

function Sidebar({ page, setPage, open, close }: { page: Page; setPage: (page: Page) => void; open: boolean; close: () => void }) {
  return <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
    <div className="sidebar-head"><Logo /><button className="icon-button sidebar-close" onClick={close} aria-label="Close navigation"><Icon name="close" /></button></div>
    <nav className="nav-list">
      <span className="nav-label">Workspace</span>
      {nav.map((item) => <button key={item.label} className={`nav-item ${page === item.label ? "active" : ""}`} onClick={() => { setPage(item.label); close(); }}><Icon name={item.icon} /><span>{item.label}</span>{item.label === "Agent Team" && <span className="live-pip" />}</button>)}
    </nav>
    <div className="sidebar-bottom">
      <div className="system-status"><span className="status-orb" /><div><strong>AI system status</strong><span>All systems operational</span></div></div>
      <div className="user-card"><div className="avatar">JD</div><div><strong>Jordan Davis</strong><span>Hackathon Project</span></div><span className="kebab">···</span></div>
    </div>
  </aside>;
}

function Topbar({ setPage, toggleMenu }: { setPage: (p: Page) => void; toggleMenu: () => void }) {
  return <header className="topbar">
    <button className="icon-button menu-button" onClick={toggleMenu} aria-label="Open navigation"><Icon name="menu" /></button>
    <div className="project-crumb"><span>Current project</span><strong>Student Attendance Management System</strong></div>
    <Badge tone="active">AI Team Working</Badge>
    <div className="top-actions">
      <Button kind="ghost" icon="plus" onClick={() => setPage("Projects")}>New Project</Button>
      <Button kind="primary" icon="play" onClick={() => setPage("Agent Team")}>Run Team</Button>
      <Button kind="secondary" icon="export" onClick={() => setPage("Blueprint")}>Export Blueprint</Button>
    </div>
  </header>;
}

function ProgressRow({ label, value }: { label: string; value: number }) {
  return <div className="progress-row"><div><span>{label}</span><strong>{value}%</strong></div><div className="progress-track"><span style={{ width: `${value}%` }} /></div></div>;
}

function AgentMini({ role, task, status, icon, onClick }: { role: string; task: string; status: string; icon: IconName; onClick?: () => void }) {
  const tone = status === "Completed" ? "success" : status === "Waiting" ? "waiting" : "active";
  return <button className={`agent-mini ${tone}`} onClick={onClick}><span className="agent-icon"><Icon name={icon} size={20} /></span><span className="agent-copy"><small>{role}</small><strong>{task}</strong></span><Badge tone={tone}>{status}</Badge><Icon name="arrow" size={16} /></button>;
}

function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description: string; actions?: ReactNode }) {
  return <div className="page-header"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h1>{title}</h1><p>{description}</p></div>{actions && <div className="header-actions">{actions}</div>}</div>;
}

function Dashboard({ setPage }: { setPage: (p: Page) => void }) {
  return <div className="page">
    <PageHeader eyebrow="Project workspace / SAMS-01" title="Student Attendance Management System" description="Your AI engineering team is transforming your idea into an implementation-ready product." actions={<><Button icon="file" onClick={() => setPage("Blueprint")}>View Blueprint</Button><Button kind="primary" icon="play" onClick={() => setPage("Agent Team")}>Run AI Team</Button></>} />
    <div className="metric-grid">
      <Card className="health-card">
        <div className="card-title-row"><div><span className="overline">Overall project score</span><div className="score"><strong>92</strong><span>/100</span></div></div><div className="score-ring"><svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" /><circle className="ring-fill" cx="22" cy="22" r="18" /></svg><Icon name="spark" /></div></div>
        <div className="approval-line"><Icon name="check" size={15} /><span>Architecture approved</span><small>Updated 2 min ago</small></div>
        <div className="progress-list"><ProgressRow label="Requirements" value={100} /><ProgressRow label="Architecture" value={100} /><ProgressRow label="UI/UX" value={85} /><ProgressRow label="Review" value={60} /></div>
      </Card>
      <Card className="team-summary">
        <div className="card-heading"><div><span className="overline">AI team status</span><h2>4 agents collaborating</h2></div><Badge tone="active">Live</Badge></div>
        <div className="team-stack">
          <AgentMini role="REQ-01 · COMPLETED" task="Requirements defined" status="Completed" icon="file" onClick={() => setPage("Requirements")} />
          <AgentMini role="ARC-02 · COMPLETED" task="System architecture ready" status="Completed" icon="architecture" onClick={() => setPage("Architecture")} />
          <AgentMini role="UX-03 · WORKING" task="Designing experience" status="Active" icon="layout" onClick={() => setPage("UI/UX")} />
        </div>
      </Card>
    </div>
    <div className="dashboard-lower">
      <Card className="flow-card">
        <div className="card-heading"><div><span className="overline">Agent orchestration</span><h2>Engineering pipeline</h2></div><Button kind="ghost" onClick={() => setPage("Agent Team")}>Open live view <Icon name="arrow" size={15} /></Button></div>
        <div className="pipeline">
          {[
            ["Idea", "spark", "done"], ["Requirements", "file", "done"], ["Architecture", "architecture", "done"], ["UI/UX", "layout", "active"], ["Review", "review", ""], ["Blueprint", "code", ""],
          ].map(([label, icon, state], index) => <div className="pipeline-part" key={label}><div className={`pipeline-node ${state}`}><Icon name={icon as IconName} /></div><span>{label}</span>{index < 5 && <div className={`pipeline-line ${index < 3 ? "done" : ""}`}><span /></div>}</div>)}
        </div>
      </Card>
      <Card className="activity-card">
        <div className="card-heading"><div><span className="overline">Live team activity</span><h2>Latest events</h2></div><span className="pulse-label"><i /> Live</span></div>
        <ActivityList compact />
        <button className="text-link" onClick={() => setPage("Activity")}>View full activity <Icon name="arrow" size={14} /></button>
      </Card>
    </div>
  </div>;
}

function ActivityList({ compact = false }: { compact?: boolean }) {
  const list = compact ? activities.slice(0, 3) : [...activities, ["10:40", "Orchestrator", "Created implementation plan", "success"], ["10:38", "Orchestrator", "Project initialized", "success"]] as const;
  return <div className="activity-list">{list.map(([time, agent, action, status]) => <div className="activity-item" key={`${time}-${action}`}><span className={`event-dot ${status}`}><Icon name={status === "success" ? "check" : "activity"} size={11} /></span><div><strong>{action}</strong><span>{agent}</span></div><time>{time}</time></div>)}</div>;
}

function NewProject({ onInitialize }: { onInitialize: () => void }) {
  const [idea, setIdea] = useState("Build a student attendance management web application with student login, teacher login, dashboards, subject-wise attendance and attendance percentage.");
  return <div className="page creation-page">
    <div className="creation-glow" />
    <div className="creation-shell">
      <div className="creation-icon"><Icon name="spark" size={25} /></div>
      <span className="eyebrow">Start a new project</span>
      <h1>What do you want to build?</h1>
      <p>Share your idea. Your autonomous engineering team will turn it into a validated, implementation-ready blueprint.</p>
      <Card className="idea-card">
        <label htmlFor="idea">Describe your software idea</label>
        <textarea id="idea" value={idea} onChange={(event) => setIdea(event.target.value)} />
        <div className="idea-footer"><span><Icon name="spark" size={15} /> Trioura will plan before it builds</span><Button kind="primary" icon="arrow" onClick={onInitialize}>Initialize Trioura</Button></div>
      </Card>
      <div className="auto-grid">
        {["Understand your idea", "Generate requirements", "Design architecture", "Design user experience", "Review the solution"].map((item) => <div key={item}><span><Icon name="check" size={13} /></span>{item}</div>)}
      </div>
    </div>
  </div>;
}

const agentNodes = [
  { name: "Requirement Agent", short: "REQ-01", task: "Define product requirements", status: "Completed", icon: "file" as IconName, page: "Requirements" as Page },
  { name: "Architecture Agent", short: "ARC-02", task: "Design system architecture", status: "Completed", icon: "architecture" as IconName, page: "Architecture" as Page },
  { name: "UI/UX Agent", short: "UX-03", task: "Design application experience", status: "Active", icon: "layout" as IconName, page: "UI/UX" as Page },
  { name: "Review Agent", short: "REV-04", task: "Validate engineering plan", status: "Waiting", icon: "review" as IconName, page: "Reviews" as Page },
];

function AgentTeam({ setPage }: { setPage: (p: Page) => void }) {
  return <div className="page team-page">
    <PageHeader eyebrow="AI team live" title="Agents are building your blueprint" description="Five specialized agents are coordinating decisions, passing context, and validating each other's work." actions={<><Badge tone="active">4 tasks in motion</Badge><Button icon="clock" onClick={() => setPage("Activity")}>View activity</Button></>} />
    <div className="live-layout">
      <Card className="constellation">
        <div className="constellation-head"><span className="mono-label">LIVE ORCHESTRATION GRAPH</span><span className="pulse-label"><i /> Processing</span></div>
        <div className="live-canvas">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="data-pulse pulse-a" /><div className="data-pulse pulse-b" /><div className="data-pulse pulse-c" />
          <button className="central-agent" onClick={() => setPage("Orchestrator")}><span className="central-halo" /><span className="agent-icon large"><Icon name="command" size={27} /></span><small>ORC-00 · ACTIVE</small><strong>Orchestrator</strong><span>AI Engineering Manager</span></button>
          {agentNodes.map((agent, index) => <button className={`orbit-agent orbit-agent-${index + 1}`} key={agent.name} onClick={() => setPage(agent.page)}><span className="agent-icon"><Icon name={agent.icon} /></span><div><small>{agent.short}</small><strong>{agent.name}</strong><span>{agent.task}</span></div><Badge tone={agent.status === "Completed" ? "success" : agent.status === "Waiting" ? "waiting" : "active"}>{agent.status}</Badge></button>)}
          <div className="idea-input"><Icon name="spark" size={15} /><span>USER IDEA</span></div>
          <button className="ready-output" onClick={() => setPage("Blueprint")}><span><strong>92/100</strong><small>READY TO BUILD</small></span><Icon name="arrow" /></button>
        </div>
        <div className="live-caption"><Icon name="spark" size={16} /><span><strong>Orchestrator decision:</strong> UI/UX can proceed using approved architecture. Review begins when design reaches 100%.</span></div>
      </Card>
      <Card className="live-activity">
        <div className="card-heading"><div><span className="overline">Live team activity</span><h2>Agent handoffs</h2></div><span className="pulse-label"><i /> Live</span></div>
        <ActivityList />
        <div className="next-task"><span className="mono-label">NEXT HANDOFF</span><div><span className="agent-icon"><Icon name="layout" /></span><Icon name="arrow" size={15} /><span className="agent-icon"><Icon name="review" /></span><div><strong>UX → Review</strong><span>After design validation</span></div></div></div>
      </Card>
    </div>
  </div>;
}

function Orchestrator({ setPage }: { setPage: (p: Page) => void }) {
  const plan = [
    ["Analyze requirements", "done"], ["Assign Requirement Agent", "done"], ["Assign Architecture Agent", "done"], ["Assign UI/UX Agent", "active"], ["Run Review Agent", ""], ["Generate final blueprint", ""],
  ];
  return <div className="page">
    <PageHeader eyebrow="ORC-00 · ACTIVE" title="Orchestrator" description="AI Engineering Manager coordinating the complete delivery plan." actions={<Button icon="agents" onClick={() => setPage("Agent Team")}>Open team graph</Button>} />
    <div className="two-thirds-grid">
      <div className="stack">
        <Card className="objective-card"><span className="overline">Current objective</span><h2>Build a student attendance management system.</h2><p>Convert the approved product idea into a secure, scalable MVP blueprint for implementation.</p><div className="objective-meta"><Badge tone="active">In progress</Badge><span>4 agents · 12 tasks · 2 dependencies</span></div></Card>
        <Card><div className="card-heading"><div><span className="overline">Current plan</span><h2>Execution sequence</h2></div><span className="mono-label">4 / 6 STEPS</span></div><div className="plan-list">{plan.map(([label, state], index) => <div className={`plan-item ${state}`} key={label}><span>{state === "done" ? <Icon name="check" size={14} /> : index === 3 ? <Icon name="arrow" size={14} /> : index + 1}</span><strong>{label}</strong><small>{state === "done" ? "Completed" : state === "active" ? "In progress" : "Queued"}</small></div>)}</div></Card>
      </div>
      <div className="stack">
        <Card className="decision-card"><div className="decision-icon"><Icon name="command" /></div><span className="overline">Orchestrator decision</span><blockquote>“Architecture depends on approved requirements. UI/UX can begin using the current requirements. Review will start after architecture and UI/UX are complete.”</blockquote><div className="decision-footer"><span>Decision confidence</span><strong>96%</strong></div></Card>
        <Card><div className="card-heading"><div><span className="overline">Active task</span><h2>Design application experience</h2></div><Badge tone="active">High priority</Badge></div><div className="detail-table">{[["Agent", "UI/UX Agent"], ["Status", "In progress · 85%"], ["Depends on", "Approved architecture"], ["Output", "7 screens + design specs"]].map(([a,b]) => <div key={a}><span>{a}</span><strong>{b}</strong></div>)}</div></Card>
      </div>
    </div>
  </div>;
}

const reqTabs = ["Overview", "User Stories", "Functional Requirements", "Non-Functional", "Acceptance Criteria", "Open Questions"];
function Requirements() {
  const [tab, setTab] = useState("Overview");
  return <div className="page">
    <PageHeader eyebrow="REQ-01 · COMPLETED" title="Product Requirements" description="Structured requirements generated from the product idea and validated against the project objective." actions={<><Badge tone="success">94% confidence</Badge><Button icon="export">Export PRD</Button></>} />
    <div className="tabs">{reqTabs.map((item) => <button className={tab === item ? "active" : ""} onClick={() => setTab(item)} key={item}>{item}</button>)}</div>
    <div className="requirements-grid">
      <div className="stack">
        <Card><div className="card-heading"><div><span className="overline">Primary story · US-04</span><h2>Subject attendance visibility</h2></div><Badge tone="success">Validated</Badge></div><blockquote className="user-story">“As a student, I want to view my attendance by subject so that I can monitor my attendance percentage.”</blockquote><span className="section-label">Acceptance criteria</span><div className="criteria-list">{["Student can log in securely", "Student can view enrolled subjects", "Student can view attendance percentage", "Student can view attendance history"].map((item) => <div key={item}><span><Icon name="check" size={13} /></span>{item}</div>)}</div></Card>
        <Card><div className="card-heading"><div><span className="overline">Functional scope</span><h2>Core capabilities</h2></div><span className="count">12 requirements</span></div><div className="requirement-rows">{["Role-based authentication and routing", "Subject and enrollment management", "Daily attendance recording", "Attendance analytics and reports"].map((item, index) => <div key={item}><span className="req-id">FR-{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><Badge tone="success">Required</Badge></div>)}</div></Card>
      </div>
      <div className="stack">
        <Card><span className="overline">User roles</span><div className="role-list">{[["Student", "View subjects and attendance"], ["Teacher", "Record and manage attendance"], ["Administrator", "Manage users and reporting"]].map(([role, desc], i) => <div key={role}><span className={`role-avatar role-${i}`}>{role[0]}</span><div><strong>{role}</strong><span>{desc}</span></div></div>)}</div></Card>
        <Card className="confidence-card"><span className="overline">Requirement confidence</span><div className="confidence-value"><strong>94%</strong><span>High confidence</span></div><div className="progress-track"><span style={{ width: "94%" }} /></div><p>All critical flows have testable acceptance criteria. Two low-priority questions remain open.</p></Card>
        <Card><span className="overline">Open questions</span><div className="question-row"><span>01</span><p>Should teachers be able to edit attendance after 24 hours?</p></div><div className="question-row"><span>02</span><p>Is CSV export required for the initial MVP?</p></div></Card>
      </div>
    </div>
  </div>;
}

function Architecture() {
  return <div className="page">
    <PageHeader eyebrow="ARC-02 · APPROVED" title="System Architecture" description="A scalable Firebase architecture optimized for rapid MVP delivery and low operational overhead." actions={<><Badge tone="success">Architecture approved</Badge><Button icon="export">Export diagram</Button></>} />
    <div className="architecture-layout">
      <Card className="architecture-canvas">
        <div className="diagram-title"><span className="mono-label">SYSTEM CONTEXT · V1.0</span><div><span /><span /><span /></div></div>
        <div className="architecture-map">
          <div className="arch-node web"><Icon name="layout" /><div><small>CLIENT</small><strong>Web Application</strong><span>React + Vite</span></div></div>
          <div className="arch-connector vertical one" />
          <div className="role-nodes">{["Student", "Teacher", "Admin"].map((role) => <div className="arch-node compact" key={role}><span className="tiny-avatar">{role[0]}</span><strong>{role}</strong></div>)}</div>
          <div className="arch-connector vertical two" />
          <div className="arch-node auth"><Icon name="shield" /><div><small>IDENTITY</small><strong>Authentication</strong><span>Role-based access</span></div></div>
          <div className="arch-connector vertical three" />
          <div className="arch-node app"><Icon name="code" /><div><small>BUSINESS LOGIC</small><strong>Application Layer</strong><span>Services + state</span></div></div>
          <div className="arch-connector vertical four" />
          <div className="firebase-row"><div className="arch-node"><Icon name="database" /><div><small>DATA</small><strong>Cloud Firestore</strong></div></div><div className="arch-node"><Icon name="shield" /><div><small>IDENTITY</small><strong>Firebase Auth</strong></div></div></div>
        </div>
      </Card>
      <div className="stack">
        <Card><span className="overline">Technology decisions</span><div className="tech-list">{[["Frontend", "React + Vite", "layout"], ["Authentication", "Firebase Auth", "shield"], ["Database", "Cloud Firestore", "database"], ["Deployment", "Firebase Hosting", "export"], ["Security", "Role-based access", "review"]].map(([label, value, icon]) => <div key={label}><span className="agent-icon"><Icon name={icon as IconName} /></span><div><small>{label}</small><strong>{value}</strong></div></div>)}</div></Card>
        <Card className="why-card"><span className="overline">Why this stack?</span><p>Fast to build, scalable for the MVP, low operational overhead, and ideal for a compelling hackathon demonstration.</p><div className="tag-list"><span>Rapid MVP</span><span>Serverless</span><span>Scalable</span></div></Card>
      </div>
    </div>
  </div>;
}

function UIUX() {
  const [screen, setScreen] = useState("Student Dashboard");
  const screens = ["Login", "Student Dashboard", "Teacher Dashboard", "Subjects", "Attendance", "Reports", "Profile"];
  return <div className="page ui-page">
    <PageHeader eyebrow="UX-03 · IN PROGRESS" title="UI/UX Workspace" description="Experience architecture, screen flows, and interaction specifications for the attendance platform." actions={<><Badge tone="active">85% complete</Badge><Button icon="play">Preview flow</Button></>} />
    <div className="design-workspace">
      <Card className="screen-panel"><span className="overline">Screens · 7</span>{screens.map((item, index) => <button key={item} className={screen === item ? "active" : ""} onClick={() => setScreen(item)}><span>{String(index + 1).padStart(2, "0")}</span>{item}{screen === item && <i />}</button>)}</Card>
      <Card className="preview-panel">
        <div className="preview-toolbar"><div><span /><span /><span /></div><span>{screen} · Desktop</span><strong>1440 × 1024</strong></div>
        <div className="mock-screen">
          <div className="mock-sidebar"><div className="mock-logo" />{[1,2,3,4,5].map((x) => <div key={x} className={x === 1 ? "active" : ""}><span /> <i /></div>)}</div>
          <div className="mock-content"><div className="mock-top"><div><small>Welcome back</small><strong>Student dashboard</strong></div><div className="mock-avatar" /></div><div className="mock-hero"><div><small>OVERALL ATTENDANCE</small><strong>87.4%</strong><p>You're on track this semester.</p></div><div className="mock-chart"><span /></div></div><div className="mock-stats">{[["6", "Subjects"], ["124", "Classes"], ["108", "Attended"]].map(([n,l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div><div className="mock-table"><span /><span /><span /><span /></div></div>
        </div>
      </Card>
      <Card className="spec-panel"><span className="overline">Design specifications</span>{[["Layout", "12-col responsive grid", "grid"], ["Components", "Cards, tables, navigation", "layout"], ["Interactions", "Optimistic + contextual", "play"], ["Responsive", "Desktop, tablet, mobile", "architecture"], ["Accessibility", "WCAG AA contrast", "review"]].map(([label, value, icon]) => <div className="spec-row" key={label}><span className="agent-icon"><Icon name={icon as IconName} /></span><div><strong>{label}</strong><span>{value}</span></div><Icon name="arrow" size={14} /></div>)}<div className="color-spec"><span className="overline">Tokens</span><div><i /><i /><i /><i /></div></div></Card>
    </div>
  </div>;
}

function Reviews({ setPage }: { setPage: (p: Page) => void }) {
  const scores = [["Requirements", 95], ["Architecture", 94], ["Security", 88], ["UX", 91], ["Implementation", 93]] as const;
  return <div className="page review-page">
    <PageHeader eyebrow="REV-04 · COMPLETE" title="Engineering Review" description="Independent validation of the complete engineering plan across five quality dimensions." actions={<><Button onClick={() => setPage("Requirements")}>Request Revision</Button><Button kind="primary" icon="check" onClick={() => setPage("Blueprint")}>Approve Blueprint</Button></>} />
    <div className="review-layout">
      <Card className="review-score-card"><div className="approved-stamp"><Icon name="check" size={20} /> Approved</div><span className="overline">Engineering score</span><div className="giant-score"><strong>92</strong><span>/ 100</span></div><div className="score-summary"><Icon name="spark" /><p>Solution is suitable for MVP implementation.</p></div><div className="score-bars">{scores.map(([label, value]) => <div key={label}><span>{label}</span><div className="progress-track"><i style={{ width: `${value}%` }} /></div><strong>{value}</strong></div>)}</div></Card>
      <div className="stack">
        <Card className="critical-card"><div className="card-heading"><div><span className="overline">Critical issues</span><h2>None detected</h2></div><span className="success-shield"><Icon name="shield" /></span></div><p>No blocking security, architecture, or implementation risks were found.</p></Card>
        <Card><span className="overline">Recommendations</span><div className="recommendations">{["Add audit logging for administrative actions", "Add attendance export for reports", "Improve granular teacher permissions"].map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p><Badge tone={index === 0 ? "warning" : "neutral"}>{index === 0 ? "Medium" : "Low"}</Badge></div>)}</div></Card>
        <Card className="agent-quote"><div className="agent-icon"><Icon name="review" /></div><div><span className="overline">Review Agent</span><blockquote>“The solution demonstrates strong requirement coverage, a pragmatic architecture, and a clear path to implementation.”</blockquote></div></Card>
      </div>
    </div>
  </div>;
}

function Blueprint() {
  const sections = ["Project Overview", "Requirements", "Architecture", "Database", "API", "Authentication", "UI/UX", "Security", "Testing", "Deployment"];
  const phases = [["01", "Foundation", "Project setup and data model"], ["02", "Authentication", "Roles and access control"], ["03", "Attendance", "Core tracking workflows"], ["04", "Dashboard", "Analytics and reporting"], ["05", "Testing", "QA and security review"], ["06", "Deployment", "Production release"]];
  return <div className="page blueprint-page">
    <PageHeader eyebrow="TRIOURA FINAL ENGINEERING BLUEPRINT" title="Ready to build" description="A complete, validated engineering specification generated by your autonomous AI team." actions={<><Button icon="copy">Copy Blueprint</Button><Button icon="download">Export JSON</Button><Button kind="primary" icon="export">Export PDF</Button></>} />
    <div className="blueprint-banner"><div><span className="agent-icon large"><Icon name="spark" /></span><div><span>Blueprint SAMS-01 · Version 1.0</span><strong>Student Attendance Management System</strong><small>Approved by Review Agent · Score 92/100</small></div></div><Badge tone="success">Implementation ready</Badge></div>
    <div className="blueprint-layout">
      <Card className="toc"><span className="overline">Blueprint sections</span>{sections.map((item, index) => <button className={index === 0 ? "active" : ""} key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</button>)}</Card>
      <div className="stack">
        <Card className="document-card"><span className="overline">01 · Project overview</span><h2>Attendance, simplified for everyone.</h2><p>A role-based web platform that enables educational institutions to record, monitor, and report student attendance with real-time visibility for students, teachers, and administrators.</p><div className="document-meta">{[["Platform", "Responsive web"], ["Team", "5 AI agents"], ["Stack", "React + Firebase"], ["Delivery", "6 phases"]].map(([a,b]) => <div key={a}><span>{a}</span><strong>{b}</strong></div>)}</div><div className="code-block"><div><span /><span /><span /><small>project.config.json</small></div><code>{`{\n  "project": "student-attendance-system",\n  "status": "implementation-ready",\n  "confidence": 0.92\n}`}</code></div></Card>
        <Card><div className="card-heading"><div><span className="overline">Implementation roadmap</span><h2>Six phases to production</h2></div><span className="mono-label">EST. 4 WEEKS</span></div><div className="roadmap">{phases.map(([num,title,desc], index) => <div key={title}><span className={`phase-num ${index === 0 ? "active" : ""}`}>{num}</span><div><strong>{title}</strong><span>{desc}</span></div>{index < phases.length - 1 && <i />}</div>)}</div></Card>
      </div>
    </div>
  </div>;
}

function Activity() {
  return <div className="page"><PageHeader eyebrow="System event stream" title="Team Activity" description="A real-time audit trail of decisions, handoffs, and deliverables across the AI engineering team." actions={<><Badge tone="active">Live updates</Badge><Button icon="export">Export log</Button></>} /><Card className="activity-table"><div className="table-head"><span>Event</span><span>Agent</span><span>Status</span><span>Timestamp</span></div>{[...activities, ["10:40", "Orchestrator", "Created implementation plan", "success"], ["10:38", "Orchestrator", "Project initialized", "success"], ["10:37", "System", "Workspace provisioned", "success"]].map(([time, agent, action, status]) => <div className="table-row" key={`${time}-${action}`}><div><span className={`event-dot ${status}`}><Icon name={status === "success" ? "check" : "activity"} size={11} /></span><strong>{action}</strong></div><span>{agent}</span><Badge tone={status === "success" ? "success" : "active"}>{status === "success" ? "Completed" : "In progress"}</Badge><time>Today, {time}</time></div>)}</Card></div>;
}

function Settings() {
  return <div className="page"><PageHeader eyebrow="Workspace preferences" title="Settings" description="Manage your project workspace, AI team behavior, and export preferences." /><div className="settings-grid">{[["Agent autonomy", "Allow agents to make low-risk decisions without approval", true], ["Live activity", "Show real-time agent events and handoffs", true], ["Review gate", "Require approval before final blueprint generation", true], ["Compact mode", "Use condensed layouts throughout the workspace", false]].map(([title, desc, checked]) => <Card className="setting-card" key={title as string}><div><strong>{title as string}</strong><span>{desc as string}</span></div><button className={`toggle ${checked ? "on" : ""}`}><i /></button></Card>)}</div></div>;
}

function App() {
  const [page, setPage] = useState<Page>("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  let content: ReactNode;
  if (page === "Dashboard") content = <Dashboard setPage={setPage} />;
  else if (page === "Projects") content = <NewProject onInitialize={() => setPage("Orchestrator")} />;
  else if (page === "Agent Team") content = <AgentTeam setPage={setPage} />;
  else if (page === "Orchestrator") content = <Orchestrator setPage={setPage} />;
  else if (page === "Requirements") content = <Requirements />;
  else if (page === "Architecture") content = <Architecture />;
  else if (page === "UI/UX") content = <UIUX />;
  else if (page === "Reviews") content = <Reviews setPage={setPage} />;
  else if (page === "Blueprint") content = <Blueprint />;
  else if (page === "Activity") content = <Activity />;
  else content = <Settings />;
  return <div className="app-shell"><Sidebar page={page} setPage={setPage} open={menuOpen} close={() => setMenuOpen(false)} />{menuOpen && <button className="mobile-overlay" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}<div className="main-shell"><Topbar setPage={setPage} toggleMenu={() => setMenuOpen(true)} /><main>{content}</main></div></div>;
}

export default App;
