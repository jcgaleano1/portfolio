import './app.css';
import HomeScreen from './screen/home/HomeScreen'
import NavBar from './components/navbar/NavBar';
import About from './screen/about/About';
import Projects from './screen/projects/Projects';
import Contact from './screen/contact/Contact';

function App() {
  return (
    <div className="main-container">
      <NavBar/>
      <HomeScreen/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
