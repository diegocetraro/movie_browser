import React from "react";
import Hero from '../Hero';
import MovieCard from '../MovieCard'

class showSearchDetail extends React.Component{
    
    render(){
        let resultsHTML = []
        if(this.props.searchDetail.length !== 0){
            resultsHTML = this.props.searchDetail.map( (obj,i) =>{
                return <MovieCard key={i} movies={obj}/>
            })
        }
        const title = `You are searching for...${this.props.searchText}`
        
        return (
            <div>
                <Hero text={title}/>
                <div className="container px-0">
                    {
                        resultsHTML&&
                        <div className="row">
                            {resultsHTML}
                        </div>
                    }
                    <div className="row">
                        <h1 className="fs-3 fw-2 my-5">{this.props.no_result_text}</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default showSearchDetail;