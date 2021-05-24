import React from "react";
import Hero from '../Hero/Hero'


class Home extends React.Component{

    render(){
        return (
            <div>
                <Hero text="Hello from React 201!"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 my-4">
                            <p className="lead">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod perspiciatis aspernatur itaque quis! Tenetur consequuntur eos, nostrum unde in beatae quo vero illo reprehenderit. Eos fuga officiis ducimus dolorem voluptate!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;