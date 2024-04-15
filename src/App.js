import './App.css';
import BasicInformation from './components/basicInformation/BasicInformation';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/mainNavigation/Navigation';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';
import { useEffect,useState } from 'react';
import * as Realm from "realm-web";

function App() {

  const [portData,setPortData]=useState([]); 


  useEffect(() => {
    const createRealmApp = async () => {
      const app = new Realm.App({ id: "application1-xcgdi" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allData=await user.functions.getData()
        console.log(allData)
          setPortData(allData)
      } catch (err) {
        console.error("Failed to log in", err);
      }
    }
    createRealmApp()
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Header />
      <BasicInformation />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
