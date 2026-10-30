import {
  ArrowDownRight, ArrowUpRight, Github, Mail, MapPin, Code2,
  Database, Layers3, Server, ShieldCheck, Workflow, ExternalLink, Phone
} from "lucide-react";

const skills = [
  { title: "Backend", items: ["Python", "Django", "Django REST Framework", "Flask", "RESTful APIs", "JWT Authentication", "Role-Based Access Control", "Business Logic"] },
  { title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "HTML5", "CSS3", "Bootstrap", "Responsive UI", "REST API Integration"] },
  { title: "Database", items: ["PostgreSQL", "SQL", "ORM", "Database Design"] },
  { title: "Tools & deployment", items: ["Git", "GitHub", "Redis", "Celery", "Firebase", "Swagger / OpenAPI", "Linux / Ubuntu", "Gunicorn", "Nginx", "Systemd"] }
];

const projects = [
  {
    number: "01",
    name: "HANDEL POS — Point of Sale System",
    type: "POINT OF SALE SYSTEM",
    summary: "A POS application supporting store operations, products, customers, orders, payments, expenses, reports and subscriptions.",
    details: [
      "Built DRF APIs with JWT authentication, user/role management and store-scoped data isolation between stores.",
      "Implemented credit sales, receivables, expense tracking and server-side sales / net-profit / financial reports.",
      "Developed subscription and trial plans, OTP and password-reset flows, and Firebase data import via Celery + Redis.",
      "Documented APIs with Swagger/OpenAPI and deployed on Ubuntu with Gunicorn, Nginx, systemd, Redis and Celery."
    ],
    stack: ["Python", "Django", "DRF", "PostgreSQL", "React.js", "Redis", "Celery", "JWT", "Firebase", "Swagger/OpenAPI", "Git"],
    icon: "pos"
  },
  {
    number: "02",
    name: "BiSidq / Handel ERP",
    type: "ERP · MULTI-TENANT BACKEND",
    summary: "A branch-level ERP backend using django-tenants and PostgreSQL schema-based tenancy.",
    details: [
      "Developed business APIs, ERP modules and data models with authentication, permissions and role-based access.",
      "Contributed to HRMS features: Departments, Designations, Employees and Employee Documents.",
      "Integrated backend features with a Next.js and TypeScript frontend."
    ],
    stack: ["Python", "Django", "DRF", "PostgreSQL", "django-tenants", "JWT", "Redis", "Channels", "Next.js", "TypeScript"],
    icon: "erp"
  },
  {
    number: "03",
    name: "E-Commerce Website & CRM Frontend",
    type: "FRONTEND DEVELOPMENT",
    summary: "Responsive e-commerce and CRM interfaces built with reusable components and REST API integration.",
    details: [
      "Built e-commerce UI with reusable React components, product listing/details, forms and navigation integrated with REST APIs.",
      "Developed CRM dashboards, tables, forms and CRUD interfaces with Redux state management and API integration."
    ],
    stack: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "HTML5", "CSS3", "Bootstrap"],
    icon: "web"
  }
];

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{note && <p>{note}</p>}</div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="wordmark" href="#home" aria-label="Rihan Naseer home">RIHAN NASEER<span>.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a></div>
        <a className="nav-cta" href="#contact">Contact <ArrowUpRight size={15} /></a>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> PYTHON FULL STACK DEVELOPER</div>
          <p className="hero-kicker">PYTHON · DJANGO · REACT · NEXT.JS</p>
          <h1>Building web apps<br />with <span>reliable code.</span></h1>
          <p className="hero-description">I&apos;m Rihan Naseer, a Python Full Stack Developer with hands-on experience building REST APIs and web applications using Python, Django, Django REST Framework, React.js, Next.js, TypeScript and PostgreSQL.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my projects <ArrowDownRight size={17} /></a><a className="button button-secondary" href="mailto:rihannaseer369@gmail.com"><Mail size={16} /> Email me</a></div>
          <div className="hero-socials"><a href="https://github.com/rihannaseer85-tech" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={12} /></a><span className="social-divider" /><span><MapPin size={16} /> Kannur, Kerala, India</span></div>
        </div>
        <div className="hero-visual" aria-label="Developer code illustration">
          <div className="visual-grid" />
          <div className="code-window">
            <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>developer.py</span><span className="window-lock">●</span></div>
            <div className="code-body">
              <p><span className="code-muted">01</span> <span className="code-purple">class</span> <span className="code-yellow">Developer</span>:</p>
              <p><span className="code-muted">02</span> &nbsp; stack = [</p>
              <p><span className="code-muted">03</span> &nbsp;&nbsp; <span className="code-green">&quot;Python / Django&quot;</span>,</p>
              <p><span className="code-muted">04</span> &nbsp;&nbsp; <span className="code-green">&quot;React / Next.js&quot;</span>,</p>
              <p><span className="code-muted">05</span> &nbsp;&nbsp; <span className="code-green">&quot;PostgreSQL&quot;</span></p>
              <p><span className="code-muted">06</span> &nbsp; ]</p>
              <p className="code-gap"><span className="code-muted">07</span> <span className="code-purple">def</span> <span className="code-blue">build</span>(self):</p>
              <p><span className="code-muted">08</span> &nbsp; <span className="code-purple">return</span> <span className="code-green">&quot;APIs + web apps&quot;</span></p>
              <p className="cursor-line"><span className="code-muted">09</span> <span className="cursor" /></p>
            </div>
          </div>
          <div className="float-card float-card-top"><span className="float-icon"><Server size={17} /></span><div><strong>Backend APIs</strong><small>Django REST Framework</small></div></div>
          <div className="float-card float-card-bottom"><span className="float-icon purple"><Code2 size={17} /></span><div><strong>Full stack</strong><small>Frontend + backend</small></div></div>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO DISCOVER</a>
      </section>

      <section className="proof-strip"><div className="wrap proof-inner"><div><span className="proof-number">01</span><span>REST API development</span></div><div><span className="proof-number">02</span><span>POS & ERP systems</span></div><div><span className="proof-number">03</span><span>Frontend integration</span></div><div><span className="proof-number">04</span><span>Linux deployment</span></div></div></section>

      <section className="section wrap about-section" id="about">
        <SectionHeading eyebrow="PROFILE" title="Full stack development, end to end." note="Backend systems, frontend interfaces and integrations for real business applications." />
        <div className="about-grid">
          <div className="about-lead"><span className="big-quote">“</span><p>Building REST APIs and web applications for POS, ERP, CRM and e-commerce workflows.</p></div>
          <div className="about-content">
            <p>I have hands-on experience with Python, Django, Django REST Framework, React.js, Next.js, TypeScript and PostgreSQL. My project work includes multi-tenant architecture, JWT authentication, role-based access, Redis, Celery, Swagger/OpenAPI and Linux server deployment.</p>
            <p>I have also developed reusable frontend components, CRUD interfaces, forms and API integrations, working across backend data models and responsive user interfaces.</p>
            <div className="about-tags"><span><ShieldCheck size={15} /> JWT & role-based access</span><span><Workflow size={15} /> REST API integration</span><span><Layers3 size={15} /> Multi-tenant systems</span></div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills"><div className="wrap"><SectionHeading eyebrow="TECHNICAL SKILLS" title="Tools I work with." note="Technologies and tools listed in my resume." /><div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-index">0{index + 1}</span>{index === 0 ? <Server /> : index === 1 ? <Code2 /> : index === 2 ? <Database /> : <Workflow />}</div><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

      <section className="section wrap projects-section" id="projects">
        <SectionHeading eyebrow="PROJECTS" title="Selected project work." note="Projects and contributions from my resume." />
        <div className="project-list">{projects.map(project => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p className="project-summary">{project.summary}</p><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div><div className="project-symbol">{project.icon === "pos" ? <Layers3 /> : project.icon === "erp" ? <Database /> : <Code2 />}<span>PROJECT<br />{project.number}</span></div></article>)}</div>
        
      </section>

      <section className="section experience-section" id="experience"><div className="wrap"><SectionHeading eyebrow="PROFESSIONAL EXPERIENCE" title="Experience & education." note="As listed in my resume." /><div className="timeline">
        <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta"><span>JUNE 2026 — AUGUST 2026</span><span>3 MONTHS</span></div><h3>Full Stack Developer</h3><p className="timeline-company">Teclif Infotech</p><p>Built and integrated REST APIs with frontend apps using Python, Django, DRF, React.js, Next.js and TypeScript. Developed POS and ERP backend modules with Django ORM and PostgreSQL, implemented authentication and CRUD workflows, used Redis and Celery, documented APIs with Swagger/OpenAPI, and assisted with Linux server deployment.</p></article>
        <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta"><span>27 AUG 2025 — 11 JUL 2026</span><span>10+ MONTHS</span></div><h3>Software Developer Intern</h3><p className="timeline-company">Upcode Software Labs L.L.P</p><p>Developed and maintained web application features with Python, Django, REST APIs, React.js, JavaScript, HTML, CSS and Bootstrap. Built reusable frontend components, integrated backend APIs, implemented CRUD interfaces and authentication flows, worked with relational databases and backend data models, and contributed to testing and issue resolution using Git/GitHub.</p></article>
        <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta"><span>EDUCATION</span><span>BCA</span></div><h3>Bachelor of Computer Applications (BCA)</h3><p className="timeline-company">Jamia Hamdard University, Delhi</p></article>
      </div></div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><span className="eyebrow">CONTACT</span><h2>Let&apos;s talk about<br /><span>your next project.</span></h2><p>Python Full Stack Developer · Kannur, Kerala, India</p><div className="contact-actions"><a className="button button-light" href="mailto:rihannaseer369@gmail.com"><Mail size={17} /> rihannaseer369@gmail.com</a><a className="button button-outline-light" href="tel:+919755557556"><Phone size={16} /> +91 9755557556</a></div><div className="contact-details"><a href="https://github.com/rihannaseer85-tech" target="_blank" rel="noreferrer"><Github size={16} /> github.com/rihannaseer85-tech</a></div></div></section>

      <footer className="footer wrap"><a className="wordmark" href="#home">RN<span>.</span></a><span>Rihan Naseer · Python Full Stack Developer</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
