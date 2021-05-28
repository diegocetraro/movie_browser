import './App.css';
import Navbar from './Components/Home/Navbar'
import Home from './Components/Home/Home'
import AboutView from './Components/About/AboutView'
import SearchView from './Components/MovieComponent/SearchView'
import GetId from './Components/GetIdComponents/GetId'
import NotFound from './Components/404Components/404Page'
import GetSearchedText from './Components/GetSearchedTextComponents/GetSearchedText'
import Footer from './Components/Home/Footer'
import { useState, useEffect} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';


// API KEY: d51758b8c051a653109be4d8e92fcdce
// API URL: https://api.themoviedb.org/3/movie/550?api_key=d51758b8c051a653109be4d8e92fcdce


function App() {

  
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [popular, setPopular] = useState([])
  const [no_result_text, set_no_result_text] = useState('');

  const history = useHistory()
  const path = '/search'

 

  useEffect( () =>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=d51758b8c051a653109be4d8e92fcdce&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data =>{
        if(data.results.length === 0){
          set_no_result_text(`No results were found for ${searchText}`)
          setSearchResults([])
        }
        if(data.results.length !== 0){
          setSearchResults(data.results)
          set_no_result_text('')
        }    
      })
    }
    
  }, [searchText])

  useEffect(()=>{
    if(popular.length === 0){
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d51758b8c051a653109be4d8e92fcdce&language=en-US&page=1`)
      .then(response => response.json())
      .then(data =>{
          setPopular(data.results)
          console.log(data)
      })
    }
    
  },[popular])
  
  return (
    <div>
        <Navbar searchText={searchText} setSearchText={setSearchText} history={history} path={path} searchResults={searchResults} no_result_text={no_result_text} />
        <Switch>
          <Route path="/" exact>
            <Home popular={popular}/>
          </Route>
          <Route path="/about" component={AboutView}>
            <AboutView />
          </Route>
          <Route path="/search">
            <SearchView keyword={searchText} searchResults={searchResults} no_result_text={no_result_text} />
          </Route>
          <Route path='/movies/:id'>
            <GetId />
          </Route>
          <Route path='/searchDetail/:id'>
            <GetSearchedText />
          </Route>
          <Route path=''>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
