import React from "react";
import Hero from '../Hero/Hero';
import MovieCard from '../MovieComponent/MovieCard'
import noResults from '../images/not-found.png'
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
                        this.props.searchDetail.length === 0 &&
                        <div className="row">
                            <div className="col-md-6 my-5">
                                <img className="img-fluid"src={noResults} alt='NotFound'/>
                            </div>
                            <div className="col-md-6 my-5">
                                <h1 className="fs-3 fw-2 my-5">{this.props.no_result_text}</h1>
                            </div>
                        </div>
                    }
                    {
                        resultsHTML&&
                        <div className="row">
                            {resultsHTML}
                        </div>
                    }
                    
                </div>
            </div>
        )
    }
}
export default showSearchDetail;