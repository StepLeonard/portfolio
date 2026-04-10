import profilePic from "./assets/profile.jpg";
import "./App.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiPostgresql, SiPostman } from "react-icons/si";

function App() {
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
      <nav className="navbar">
        <div className="profile-wrapper">
          <img
            className="profile-pic"
            src={profilePic}
            alt="Stephanie profile"
          />
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="hero-tag">
          Full-Stack Developer building responsive React applications and
          scalable backend systems with Express & PostgreSQL.
        </p>

        <h1 className="hero-title">
          Hi, I’m <span>Stephanie</span>
        </h1>

        <p className="hero-subtitle"></p>

        <div className="btn-row">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

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

      <section id="about" className="section">
        <h2>About</h2>
        <div className="card">
          <p>
            <h3>
              I’m a Full-Stack Developer focused on building responsive web
              applications using React, Node.js, Express, and PostgreSQL. I have
              experience developing RESTful APIs, managing application state,
              and creating user-friendly interfaces that deliver real
              functionality. </h3></p>
              <p><h3>I’m continuously improving my skills through
              hands-on projects and bring a strong work ethic, adaptability, and
              a collaborative mindset to every project.
            </h3>
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className={`skill-card ${skill.className}`}>
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        
        <h2>Projects</h2>
        <h3>
          A selection of full-stack and frontend applications demonstrating
          experience with React, RESTful APIs, and modern web development
          practices.
        </h3>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Extension Management Dashboard</h3>

            <p>
              Built a responsive extension management dashboard using React,
              featuring dynamic state handling, toggle functionality, and
              real-time filtering (All, Active, Inactive). Designed a reusable
              component-based architecture to manage UI state efficiently while
              delivering a clean, user-focused interface.
            </p>

            <div className="project-buttons">
              <a
                href="https://extension-frontend.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="project-btn live-btn"
              >
                Live Site
              </a>

              <a
                href="https://github.com/StepLeonard/extensions-project"
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Volleypalooza Site</h3>
            <p>
              Developed a responsive frontend application simulating an event
              registration platform, with structured layouts and interactive
              form handling. Focused on accessibility, responsive design, and
              modern UI practices to create a seamless user experience across
              devices.
            </p>

            <div className="project-buttons">
              <a
                href="https://volleypalooza.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="project-btn live-btn"
              >
                Live Site
              </a>

              <a
                href="https://github.com/StepLeonard/volleypalooza-site"
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Countries App</h3>
            <p>
              Built a full-stack web application using React, Node.js, Express,
              and PostgreSQL, integrating external APIs and custom backend
              endpoints to manage country data, user submissions, and view
              tracking. Implemented dynamic routing, state management, and
              RESTful API architecture to deliver a scalable and interactive
              user experience.
            </p>

            <div className="project-buttons">
              <a
                href="https://version-4-countries.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="project-btn live-btn"
              >
                Live Site
              </a>
              <a
                href="https://github.com/StepLeonard/countries-app"
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Product Feedback App</h3>
            <p>
              ⚠️Currently developing a full-stack product feedback platform
              designed to collect, manage, and analyze user input. Focused on
              building scalable backend architecture, dynamic UI updates, and
              efficient state management to support real-time
              interaction.⚠️{" "}
            </p>
            <br></br>
            <br></br>

            <div className="project-buttons">
              <a href="#" className="project-btn live-btn">
                Live Site
              </a>
              <a href="#" className="project-btn github-btn">
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Food Trucks App</h3>

            <p>
              Developed a full-stack food truck application using Express and
              PostgreSQL, implementing RESTful API endpoints for retrieving,
              filtering, and managing data. Collaborated in a team environment
              using GitHub workflows, including pull requests, code reviews, and
              version control best practices.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/StepLeonard/food-trucks-app"
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Developer Portfolio</h3>

            <p>
              Designed and developed a personal portfolio website using React to
              showcase projects, technical skills, and contact information.
              Built with a responsive layout and reusable component structure,
              emphasizing modern UI design, performance, and user experience.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/StepLeonard/portfolio"
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="card">
          <p>
            Email:{" "}
            <a href="mailto:stephanie.leonard716@gmail.com">
              stephanie.leonard716@gmail.com
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/StepLeonard"
              target="_blank"
              rel="noreferrer"
            >
              github.com/StepLeonard
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/stephanieleonard716/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/stephanieleonard716
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
