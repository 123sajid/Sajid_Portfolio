
import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  ExternalLink,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";
import "./styles.css";

const PROFILE = {
  name: "Sajid Mujibur Rehman",
  role: "AI/ML Engineer",
  location: "Dubai, United Arab Emirates",
  email: "sajidmujiburrehman@gmail.com",
  linkedin: "https://www.linkedin.com/in/sajid098",
  github: "https://github.com/123sajid",
  cv: `${import.meta.env.BASE_URL}Sajid Resume.pdf`,
};

const skills = [
  {
    title: "Machine Learning",
    items: [
      "Classification",
      "Model evaluation",
      "Precision, recall & F1-score",
      "Confusion matrix",
    ],
  },
  {
    title: "Data & Analysis",
    items: [
      "Python",
      "Data preprocessing",
      "Exploratory data analysis",
      "Data visualization",
    ],
  },
  {
    title: "Research Methods",
    items: [
      "Causal inference",
      "Structural causal models",
      "Counterfactual analysis",
      "SEM concepts & EM algorithm",
    ],
  },
];

const experience = [
  {
    role: "Student Researcher",
    organization: "M.S. Ramaiah University of Applied Sciences",
    date: "Apr 2025 – Oct 2025",
    location: "Bengaluru, India",
    points: [
      "Developed a causal analysis framework to investigate relationships between building-construction phases and sustainability outcomes using Pearl’s causal inference framework, Graphical Causal Models (GCMs), and Structural Causal Models (SCMs).",
      "Analyzed survey data from 418 building-construction stakeholders across 56 ecological, economic, and social sustainability indicators.",
      "Applied Structural Equation Modeling (SEM) concepts and the Expectation-Maximization (EM) algorithm to estimate latent-variable values and support model development.",
      "Used do-calculus interventions and counterfactual analysis to investigate causal effects across project phases.",
      "Estimated phase-specific sustainability effects: Construction 0.9787, Operation 0.9104, and Demolition 0.8905.",
    ],
    tags: [
      "Causal Inference",
      "SCM / GCM",
      "Counterfactual Analysis",
      "Research",
    ],
  },
  {
    role: "Machine Learning Engineer",
    organization: "EduPhoniex",
    date: "Feb 2025 – May 2025",
    location: "Greater Bengaluru Area",
    points: [
      "Contributed to a classification system for a diagnostic application.",
      "Designed and implemented data-preprocessing pipelines to improve data quality and prepare data for machine-learning workflows.",
      "Evaluated classification performance using precision, recall, F1-score, and confusion matrices to examine predictive performance and classification errors.",
    ],
    tags: [
      "Machine Learning",
      "Classification",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
];

// Replace the empty github and demo values with your actual URLs.
// Do not add a URL unless the repository or live demo exists.
const projects = [
  {
    number: "01",
    category: "Applied AI · Full-Stack Application",
    title: "AutoDash AI — Automatic Dashboard Generator",
    summary:
      "An AI-powered business analytics application designed to turn uploaded datasets into interactive dashboards and natural-language insights.",
    bullets: [
      "Frontend: React and Vite; backend: FastAPI.",
      "Data processing and visualization with Pandas, NumPy, and Plotly.",
      "Local language-model integration with Ollama; PostgreSQL and Docker are part of the application stack.",
    ],
    tags: [
      "React",
      "FastAPI",
      "Pandas",
      "Plotly",
      "Ollama",
      "Docker",
    ],
    status: "Docker-based application",
    github: "",
    demo: "",
  },
  {
    number: "02",
    category: "Computer Vision · Deep Learning",
    title: "Food-101 Image Classification with PyTorch",
    summary:
      "A computer-vision experiment using a Vision Transformer to classify food images, with an emphasis on preprocessing, validation, and comparing full-precision and mixed-precision runs.",
    bullets: [
      "Dataset: Food-101 — 101 food categories.",
      "Compared FP32 and automatic mixed precision (AMP) on a Tesla T4 environment.",
      "Recorded FP32: 93.72 seconds, 58.92% accuracy; AMP: 97.03 seconds, 59.15% accuracy.",
    ],
    tags: [
      "PyTorch",
      "Vision Transformer",
      "Computer Vision",
      "AMP",
    ],
    status: "Computer vision experiment",
    github: "",
    demo: "",
  },
  {
    number: "03",
    category: "Causal Inference · Research",
    title: "Causal Analysis of Construction Sustainability",
    summary:
      "Research framework exploring how construction project phases relate to sustainability outcomes across ecological, economic, and social indicators.",
    bullets: [
      "Survey data from 418 stakeholders and 56 sustainability indicators.",
      "Used causal models, SEM concepts, EM-based latent-variable estimation, interventions, and counterfactual analysis.",
      "Compared estimated effects across construction, operation, and demolition phases.",
    ],
    tags: [
      "Causal Inference",
      "SCM / GCM",
      "SEM",
      "Counterfactuals",
    ],
    status: "Academic research",
    github: "",
    demo: "",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          aria-label={`View ${project.title} GitHub repository`}
        >
          <Github size={15} />
          GitHub Repository
          <ArrowUpRight size={14} />
        </a>
      ) : (
        <span
          className="project-link project-link-disabled"
          aria-disabled="true"
          title="Add the repository URL in the projects array"
        >
          <Github size={15} />
          Repository link coming soon
        </span>
      )}

      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          aria-label={`Open ${project.title} live demo`}
        >
          <ExternalLink size={15} />
          Live Demo
          <ArrowUpRight size={14} />
        </a>
      ) : (
        <span
          className="project-link project-link-disabled"
          aria-disabled="true"
          title="Add the deployed demo URL in the projects array"
        >
          <ExternalLink size={15} />
          Live demo coming soon
        </span>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const nav = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Research", "#research"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a
          className="wordmark"
          href="#home"
          aria-label="Go to homepage"
        >
          <span className="wordmark-mark">S</span>
          <span>
            Sajid Mujibur Rehman
            <span className="wordmark-dot"></span>
          </span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={menuOpen ? "nav-links nav-open" : "nav-links"}
        >
          {nav.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot"></span>
              Open to AI/ML opportunities · UAE
            </div>

            <p className="eyebrow">
              AI / MACHINE LEARNING · APPLIED RESEARCH
            </p>

            <h1>
              Turning data and research into{" "}
              <span>intelligent solutions.</span>
            </h1>

            <p className="hero-intro">
              I’m {PROFILE.name}, an AI/ML postgraduate based in Dubai.
              I build machine-learning applications and explore computer
              vision, data analysis, and causal inference.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowDown size={16} />
              </a>

              <a className="button button-secondary" href="#contact">
                Contact me <ArrowUpRight size={16} />
              </a>

              <a
                className="button button-secondary"
                href={PROFILE.cv}
                target="_blank"
                rel="noopener noreferrer"
                download="Sajid Resume.pdf"
              >
                <FileText size={16} /> Download CV
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPin size={15} /> {PROFILE.location}
              </span>
              <span>
                <GraduationCap size={16} /> M.Tech in Artificial Intelligence
              </span>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Abstract AI network illustration"
          >
            <div className="visual-grid"></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="core">
              <BrainCircuit size={58} strokeWidth={1.25} />
            </div>

            <div className="float-card float-card-top">
              <span className="float-icon">
                <Code2 size={16} />
              </span>
              <span>
                <b>Machine Learning</b>
                <small>Models · Evaluation</small>
              </span>
            </div>

            <div className="float-card float-card-bottom">
              <span className="float-icon">
                <Microscope size={16} />
              </span>
              <span>
                <b>Applied Research</b>
                <small>Causal analysis</small>
              </span>
            </div>

            <div className="visual-caption">
              Curiosity → Experiments → Evidence
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="trust-item">
            <strong>418</strong>
            <span>Research stakeholders</span>
          </div>
          <div className="trust-item">
            <strong>56</strong>
            <span>Sustainability indicators</span>
          </div>
          <div className="trust-item">
            <strong>3</strong>
            <span>Experience areas</span>
          </div>
          <div className="trust-item">
            <strong>M.Tech</strong>
            <span>Artificial Intelligence</span>
          </div>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading
            eyebrow="A little about me"
            title="Analytical thinking. Research mindset. Practical AI."
          />

          <div className="about-grid">
            <div className="about-lead">
              <p className="large-copy">
                I’m interested in how intelligent systems can help people
                make better decisions—and how we can evaluate those systems
                with care.
              </p>
              <p>
                My background combines machine-learning classification work,
                data analysis, and research into causal relationships. I enjoy
                understanding the problem behind the data, preparing and
                examining evidence, evaluating results, and communicating
                findings clearly.
              </p>
              <p>
                I’m currently looking for early-career opportunities in
                AI/ML engineering where I can contribute, keep developing my
                engineering practice, and work with teams building useful,
                reliable systems.
              </p>
            </div>

            <div className="principles-card">
              <p className="eyebrow">HOW I APPROACH PROBLEMS</p>

              <div className="principle">
                <span>01</span>
                <div>
                  <b>Understand the problem</b>
                  <p>
                    Clarify the objective, data, and constraints before
                    choosing a method.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span>02</span>
                <div>
                  <b>Test with evidence</b>
                  <p>
                    Use appropriate evaluation methods and inspect errors,
                    not just headline metrics.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span>03</span>
                <div>
                  <b>Communicate clearly</b>
                  <p>
                    Explain findings, assumptions, and limitations so
                    results can be interpreted responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading
            eyebrow="Technical toolkit"
            title="Skills I’m building and applying"
            description="A practical mix of machine learning, analytical workflows, and research methods."
          />

          <div className="skills-grid">
            {skills.map((group, i) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-icon">
                  {i === 0 ? (
                    <BrainCircuit />
                  ) : i === 1 ? (
                    <ChartNoAxesCombined />
                  ) : (
                    <Microscope />
                  )}
                </div>

                <h3>{group.title}</h3>

                <div className="tag-list">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="small-note">
            Tools and frameworks should be listed on the public profile only
            where they reflect hands-on experience. Add specific library
            names and proficiency levels as you verify them.
          </p>
        </section>

        <section className="section-wrap section-block" id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="Where I’ve applied my skills"
            description="Experience across research, machine learning, and data analytics."
          />

          <div className="timeline">
            {experience.map((job, i) => (
              <article className="timeline-item" key={job.organization}>
                <div className="timeline-marker">{i + 1}</div>

                <div className="timeline-content">
                  <div className="experience-top">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="organization">{job.organization}</p>
                    </div>
                    <span className="date-pill">{job.date}</span>
                  </div>

                  <p className="location-line">
                    <MapPin size={14} />
                    {job.location}
                  </p>

                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="tag-list">
                    {job.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-wrap section-block projects-section"
          id="projects"
        >
          <SectionHeading
            eyebrow="Selected work"
            title="Projects and case studies"
            description="A selection of machine-learning, causal research, and analytics work."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <ul className="project-points">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <span>{project.status}</span>
                  <ProjectLinks project={project} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-wrap section-block research-block"
          id="research"
        >
          <div className="research-panel">
            <div className="research-icon">
              <Microscope size={28} />
            </div>

            <div className="research-copy">
              <p className="eyebrow">Research highlight</p>
              <h2>Understanding sustainability through causal inference</h2>

              <p>
                My research examined how building-construction project
                phases relate to sustainability outcomes. It used survey
                data from 418 stakeholders and 56 indicators spanning
                ecological, economic, and social dimensions.
              </p>

              <div className="effect-grid">
                <div>
                  <span>Construction</span>
                  <strong>0.9787</strong>
                </div>
                <div>
                  <span>Operation</span>
                  <strong>0.9104</strong>
                </div>
                <div>
                  <span>Demolition</span>
                  <strong>0.8905</strong>
                </div>
              </div>

              <p className="small-note">
                These are estimated effect values reported in the research
                profile, not percentages. Interpretation depends on the
                model specification and measurement scale.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section-wrap section-block education-block"
          id="education"
        >
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation"
          />

          <div className="education-grid">
            <article className="education-card">
              <div className="education-icon">
                <GraduationCap />
              </div>
              <div>
                <h3>Master of Technology — Artificial Intelligence</h3>
                <p>
                  M.S. Ramaiah University of Applied Sciences, Bengaluru
                </p>
                <span>Jan 2024 – Sep 2025</span>
              </div>
            </article>

            <article className="education-card">
              <div className="education-icon">
                <GraduationCap />
              </div>
              <div>
                <h3>
                  Bachelor of Engineering — Computer Science Engineering
                </h3>
                <p>Visvesvaraya Technological University</p>
                <span>2019 – 2023</span>
              </div>
            </article>
          </div>
        </section>

        <section
          className="section-wrap contact-section"
          id="contact"
        >
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Let’s connect</p>
              <h2>Interested in working together?</h2>
              <p>
                I’m open to conversations about early-career AI/ML
                opportunities, machine-learning projects, and applied
                research in the UAE.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href={`mailto:${PROFILE.email}`}
              >
                <Mail size={16} /> Email me
              </a>

              <a
                className="button button-secondary"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} /> LinkedIn
              </a>

              <a
                className="button button-secondary"
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} /> GitHub
              </a>
            </div>

            <p className="contact-email">{PROFILE.email}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark" href="#home">
          <span className="wordmark-mark">S</span>
          <span>
            Sajid Mujibur Rehman
            <span className="wordmark-dot"></span>
          </span>
        </a>

        <p>Built with care · {new Date().getFullYear()}</p>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
