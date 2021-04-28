import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutView from './Components/AboutView'
import SearchView from './Components/SearchView'
import { useState, useEffect, useReducer} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';


// API KEY: d51758b8c051a653109be4d8e92fcdce
// API URL: https://api.themoviedb.org/3/movie/550?api_key=d51758b8c051a653109be4d8e92fcdce


function App() {

  
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  const history = useHistory()
  const path = '/search'

  useEffect( () =>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data =>{
        if(data){
          setSearchResults(data.results)
        }
      })
    }
    
  }, [searchText])
  
  return (
    <div>
        <Navbar searchText={searchText} setSearchText={setSearchText} history={history} path={path}/>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" component={AboutView}>
            <AboutView />
          </Route>
          <Route path="/search" component={SearchView}>
            <SearchView keyword={searchText} searchResults={searchResults} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
