import { useState, useEffect } from "react";
import './App.css';

const API = "https://assignment-3-backend-2t8x.onrender.com/api/services";

// ==========================================================================
// REUSABLE & COPY-PASTEABLE SKILLS LIST DATA CONFIGURATION
// ==========================================================================
const SKILLS_LIST = [
  {
    name: "C#",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
  },
  {
    name: "C++",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
  }, 
  {
    name: "C",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
  },
  {
    name: "Java",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
  },
  {
    name: "JavaScript",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  {
    name: "TypeScript",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  },
  {
    name: "Bash",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
  },
  {
    name: "Node.js",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Nodemon",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg"
  },
  {
    name: "OpenGL",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-original.svg"
  },
  {
    name: "Raylib",
    logoUrl: "https://www.raylib.com/common/img/raylib_logo.png"
  },
  {
    name: "Unity",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
  },
  {
    name: "Blender",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
  },
  {
    name: "React",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  {
    name: "SQL",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
  }
];

const Service = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setService(data);
    } catch (err) {
      console.error("Failed to fetch database services:", err);
    }
  };

  return (
    
    <div className="service-split-viewport">
      
      {/* LEFT COLUMN: TWO INDEPENDENTLY SCROLLABLE VERTICAL SECTIONS */}
      <div className="service-left-pane">
        
        {/* INDEPENDENT PART 1: ACADEMIES SECTION */}
        <section className="service-sub-block scrollable-category-container top-segment">
          <h2 className="service-pane-title">Academies</h2>
          <div className="timeline-card-wrapper">
            <div className="timeline-item flex-item-layout">
              <div className="timeline-logo-frame">
                <img 
                  src="https://www.centennialcollege.ca/favicon.ico" 
                  alt="Centennial College Logo" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="timeline-text-content">
                <h4 className="timeline-item-title">Centennial College</h4>
                <p className="timeline-item-desc">SETAS Game Programming Adv. Diploma.</p>
              </div> 
            </div>
            <div className="timeline-item flex-item-layout">
              <div className="timeline-logo-frame">
                <img 
                  src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/301693471_553323893460218_2031362288853757332_n.jpg?stp=dst-jpg_tt6&cstp=mx750x750&ctp=s750x750&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ePdWiw8PvUoQ7kNvwH3WQ-e&_nc_oc=AdpobikMTSDiK_mm7a9BksFxYOJk6-Wz923OcKzoPOjcEVGkS1hp-iMHtIbKsJrbTo4&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=8zjzdn2VjCEkwyHW47XfLw&_nc_ss=7b289&oh=00_AQD5YuIS_G9sxH8VHmhyvmHnVfE7ueG0vIIXI-s5H7Zhpw&oe=6A537E78" 
                  alt="Yonsai IT" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="timeline-text-content">
                <h4 className="timeline-item-title">Yonsai IT</h4>
                <p className="timeline-item-desc">NCS(National Competancy Standard) Certification for Game engine operation and graphics programming.</p>
              </div>
            </div>
          </div>

          
        </section>
        
        <div className="pane-divider-spacer">
          <hr className="pane-divider-line" />
        </div>

        {/* INDEPENDENT PART 2: COMPANIES SECTION */}
        <section className="service-sub-block scrollable-category-container bottom-segment">
          <h2 className="service-pane-title">Companies & Experience</h2>
          <div className="timeline-card-wrapper">
            
            <div className="timeline-item flex-item-layout">
              <div className="timeline-logo-frame">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C560BAQEBHmLqqwtxMw/company-logo_200_200/company-logo_200_200/0/1632410171300/deaf_ai_logo?e=1785369600&v=beta&t=mGPsnnGwjwM2L-raoq_vn7sJmCChh-WUBXQ6XbESyDk" 
                  alt="DeafAI" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="timeline-text-content">
                <h4 className="timeline-item-title">DeafAI - Student Reasearcher</h4>
                <p className="timeline-item-desc">Created and deployed 3d Models for motion tracking. Adapted motion captured training data into the model.</p>
              </div>
            </div>

            

            {/* DATABASE DYNAMIC SERVICES DISPLAY */}
            {services.map((u) => (
              <div key={u._id} className="timeline-item flex-item-layout dynamic-service-entry">
                <div className="timeline-logo-frame">
                  {u.imageUrl ? (
                    <img src={u.imageUrl} alt={`${u.title} Logo`} />
                  ) : (
                    <div className="fallback-mini-vector">💼</div>
                  )}
                </div>
                <div className="timeline-text-content">
                  <h4 className="timeline-item-title">{u.title}</h4>
                  <p className="timeline-item-desc">{u.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* INDEPENDENT PART 3: RIGHT COLUMN SKILLS CONTAINER */}
      <div className="service-right-pane scrollable-category-container full-height-segment">
        <h2 className="service-pane-title">Skills</h2>
        
        <div className="skills-grid-layout">
          {SKILLS_LIST.map((skill, index) => (
            <div key={index} className="skill-grid-tile">
              <div className="skill-logo-frame">
                <img src={skill.logoUrl} alt={`${skill.name} Icon`} />
              </div>
              <span className="skill-item-name">{skill.name}</span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Service;