import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './App.css';
import Aboutme from './About.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import Service from './Service.jsx';
import Users from './Users.jsx';
import Edit from './edit/UserEdit.jsx';
import Add from './add/UserAdd.jsx';
import EditProj from './edit/ProjectEdit.jsx';
import AddProj from './add/ProjectAdd.jsx';
import EditCont from './edit/ContactEdit.jsx';
import AddCont from './add/ContactAdd.jsx';
import AddServi from './add/ServiceAdd.jsx';
import EditServi from './edit/ServiceEdit.jsx';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHomeScreen = currentPath === '/' || currentPath === '/index.html';

  // State to pass down the real-time calculated animated angle to the inline CSS
  const [displayedRotation, setDisplayedRotation] = useState(0);
  
  // Refs to hold interpolation values outside the component rendering cycles
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);
  const animationFrameIdRef = useRef(null);

  // Triggered every time a user switches tabs
  const handleTabSwitch = () => {
    targetRotationRef.current += 90; // Increments target position by a clean quarter-turn
  };

  // Smooth frame-by-frame interpolation loop
  useEffect(() => {
    const updateAnimationLoop = () => {
      // Calculate the delta distance to the target angle
      const angleDifference = targetRotationRef.current - currentRotationRef.current;
      
      // If there is still structural distance to animate, ease closer to it
      if (Math.abs(angleDifference) > 0.01) {
        // Linear interpolation step factor (0.05 controls how loose or crisp the glide feels)
        currentRotationRef.current += angleDifference * 0.05;
        setDisplayedRotation(currentRotationRef.current);
      } else {
        // Snap directly to the final target when miniscule differences remain
        currentRotationRef.current = targetRotationRef.current;
        setDisplayedRotation(targetRotationRef.current);
      }
      
      // Continue requesting next paint frames recursively
      animationFrameIdRef.current = requestAnimationFrame(updateAnimationLoop);
    };

    // Kick off animation loop on load
    animationFrameIdRef.current = requestAnimationFrame(updateAnimationLoop);

    // Clean up animation references on component unmount lifecycle safely
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Update background tokens based on route changes
  useEffect(() => {
    let glowColor = '#525252';
    
    let patA = '0%';   
    let patB = '100%'; 
    let patSize = '40px 40px';
    let patOpacity = '0.01';

    switch (currentPath.toLowerCase()) {
      case '/service':
        glowColor = '#896a3c';
        patA = '25%';     
        patB = '100%';    
        patSize = '30px 52px';
        patOpacity = '0.04';
        break;
        
      case '/aboutme':
        glowColor = '#445b7d';
        patA = '0%';      
        patB = '40%';     
        patSize = '50px 30px';
        patOpacity = '0.05';
        break;
        
      case '/contact':
        glowColor = '#747441';
        patA = '12%';     
        patB = '85%';
        patSize = '60px 60px';
        patOpacity = '0.03';
        break;
        
      case '/project':
        glowColor = '#52366c';
        patA = '45%';     
        patB = '100%';
        patSize = '25px 25px';
        patOpacity = '0.035';
        break;
        
      default:
        glowColor = '#646464';
        patA = '0%';
        patB = '100%';
        patSize = '40px 40px';
        patOpacity = '0.01';
    }

    const root = document.documentElement;
    root.style.setProperty('--bg-glow', glowColor);
    root.style.setProperty('--pattern-a', patA);
    root.style.setProperty('--pattern-b', patB);
    root.style.setProperty('--pattern-size', patSize);
    root.style.setProperty('--pattern-opacity', patOpacity);
  }, [currentPath]);

  const globalCenteringFrameStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    margin: 'auto 0', 
    position: 'relative'
  };

  const rotatingOutlineSquareStyle = {
    position: 'absolute',
    width: '440px',
    height: '440px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    pointerEvents: 'none',
    zIndex: '-1',
    // Transform hook tracking the animation loop state
    transform: `rotate(${displayedRotation}deg)`,
  };

  return (
    <div className="portfolio-container">
      
      {/* Central Area Viewport */}
      <div key={`content-${currentPath}`} className="main-content-area fade-in-content">
        {isHomeScreen ? (
          <div className="landing-center">
            <div style={globalCenteringFrameStyle}>
              <div style={rotatingOutlineSquareStyle} />
              <h1 className="main-title">Seungju Lee</h1>
            </div>
          </div>
        ) : (
          <div style={globalCenteringFrameStyle}>
            
            {/* INCREMENTAL CONTINUOUSLY ANIMATED SQUARE FRAME */}
            <div style={rotatingOutlineSquareStyle} />

            <main className="route-display-container">
              <Routes>
                <Route path="/Service" element={<Service />}/>
                <Route path="/Aboutme" element={<Aboutme />}/> 
                <Route path="/Project" element={<Project />}/> 
                <Route path="/Project/edit/:id" element={<EditProj />}/>
                <Route path="/Project/add" element={<AddProj />}/>
                <Route path="/Contact" element={<Contact />}/> 
                <Route path="/Contact/edit/:id" element={<EditCont />}/> 
                <Route path="/Contact/add" element={<AddCont />}/> 
                <Route path="/Service/Add" element={<AddServi />}/>
                <Route path="/Service/Edit/:id" element={<EditServi />}/>
                <Route path="/Users" element={<Users />}/>
                <Route path="/users/edit/:id" element={<Edit />}/>
                <Route path="/users/add/" element={<Add />}/>
              </Routes>
            </main>

          </div>
        )}
      </div>

      {/* Segmented Menu Footer Bar */}
      <footer className="inline-nav-footer">
        <div className="serial-number">0000</div>
        <nav className="segmented-navbar">
          
          <Link 
            to="/Service" 
            onClick={handleTabSwitch}
            className={`nav-segment ${currentPath === '/Service' ? 'expanded active' : ''}`}
          >
            {currentPath === '/Service' ? 'EXPERIENCE' : 'EXP'}
          </Link>
          
          <span className="nav-divider">/</span>
          
          <Link 
            to="/Aboutme" 
            onClick={handleTabSwitch}
            className={`nav-segment ${currentPath === '/Aboutme' ? 'expanded active' : ''}`}
          >
            {currentPath === '/Aboutme' ? 'ABOUT' : 'ABT'}
          </Link>
          
          <span className="nav-divider">/</span>
          
          <Link 
            to="/" 
            onClick={handleTabSwitch}
            className={`nav-segment home-dot ${isHomeScreen ? 'active' : ''}`}
          >
            ●
          </Link>
          
          <span className="nav-divider">/</span>
          
          <Link 
            to="/Contact" 
            onClick={handleTabSwitch}
            className={`nav-segment ${currentPath === '/Contact' ? 'expanded active' : ''}`}
          >
            {currentPath === '/Contact' ? 'CONTACT' : 'CON'}
          </Link>
          
          <span className="nav-divider">/</span>
          
          <Link 
            to="/Project" 
            onClick={handleTabSwitch}
            className={`nav-segment ${currentPath === '/Project' ? 'expanded active' : ''}`}
          >
            {currentPath === '/Project' ? 'PROJECTS' : 'PRJ'}
          </Link>

        </nav>
      </footer>

    </div>
  );
}

export default App;