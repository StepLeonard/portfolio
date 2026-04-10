// importing your profile picture so we can use it in the app
import profilePic from "./assets/profile.jpg";

// importing your CSS styles so everything looks good
import "./App.css";

// importing icons from react-icons so we can show cool logos for skills
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

// importing more icons for backend tools
import { SiExpress, SiPostgresql, SiPostman } from "react-icons/si";

// this is your main App component (the whole page)
function App() {

  // this is an array (list) of all your skills
  // each skill has a name, an icon, and a CSS class for styling
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

  // this is what gets shown on the screen
  return (
    // main wrapper for the whole app
    <div className="app page-enter">

      {/* NAVBAR (top of the page) */}
      <nav className="navbar">

        {/* profile picture section */}
        <div className="profile-wrapper">
          <img
            className="profile-pic"
            src={profilePic} // shows your picture
            alt="Stephanie profile"
          />
        </div>

        {/* navigation links (scroll to sections) */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION (top intro section) */}
      <section className="hero">

        {/* small intro sentence */}
        <p className="hero-tag">
          Full-Stack Developer building responsive React applications and
          scalable backend systems with Express & PostgreSQL.
        </p>

        {/* big title with your name */}
        <h1 className="hero-title">
          Hi, I’m <span>Stephanie</span>
        </h1>

        {/* short description */}
        <p className="hero-subtitle">
          Focused on building fast, user-friendly web applications with
          real-world functionality.
        </p>

        {/* buttons */}
        <div className="btn-row">

          {/* scrolls to projects */}
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          {/* opens your GitHub in a new tab */}
          <a
            href="https://github.com/StepLeonard"
            className="secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          {/* opens your resume PDF */}
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

        {/* card that holds your info */}
        <div className="card">

          {/* description about you */}
          <h3>
            I’m a Full-Stack Developer focused on building responsive web
            applications using React, Node.js, Express, and PostgreSQL. I have
            experience developing RESTful APIs, managing application state, and
            creating user-friendly interfaces that deliver real functionality.
          </h3>

          {/* more about your mindset */}
          <h3>
            I’m continuously improving my skills through hands-on projects and
            bring a strong work ethic, adaptability, and a collaborative mindset
            to every project.
          </h3>

          {/* teamwork experience */}
          <h3>
            Experience collaborating on team-based projects using GitHub
            workflows, including pull requests, code reviews, and version
            control best practices.
          </h3>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        {/* grid that holds all skills */}
        <div className="skills-grid">

          {/* loop through each skill and display it */}
          {skills.map((skill) => (
            <div key={skill.name} className={`skill-card ${skill.className}`}>

              {/* icon */}
              <div className="skill-icon">{skill.icon}</div>

              {/* skill name */}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        {/* intro text */}
        <h3>
          A selection of full-stack and frontend applications demonstrating
          experience building responsive interfaces, RESTful APIs, dynamic state
          management, and modern web development workflows.
        </h3>

        {/* grid of project cards */}
        <div className="projects-grid">

          {/* each project card shows a project */}
          <div className="project-card">
            <h3>Countries App</h3>

            {/* description */}
            <p>
              Built a full-stack web application using React, Node.js, Express,
              and PostgreSQL...
            </p>

            {/* buttons */}
            <div className="project-buttons">

              {/* live site */}
              <a
                href="https://version-4-countries.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="project-btn live-btn"
              >
                Live Site
              </a>

              {/* github repo */}
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

          {/* (same pattern repeats for all other projects) */}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="card">

          {/* email */}
          <p>
            Email:{" "}
            <a href="mailto:stephanie.leonard716@gmail.com">
              stephanie.leonard716@gmail.com
            </a>
          </p>

          {/* github */}
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

          {/* linkedin */}
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

// exporting App so React can use it
export default App;