import React from "react";


class Hero extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="bg-secondary bg-gradient text-light p-5">
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

export default Hero;