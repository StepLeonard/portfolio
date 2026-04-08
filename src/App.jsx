import { useEffect, useRef, useState } from "react";
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
  const [introStage, setIntroStage] = useState("bubble");
  const popSoundRef = useRef(null);

  useEffect(() => {
    const popTimer = setTimeout(() => {
      setIntroStage("pop");

      if (popSoundRef.current) {
        popSoundRef.current.currentTime = 0;
        popSoundRef.current.play().catch(() => {});
      }
    }, 1500);

    const revealTimer = setTimeout(() => {
      setIntroStage("reveal");
    }, 2000);

    const finishTimer = setTimeout(() => {
      setIntroStage("done");
    }, 3000);

    return () => {
      clearTimeout(popTimer);
      clearTimeout(revealTimer);
      clearTimeout(finishTimer);
    };
  }, []);

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

  if (introStage !== "done") {
    return (
      <div className="intro-screen">
        <audio ref={popSoundRef} src="/pop.mp3" preload="auto" />

        <div className="gum-scene">
          {(introStage === "bubble" || introStage === "pop") && (
            <>
              <div
                className={`gum-bubble ${introStage === "pop" ? "pop-now" : ""}`}
              ></div>
              <div
                className={`gum-highlight big ${introStage === "pop" ? "pop-now" : ""}`}
              ></div>
              <div
                className={`gum-highlight small ${introStage === "pop" ? "pop-now" : ""}`}
              ></div>
            </>
          )}

          {(introStage === "pop" || introStage === "reveal") && (
            <>
              <div className="gum-burst-ring ring-one"></div>
              <div className="gum-burst-ring ring-two"></div>

              <div className="gum-piece piece-1"></div>
              <div className="gum-piece piece-2"></div>
              <div className="gum-piece piece-3"></div>
              <div className="gum-piece piece-4"></div>
              <div className="gum-piece piece-5"></div>
              <div className="gum-piece piece-6"></div>
              <div className="gum-piece piece-7"></div>
              <div className="gum-piece piece-8"></div>
            </>
          )}

          {(introStage === "reveal" || introStage === "done") && (
            <img
              className={`intro-profile-pic ${introStage === "reveal" ? "show-pic" : ""}`}
              src="https://avatars.githubusercontent.com/u/202838551?v=4"
              alt="Stephanie profile"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app page-enter">
      <nav className="navbar">
        <div className="profile-wrapper">
          <img
            className="profile-pic"
            src="https://avatars.githubusercontent.com/u/202838551?v=4"
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
        <p className="hero-tag">FULL STACK DEVELOPER</p>

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
              I'm a software developer that builds modern web apps with clean
              design, interactive UI, and full-stack functionality using React,
              JavaScript, Express, and PostgreSQL. I’m focused on building
              responsive, user-friendly, innovative web applications that
              strengthen my portfolio, while continuously pushing myself to grow
              and deliver high-quality, real-world applications.
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

        <div className="projects-grid">
          <div className="project-card">
            <h3>Volleypalooza Site</h3>
            <p>Event landing page with signup form.</p>

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
            <p>React app with routing and API. Full-stack.</p>

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
            <p>⚠️Currently Under Construction⚠️</p>

            <div className="project-buttons">
              <a href="#" className="project-btn live-btn">
                Live Site
              </a>
              <a href="#" className="project-btn github-btn">
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
