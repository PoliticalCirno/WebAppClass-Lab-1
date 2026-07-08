import './App.css';

function Aboutme() {
    return (
        <div className="about-view-container">
            
            {/* Centered Main Bio Profile Block */}
            <div className="about-content-card">
                <h2 className="about-title-main">About Me</h2>
                
                <p className="about-bio-text">
                    My name is Seungju Lee, and I go by two different pseudonyms online.
                    (<span className="highlight-text">BlueMyulee</span>, <span className="highlight-text">PoliticalCirno</span>).
                </p>
                
                <p className="about-bio-text">
                    I currently hold an NCS (National Competency Standard) Certification in C# Programming and Unity Engine operations. 
                    I am studying at Canada's Centennial College to acquire globally recognized accreditation.
                </p>
                
                <p className="about-bio-text italic-sub">
                    My ultimate goal in my career is to make my dream game. <br />
                    (Then again, what game developer doesn't share that exact same dream?)
                </p>

                {/* Clean, Coherent Interactive Resume Action Block */}
                <div className="resume-action-section">
                    <span className="resume-label-hint">Curriculum Vitae</span>
                    <a 
                        href="https://drive.google.com/file/d/1qFQp6aYWRV11be6iy9fzSgzQyr2KIphL/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="resume-download-capsule"
                    >
                        <span>View ResumÉ</span>
                        <span className="arrow-vector">→</span>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Aboutme;