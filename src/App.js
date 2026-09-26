import bgImage from './images/Floating sky island backgroud.png';
import stageNoBackground from './images/stage-no-background.jpeg';
import './App.css';

function App() {
  return (
    <div className="game-background">
      <img src={bgImage} alt="background" />
      <img src={stageNoBackground} alt="stage" />
    </div>
  );
}

export default App;
