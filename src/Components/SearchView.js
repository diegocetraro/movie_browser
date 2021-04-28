import React from "react";
import Hero from './Hero';


class SearchView extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
        const resultsHTML = this.props.searchResults.map( (obj,i) =>{
            return <div key={i}>{obj.original_title}</div>
        })
        const title = `You are searching for...${this.props.keyword}`
        return (
            <div>
                <Hero text={title}/>
                {resultsHTML}
            </div>
        )
    }
}
export default SearchView;