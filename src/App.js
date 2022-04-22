import {  BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home'
import About from "./components/About/About"
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    < BrowserRouter>
      <Navbar/>
        <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/projects">
                  <Projects />
              </Route>

              <Route path="/skills">
                  <Skills />
              </Route>

              <Route path="/contact">
                  <Contact />
              </Route>
          </Switch>
        </BrowserRouter>
  );
}

export default App;
