import React, { useState, useMemo } from "react";

import {
  LayoutDashboard, Users, Store, Workflow, CalendarDays, Clock3, AlertTriangle,
  Settings, Search, Bell, Plus, ChevronDown, ArrowUpRight, ArrowDownRight,
  MoreHorizontal, Download, Filter, CheckCircle2, Menu, X, WandSparkles,
  CalendarCheck, BriefcaseBusiness
} from "lucide-react";

const initialEmployees = [
  { id: 1, name: "Aarav Mehta", email: "aarav@rosteriq.demo", pod: "North Pod", role: "Customer Support", brands: ["Nova Living"], status: "Active", initials: "AM", color: "blue" },
  { id: 2, name: "Priya Sharma", email: "priya@rosteriq.demo", pod: "North Pod", role: "ACC Specialist", brands: ["Nova Living", "Urban Nest"], status: "Active", initials: "PS", color: "pink" },
  { id: 3, name: "Kabir Khan", email: "kabir@rosteriq.demo", pod: "South Pod", role: "NDR Specialist", brands: ["Urban Nest"], status: "On leave", initials: "KK", color: "green" },
  { id: 4, name: "Ananya Patel", email: "ananya@rosteriq.demo", pod: "East Pod", role: "Customer Support", brands: ["Daily Dose"], status: "Active", initials: "AP", color: "orange" },
  { id: 5, name: "Rohan Das", email: "rohan@rosteriq.demo", pod: "West Pod", role: "Team Lead", brands: ["Nova Living", "Daily Dose"], status: "Active", initials: "RD", color: "purple" },
  { id: 6, name: "Sara Ali", email: "sara@rosteriq.demo", pod: "South Pod", role: "Customer Support", brands: ["Urban Nest"], status: "Active", initials: "SA", color: "teal" }
];

const nav = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Employees", icon: Users },
  { label: "Brands", icon: Store },
  { label: "Processes", icon: Workflow },
  { label: "Pods", icon: BriefcaseBusiness },
  { label: "Availability", icon: Clock3 },
  { label: "Monthly roster", icon: CalendarDays },
  { label: "Conflicts", icon: AlertTriangle }
];

const initialRoster = [
  ["Mon, 02 Nov", "Aarav Mehta", "Nova Living", "Customer Support", "Working"],
  ["Mon, 02 Nov", "Priya Sharma", "Urban Nest", "ACC", "Working"],
  ["Mon, 02 Nov", "Kabir Khan", "Urban Nest", "NDR", "Off"],
  ["Tue, 03 Nov", "Ananya Patel", "Daily Dose", "Customer Support", "Working"],
  ["Tue, 03 Nov", "Rohan Das", "Nova Living", "Customer Support", "Working"],
  ["Wed, 04 Nov", "Sara Ali", "Urban Nest", "Customer Support", "Working"]
];

function App() {
  const [active, setActive] = useState("Overview");
  const [employees, setEmployees] = useState(initialEmployees);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [notice, setNotice] = useState("");
  const [month, setMonth] = useState("November 2026");
  const [generated, setGenerated] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", pod: "North Pod", role: "Customer Support" });

  const filteredEmployees = useMemo(() => employees.filter(e =>
    [e.name, e.email, e.pod, e.role, e.brands.join(" ")].join(" ").toLowerCase().includes(search.toLowerCase())
  ), [employees, search]);

  const notify = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3200);
  };

  const addEmployee = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    const initials = form.name.trim().split(/\s+/).slice(0, 2).map(x => x[0]).join("").toUpperCase();
    setEmployees(old => [...old, {
      id: Date.now(), name: form.name.trim(), email: form.email.trim(), pod: form.pod,
      role: form.role, brands: ["Unassigned"], status: "Active", initials, color: "blue"
    }]);
    setForm({ name: "", email: "", pod: "North Pod", role: "Customer Support" });
    setShowAdd(false);
    notify("Employee added to the demo workspace.");
  };

  const generateRoster = () => {
    setGenerated(true);
    notify("Demo roster prepared. Review the coverage warnings before publishing.");
  };

  const pageTitle = active === "Overview" ? "Good afternoon" : active;
  const pageSubtitle = active === "Overview"
    ? "Here’s what’s happening across your operations today."
    : `Manage your ${active.toLowerCase()} workspace and operational settings.`;

  return (
    <div className="app-shell">
      {mobileNav && <div className="mobile-backdrop" onClick={() => setMobileNav(false)} />}
      <aside className={`sidebar ${mobileNav ? "sidebar-open" : ""}`}>
        <div className="brand-lockup">
          <div className="brand-mark"><CalendarCheck size={21} /></div>
          <div><div className="brand-name">Roster<span>IQ</span></div><div className="brand-caption">WORKFORCE OS</div></div>
          <button className="icon-btn mobile-close" onClick={() => setMobileNav(false)}><X size={18}/></button>
        </div>
        <div className="workspace-switch">
          <div className="workspace-avatar">DS</div>
          <div className="workspace-copy"><strong>DataStraw Demo</strong><span>Workspace</span></div>
          <ChevronDown size={15} className="muted-icon"/>
        </div>
        <div className="nav-label">WORKSPACE</div>
        <nav className="main-nav">
          {nav.map(({ label, icon: Icon }) => (
            <button key={label} className={`nav-item ${active === label ? "active" : ""}`} onClick={() => { setActive(label); setMobileNav(false); }}>
              <Icon size={18} strokeWidth={1.8}/><span>{label}</span>
              {label === "Conflicts" && <span className="nav-count">3</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><div className="help-icon"><WandSparkles size={17}/></div><strong>Need a hand?</strong><p>Explore the roster planning guide.</p><button onClick={() => notify("Help guide will be added in a later build.")}>View guide <ArrowUpRight size={13}/></button></div>
          <button className="nav-item settings-item" onClick={() => setActive("Settings")}><Settings size={18}/><span>Settings</span></button>
          <div className="profile-row"><div className="profile-avatar">YS</div><div className="profile-copy"><strong>Workspace Admin</strong><span>Administrator</span></div><MoreHorizontal size={18} className="muted-icon"/></div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button className="icon-btn mobile-menu" onClick={() => setMobileNav(true)}><Menu size={20}/></button>
            <div className="breadcrumb">Workspace <span>/</span> <strong>{active}</strong></div>
          </div>
          <div className="topbar-actions">
            <div className="date-chip"><CalendarDays size={15}/> <span>November 2026</span><ChevronDown size={14}/></div>
            <button className="icon-btn notification-btn" onClick={() => setActive("Conflicts")} aria-label="Notifications"><Bell size={18}/><i/></button>
            <div className="top-avatar">YS</div>
          </div>
        </header>

        <div className="content">
          <section className="page-heading">
            <div><div className="eyebrow">SATURDAY, NOVEMBER 14, 2026</div><h1>{pageTitle}{active === "Overview" ? ", Admin" : ""}<span className="heading-wave">{active === "Overview" ? " ✦" : ""}</span></h1><p>{pageSubtitle}</p></div>
            <div className="heading-actions">
              <button className="button button-secondary" onClick={() => notify("Export will be available after database setup.")}><Download size={16}/> Export</button>
              <button className="button button-primary" onClick={() => active === "Employees" ? setShowAdd(true) : setActive("Monthly roster")}><Plus size={17}/>{active === "Employees" ? "Add employee" : "Plan roster"}</button>
            </div>
          </section>

          {active === "Overview" && <>
            <section className="stats-grid">
              <StatCard label="Total employees" value={String(30 + employees.length - 6)} change="+4 this month" trend="up" icon={<Users size={19}/>} tone="blue"/>
              <StatCard label="Active brands" value="12" change="+2 this month" trend="up" icon={<Store size={19}/>} tone="violet"/>
              <StatCard label="Coverage rate" value="96.8%" change="+1.2% vs last month" trend="up" icon={<CalendarCheck size={19}/>} tone="green"/>
              <StatCard label="Open conflicts" value={generated ? "4" : "3"} change="Needs attention" trend="down" icon={<AlertTriangle size={19}/>} tone="amber"/>
            </section>
            <section className="dashboard-grid">
              <div className="panel coverage-panel">
                <div className="panel-heading"><div><h2>Coverage overview</h2><p>Daily staffing performance across all brands</p></div><button className="select-button">This week <ChevronDown size={14}/></button></div>
                <div className="coverage-summary"><div><strong>96.8%</strong><span>Overall coverage</span></div><div className="coverage-legend"><span><i className="dot green-dot"/>Covered</span><span><i className="dot amber-dot"/>At risk</span><span><i className="dot red-dot"/>Gap</span></div></div>
                <div className="chart-wrap">
                  <div className="chart-y"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>
                  <div className="chart-area">
                    <div className="grid-line line-1"/><div className="grid-line line-2"/><div className="grid-line line-3"/><div className="grid-line line-4"/><div className="grid-line line-5"/>
                    <svg className="coverage-chart" viewBox="0 0 650 180" preserveAspectRatio="none" role="img" aria-label="Coverage trend chart">
                      <defs><linearGradient id="fillBlue" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#5b7cfa" stopOpacity=".2"/><stop offset="100%" stopColor="#5b7cfa" stopOpacity="0"/></linearGradient></defs>
                      <path d="M0 48 C40 40 48 65 90 54 S145 37 185 47 S245 64 278 45 S335 38 370 49 S430 24 465 38 S520 58 555 34 S610 29 650 20 L650 180 L0 180Z" fill="url(#fillBlue)"/>
                      <path d="M0 48 C40 40 48 65 90 54 S145 37 185 47 S245 64 278 45 S335 38 370 49 S430 24 465 38 S520 58 555 34 S610 29 650 20" fill="none" stroke="#5978ed" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="465" cy="38" r="5" fill="#fff" stroke="#5978ed" strokeWidth="3"/>
                    </svg>
                    <div className="chart-x"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
                  </div>
                </div>
              </div>
              <div className="panel conflicts-panel">
                <div className="panel-heading"><div><h2>Attention required</h2><p>Issues to review before publishing</p></div><button className="text-link" onClick={() => setActive("Conflicts")}>View all <ArrowUpRight size={14}/></button></div>
                <div className="conflict-list">
                  <Conflict tone="red" title="Coverage gap detected" detail="Nova Living · Customer Support" time="Today, 09:00 AM"/>
                  <Conflict tone="amber" title="Weekly off overlap" detail="Urban Nest · NDR process" time="Tomorrow, 10:00 AM"/>
                  <Conflict tone="amber" title="Leave approval pending" detail="Daily Dose · Ananya Patel" time="Nov 16, 2026"/>
                  {generated && <Conflict tone="red" title="Unassigned shift" detail="Demo roster · Review required" time="Just now"/>}
                </div>
                <button className="panel-footer-link" onClick={() => setActive("Conflicts")}>Review all conflicts <ArrowUpRight size={14}/></button>
              </div>
            </section>
            <section className="panel roster-panel">
              <div className="panel-heading"><div><h2>Today's roster</h2><p>Quick look at employee assignments</p></div><button className="text-link" onClick={() => setActive("Monthly roster")}>Full roster <ArrowUpRight size={14}/></button></div>
              <RosterTable rows={initialRoster.slice(0, 4)}/>
            </section>
            <section className="bottom-grid">
              <div className="panel pod-panel"><div className="panel-heading"><div><h2>Pod performance</h2><p>Coverage by operational team</p></div><button className="more-btn"><MoreHorizontal size={19}/></button></div><Pod name="North Pod" lead="Rohan Das" count="8 members" value={98}/><Pod name="South Pod" lead="Sara Ali" count="7 members" value={94}/><Pod name="East Pod" lead="Ananya Patel" count="8 members" value={100}/><Pod name="West Pod" lead="Kabir Khan" count="7 members" value={91}/></div>
              <div className="panel activity-panel"><div className="panel-heading"><div><h2>Recent activity</h2><p>Latest workspace updates</p></div><button className="more-btn"><MoreHorizontal size={19}/></button></div><Activity initials="PS" color="pink" title="Priya Sharma" action="updated availability" time="12 minutes ago"/><Activity initials="RD" color="purple" title="Rohan Das" action="approved a comp-off" time="48 minutes ago"/><Activity initials="AM" color="blue" title="Aarav Mehta" action="was assigned to Nova Living" time="2 hours ago"/></div>
            </section>
          </>}

          {active === "Employees" && <section className="panel roster-panel">
            <div className="panel-heading employee-toolbar"><div><h2>Employee directory</h2><p>{employees.length} employees in this demo workspace</p></div><div className="table-actions"><div className="search-box"><Search size={16}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search employees..."/></div><button className="button button-secondary small-button" onClick={() => notify("Filters will be available in a later build.")}><Filter size={15}/> Filter</button></div></div>
            <EmployeeTable employees={filteredEmployees}/>
          </section>}

          {active === "Monthly roster" && <section className="panel roster-panel">
            <div className="panel-heading"><div><h2>Monthly roster planner</h2><p>Prepare and validate your team's schedule</p></div><select className="select-button month-select" value={month} onChange={e => setMonth(e.target.value)}><option>November 2026</option><option>December 2026</option><option>January 2027</option></select></div>
            <div className="roster-callout"><div className="callout-icon"><WandSparkles size={20}/></div><div><strong>Ready to prepare your roster?</strong><p>The demo generator creates a sample plan. Real constraint-based scheduling will be added in the next build.</p></div><button className="button button-primary" onClick={generateRoster}><WandSparkles size={16}/> Generate roster</button></div>
            {generated && <div className="success-banner"><CheckCircle2 size={17}/> Demo roster generated for {month}. Please review the sample coverage warnings.</div>}
            <RosterTable rows={initialRoster}/>
          </section>}

          {active === "Conflicts" && <section className="panel conflicts-page"><div className="panel-heading"><div><h2>Roster conflicts</h2><p>Resolve these issues before publishing your roster.</p></div><span className="issue-count">3 open issues</span></div><Conflict tone="red" title="Coverage gap detected" detail="Nova Living · Customer Support · No available assigned employee for Sunday coverage." time="High priority"/><Conflict tone="amber" title="Weekly off overlap" detail="Urban Nest · NDR · Two assigned employees have overlapping weekly offs." time="Medium priority"/><Conflict tone="amber" title="Leave approval pending" detail="Daily Dose · Ananya Patel · Availability needs manager confirmation." time="Medium priority"/></section>}

          {!["Overview","Employees","Monthly roster","Conflicts"].includes(active) && <section className="panel empty-module"><div className="empty-icon"><Workflow size={25}/></div><h2>{active} management</h2><p>This module is part of the RosterIQ build roadmap. We’ll connect it to the shared workspace data in the next development step.</p><button className="button button-primary" onClick={() => setActive("Overview")}>Back to overview</button></section>}
          <footer className="footer"><span>© 2026 RosterIQ. Built for better workforce planning.</span><span>Demo workspace <i/> All systems operational</span></footer>
        </div>
      </main>

      {showAdd && <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && setShowAdd(false)}><form className="modal" onSubmit={addEmployee}><div className="modal-heading"><div><h2>Add employee</h2><p>Add a team member to your workspace.</p></div><button type="button" className="icon-btn" onClick={() => setShowAdd(false)}><X size={19}/></button></div><label>Full name<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="e.g. Neha Verma"/></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="neha@company.com"/></label><label>Operational pod<select value={form.pod} onChange={e => setForm({...form, pod:e.target.value})}><option>North Pod</option><option>South Pod</option><option>East Pod</option><option>West Pod</option></select></label><label>Primary role<select value={form.role} onChange={e => setForm({...form, role:e.target.value})}><option>Customer Support</option><option>ACC Specialist</option><option>NDR Specialist</option><option>Team Lead</option></select></label><div className="modal-actions"><button type="button" className="button button-secondary" onClick={() => setShowAdd(false)}>Cancel</button><button type="submit" className="button button-primary"><Plus size={16}/> Add employee</button></div></form></div>}
      {notice && <div className="toast"><CheckCircle2 size={17}/>{notice}</div>}
    </div>
  );
}

function StatCard({label,value,change,trend,icon,tone}) {
  return <div className="stat-card"><div className="stat-top"><span>{label}</span><div className={`stat-icon ${tone}`}>{icon}</div></div><div className="stat-value">{value}</div><div className={`stat-change ${trend}`} >{trend === "up" ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>} {change}</div></div>;
}
function Conflict({tone,title,detail,time}) {
  return <div className="conflict-item"><div className={`conflict-icon ${tone}`}><AlertTriangle size={16}/></div><div className="conflict-copy"><strong>{title}</strong><span>{detail}</span></div><div className="conflict-time">{time}</div></div>;
}
function RosterTable({rows}) {
  return <div className="table-scroll"><table className="data-table"><thead><tr><th>DATE</th><th>EMPLOYEE</th><th>BRAND</th><th>PROCESS</th><th>STATUS</th></tr></thead><tbody>{rows.map((r,i)=><tr key={i}><td className="date-cell">{r[0]}</td><td><div className="person-cell"><div className={`person-avatar ${["blue","pink","green","orange","purple","teal"][i%6]}`}>{r[1].split(" ").map(x=>x[0]).join("")}</div><strong>{r[1]}</strong></div></td><td>{r[2]}</td><td>{r[3]}</td><td><span className={`status-pill ${r[4] === "Off" ? "off" : "working"}`}><i/>{r[4]}</span></td></tr>)}</tbody></table></div>;
}
function EmployeeTable({employees}) {
  return <div className="table-scroll"><table className="data-table"><thead><tr><th>EMPLOYEE</th><th>POD</th><th>PRIMARY ROLE</th><th>BRAND ASSIGNMENTS</th><th>STATUS</th><th></th></tr></thead><tbody>{employees.map(e=><tr key={e.id}><td><div className="person-cell"><div className={`person-avatar ${e.color}`}>{e.initials}</div><div className="person-details"><strong>{e.name}</strong><span>{e.email}</span></div></div></td><td>{e.pod}</td><td>{e.role}</td><td><div className="brand-tags">{e.brands.map(b=><span key={b}>{b}</span>)}</div></td><td><span className={`status-pill ${e.status === "Active" ? "working" : "off"}`}><i/>{e.status}</span></td><td><button className="more-btn"><MoreHorizontal size={18}/></button></td></tr>)}</tbody></table>{employees.length===0 && <div className="no-results">No employees match your search.</div>}</div>;
}
function Pod({name,lead,count,value}) {
  return <div className="pod-row"><div className="pod-info"><div className="pod-symbol"><Users size={16}/></div><div><strong>{name}</strong><span>{lead} · {count}</span></div></div><div className="pod-progress"><div className="progress-track"><i style={{width:`${value}%`}}/></div><strong>{value}%</strong></div></div>;
}
function Activity({initials,color,title,action,time}) {
  return <div className="activity-row"><div className={`person-avatar ${color}`}>{initials}</div><div className="activity-copy"><p><strong>{title}</strong> {action}</p><span>{time}</span></div></div>;
}

export default App;