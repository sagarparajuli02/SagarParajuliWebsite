
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import NavigationMenu from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import About from './components/About/About'
import Portfolioo from './components/Portfolioo/Portfolioo'
function App() {
  return (
  <Router>
    <div>
    <NavigationMenu/>
    <Home/>

    <About/>
    <Portfolioo/>

    </div>
  </Router>
  );
}

export default App;
