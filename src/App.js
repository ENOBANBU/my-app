import bgImage from './images/Floating sky island backgroud.png';
import stageNoBackground from './images/stage-no-bg.png';
import aboutMeImage from './images/About_me-nobg.png';
import contactMeImage from './images/Arcade_contact-nobg.png';
import portfolioImage from './images/Arcade_resume-nobg.png';
import projectImage from './images/Arcade_projects-nobg.png';
import experienceImage from './images/Experience-nobg.png';
import './App.css';


function App() {
  return (
    <>
    <h1 className="text-3xl text-blue-500 font-bold">Test</h1>
<div className="game-background">
      <img src={bgImage} alt="background" />
      <img src={stageNoBackground} alt="stage" className="stage-layer" />
      <button className='button-layer-portfolio'><img src={portfolioImage} alt="Portfolio" /></button>
      <button className='button-layer-about-me'><img src={aboutMeImage} alt="About Me" /></button>
      <button className='button-layer-contact-me'><img src={contactMeImage} alt="Contact Me" /></button>
      <button className='button-layer-projects'><img src={projectImage} alt="Projects" /></button>
      <button className='button-layer-experience'><img src={experienceImage} alt="Experience" /></button>
    </div>
      
      </>
  );
}

export default App;
