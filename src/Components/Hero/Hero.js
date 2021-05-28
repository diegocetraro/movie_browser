import React from "react";


class Hero extends React.Component{
    
    render(){
        const backdrop = `https://image.tmdb.org/t/p/w500/${this.props.backdrop}`
        return(
            <div className="container-fluid bg-primary bg-gradient text-light py-5 px-5 hero-container">
                <h1 className="hero-text">{this.props.text}</h1>
                {   this.props.backdrop &&
                    <div className="hero-backdrop"  style={{backgroundImage: `url(${backdrop})`}}></div>
                } 
            </div>
           
        )
    }
}

export default Hero;