import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutView from './Components/AboutView'
import SearchView from './Components/SearchView'
import { useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  
  return (
    <div>
        <Navbar searchText={searchText} setSearchText={setSearchText}/>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" component={AboutView}>
            <AboutView />
          </Route>
          <Route path="/search" keyword={searchText} searchResults={searchResults}>
            <SearchView />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
