import './App.css';
import BasicInformation from './components/basicInformation/BasicInformation';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <BasicInformation/>
      <Skills/>
    </div>
  );
}

export default App;
