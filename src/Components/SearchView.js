import React from "react";
import Hero from './Hero';
import MovieCard from './MovieCard'

class SearchView extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
        const resultsHTML = this.props.searchResults.map( (obj,i) =>{
            return <MovieCard key={i} movies={obj}/>
        })
        const title = `You are searching for...${this.props.keyword}`
        return (
            <div>
                <Hero text={title}/>
                <div className="container">
                    <div className="row">
                        {resultsHTML}
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchView;