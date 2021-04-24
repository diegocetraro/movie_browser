import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutView from './Components/AboutView'
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" component={AboutView}>
            <AboutView />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
