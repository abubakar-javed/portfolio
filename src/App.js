import './App.css';
import BasicInformation from './components/basicInformation/BasicInformation';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <BasicInformation/>
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
