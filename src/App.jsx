// importing your profile picture
import profilePic from "./assets/profile.jpg";

// importing your CSS styles
import "./App.css";

// importing icons for frontend skills
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

// importing icons for backend/tools
import { SiExpress, SiPostgresql, SiPostman } from "react-icons/si";

// main App (this is your whole website)
function App() {

  // list of all your skills
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, className: "skill-html" },
    { name: "CSS", icon: <FaCss3Alt />, className: "skill-css" },
    { name: "JavaScript", icon: <FaJsSquare />, className: "skill-js" },
    { name: "React", icon: <FaReact />, className: "skill-react" },
    { name: "Node.js", icon: <FaNodeJs />, className: "skill-node" },
    { name: "Express", icon: <SiExpress />, className: "skill-express" },
    { name: "PostgreSQL", icon: <SiPostgresql />, className: "skill-postgres" },
    { name: "Neon", icon: <SiPostgresql />, className: "skill-neon" },
    { name: "GitHub", icon: <FaGithub />, className: "skill-github" },
    { name: "Postman", icon: <SiPostman />, className: "skill-postman" },
  ];

  return (
    <div className="app page-enter">

      {/* NAVBAR (top section with picture + links) */}
      <nav className="navbar">

        {/* profile picture */}
        <div className="profile-wrapper">
          <img
            className="profile-pic"
            src={profilePic}
            alt="Stephanie profile"
          />
        </div>

        {/* navigation links (scrolls to sections) */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION (intro area) */}
      <section className="hero">

        {/* small intro text */}
        <p className="hero-tag">
          Full-Stack Developer building responsive React applications and
          scalable backend systems with Express & PostgreSQL.
        </p>

        {/* big title */}
        <h1 className="hero-title">
          Hi, I’m <span>Stephanie</span>
        </h1>

        {/* subtitle */}
        <p className="hero-subtitle">
          Focused on building fast, user-friendly web applications with
          real-world functionality.
        </p>

        {/* buttons */}
        <div className="btn-row">
          <a href="#projects" className="primary-btn">View Projects</a>

          <a
            href="https://github.com/StepLeonard"
            className="secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <h2>About</h2>

        <div className="card">
          <h3>
            I’m a Full-Stack Developer focused on building responsive web
            applications using React, Node.js, Express, and PostgreSQL.
          </h3>

          <h3>
            I’m continuously improving my skills and always learning new things.
          </h3>

          <h3>
            I work well with teams using GitHub (pull requests, code reviews, etc).
          </h3>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          {/* loop through skills and show each one */}
          {skills.map((skill) => (
            <div key={skill.name} className={`skill-card ${skill.className}`}>
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <h3>
          These are apps I built to show my skills.
        </h3>

        <div className="projects-grid">

          {/* Countries App */}
          <div className="project-card">
            <h3>Countries App</h3>
            <p>Full-stack app using React + backend to manage country data.</p>

            <div className="project-buttons">
              <a href="https://version-4-countries.netlify.app/" target="_blank" rel="noreferrer" className="project-btn live-btn">
                Live Site
              </a>
              <a href="https://github.com/StepLeonard/countries-app" target="_blank" rel="noreferrer" className="project-btn github-btn">
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Food Trucks App */}
          <div className="project-card">
            <h3>Food Trucks App</h3>
            <p>Backend + database app using Express and PostgreSQL.</p>

            <div className="project-buttons">
              <a href="https://github.com/StepLeonard/food-trucks-app" target="_blank" rel="noreferrer" className="project-btn github-btn">
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Extension Dashboard */}
          <div className="project-card">
            <h3>Extension Management Dashboard</h3>
            <p>React app with filters and dynamic UI.</p>

            <div className="project-buttons">
              <a href="https://extension-frontend.netlify.app/" target="_blank" rel="noreferrer" className="project-btn live-btn">
                Live Site
              </a>
              <a href="https://github.com/StepLeonard/extensions-project" target="_blank" rel="noreferrer" className="project-btn github-btn">
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Volleypalooza */}
          <div className="project-card">
            <h3>Volleypalooza Site</h3>
            <p>Frontend event site with forms and layout.</p>

            <div className="project-buttons">
              <a href="https://volleypalooza.netlify.app/" target="_blank" rel="noreferrer" className="project-btn live-btn">
                Live Site
              </a>
              <a href="https://github.com/StepLeonard/volleypalooza-site" target="_blank" rel="noreferrer" className="project-btn github-btn">
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Portfolio */}
          <div className="project-card">
            <h3>Developer Portfolio</h3>
            <p>This website you are looking at right now.</p>

            <div className="project-buttons">
              <a href="https://github.com/StepLeonard/portfolio" target="_blank" rel="noreferrer" className="project-btn github-btn">
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Product Feedback */}
          <div className="project-card">
            <h3>Product Feedback App</h3>
            <p>Still building this full-stack app.</p>

            <div className="project-buttons">
              <a href="#" className="project-btn live-btn">Live Site</a>
              <a href="#" className="project-btn github-btn">GitHub Repo</a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="card">
          <p>Email: <a href="mailto:stephanie.leonard716@gmail.com">stephanie.leonard716@gmail.com</a></p>

          <p>
            GitHub:
            <a href="https://github.com/StepLeonard" target="_blank" rel="noreferrer">
              github.com/StepLeonard
            </a>
          </p>

          <p>
            LinkedIn:
            <a href="https://www.linkedin.com/in/stephanieleonard716/" target="_blank" rel="noreferrer">
              linkedin.com/in/stephanieleonard716
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}

// export so React can use it
export default App;