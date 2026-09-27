import bgImage from './images/Floating sky island backgroud.png';
import stageNoBackground from './images/stage-no-bg.png';
import aboutMeImage from './images/About_me-nobg.png';
import contactMeImage from './images/Arcade_contact.jpeg';
import portfolioImage from './images/Arcade_resume.jpeg';
import projectImage from './images/projects.jpeg';
import experienceImage from './images/Experience.jpeg';
import './App.css';


function App() {
  return (
    <>
<div className="game-background">
      <img src={bgImage} alt="background" />
      <img src={stageNoBackground} alt="stage" className="stage-layer" />
      <button className='button-layer'><img src={aboutMeImage} alt="About Me" /></button>
    </div>
      
      </>
  );
}

export default App;
