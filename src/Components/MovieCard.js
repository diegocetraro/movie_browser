import React from "react";
import { Link } from "react-router-dom";


class MovieCard extends React.Component{

    render(){
        const imageUrl = `https://image.tmdb.org/t/p/original/${this.props.movies.poster_path}`
        const detailURL = `/movies/${this.props.movies.id}`
        return (
            <div className="col-lg-4 col-md-6 my-5">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt={this.props.movies.original_title} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.movies.original_title}</h5>
                        <p className="card-text">{this.props.movies.overview}</p>
                        <Link to={detailURL} className="btn btn-primary">Show Details!</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;