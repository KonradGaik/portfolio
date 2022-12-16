import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProjectsList from './components/projectsList/ProjectsList'
import Blog from './components/blog/Blog'
// import Newsletter from './components/newsletter/Newsletter';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProjectsList />
      <Blog />
      <Contact />
      {/* <Newsletter /> */}
    </div>
  );
}

export default App;
