import React from "react";
import Hero from '../Hero/Hero'
import generic_image from '../images/1-11061_generic-icon-icons-matt-movie-symbol-video-compress.png'

class MovieView extends React.Component{
    
    render(){

        let posterPath = `https://image.tmdb.org/t/p/w500/${this.props.movieDetail.poster_path}`
        if(!this.props.movieDetail.poster_path){
            posterPath = `https://image.tmdb.org/t/p/w500/${this.props.movieDetail.backdrop_path}`
        }
        
        return(
            <div>
                 <Hero text={this.props.movieDetail.original_title} backdrop={this.props.movieDetail.backdrop_path}/>
                 <div className="container my-5">
                     <div className="row">
                         <div className="col-lg-4">
                            { !this.props.movieDetail.poster_path &&
                                <img src={generic_image} className="card-img-top" alt="no-imagen" />
                            }
                            { this.props.movieDetail.poster_path &&
                                <img className="img-fluid" src={posterPath} alt={this.props.movieDetail.original_title}/>
                            }
                         </div>
                         <div className="col-lg-8">
                            <h1 className="fs-3 mb-3 fw-2">{this.props.movieDetail.original_title}</h1>
                            <p className="fs-5">{this.props.movieDetail.overview}</p>
                         </div>
                     </div>
                 </div>
            </div>
        )
    }
}

export default MovieView;