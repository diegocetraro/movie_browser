import React from "react";
import Hero from './Hero'


class MovieView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.movieDetail.original_title)
        return(
            <div>
                 <Hero text={this.props.movieDetail.original_title}/>
            </div>
        )
    }
}

export default MovieView;