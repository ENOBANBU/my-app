import bgImage from './images/Floating sky island backgroud.png';
import stageNoBackground from './images/stage-no-bg.png';
import aboutMeImage from './images/About_me-nobg.png';
import contactMeImage from './images/Arcade_contact-nobg.png';
import portfolioImage from './images/Arcade_resume-nobg.png';
import projectImage from './images/Arcade_projects-nobg.png';
import experienceImage from './images/Experience-nobg.png';
import deepCloud from './images/deep-clouds-bg.png';
import './App.css';
import { useRef } from 'react';

function scrollToSection(id) {
  const element = document.getElementById(id);
  if(element){
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  return (
    <>
<div className="game-background">
      <img src={bgImage} alt="background" />
      <img src={stageNoBackground} alt="stage" className="stage-layer" />
      <button className='button-layer-portfolio'onClick={() => scrollToSection("portfolio")}><img src={portfolioImage} alt="Portfolio" /> </button>
      <button className='button-layer-about-me' onClick={() => scrollToSection("about")}><img src={aboutMeImage} alt="About Me" /> </button>
      <button className='button-layer-contact-me'><img src={contactMeImage} alt="Contact Me" /> </button>
      <button className='button-layer-projects'><img src={projectImage} alt="Projects" /> </button>
      <button className='button-layer-experience'><img src={experienceImage} alt="Experience" /> </button>
    </div>

    
      <section id='about' className='page-section'>
<div className="deep-cloud-background">
      <img className="cloud-background" src={deepCloud} alt="Deep Clouds" />
    </div>
      </section>

      
    <section id='portfolio' className='page-section'>
<div className="deep-cloud-background">
      <img className="cloud-background" src={deepCloud} alt="Deep Clouds" />
    </div>
      </section>

      </>
  );
}

export default App;
