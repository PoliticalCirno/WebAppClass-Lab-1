import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import logoEngine from './assets/Logo.png';
import logoCacher from './assets/logo2.png';
import './App.css';

const API = "https://assignment-3-backend-2t8x.onrender.com/api/project";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProjects(data);
  };

  const remove = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="projects-view-wrapper">
      <h2 className="projects-header-title">My Projects</h2>

      {/* 1. P2ND Engine */}
      <a 
        href="https://github.com/PoliticalCirno/P2ND-Engine" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-item-row full-span clickable-row"
      >
        <div className="project-image-wrapper banner-frame">
          <img src={logoEngine} alt="P2ND Engine" className="gradient-fade-img" />
        </div>
        <div className="project-text-content">
          <h3 className="shadowed-title">
            P2ND Engine <span className="link-indicator-icon">↗</span>
          </h3>
          
          {/* ======================================================== */}
          {/* COPY-PASTE TECH STACK ROW TEMPLATE START                 */}
          {/* ======================================================== */}
          <div className="project-tech-row">
            <div className="tech-badge">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />
              <span>C#</span>
            </div>
            <div className="tech-badge">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-original.svg" alt="OpenGL" />
              <span>OpenGL</span>
            </div>
            <div className="tech-badge">
              <img src="https://www.raylib.com/common/img/raylib_logo.png" alt="Raylib" />
              <span>Raylib</span>
            </div>
            <div className="tech-badge">
              <img src="https://riptide.tomweiland.net/images/logo.png" alt="Riptide" />
              <span>Riptide</span>
            </div>
          </div>
          {/* ======================================================== */}
          {/* COPY-PASTE TECH STACK ROW TEMPLATE END                   */}
          {/* ======================================================== */}

          <p className="shadowed-description">
            My current project. An engine with a goal of providing <br />
            Open area/Open world framework for developers.
          </p>
        </div>
      </a>

      {/* 2. P2AssetCacher */}
      <a 
        href="https://github.com/PoliticalCirno/P2AssetCacher" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-item-row full-span clickable-row"
      >
        <div className="project-image-wrapper banner-frame">
          <img src={logoCacher} alt="P2AssetCacher" className="gradient-fade-img" />
        </div>
        <div className="project-text-content">
          <h3 className="shadowed-title">
            P2AssetCacher <span className="link-indicator-icon">↗</span>
          </h3>
          
          <div className="project-tech-row">
            <div className="tech-badge">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />
              <span>C#</span>
            </div>
          </div>

          <p className="shadowed-description">
            Also my current project that I'm ping ponging to, <br />
            File Cacher for multi-purpose realtime unpacking.
          </p>
        </div>
      </a>

      {/* 3. DND HOOK BOT */}
      <a href="#dnd-bot" className="project-item-row full-span clickable-row">
        <div className="project-image-wrapper banner-frame">
          <div className="procedural-fallback bot-gradient" />
        </div>
        <div className="project-text-content">
          <h3 className="shadowed-title">
            DND HOOK BOT <span className="link-indicator-icon">↗</span>
          </h3>

          <div className="project-tech-row">
            <div className="tech-badge">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />
              <span>C#</span>
            </div>
            <div className="tech-badge">
              <span>Fleck</span>
            </div>
            <div className="tech-badge">
              <img src="https://docs.discordnet.dev/marketing/logo/SVG/Logomark%20Purple.svg" alt="Discord.NET" />
              <span>Discord.NET</span>
            </div>
          </div>

          <p className="shadowed-description">
            DND Scorecounter Bot. <br />
            Made with friends in mind.
          </p>
        </div>
      </a>

      {/* 4. DYNAMIC PROJECTS FROM DATABASE */}
      {projects.map((u) => (
        <div key={u._id} className="project-item-row full-span dynamic-row-container">
          <a 
            href={u.projectUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dynamic-row-link-wrapper"
          >
            <div className="project-image-wrapper banner-frame">
              <img 
                src={u.imageUrl || logoEngine} 
                alt={u.title} 
                className="gradient-fade-img"
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'block';
                }} 
              />
              <div className="procedural-fallback dynamic-gradient" style={{display: 'none'}} />
            </div>
            <div className="project-text-content">
              <h3 className="shadowed-title">
                {u.title} <span className="link-indicator-icon">↗</span>
              </h3>
              
              {/* Dynamic projects default placeholder line */}
              <div className="project-tech-row">
                <div className="tech-badge">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />
                  <span>C#</span>
                </div>
              </div>

              <p className="shadowed-description">{u.description}</p>
            </div>
          </a>
        </div>
      ))}

    </div>
  );
};

export default Project;