import { useEffect, useState } from "react";
import profilePic from "./assets/profile.jpg";
import "./App.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiPostman,
  SiTypescript,
  SiPython,
  SiBitbucket,
  SiJira,
} from "react-icons/si";

// Types `text` out character-by-character, like a terminal echoing input.
// Skips straight to the full string for anyone who prefers reduced motion.
function TypedText({ text, speed = 28 }) {
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [chars, setChars] = useState(() => (reducedMotion ? text.length : 0));

  useEffect(() => {
    if (reducedMotion) return;

    const id = setInterval(() => {
      setChars((prev) => {
        if (prev >= text.length) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(id);
  }, [text, speed, reducedMotion]);

  return (
    <>
      <span aria-hidden="true">
        {text.slice(0, chars)}
        <span className="terminal-cursor" />
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}

function App() {
  useEffect(() => {
    console.log(
      "%c👋 hey, thanks for popping the hood.",
      "color:#7dd3fc; font-size:16px; font-weight:bold;"
    );
    console.log(
      "%cSince you're in here — this site is React + Vite, deployed on Netlify, no framework CSS, hand-rolled everything.\nIf you're hiring: stephanie.leonard716@gmail.com\nCode: https://github.com/StepLeonard/portfolio",
      "color:#cbd5e1; font-size:12px; line-height:1.6;"
    );
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, className: "skill-html" },
    { name: "CSS", icon: <FaCss3Alt />, className: "skill-css" },
    { name: "JavaScript", icon: <FaJsSquare />, className: "skill-js" },
    { name: "TypeScript", icon: <SiTypescript />, className: "skill-typescript" },
    { name: "React", icon: <FaReact />, className: "skill-react" },
    { name: "Node.js", icon: <FaNodeJs />, className: "skill-node" },
    { name: "Python", icon: <SiPython />, className: "skill-python" },
    { name: "Express", icon: <SiExpress />, className: "skill-express" },
    { name: "PostgreSQL", icon: <SiPostgresql />, className: "skill-postgres" },
    { name: "Neon", icon: <SiPostgresql />, className: "skill-neon" },
    { name: "GitHub", icon: <FaGithub />, className: "skill-github" },
    { name: "Bitbucket", icon: <SiBitbucket />, className: "skill-bitbucket" },
    { name: "Jira", icon: <SiJira />, className: "skill-jira" },
    { name: "API Security", icon: <FaShieldAlt />, className: "skill-security" },
    { name: "Postman", icon: <SiPostman />, className: "skill-postman" },
  ];

  return (
    <div className="app page-enter">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav className="navbar" aria-label="Main navigation">
        <div className="profile-wrapper">
          <img
            className="profile-pic"
            src={profilePic}
            alt="Portrait of Stephanie Leonard"
          />
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="main-content">
        <section className="hero">
          <p className="hero-tag">
            Full-Stack Developer building responsive interfaces and reliable
            systems from front to back.
          </p>

          <h1 className="hero-title">
            Hi, I’m <span>Stephanie</span>
          </h1>

          <p className="hero-subtitle terminal-line">
            <TypedText text="Focused on building fast, user-friendly web applications with real-world functionality." />
          </p>

          <div className="btn-row">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="https://github.com/StepLeonard"
              className="secondary-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Stephanie Leonard's GitHub profile"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              className="resume-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Stephanie Leonard's resume PDF"
            >
              Resume
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <div className="card">
            <h3>
              I’m a Full-Stack Developer with hands-on experience building
              responsive web applications using React, Node.js, and Python,
              plus applied exposure to secure application development and API
              security practices. I have experience developing RESTful APIs,
              managing application state, and creating user-friendly
              interfaces that deliver real functionality.
            </h3>

            <h3>
              I contribute frontend and backend code within an Agile/Scrum
              team — sprint ceremonies, standups, and retrospectives —
              tracking work in Jira and coordinating handoffs with senior
              engineers.
            </h3>

            <h3>
              I’m continuously expanding my skills through hands-on projects
              and real-world engineering work, and I bring a strong work
              ethic, adaptability, and a collaborative mindset to every
              team — always looking for the next tool or technology to learn.
            </h3>

            <h3>
              Experience collaborating on team-based projects using GitHub and
              Bitbucket workflows, including pull requests, code reviews, and
              version control best practices.
            </h3>
          </div>
        </section>

        {/* ✅ PROJECTS MOVED HERE */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <h3>
            A selection of full-stack and frontend applications demonstrating
            experience building responsive interfaces, RESTful APIs, dynamic state
            management, and modern web development workflows.
          </h3>

          <div className="projects-grid">
            <div className="project-card">
              <h3>Product Feedback App</h3>
              <p>
                This project is a full-stack product feedback application where users can submit, view, and filter feedback based on categories like UI, UX, Feature, Bug, and Enhancement.
              </p>
              <div className="project-buttons">
                <a href="https://my-product-feedback-app.netlify.app/" target="_blank" rel="noreferrer" className="project-btn live-btn">
                  Live Site
                </a>
                <a href="https://github.com/StepLeonard/product-feedback-app" target="_blank" rel="noreferrer" className="project-btn github-btn">
                  GitHub Repo
                </a>
              </div>
            </div>


            <div className="project-card">
              <h3>Countries App</h3>
              <p>
                Built a full-stack web application using React, Node.js, Express,
                and PostgreSQL...
              </p>
              <div className="project-buttons">
                <a href="https://version-4-countries.netlify.app/" target="_blank" rel="noreferrer" className="project-btn live-btn">
                  Live Site
                </a>
                <a href="https://github.com/StepLeonard/countries-app" target="_blank" rel="noreferrer" className="project-btn github-btn">
                  GitHub Repo
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Food Trucks App</h3>
              <p>Developed a full-stack food truck application...</p>
              <div className="project-buttons">
                <a href="https://my-food-truck-app.netlify.app/" target="_blank" rel="noreferrer" className="project-btn live-btn">
                  Live Site
                </a>
                <a href="https://github.com/StepLeonard/food-trucks-app" target="_blank" rel="noreferrer" className="project-btn github-btn">
                  GitHub Repo
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Extension Management Dashboard</h3>
              <p>This project is a responsive extension dashboard</p>
              <div className="project-buttons">
                <a href="https://extension-frontend.netlify.app/" target="_blank" rel="noreferrer" className="project-btn live-btn">
                  Live Site
                </a>
                <a href="https://github.com/StepLeonard/extensions-project" target="_blank" rel="noreferrer" className="project-btn github-btn">
                  GitHub Repo
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Volleypalooza Site</h3>
              <p>Developed a responsive frontend application...</p>
              <div className="project-buttons">
                <a href="https://volleypalooza.netlify.app/" target="_blank" rel="noreferrer" className="project-btn live-btn">
                  Live Site
                </a>
                <a href="https://github.com/StepLeonard/volleypalooza-site" target="_blank" rel="noreferrer" className="project-btn github-btn">
                  GitHub Repo
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Developer Portfolio</h3>
              <p>Designed and developed a personal portfolio website...</p>
              <div className="project-buttons">
                <a href="https://github.com/StepLeonard/portfolio" target="_blank" rel="noreferrer" className="project-btn github-btn">
                  GitHub Repo
                </a>
              </div>
            </div>

           
          </div>
        </section>

        {/* SKILLS NOW BELOW PROJECTS */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className={`skill-card ${skill.className}`}>
                <div className="skill-icon" aria-hidden="true">
                  {skill.icon}
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="card">
            <p>
              <a href="mailto:stephanie.leonard716@gmail.com" className="contact-link">
                <FaEnvelope /> stephanie.leonard716@gmail.com
              </a>
            </p>
            <p>
              <a href="https://github.com/StepLeonard" target="_blank" rel="noreferrer" className="contact-link">
                <FaGithub /> github.com/StepLeonard
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/stephanieleonard716/" target="_blank" rel="noreferrer" className="contact-link">
                <FaLinkedin /> linkedin.com/in/stephanieleonard716
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;