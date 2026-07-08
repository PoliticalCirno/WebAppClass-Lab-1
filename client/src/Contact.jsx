import './App.css';

// 1. REUSABLE LINK TEMPLATE CONFIGURATION
// You can freely edit text, paste new destination links, or swap icon pathways right here.
const SOCIAL_LINKS = [
  {
    name: "X",
    url: "https://x.com/BlueMyulee",
    // Raw customizable path coordinates for the icon
    iconPath: (
      <>
        <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"></path>
      </>
    )
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/seungju-lee-4a2b60385/",
    iconPath: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </>
    )
  }
];

const Contact = () => {
  return (
    <div className="contact-view-container">
      
      {/* Centered Minimal Header Block */}
      <header className="contact-hero-header">
        <br/><br/><br/><br/><br/><br/>
        <h1 className="contact-title-main">Contact</h1>
        <p className="contact-subtitle-faint">bumblesam2.0@gmail.com</p>
        
        {/* Reusable Clickable Social Link Segment Row */}
        <div className="contact-social-row">
          {SOCIAL_LINKS.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-badge-item"
            >
              <svg 
                className="social-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {link.iconPath}
              </svg>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </header>

    </div>
  );
};

export default Contact;