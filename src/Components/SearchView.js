import React from "react";
import Hero from './Hero';


class SearchView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: `You are searching for...${this.props.keyword}`
        }
    }
    
    render(){
        return (
            <Hero text={this.props.keyword}/>
        )
    }
}
export default SearchView;